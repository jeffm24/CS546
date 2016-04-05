var MongoClient = require('mongodb').MongoClient,
    settings = require('./config.js'),
    Guid = require('Guid'),
    bcrypt = require('bcrypt-nodejs');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

// Drop "users" collection if it already exists and then re-create it
MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        return db.collection("users").drop().then(function() {
            return db;
        }, function() {
            // We can recover from this; if it can't drop the collection, it's because
            // the collection does not exist yet!
            return db;
        });
    }).then(function(db) {
        // We've either dropped it or it doesn't exist at all; either way, let's make
        // a new version of the collection
        return db.createCollection("users");
    });

// Exported mongo functions
MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var usersCollection = db.collection("users");

        // Adds a new user if one does not already exist with the given username
        exports.addUser = function (username, password) {
            if (!username || !password) {
                return Promise.reject("You must provide both a username and password.");
            } else if (typeof username !== 'string' || typeof password !== 'string') {
                return Promise.reject("Arguments not correct type.");
            }

            return usersCollection.find({"username": username}).limit(1).toArray().then(function(listOfUsers) {
                if (listOfUsers.length !== 0) {
                    return Promise.reject("A user with that username already exists.");
                } else {
                    return bcrypt.hash(password, null, null, function(err, hash) {
                        // Store hash in your password DB.
                        return usersCollection.insertOne({
                            _id: Guid.create().toString(),
                            username: username,
                            encryptedPassword: hash,
                            currentSessionId: "",
                            profile: {
                                firstName: "",
                                lastName: "",
                                hobby: "",
                                petName: ""
                            }
                        });
                    });
                }
            });
        };

        // Logs a user in if the hash of the given password matches the hash associated with the given username in database.
        // Returns the generated sessionID as a Promise if the log in is successful
        exports.logIn = function (username, password) {
            // Error checking
            if (!username || !password) {
                return Promise.reject("You must provide both a username and password.");
            } else if (typeof username !== 'string' || typeof password !== 'string') {
                return Promise.reject("Arguments not correct type.");
            }

            return usersCollection.find({"username": username}).limit(1).toArray().then(function(listOfUsers) {
                // If user exists, check password
                if (listOfUsers.length !== 0) {
                    var user = listOfUsers[0];

                    // Compare hash of given password to hash in the db
                    if (bcrypt.compareSync(password, user.encryptedPassword)) {
                        // Create a new session ID for the user and update the user in the database
                        var sessionID = Guid.create().toString();
                        usersCollection.update({"username": username}, {$set: {"currentSessionId": sessionID}});

                        return Promise.resolve(sessionID);
                    } else {
                        return Promise.reject("Incorrect password.");
                    }

                } else {
                    return Promise.reject("A user with that username does not exist.");
                }
            });
        };

        // Gets a user with the given sessionID, returns null if the user does not exist
        exports.getUserBySessionID = function (sessionID) {

            if (sessionID) {
                return usersCollection.findOne({ "currentSessionId": sessionID });
            } else {
                return Promise.resolve(null);
            }
        };

        // Adds the given info to the user profile in the database
        exports.editUserInfo = function (sessionID, info) {

            // Error checking
            if (!info || typeof info !== 'object') {
                return Promise.reject("Invalid argument.");
            } else if (!('firstName' in info) && !('lastName' in info) && !('hobby' in info) && !('perName' in info)) {
                return Promise.reject("Please fill out at least one of the fields before submitting.");
            }

            // Get the user associated with the given sessionID (error checking done in function call)
            return exports.getUserBySessionID(sessionID).then(function(user) {
                if (user) {
                    // Update all valid fields that are included in the request body
                    for (var key in info) {
                        if (key === 'firstName' || key === 'lastName' || key === 'hobby' || key === 'petName') {
                            usersCollection.update({"username": user.username}, {$set: {key: info[key]}});
                        }
                    }

                    return Promise.resolve(true);
                } else {
                    return Promise.resolve(false);
                }
            });
        };
    });

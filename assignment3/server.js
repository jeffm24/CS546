// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userData = require('./data.js');

// We create our express isntance:
var app = express();

// Here we change our view engine from Jade (default) to EJS
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/assets', express.static('static'));

// Redirects to "/profile" or renders the sign in/sign up page depending on whether the user is logged in or not
app.get("/", function(request, response) {

    userData.getUserBySessionID(request.cookies.sessionID).then(function(user) {
        // If the user is logged in, redirect to '/profile', otherwise render the signIn/signUp page
        if (user) {
            response.redirect('/profile');
        } else {
            response.render('pages/signInUp', {pageTitle: 'Sign In/Sign Up'});
        }
    });

})

// Display the user profile if they are logged in, otherwise redirect to "/"
app.get("/profile", function(request, response) {

    userData.getUserBySessionID(request.cookies.sessionID).then(function(user) {

        // If the user is logged in, render the profile page, otherwise redirect to '/'
        if (user) {
            response.render('pages/profile', {
                pageTitle: 'Profile',
                username: user.username,
                firstName: user.profile.firstName,
                lastName: user.profile.lastName,
                hobby: user.profile.hobby,
                petName: user.profile.petName
            });
        } else {
            response.redirect('/');
        }
    });

});

// Updates user info using the given request body
app.post("/profile/editUserInfo", function(request, response) {

    userData.editUserInfo(request.cookies.sessionID, request.body).then(function(val) {
        response.json({status: 'success'});
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });

});

// Route to log the user in
app.post("/signin", function(request, response) {

    userData.logIn(request.body.username, request.body.password).then(function(sessionID) {
        if (sessionID) {
            // If the user was successfully signed in, create a new cookie with the generated sessionID
            var expiresAt = new Date();
            expiresAt.setHours(expiresAt.getHours() + 5);

            response.cookie("sessionID", sessionID, { expires: expiresAt });
            //console.log("Created new sessionID cookie: {sessionID: " + sessionID + "}");

            response.json({status: "success"});
        }
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });

});

// Route to sign the user out
app.post("/signout", function(request, response) {

    userData.logout(request.cookies.sessionID).then(function(res) {
        if (res) {
            var anHourAgo = new Date();
            anHourAgo.setHours(anHourAgo.getHours() -1);

            // invalidate, then clear so that lastAccessed no longer shows up on the cookie object
            response.cookie("sessionID", "", { expires: anHourAgo });
            response.clearCookie("sessionID");

            response.json({status: "success"});
        }
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });

});

// Route for signing a user up
app.post("/signup", function(request, response) {

    userData.addUser(request.body.username, request.body.password).then(function(val) {
        response.json({status: request.body.username + " successfully added. Please try logging in."});
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });

});

// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});

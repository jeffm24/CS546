/*
 * Jeff Mariconda
 * CS546
 */

// We first require our express package

var express = require('express');
var bodyParser = require('body-parser');
var myToDoEntries = require('./toDoEntries.js')

// This package exports the function to create an express instance:
var app = express();

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to
// any path starting with /assets;
// it will check the 'static' folder for matching files
app.use('/assets', express.static('static'));

// Setup your routes here!

app.get("/", function (request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/api/todo", function (request, response) {
    try {
        var res = myToDoEntries.getToDoEntries();
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
});

app.get("/api/todo/open", function (request, response) {
    try {
        var res = myToDoEntries.getOpenToDoEntries();
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
});

app.get("/api/todo/completed", function (request, response) {
    try {
        var res = myToDoEntries.getCompletedToDoEntries();
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
});

app.get("/api/todo/:id", function (request, response) {
    try {
        var res = myToDoEntries.getToDoEntry(parseInt(request.params.id));
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(404).json({status: "error", message: e});
    }
});

app.put("/api/todo/:id", function (request, response) {
    try {
        var res = myToDoEntries.modifyEntry(parseInt(request.params.id), request.body);
        response.json({status: "success", result: res});
    } catch (e) {
        if (e === 'You must provide valid information in the request body to create an entry.')
            response.status(500).json({status: "error", message: e});
        else if (e === 'An entry with the ID of {' + request.params.id + '} could not be found.')
            response.status(404).json({status: "error", message: e});
    }
});

app.post("/api/todo", function (request, response) {
    try {
        var res = myToDoEntries.addNewEntry(request.body);
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
});

app.post("/api/todo/:id/notes", function (request, response) {
    try {
        var res = myToDoEntries.addNoteToEntry(parseInt(request.params.id), request.body);
        response.json({status: "success", result: res});
    } catch (e) {
        if (e === 'You must provide valid information in the request body to create an entry.')
            response.status(500).json({status: "error", message: e});
        else if (e === 'An entry with the ID of {' + request.params.id + '} could not be found.')
            response.status(404).json({status: "error", message: e});
    }
});

app.delete("/api/todo/:id", function (request, response) {
    try {
        var res = myToDoEntries.deleteEntry(parseInt(request.params.id));
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(404).json({status: "error", message: e});
    }
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});

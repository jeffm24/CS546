/*
 * Jeff Mariconda
 * CS546
 */

// We first require our express package

var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js')

// This package exports the function to create an express instance:
var app = express();

// Here we change our view engine from Jade (default) to EJS
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to
// any path starting with /assets;
// it will check the 'static' folder for matching files
app.use('/assets', express.static('static'));

function respondPerMonthRetirementSavings(response, years, perMonth, interestRate) {

    try {
        var res = myData.retirementAmountSavingPerMonth(parseInt(years, 10), parseInt(perMonth, 10), parseFloat(interestRate, 10));
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
}

function respondInvestedAmount(response, years, initial, interestRate) {

    try {
        var res = myData.investedAmountAfterSomeYears(parseInt(years, 10), parseInt(initial, 10), parseFloat(interestRate, 10));
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
}

function respondLoanPayoff(response, monthlyAmount, loanAmount, interestRate) {

    try {
        var res = myData.monthsToPayOffLoan(parseInt(monthlyAmount, 10), parseInt(loanAmount, 10), parseFloat(interestRate, 10));
        response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).json({status: "error", message: e});
    }
}

// Setup your routes here!

app.get("/", function (request, response) {
    response.render('pages/index', { pageTitle: "Jeff's API Calculator" });
});

app.get("/api/perMonthRetirementSavings", function (request, response) {

    respondPerMonthRetirementSavings(response, request.query.years, request.query.perMonth, request.query.interestRate);

});

app.get("/api/investedAmount", function (request, response) {

    respondInvestedAmount(response, request.query.years, request.query.initial, request.query.interestRate);

});

app.get("/api/loanPayoff", function (request, response) {

    respondLoanPayoff(response, request.query.monthlyAmount, request.query.loanAmount, request.query.interestRate);

});

app.post("/results/perMonthRetirementSavings", function (request, response) {

    try {
        var res = myData.retirementAmountSavingPerMonth(parseInt(request.body.years, 10),
                                                        parseInt(request.body.perMonth, 10),
                                                        parseFloat(request.body.interestRate, 10));

        response.render('pages/result', { pageTitle: "Results", operation: "perMonthRetirementSavings", res: res });
        //response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).render('pages/error', { pageTitle: "Error", errorMessage: e });
        //response.status(500).json({status: "error", message: e});
    }
});

app.post("/results/investedAmount", function (request, response) {

    try {
        var res = myData.investedAmountAfterSomeYears(parseInt(request.body.years, 10),
                                                        parseInt(request.body.intial, 10),
                                                        parseFloat(request.body.interestRate, 10));

        response.render('pages/result', { pageTitle: "Results", operation: "investedAmount", res: res });
        //response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).render('pages/error', { pageTitle: "Error", errorMessage: e });
        //response.status(500).json({status: "error", message: e});
    }
});

app.post("/results/loanPayoff", function (request, response) {

    try {
        var res = myData.monthsToPayOffLoan(parseInt(request.body.monthlyAmount, 10),
                                            parseInt(request.body.loanAmount, 10),
                                            parseFloat(request.body.interestRate, 10));

        response.render('pages/result', { pageTitle: "Results", operation: "loanPayoff", res: res });
        //response.json({status: "success", result: res});
    } catch (e) {
        response.status(500).render('pages/error', { pageTitle: "Error", errorMessage: e });
        //response.status(500).json({status: "error", message: e});
    }
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});

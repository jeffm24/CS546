/*
 * Jeff Mariconda
 * CS546
 */

var exports = module.exports = {
    retirementAmountSavingPerMonth,
    investedAmountAfterSomeYears,
    monthsToPayOffLoan
};

function isInt(n)
{
    return !isNaN(n) && n % 1 === 0;
}

function isFloat(n)
{
    return !isNaN(n) && n % 1 !== 0;
}

/*
 *  Calulcates the amount of money you will have in your retirement fund, assuming you put money in each month and your account
 *  accumulates interest each month.
 */
function retirementAmountSavingPerMonth(yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment)
{
    if (!isInt(yearsUntilRetirement) || !isInt(amountSavingPerMonth) || !isFloat(yearlyInterestRateOfInvestment)) {
        throw "ERROR: Input not proper type";
    } else if (yearsUntilRetirement < 0 || amountSavingPerMonth < 0 || yearlyInterestRateOfInvestment < 0) {
        throw "ERROR: Negative input";
    }

    var runningTotal = 0;
    var monthsUntilRetirement = yearsUntilRetirement * 12;

    for (var i = 0 ; i < monthsUntilRetirement ; i++) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + (yearlyInterestRateOfInvestment / 12));
    }

    return parseFloat(runningTotal).toFixed(2);
}

/*
 *  Calculates the end result of a sum of money that has been sitting and growing at a particular interest
 *  rate after a number of years.
 */
function investedAmountAfterSomeYears(yearsInvesting, initialAmount, yearlyInterestRateOfInvestment)
{
    if (!isInt(yearsInvesting) || !isInt(initialAmount) || !isFloat(yearlyInterestRateOfInvestment)) {
        throw "ERROR: Input not proper type";
    } else if (yearsInvesting < 0 || initialAmount < 0 || yearlyInterestRateOfInvestment < 0) {
        throw "ERROR: Negative input";
    }

    var runningTotal = initialAmount;

    for (var i = 0 ; i < yearsInvesting ; i++) {
        runningTotal = runningTotal * (1 + yearlyInterestRateOfInvestment);
    }

    return parseFloat(runningTotal).toFixed(2);
}

/*
 *  Calculates how many months it will take to pay off a loan given a certain monthly payment.
 */
function monthsToPayOffLoan(monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan)
{
    if (!isInt(monthlyPaymentAmount) || !isInt(initialLoanAmount) || !isFloat(yearlyInterestRateOfLoan)) {
        throw "ERROR: Input not proper type";
    } else if (monthlyPaymentAmount < 0 || initialLoanAmount < 0 || yearlyInterestRateOfLoan < 0) {
        throw "ERROR: Negative input";
    }

    var leftToPay = initialLoanAmount;

    for (i = 1 ; leftToPay > 0 ; i++) {
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmount;
    }

    return i;
}

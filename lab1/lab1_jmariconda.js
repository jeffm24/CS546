/*
 * Jeff Mariconda
 * CS546
 */

/*
 *  Calulcates the amount of money you will have in your retirement fund, assuming you put money in each month and your account
 *  accumulates interest each month.
 */
function retirementAmountSavingPerMonth(yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment)
{
    if (yearsUntilRetirement < 0 || amountSavingPerMonth < 0 || yearlyInterestRateOfInvestment < 0) {
        return -1;
    }

    var runningTotal = 0;
    var monthsUntilRetirement = yearsUntilRetirement * 12;

    for (var i = 0 ; i < monthsUntilRetirement ; i++) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + (yearlyInterestRateOfInvestment / 12));
    }

    return parseFloat(runningTotal).toFixed(2);
}

console.log(retirementAmountSavingPerMonth(3, 50, 0.01));

/*
 *  Calculates the end result of a sum of money that has been sitting and growing at a particular interest
 *  rate after a number of years.
 */
function investedAmountAfterSomeYears(yearsInvesting, initialAmount, yearlyInterestRateOfInvestment)
{
    if (yearsInvesting < 0 || initialAmount < 0 || yearlyInterestRateOfInvestment < 0) {
        return -1;
    }

    var runningTotal = initialAmount;

    for (var i = 0 ; i < yearsInvesting ; i++) {
        runningTotal = runningTotal * (1 + yearlyInterestRateOfInvestment);
    }

    return parseFloat(runningTotal).toFixed(2);
}

console.log(investedAmountAfterSomeYears(25, 1000, 0.01));

/*
 *  Calculates how many months it will take to pay off a loan given a certain monthly payment.
 */
function monthsToPayOffLoan(monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan)
{
    if (monthlyPaymentAmount < 0 || initialLoanAmount < 0 || yearlyInterestRateOfLoan < 0) {
        return -1;
    }

    var leftToPay = initialLoanAmount;

    for (i = 1 ; leftToPay > 0 ; i++) {
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmount;
    }

    return i;
}

console.log(monthsToPayOffLoan(50, 1000, 0.05));

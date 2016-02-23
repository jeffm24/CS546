/*
 * Jeff Mariconda
 * CS-546
 */

 var exports = module.exports = {
     daysUntil,
     daysLeftInYear,
     daysSince,
     nextFridayTheThirteenth
 };

/*
 *  Return the number of days between the current date and someDate.
 */
function daysUntil(someDate)
{
    var today = new Date();

    if (someDate === null) {
        throw "ERROR: Null argument.";
    } else if (!(someDate instanceof Date)) {
        throw "ERROR: Argument not instanceof Date.";
    } else if (someDate < today) {
        throw "ERROR: Date falls before current date.";
    }

    var msPerDay = 1000 * 60 * 60 * 24;
    var numDays = Math.ceil((someDate - today) / msPerDay);

    return numDays;
}

/*
 *  Return the number of days left in the year.
 */
function daysLeftInYear()
{
    var today = new Date();

    return daysUntil(new Date(today.getFullYear(), 11, 31));
}

/*
 *  Return the number of days that have passed since someDate.
 */
function daysSince(someDate)
{
    var today = new Date();

    if (someDate === null) {
        throw "ERROR: Null argument.";
    } else if (!(someDate instanceof Date)) {
        throw "ERROR: Argument not instanceof Date.";
    } else if (someDate > today) {
        throw "ERROR: Date falls after current date.";
    }

    var msPerDay = 1000 * 60 * 60 * 24;
    var numDays = Math.floor((today - someDate) / msPerDay);

    return numDays;
}

/*
 *  Return the date that is both a Friday and the 13th.
 */
function nextFridayTheThirteenth()
{
    var today = new Date();

    while (true) {
        if (today.getDay() == 0 && today.getDate() == 1) {
            today.setDate(13);
            return today;
        } else {
            today.setMonth((today.getMonth() + 1) % 12);
            today.setDate(1);
        }
    }
}

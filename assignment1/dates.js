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

    if (someDate == null) {
        throw "ERROR: null date";
    } else if (someDate < today) {
        throw "ERROR: date falls before current date";
    }

    var msPerDay = 1000 * 60 * 60 * 24;
    var numDays = Math.ceil((someDate - today) / msPerDay);

    return numDays;
}

console.log(daysUntil(new Date(2020, 11, 17)));
//console.log(exports.daysUntil(null));

/*
 *  Return the number of days left in the year.
 */
function daysLeftInYear()
{
    var today = new Date();

    return exports.daysUntil(new Date(today.getFullYear(), 11, 31));
}

console.log(daysLeftInYear());

/*
 *  Return the number of days that have passed since someDate.
 */
function daysSince(someDate)
{
    var today = new Date();

    if (someDate == null)
        throw "ERROR: null date";
    else if (someDate > today)
        throw "ERROR: date falls after current date"

    var msPerDay = 1000 * 60 * 60 * 24;
    var numDays = Math.floor((today - someDate) / msPerDay);

    return numDays;
}

console.log(daysSince(new Date(2014, 11, 17)));

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

console.log(nextFridayTheThirteenth());

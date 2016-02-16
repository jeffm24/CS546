/*
 * Jeff Mariconda
 * CS-546
 */

 var exports = module.exports = {
     shallowClone,
     randomized
 };

/*
 *  Given a base array, return a shallow copy of that array.
 */
function shallowClone(baseArr)
{
    if (baseArr === null) {
        throw "ERROR: Null input.";
    } else if (!(baseArr instanceof Array)) {
        throw "ERROR: Input not instanceof Array.";
    }

    var newArr = [];
    for (key in baseArr) {
        newArr[key] = baseArr[key];
    }

    return newArr;
}

/*
 *  Given a base array, return a shallow copy of the array and return the elements in a randomized order.
 */
function randomized(baseArr)
{
    if (baseArr === null) {
        throw "ERROR: Null input.";
    } else if (!(baseArr instanceof Array)) {
        throw "ERROR: Input not instanceof Array."
    }

    var currentIndex = baseArr.length, randomIndex, temp;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * (currentIndex--));

        temp = baseArr[currentIndex];
        baseArr[currentIndex] = baseArr[randomIndex];
        baseArr[randomIndex] = temp;
    }

    return shallowClone(baseArr);
}

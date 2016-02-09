/*
 * Jeff Mariconda
 * CS-546
 */

/*
 *  Given a base array, return a shallow copy of that array.
 */
exports.shallowClone = function (baseArr)
{
    if (baseArr == null)
        return -1;

    var newArr = [];
    for (key in baseArr) {
        newArr[key] = baseArr[key];
    }

    return newArr;
}

console.log(exports.shallowClone([10, "blah", 50]));

/*
 *  Randomly shuffles the given array and returns it.
 */
exports.shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 *  Given a base array, return a shallow copy of the array and return the elements in a randomized order.
 */
exports.randomized = function (baseArr)
{
    if (baseArr == null)
        return -1;

    return exports.shallowClone(exports.shuffle(baseArr));
}

console.log(exports.randomized([1, 2, 3, 4, 5, 6, 7, 8, 9]));

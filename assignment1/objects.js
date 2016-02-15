/*
 * Jeff Mariconda
 * CS-546
 */

 var exports = module.exports = {
     shallowClone,
     deepClone
 };

/*
 *  Return a 'shallow clone' of the baseObject A shallow clone is one where
 *  objects inside of the baseobject are just copied (think: copying 1 layer deep)
 *  rather than cloned.
 */
function shallowClone(baseObject)
{
    if (baseObject == null)
        return -1;

    var shallowClone = {};

    for (var key in baseObject) {
        shallowClone[key] = baseObject[key];
    }

    return shallowClone;
}

var object = {one: "one", two: "two", three: "three"};
console.log(shallowClone(object));
console.log(shallowClone(null));

/*
 *  Return a 'deep clone' of the baseObject. A deep clone is one where each object
 *  that you encounter nested in baseObject is also deeply cloned.
 */
function deepClone(baseObject)
{
    if (baseObject == null)
        return -1;

    function deepCloneHelp(baseObject, deepClone) {
        if (typeof yourVariable != 'object')
            return baseObject;

        for (var key in baseObject) {
            shallowClone[key] = deepCloneHelp(baseObject[key]);
        }
    }

    return deepCloneHelp(baseObject, {});
}

var object2 = {one: {num1: 1, num2: 2, object: {}}, two: "two", three: {}};
console.log(deepClone(object2));

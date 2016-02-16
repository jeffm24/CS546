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
    if (baseObject === null) {
        throw "ERROR: Null argument.";
    } else if (typeof baseObject !== 'object') {
        throw "ERROR: Argument not typeof Object.";
    }

    var shallowClone = {};

    for (var key in baseObject) {
        shallowClone[key] = baseObject[key];
    }

    return shallowClone;
}

/*
 *  Return a 'deep clone' of the baseObject. A deep clone is one where each object
 *  that you encounter nested in baseObject is also deeply cloned.
 */
function deepClone(baseObject)
{
    if (baseObject === null) {
        throw "ERROR: Null argument.";
    } else if (typeof baseObject !== 'object') {
        throw "ERROR: Argument not typeof Object.";
    }

    function deepCloneHelp(baseObject, deepClone) {
        if (typeof yourVariable != 'object')
            return baseObject;

        for (var key in baseObject) {
            deepClone[key] = deepCloneHelp(baseObject[key]);
        }
    }

    return deepCloneHelp(baseObject, {});
}

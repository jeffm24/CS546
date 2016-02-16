/*
 *  Jeff Mariconda
 *  CS-546
 */

 var exports = module.exports = {
     triangleArea,
     perimeterOfTriangle,
     areaOfSquare,
     perimeterOfSquare,
     areaOfCube,
     surfaceAreaOfCube,
     perimeterOfCube,
     circumferenceOfCircle,
     areaOfCircle
 };

/*
 *  Return the area of a triangle.
 */
function triangleArea(base, height)
{
    if (base < 0 || height < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof base !== 'number' || typeof height !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return 0.5 * base * height;
}

/*
 *  Return the perimeter of the triangle given 3 sides.
 */
function perimeterOfTriangle(side1, side2, side3)
{
    if (side1 < 0 || side2 < 0 || side3 < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof side1 !== 'number' || typeof side2 !== 'number' || typeof side3 !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return side1 + side2 + side3;
}

/*
 *  Return the area of a square given the length of one side.
 */
function areaOfSquare(side)
{
    if (side < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof side !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return side * side;
}

/*
 *  Return the perimeter of a square given one side.
 */
function perimeterOfSquare(side)
{
    if (side < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof side !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return side * 4;
}

/*
 *  Return the area of a cube, given one side.
 */
function areaOfCube(side)
{
    if (side < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof side !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return side * side * side;
}

/*
 *  Return the surface area of a cube, given one side.
 */
function surfaceAreaOfCube(side)
{
    if (side < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof side !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return 6 * (side * side);
}

/*
 *  Return the permiter of a cube, given one side.
 */
function perimeterOfCube(side)
{
    if (side < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof side !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return 12 * side;
}

/*
 *  Return the circumference of a circle given a radius.
 */
function circumferenceOfCircle(radius)
{
    if (radius < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof radius !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return (2 * Math.PI * radius).toFixed(2);
}

/*
 *  Return the area of a circle given a radius.
 */
function areaOfCircle(radius)
{
    if (radius < 0) {
        throw "ERROR: Negative argument.";
    } else if (typeof radius !== 'number') {
        throw "ERROR: Argument not typeof number."
    }

    return (Math.PI * (radius * radius)).toFixed(2);
}

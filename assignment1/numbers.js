/*
 *  Jeff Mariconda
 *  CS-546
 */

/*
 *  Return the area of a triangle.
 */
exports.triangleArea = function (base, height)
{
    if (base < 0 || height < 0)
        return -1;

    return 0.5 * base * height;
}

/*
 *  Return the perimeter of the triangle given 3 sides.
 */
exports.perimeterOfTriangle = function (side1, side2, side3)
{
    if (side1 < 0 || side2 < 0 || side3 < 0)
        return -1;

    return side1 + side2 + side3;
}

/*
 *  Return the area of a square given the length of one side.
 */
exports.areaOfSquare = function (side)
{
    if (side < 0)
        return -1;

    return side * side;
}

/*
 *  Return the perimeter of a square given one side.
 */
exports.perimeterOfSquare = function (side)
{
    if (side < 0)
        return -1;

    return side * 4;
}

/*
 *  Return the area of a cube, given one side.
 */
exports.areaOfCube = function (side)
{
    if (side < 0)
        return -1;

    return side * side * side;
}

/*
 *  Return the surface area of a cube, given one side.
 */
exports.surfaceAreaOfCube = function (side)
{
    if (side < 0)
        return -1;

    return 6 * (side * side);
}

/*
 *  Return the permiter of a cube, given one side.
 */
exports.perimeterOfCube = function (side)
{
    if (side < 0)
        return -1;

    return 12 * side;
}

/*
 *  Return the circumference of a circle given a radius.
 */
exports.circumferenceOfCircle = function (radius)
{
    if (radius < 0)
        return -1;

    return 2 * Math.PI * radius;
}

/*
 *  Return the area of a circle given a radius.
 */
exports.areaOfCircle = function (radius)
{
    if (radius < 0)
        return -1;

    return Math.PI * (radius * radius);
}

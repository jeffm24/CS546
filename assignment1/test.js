/*
 * Jeff Mariconda
 * CS-546
 */

var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");

/*
* ------------------------------------------------
*  arrays.js tests
* ------------------------------------------------
*/

console.log("\n\narrays.js tests:\n");

// shallowClone()
console.log(arrayModule.shallowClone([10, "blah", 50]));                                //[10, "blah", 50]
console.log(arrayModule.shallowClone([]));                                              //[]
try { console.log(arrayModule.shallowClone(null)); } catch (e) { console.log(e); }      //"ERROR: Null input."
try { console.log(arrayModule.shallowClone("blah")); } catch (e) { console.log(e); }    //"ERROR: Input not instanceof Array."

console.log("");

// randomized()
console.log(arrayModule.randomized([1, 2, 3, 4, 5, 6, 7, 8, 9]));                       //randomized version of given array
console.log(arrayModule.randomized([]));                                                //[]
console.log(arrayModule.randomized([1]));                                               //[1]
try { console.log(arrayModule.randomized(null)); } catch (e) { console.log(e); }        //"ERROR: Null input."
try { console.log(arrayModule.randomized("blah")); } catch (e) { console.log(e); }      //"ERROR: Input not instanceof Array."

/*
* ------------------------------------------------
*  dates.js tests
* ------------------------------------------------
*/

console.log("\n\ndates.js tests:\n");

// daysUntil()
console.log(dateModule.daysUntil(new Date(2020, 11, 17)));                                          //days until 11-17-2020
console.log(dateModule.daysUntil(new Date()));                                                      //0
try { console.log(dateModule.daysUntil(null)); } catch (e) { console.log(e); }                      //"ERROR: Null argument."
try { console.log(dateModule.daysUntil("blah")); } catch (e) { console.log(e); }                    //"ERROR: Argument not instanceof Date."
try { console.log(dateModule.daysUntil(new Date(2000, 11, 17))); } catch (e) { console.log(e); }    //"ERROR: Date falls before current date."

console.log("");

// daysLeftInYear()
console.log(dateModule.daysLeftInYear());       //days left in the year

console.log("");

// daysSince()
console.log(dateModule.daysSince(new Date(2014, 11, 17)));                                          //days since 11-17-2014
console.log(dateModule.daysSince(new Date()));                                                      //0
try { console.log(dateModule.daysSince(null)); } catch (e) { console.log(e); }                      //"ERROR: Null argument."
try { console.log(dateModule.daysSince("blah")); } catch (e) { console.log(e); }                    //"ERROR: Argument not instanceof Date."
try { console.log(dateModule.daysSince(new Date(2020, 11, 17))); } catch (e) { console.log(e); }    //"ERROR: Date falls before current date."

console.log("");

// nextFridayTheThirteenth()
console.log(dateModule.nextFridayTheThirteenth());      //date of the next Friday the 13th

/*
* ------------------------------------------------
*  numbers.js tests
* ------------------------------------------------
*/

console.log("\n\nnumbers.js tests:\n");

// triangleArea()
console.log(numberModule.triangleArea(4, 12));                                              //24
try { console.log(numberModule.triangleArea(-4, 12)); } catch (e) { console.log(e); }       //"ERROR: Negative argument."
try { console.log(numberModule.triangleArea("4", 12)); } catch (e) { console.log(e); }      //"ERROR: Argument not typeof number."
try { console.log(numberModule.triangleArea(null, 12)); } catch (e) { console.log(e); }     //"ERROR: Argument not typeof number."

console.log("");

// perimeterOfTriangle()
console.log(numberModule.perimeterOfTriangle(4, 12, 10));                                              //26
try { console.log(numberModule.perimeterOfTriangle(4, 12, -10)); } catch (e) { console.log(e); }       //"ERROR: Negative argument."
try { console.log(numberModule.perimeterOfTriangle(4, "12", 10)); } catch (e) { console.log(e); }      //"ERROR: Argument not typeof number."
try { console.log(numberModule.perimeterOfTriangle(null, 12, 10)); } catch (e) { console.log(e); }     //"ERROR: Argument not typeof number."

console.log("");

// areaOfSquare()
console.log(numberModule.areaOfSquare(10));                                                 //100
try { console.log(numberModule.areaOfSquare(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.areaOfSquare("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.areaOfSquare(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("");

// perimeterOfSquare()
console.log(numberModule.perimeterOfSquare(10));                                                 //40
try { console.log(numberModule.perimeterOfSquare(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.perimeterOfSquare("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.perimeterOfSquare(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("");

// areaOfCube()
console.log(numberModule.areaOfCube(10));                                                 //1000
try { console.log(numberModule.areaOfCube(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.areaOfCube("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.areaOfCube(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("");

// surfaceAreaOfCube()
console.log(numberModule.surfaceAreaOfCube(10));                                                 //600
try { console.log(numberModule.surfaceAreaOfCube(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.surfaceAreaOfCube("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.surfaceAreaOfCube(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("");

// perimeterOfCube()
console.log(numberModule.perimeterOfCube(10));                                                 //120
try { console.log(numberModule.perimeterOfCube(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.perimeterOfCube("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.perimeterOfCube(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("");

// circumferenceOfCircle()
console.log(numberModule.circumferenceOfCircle(10));                                                //62.83
try { console.log(numberModule.circumferenceOfCircle(-10)); } catch (e) { console.log(e); }         //"ERROR: Negative argument."
try { console.log(numberModule.circumferenceOfCircle("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.circumferenceOfCircle(null)); } catch (e) { console.log(e); }        //"ERROR: Argument not typeof number."

console.log("");

// areaOfCircle()
console.log(numberModule.areaOfCircle(10));                                                 //314.16
try { console.log(numberModule.areaOfCircle(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.areaOfCircle("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.areaOfCircle(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

/*
* ------------------------------------------------
*  objects.js tests
* ------------------------------------------------
*/

console.log("\n\nobjects.js tests:\n");

// shallowClone()
console.log(objectModule.shallowClone({one: "one", two: "two", three: "three"}));           //{one: "one", two: "two", three: "three"}
console.log(objectModule.shallowClone({}));                                                 //{}
try { console.log(objectModule.shallowClone(null)); } catch (e) { console.log(e); }         //"ERROR: Null argument."
try { console.log(objectModule.shallowClone(1)); } catch (e) { console.log(e); }            //"ERROR: Argument not typeof Object."

console.log("");

// deepClone()
console.log(objectModule.deepClone({one: {num1: 1, num2: 2, object: {}}, two: "two", three: {}}));           //{one: {num1: 1, num2: 2, object: {}}, two: "two", three: {}}
console.log(objectModule.deepClone({}));                                                                     //{}
try { console.log(objectModule.deepClone(null)); } catch (e) { console.log(e); }                             //"ERROR: Null argument."
try { console.log(objectModule.deepClone(1)); } catch (e) { console.log(e); }                                //"ERROR: Argument not typeof Object."

/*
 * ------------------------------------------------
 *  string.js tests
 * ------------------------------------------------
 */

console.log("\n\nstring.js tests:\n");

// occurrencesOfSubstring()
console.log(strModule.occurrencesOfSubstring("varvarVar", "var"));                                      //2
console.log(strModule.occurrencesOfSubstring("varvarVar", "blahblahblah"));                             //0
try { console.log(strModule.occurrencesOfSubstring(null, "var")); } catch (e) { console.log(e); }       //"ERROR: Null argument."
try { console.log(strModule.occurrencesOfSubstring(1, "var")); } catch (e) { console.log(e); }          //"ERROR: Argument not typeof String."

console.log("");

// occurrencesOfSubstringInsensivie()
console.log(strModule.occurrencesOfSubstringInsensivie("varvarVar", "var"));                                      //3
console.log(strModule.occurrencesOfSubstringInsensivie("varvarVar", "blahblahblah"));                             //0
try { console.log(strModule.occurrencesOfSubstringInsensivie(null, "var")); } catch (e) { console.log(e); }       //"ERROR: Null argument."
try { console.log(strModule.occurrencesOfSubstringInsensivie(1, "var")); } catch (e) { console.log(e); }          //"ERROR: Argument not typeof String."

console.log("");

// randomizeSentences()
console.log(strModule.randomizeSentences("This is a test of randomizing a paragraph. Testing; testing; testing. Blah blah blah. This is still a test."));   //randomized verison of that                                     //3
try { console.log(strModule.randomizeSentences("bla.h")); } catch (e) {console.log(e); }                                                                    //"ERROR: Paragraph not properly formed."
try { console.log(strModule.randomizeSentences(null)); } catch (e) { console.log(e); }                                                                      //"ERROR: Null argument."
try { console.log(strModule.randomizeSentences(1)); } catch (e) { console.log(e); }                                                                         //"ERROR: Argument not typeof String."

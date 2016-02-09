/*
 * Jeff Mariconda
 * CS-546
 */

/*
 *  Count and return how many times a substring occurs in a main string; this function is case sensitive.
 */
exports.occurrencesOfSubstring = function (main, substr)
{
    if (main == null || substr == null) {
        return -1;
    } else if (substr.length > main.length) {
        return 0;
    }

    var count = 0;
    var offsetLen = main.length - substr.length;

    for (var i = 0 ; i <= offsetLen ; i++) {
        if (substr == main.substring(i, i + substr.length)) {
            count++;
        }
    }

    return count;
}

console.log(exports.occurrencesOfSubstring("varvarVar", "var"));

/*
 *  Count and return how many times a substring occurs in a main string; this function is case insensitive.
 */
exports.occurrencesOfSubstringInsensivie = function (main, substr)
{
    if (main == null || substr == null) {
        return -1;
    } else if (substr.length > main.length) {
        return 0;
    }

    var count = 0;
    var offsetLen = main.length - substr.length;

    for (var i = 0 ; i <= offsetLen ; i++) {
        if (substr.toLowerCase() == main.substring(i, i + substr.length).toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(exports.occurrencesOfSubstringInsensivie("varvarVar", "var"));

/*
 *  Given a string representing a paragraph, reorder the sentences. Return a new string representing a paragraph
 *  where the sentences are randomly ordered.
 */
exports.randomizeSentences = function (paragraph)
{
    if (paragraph == null)
        return -1;

    // splits the given string into an array by sentences
    function splitSentences(paragraph) {
        var split = [];

        for (var i = 0, startIndex = i ; i < paragraph.length ; i++) {

            // if the end of a sentence is reached
            if (paragraph[i] == '.' || paragraph[i] == '?' || paragraph[i] == '!') {
                // append sentence to split array
                split.push(paragraph.substring(startIndex, i + 1));

                // get start index for the next sentence
                while (paragraph[++i] == ' ')
                    ;
                startIndex = i;
            }
        }

        return split;
    }

    var arrModule = require("./arrays.js")

    var shuffledSentences = arrModule.shuffle(splitSentences(paragraph));
    var newParagraph = '';

    for (sentence of shuffledSentences) {
        newParagraph += sentence + " ";
    }

    return newParagraph;
}

console.log(exports.randomizeSentences("This is a test of randomizing a paragraph. I like trains. Blah blah blah. This is still a test."));

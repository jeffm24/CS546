/*
 * Jeff Mariconda
 * CS-546
 */

 var exports = module.exports = {
     occurrencesOfSubstring,
     occurrencesOfSubstringInsensivie,
     randomizeSentences
 };

/*
 *  Count and return how many times a substring occurs in a main string; this function is case sensitive.
 */
function occurrencesOfSubstring(main, substr)
{
    if (main === null || substr === null) {
        throw "ERROR: Null argument.";
    } else if (typeof main !== 'string' || typeof substr !== 'string') {
        throw "ERROR: Argument not typeof String";
    } else if (substr.length > main.length) {
        return 0;
    }

    var regex = new RegExp(substr, 'g');
    var matches = main.match(regex);

    if (matches !== null)
        return matches.length;
    else
        return 0;
}

/*
 *  Count and return how many times a substring occurs in a main string; this function is case insensitive.
 */
function occurrencesOfSubstringInsensivie(main, substr)
{
    if (main === null || substr === null) {
        throw "ERROR: Null argument.";
    } else if (typeof main !== 'string' || typeof substr !== 'string') {
        throw "ERROR: Argument not typeof String";
    } else if (substr.length > main.length) {
        return 0;
    }

    var regex = new RegExp(substr, 'gi');
    var matches = main.match(regex);

    if (matches != null)
        return matches.length;
    else
        return 0;
}

/*
 *  Given a string representing a paragraph, reorder the sentences. Return a new string representing a paragraph
 *  where the sentences are randomly ordered.
 */
function randomizeSentences(paragraph)
{
    if (paragraph === null) {
        throw "ERROR: Null argument.";
    } else if (typeof paragraph !== 'string') {
        throw "ERROR: Argument not typeof String";
    }

    var arrModule = require("./arrays.js")

    var splitSentences = paragraph.match(/[A-Za-z,;\'\"\s]+[.?!]/g);

    if (splitSentences === null) {
        throw "ERROR: Paragraph not properly formed.";
    }

    var shuffledSentences = arrModule.randomized(splitSentences);

    var newParagraph = "";

    for (sentence of shuffledSentences) {
        newParagraph += sentence.trim() + " ";
    }

    return newParagraph;
}

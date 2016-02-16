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
    if (main == null || substr == null) {
        return -1;
    } else if (substr.length > main.length) {
        return 0;
    }

    var regex = new RegExp(substr, 'g');
    var matches = main.match(regex);

    if (matches != null)
        return matches.length;
    else
        return 0;
}

console.log(occurrencesOfSubstring("varvarVar", "var"));

/*
 *  Count and return how many times a substring occurs in a main string; this function is case insensitive.
 */
function occurrencesOfSubstringInsensivie(main, substr)
{
    if (main == null || substr == null) {
        return -1;
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

console.log(occurrencesOfSubstringInsensivie("varvarVar", "var"));

/*
 *  Given a string representing a paragraph, reorder the sentences. Return a new string representing a paragraph
 *  where the sentences are randomly ordered.
 */
function randomizeSentences(paragraph)
{
    if (paragraph == null)
        return -1;

    var arrModule = require("./arrays.js")

    var splitSentences = paragraph.match(/[A-Za-z,;\'\"\s]+[.?!]/g);
    var shuffledSentences = arrModule.shuffle(splitSentences);
    var newParagraph = '';

    for (sentence of shuffledSentences) {
        newParagraph += sentence.trim() + " ";
    }

    return newParagraph;
}

console.log(randomizeSentences("This is a test of randomizing a paragraph. Testing; testing; testing. Blah blah blah. This is still a test."));

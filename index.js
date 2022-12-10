"use strict";
exports.__esModule = true;
/**
 * Check if a given stirng is Palindrom
 * @param {string}  str
 * @returns {boolean}
 */
var isPalindrome = function (str) {
    str = str.toLowerCase();
    // loop throught the characters in the string
    // start from beginng to the middle 
    for (var i = 0; i < str.length / 2; i++) {
        var currentChar = str[i];
        var endChar = str[str.length - i - 1];
        // if character on the start and end positions don't match 
        // return false
        if (currentChar != endChar) {
            return false;
        }
    }
    // if we have reached this point , it means that the string is a palandrom.
    return true;
};
exports["default"] = isPalindrome;

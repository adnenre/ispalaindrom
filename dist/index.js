/**
 * Check if a given stirng is Palindrom
 * @param {string}  str
 * @returns {boolean}
 */
const isPalindrome = (str) => {
    str = str.toLowerCase();
    // loop throught the characters in the string
    // start from beginng to the middle 
    for (let i = 0; i < str.length / 2; i++) {
        const currentChar = str[i];
        const endChar = str[str.length - i - 1];
        // if character on the start and end positions don't match 
        // return false
        if (currentChar != endChar) {
            return false;
        }
    }
    // if we have reached this point , it means that the string is a palandrom.
    return true;
};
export { isPalindrome as default };
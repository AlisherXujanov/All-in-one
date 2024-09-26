// Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. 
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple 
// spaces between two words. The returned string should only have a single 
// space separating the words. Do not include any extra spaces.
 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words 
// to a single space in the reversed string.


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let splittedWords = s.trim().split(" ")  // remove leading and trailing spaces
    // let reversedWords = splittedWords.map(word => word.trim()).filter(word => word.length > 0).reverse()
    // return reversedWords.join(" ")
    const regex = /\S+/g
    return s.match(regex).reverse().join(" ")

    // --->>>  /.../: Delimits the regular expression.
    // --->>>  \S: Matches any non-whitespace character.
    // --->>>  +: Matches one or more of the preceding token (in this case, one or more non-whitespace characters).
    // --->>>  g: The global flag, which means the regular expression will match all occurrences in the string, not just the first one.
};

let s = "a good   example"
let r = reverseWords(s)
console.log(r)
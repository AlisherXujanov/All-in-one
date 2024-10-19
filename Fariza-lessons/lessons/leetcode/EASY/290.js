// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between 
// a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 
// ===========================================================================
// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Explanation:
// The bijection can be established as:
// 'a' maps to "dog".
// 'b' maps to "cat".
// ===========================================================================
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// ===========================================================================
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// ===========================================================================
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if (!s) return false; // Check if the input string is empty
    const words = s.split(' ');
    const patternArr = pattern.split('');
    
    if(words.length !== patternArr.length) return false;
    
    const mapping = new Map();
    const mapping2 = new Map();
    
    for(let i = 0; i < patternArr.length; i++) {
        const letter = patternArr[i];
        const word = words[i];
        
        if(mapping.has(letter)) {
            if(mapping.get(letter) !== word) return false;
        } else if(mapping2.has(word)) {
            if(mapping2.get(word) !== letter) return false;
        } else {
            mapping.set(letter, word);
            mapping2.set(word, letter);
        }
    }
    return true;
};

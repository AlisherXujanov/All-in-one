// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character 
// while preserving the order of characters. No two characters may map to 
// the same character, but a character may map to itself.

// ====================================================================
// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Explanation:
// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// ====================================================================
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Explanation:
// The strings s and t can not be made identical as 'o' needs to 
// be mapped to both 'a' and 'r'.
// ====================================================================
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// ====================================================================
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const mapping = {} // mappings from s to t
    const mapping2 = {} // mappings from t to s

    if (s.length !== t.length) return false 
    // If the lengths of s and t are not equal, they cannot be isomorphic

    for (let i = 0; i < s.length; i++) { // Iterate through each character in the strings
        const letter1 = s[i] // Get the current character from string s
        const letter2 = t[i] // Get the current character from string t
        if (letter1 in mapping) { // If letter1 is already in the mapping
            if (mapping[letter1] !== letter2) return false // Check if it maps to the same letter2, if not return false
        }
        else if (letter2 in mapping2) { // If letter2 is already in the second mapping
            if (mapping2[letter2] !== letter1) return false // Check if it maps to the same letter1, if not return false
        }
        else { // If neither letter1 nor letter2 are in their respective mappings
            mapping[letter1] = letter2 // Add the mapping from letter1 to letter2
            mapping2[letter2] = letter1 // Add the mapping from letter2 to letter1
        }
    }
    return true // If all characters are consistently mapped, return true
};

// 'Hello',     'Hello',    2,     3,    'Hello'
// 'a',         'a',       'b',    'c',   'a'


// The first set is [red, blue, green, red].
// The second set is [apple, banana, cherry, cherry].
// In this case, the two sets of blocks are not isomorphic. Here's why:

// The first set is [red, blue, green, red].
// The second set is [apple, banana, cherry, cherry].
// When we try to match the blocks:

// - red should map to apple.
// - blue should map to banana.
// - green should map to cherry.
// - The second red should also map to apple (because red was already mapped to apple).
// However, the last block in the second set is cherry, not apple. This breaks the one-to-one matching rule because red cannot map to both apple and cherry.

// Therefore, the sets [red, blue, green, red] and [apple, banana, cherry, cherry] are not isomorphic.
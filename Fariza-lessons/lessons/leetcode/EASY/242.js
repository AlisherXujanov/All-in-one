// Given two strings s and t, return true if t is an anagram
// of s, and false otherwise.

// Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// An anagram is a fun word game. Imagine you have a word, like "listen." 
// If you mix up the letters and make a new word, like "silent," that's an anagram! 
// Both words use the same letters, just in a different order. It's like playing with 
// letter blocks to make new words.
// ============================================================
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// ============================================================
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// ============================================================

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    let sArr = s.split('')
    let tArr = t.split('')

    sArr.sort()
    tArr.sort()

    if (sArr.join('').toLowerCase() !== tArr.join('').toLowerCase()) return false

    return true
}
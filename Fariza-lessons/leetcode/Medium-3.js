// Given a string s, find the length of the longest 
// substring without repeating characters.


// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is 
// a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Input: s = "pwwkew"
    // ['pw', 'wke', 'w']
    let pool = get_each_parts(s)
    let pool2 = get_each_parts(s.split("").reverse().join(""))

    let longest = ''
    for (let item of pool) {
        if (item.length > longest.length) {
            longest = item
        }
    }
    let longest2 = ""
    for (let item of pool2) {
        if (item.length > longest2.length) {
            longest2 = item
        }
    }
    return longest.length > longest2.length ? longest.length : longest2.length
}
function get_each_parts(s) {
    let pool = []
    for (let i = 0; i < s.length; i++) {
        if (pool.length == 0) {
            pool.push(s[i])
        } else {
            let lastText = pool[pool.length - 1]
            if (!lastText.includes(s[i])) {
                pool[pool.length - 1] = lastText + s[i]
            } else {
                pool.push(s[i])
            }
        }
    }
    return pool
}


let r = lengthOfLongestSubstring("dvdf")
console.log("Result: ", r)


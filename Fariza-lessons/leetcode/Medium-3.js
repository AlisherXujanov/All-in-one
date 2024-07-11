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
    let max = 0, len = 0, start = -1, temp = new Map();

    for (let i = 0; i < s.length; i++) {
        if (temp.get(s[i]) == undefined || temp.get(s[i]) < start) {
            len++
        } else {
            start = temp.get(s[i])
            len = i - start
        }
        temp.set(s[i], i)
        if (max < len) max = len

        // console.log(s[i], ' start = ',start, ';end=',i, 'len =',len)

    }

    return max
}

let r = lengthOfLongestSubstring("asjrgapa")
console.log("Result: ", r)


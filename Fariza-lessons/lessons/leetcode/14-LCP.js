// --------------------------------------------------------------
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// --------------------------------------------------------------
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// --------------------------------------------------------------

function longestCommonPrefix(strings) {
    let common = ""
    if (strings.length === 0) {
        return common;
    }
    for (let i = 0; i < strings[0].length; i++) {
        for (let j = 1; j < strings.length; j++) {
            if (i >= strings[j].length || strings[j][i] !== strings[0][i]) {
                return common
            }
        }
        common += strings[0][i]
    }
    return common
}

let r = longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
console.log(r)
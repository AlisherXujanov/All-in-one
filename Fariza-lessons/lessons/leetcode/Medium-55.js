// Jump Game
// -----------------------------------------------------------
// EXPLANATION

// You are given an integer array nums. You are initially positioned 
// at the array's first index, and each element in the array represents 
// your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
// -----------------------------------------------------------
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// -----------------------------------------------------------
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. 
// Its maximum jump length is 0, which makes it impossible to reach the last index.
// -----------------------------------------------------------
// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105
// -----------------------------------------------------------

// SOLUTION
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // This uses the GREEDY ALGORITHM
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        // i == on which step we are
        if (i > max) return false
        max = Math.max(max, i + nums[i])
        // [2,3,1,1,4]
        // i == 0,  max == 0    0 < 2 ->  max = 2
        // i == 1,  max == 3,   0 < 4 ->  max = 4
        // i == 2,  max == 4,   4 > 3 ->  max = 4
        // i == 3,  max == 4,   4 == 4  -> max = 4
        // i == 4,  max == 4,   4 < 8  ->  max == 8
    }
    return true;
};
// You are given a 0-indexed array of integers nums of length n. 
// You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. 
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. 
// The test cases are generated such that you can reach nums[n - 1].
// ====================================================================================
// ====================================================================================
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. 
// Jump 1 step from index 0 to 1, then 3 steps to the last index.
// ====================================================================================
// ====================================================================================
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
// ====================================================================================
// ====================================================================================
// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].
// ====================================================================================
// ====================================================================================
/**
 * Calculates the minimum number of jumps needed to reach the last index of the given array.
 *
 * @param {number[]} nums - The array of numbers representing the maximum jump length at each position.
 * @returns {number} - The minimum number of jumps needed.
 */
var jump = function (nums) {
    let answer = 0; // minimum number of jumps needed
    let curEnd = 0; // current maximum reachable index
    let curFar = 0; // maximum reachable index from the current position

    for (let i = 0; i < nums.length - 1; ++i) { // Iterate through the array
        curFar = Math.max(curFar, i + nums[i]); // Update the maximum reachable index from the current position

        if (i === curEnd) { // If the current position is equal to the current maximum reachable index
            ++answer; // Increment the minimum number of jumps needed
            curEnd = curFar; // Update the current maximum reachable index
        }
    }
    return answer; // Return the minimum number of jumps needed

    // steps = [2, 3, 1, 1, 4]
    // curFar == 0 && 0+2 > 0 => curFar = 2      //          0===0  => answer = 1, curEnd = 2
    // curFar == 2 && 1+3 > 2 => curFar = 4      //          1===2  => answer = 1, curEnd = 2
    // curFar == 4 && 2+1 > 4 => curFar = 4      //          2===2  => answer = 2, curEnd = 4
    // curFar == 4 && 3+1 > 4 => curFar = 4      //          3===4  => answer = 2, curEnd = 4
    // curFar == 4 && 4+4 > 4 => curFar = 8      //          4===8  => answer = 2, curEnd = 4
    // return 2
}


steps = [2, 3, 1, 1, 4]
let r = jump(steps)
console.log(r)  // 2

// Product of Array Except Self

// Given an integer array nums, return an array answer such 
// that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed 
// to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without 
// using the division operation.
// ==============================================================
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// ==============================================================
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
// ==============================================================
// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// ==============================================================
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    let leftProduct = 1;
    let rightProduct = 1;
    
    // Calculate the product of all elements to the left of each element
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    // ------------------------
    // Input: nums = [1,2,3,4]
    // FIRST LOOP DESCRIPTION
    // 1. result[0] = 1   ====>>>>  [1]        ====>>>>  leftProduct == 1*1 
    // 2. result[1] = 1   ====>>>>  [1,1]      ====>>>>  leftProduct == 1*2 
    // 3. result[2] = 2   ====>>>>  [1,1,2]    ====>>>>  leftProduct == 2*3 
    // 4. result[3] = 6   ====>>>>  [1,1,2,6]  ====>>>>  leftProduct == DOES NOT MATTER


    // Calculate the product of all elements to the right of each element
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    // ------------------------
    // Input: nums = [1,2,3,4]   ===>>> result = [1,1,2,6]
    // SECOND LOOP DESCRIPTION
    // 1. result[3] * 1   ==   6*1   ====>>>>  [1,1,2,6]  ====>>>>  rightProduct == 1*4
    // 2. result[2] * 4   ==   2*4   ====>>>>  [1,1,8,6]  ====>>>>  rightProduct == 4*3
    // 3. result[1] * 12  ==   1*12  ====>>>>  [1,12,8,6] ====>>>>  rightProduct == 12*2
    // 4. result[0] * 24  ==   1*24  ====>>>>  [24,12,8,6]====>>>>  rightProduct == DOES NOT MATTER
    
    return result; // [24,12,8,6]
};
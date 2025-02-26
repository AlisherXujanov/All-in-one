// Given an integer array nums, rotate the array to the right 
// by k steps, where k is non-negative.
// -------------------------------------------------
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// [1,2,3,4,5,6,7]
// [7,1,2,3,4,5,6]  -> rotated 1-step
// [6,7,1,2,3,4,5]  -> rotated 2-step
// [5,6,7,1,2,3,4]  -> rotated 3-step

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// -------------------------------------------------
// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

// [-1,-100,3,99]
// [99,-1,-100,3]   -> rotated 1-step
// [3,99,-1,-100]   -> rotated 2-step

// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// -------------------------------------------------
// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
// -------------------------------------------------
// Follow up:
// Try to come up with as many solutions as you can. 
// There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/
var rotate = function (nums, k) {
    // -------------------------------------------------
    // SOLUTION WITH EXTRA SPACE - Algorithm called - "Cyclic Replacements" 

    // 1. Create a copy of the array
    let copy = nums.slice();
    // 2. Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // 3. Calculate the new index
        let newIndex = (i + k) % nums.length;
        // 4. Assign the new value to the new index
        nums[newIndex] = copy[i];
    }
    return nums;
}

// Test cases
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2))     // [3,99,-1,-100]


// ===================================================
// ===================================================
// let arr = ['img1', 'img2', 'img3', 'img4', 'img5']

// let twenty_cards = [
//     'card1', 'card2', 'card3', 'card4', 'card5',
//     'card6', 'card7', 'card8', 'card9', 'card10',
//     'card11', 'card12', 'card13', 'card14', 'card15',
//     'card16', 'card17', 'card18', 'card19', 'card20'
// ]
// for (let i=0; i<twenty_cards.length; i++) {
//     let neededImageIndex = i % arr.length
//     console.log(twenty_cards[i], arr[neededImageIndex])
// }






// Given an integer array nums and an integer k, return true if there are two 
// distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// ===================================================================================== 
// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// ===================================================================================== 
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// ===================================================================================== 
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// =====================================================================================
// EXPLANATION In Very Simple Terms
// Imagine you have a list of numbers, like a row of toy cars, and you want to 
// check if there are two cars of the same color that are parked close to each other. 
// You also have a rule that says how close they need to be to count as "close."

// Here's how the code works:
// Setup a Map: Think of a map as a special notebook where you write down 
                // the color of each car and where it's parked.

// Loop through the cars: You look at each car one by one.

// Check for a match: For each car, you check your notebook to see 
                    // if you've seen a car of the same color before. If you have, 
                    // you check if the two cars are parked close enough according to your rule.

// Return true if close: If you find two cars of the same color that are close enough, 
                    // you say "Yes, there are two cars of the same color parked close to each other."

// Update the notebook: If the car is not close enough or you haven't 
                    // seen it before, you write down its color and where it's parked in your notebook.

// Return false if no match: If you go through all the cars and don't find any 
                    // that are close enough, you say "No, there aren't two cars 
                    // of the same color parked close to each other."
// ===================================================================================== 
/**
* @param {number[]} nums
* @param {number} k
* @return {boolean}
*/
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map(); // Create a notebook to keep track of car colors and their positions
    for (let i = 0; i < nums.length; i++) { // Look at each car one by one
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) { // Check if we've seen this color before and if it's close enough
            return true; // If yes, say "Yes, there are two cars of the same color parked close to each other"
        }
        map.set(nums[i], i); // Write down the color and position of the car in the notebook
    }
    return false; // If we don't find any close cars, say "No, there aren't two cars of the same color parked close to each other"
};

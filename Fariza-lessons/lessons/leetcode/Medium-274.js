// Given an array of integers citations where citations[i] is the number of citations a 
// researcher received for their ith paper, return the researcher's h-index.


// According to the definition of h-index on Wikipedia: The h-index is defined as 
// the maximum value of h such that the given researcher has published at least h 
// papers that have each been cited at least h times.
// ========== ========== ========== ========== ========== ========== ========== ========== 
// ========== ========== ========== ========== ========== ========== ========== ========== 
// Example 1:
// Input: citations = [3,0,6,1,5]

// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each 
// of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining 
// two with no more than 3 citations each, their h-index is 3.

// ========== ========== ========== ========== ========== ========== ========== ========== 
// ========== ========== ========== ========== ========== ========== ========== ========== 
// Example 2:
// Input: citations = [1,3,1]
// Output: 1

// ========== ========== ========== ========== ========== ========== ========== ========== 
// ========== ========== ========== ========== ========== ========== ========== ========== 
// Example 3:
// Input: citations = [1, 11, 12, 5, 7, 8, 9, 10]
// Output: 6

// ========== ========== ========== ========== ========== ========== ========== ========== 
// ========== ========== ========== ========== ========== ========== ========== ========== 
// Constraints:
// n == citations.length
// 1 <= n <= 5000
// 0 <= citations[i] <= 1000

// ========== ========== ========== ========== ========== ========== ========== ========== 
// ========== ========== ========== ========== ========== ========== ========== ========== 


/**
 * @param {number[]} citations - An array of integers representing the number of citations for each paper.
 * @return {number} - The researcher's h-index.
 */
var hIndex = function (citations) {
    // Sort the citations array in descending order.
    citations.sort((a, b) => b - a);

    // Initialize the h-index to 0.
    let hIndex = 0;

    // Iterate through the sorted citations array.
    for (let i = 0; i < citations.length; i++) {
        // Check if the current citation count is greater than or equal to the current index + 1.
        const CURRENT_INDEX = i + 1;
        if (citations[i] >= CURRENT_INDEX) {
            // Update the h-index to the CURRENT index + 1.
            hIndex = CURRENT_INDEX;
        }
    }
    // [3,0,6,1,5]   => [6, 5, 3, 1, 0]
    // i = 0, 6 >= 1 => hIndex = 1
    // i = 1, 5 >= 2 => hIndex = 2
    // i = 2, 3 >= 3 => hIndex = 3
    // i = 3, 1 >= 4 => hIndex = 3
    // i = 4, 0 >= 5 => hIndex = 3
    // Return the calculated h-index.

    return hIndex;
};


s = [3, 0, 6, 1, 5]
console.log(hIndex(s)) // 3
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum 
// of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// ========================================================================
// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
// ========================================================================
// Example 2:
// Input: n = 2
// Output: false
// ========================================================================
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, seen = new Set()) {
    if (n === 1) return true
    if (seen.has(n)) return false

    seen.add(n)
    const next_n = String(n).split('').reduce((acc, num) => parseInt(acc) + parseInt(num) ** 2, 0)

    return isHappy(next_n, seen)
};

let seen = isHappy(19)
console.log(seen)




// let x = [1,1,1,1,1, 2, 3, 4,4,4, 5]
// let z = new Set(x)
// console.log(z)

// console.log(z.has(3))
// console.log(z.has(10))





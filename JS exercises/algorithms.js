// 1. Understand the Problem: Before you start writing code, you need 
// to understand what problem you're trying to solve. This might involve 
// reading the problem description, talking to users, or drawing diagrams.

// 2. Plan the Solution: Once you understand the problem, you can start 
// planning your solution.This might involve writing pseudocode, drawing 
// flowcharts, or just thinking about the steps you need to take.

// 3. Write the Code: Now you can start translating your plan into JavaScript 
// code.This involves using the syntax and features of the JavaScript language 
// to implement your algorithm.

// 4. Test the Code: After you've written your code, you need to test it 
// to make sure it works correctly. This might involve running your code 
// with different inputs and checking the output.

// 5. Optimize the Code: Once your code is working, you might want to 
// optimize it to make it run faster or use less memory.This might involve 
// using more efficient algorithms or data structures.



// Linear Search: 
// This is the simplest type of search algorithm. It works by starting 
// at the beginning of the data structure and checking each element one by 
// one until it finds the target or reaches the end. This is best used when 
// the data is unsorted and there's no information about where the target might be.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // return the index of the target
        }
    }
    return -1; // return -1 if the target is not found
}
// =============================================================
// =============================================================
// =============================================================
// ================ Fibonacci in Constant Space ================
// =============================================================
// =============================================================
// =============================================================

// Constant time complexity, denoted as O(1), means that the time 
// (or the number of operations) it takes to execute an operation 
// (such as adding an element to an array, or retrieving a value 
// from a specific location in an array) does not change regardless 
// of the size of the input data set.

// Here's a simple example in JavaScript:
function getItem(arr, index) {
    return arr[index];
}
// In this function, regardless of the size of the array, it always 
// takes the same amount of time to retrieve the item at a specific index. 
// This is because array indexing is a constant time operation in JavaScript.

// So, whether the array has 10 items or 10 million items, getItem will 
// theoretically take the same amount of time to execute, hence it has a 
// constant time complexity of O(1).


// Write a function that calculates the nth Fibonacci number, 
// but uses only a constant amount of space (i.e., O(1) space complexity).
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return n === 0 ? a : b;
}
console.log(fibonacci(8));  // 21 
console.log(fibonacci(9));  // 34  
console.log(fibonacci(10)); // 55



// =============================================================
// =============================================================
// =============================================================
// ================ Fibonacci with Memoization =================
// =============================================================
// =============================================================
// =============================================================
// Memoization is a technique used to improve the performance of
// algorithms by storing the results of expensive function calls and
// returning the cached result when the same inputs occur again.

// Here's a simple example in JavaScript:
function memoize(fn) {
    const cache = {};
    return function (...rest) {
        if (cache[rest]) {
            return cache[rest];
        }
        const result = fn(...rest);
        cache[rest] = result;
        return result;
    };
}
// In this example, memoize is a higher-order function that takes a
// function fn as an argument and returns a new function that caches
// the results of fn. This means that if you call the memoized function
// with the same arguments, it will return the cached result instead of
// recalculating it.

// Here's how you might use memoize to improve the performance of a
// recursive Fibonacci function:
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(8));  // 21
console.log(memoizedFibonacci(9));  // 34
console.log(memoizedFibonacci(10)); // 55
// In this example, the memoizedFibonacci function is a memoized version
// of the original recursive Fibonacci function. This means that if you
// call memoizedFibonacci with the same arguments, it will return the
// cached result instead of recalculating it, which can improve the
// performance of the function.


// =============================================================
// =============================================================
// =============================================================
// ================ Fibonacci Iterative ========================
// =============================================================
// =============================================================
// =============================================================
// Iterative algorithms are algorithms that use loops to repeat a
// sequence of instructions a specified number of times. These
// algorithms are often more efficient than recursive algorithms
// because they avoid the overhead of function calls and the
// associated memory usage.

// Here's a simple example in JavaScript:
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// In this example, the factorial function uses a for loop to
// calculate the factorial of a number n. This is more efficient
// than a recursive implementation because it avoids the overhead
// of function calls and the associated memory usage.

// Write an iterative version of the Fibonacci sequence. 
// This version should use a loop instead of recursion.
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return n === 0 ? a : b;
}
console.log(fibonacci(8));  // 21
console.log(fibonacci(9));  // 34
console.log(fibonacci(10)); // 55


// =============================================================
// =============================================================
// =============================================================
// ================ Fibonacci Last Digit =======================
// =============================================================
// =============================================================
// =============================================================
// Write a function that returns the last digit of the nth Fibonacci number. 
// This will test your ability to work with large numbers and optimize your solution.

function fibonacciLastDigit(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 2; i <= n; i++) {
        c = (a + b) % 10;
        a = b;
        b = c;
    }
    return n === 0 ? a : b;
}
console.log(fibonacciLastDigit(8));  // 1
console.log(fibonacciLastDigit(9));  // 4
console.log(fibonacciLastDigit(10)); // 5

// =============================================================
// =============================================================
// =============================================================
// ================ Fibonacci Up To N ==========================
// =============================================================
// =============================================================
// =============================================================
// Write a function that generates all Fibonacci numbers less than n.

function fibonacciUpToN(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    const result = [];
    while (a < n) {
        result.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return result;
}
console.log(fibonacciUpToN(8));  // [ 0, 1, 1, 2, 3, 5 ]
console.log(fibonacciUpToN(9));  // [ 0, 1, 1, 2, 3, 5, 8 ]
console.log(fibonacciUpToN(10)); // [ 0, 1, 1, 2, 3, 5, 8 ]

// =============================================================
// =============================================================
// =============================================================
// ================ Fibonacci Prime ============================
// =============================================================
// =============================================================
// =============================================================
// Write a function that generates the first n Fibonacci numbers 
// that are prime. This will test your ability to combine multiple 
// algorithms (Fibonacci sequence generation and prime number checking).

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2;   i <= Math.sqrt(n);   i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

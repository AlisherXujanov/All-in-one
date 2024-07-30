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

// ----------------------------------------------------------------------
// FACTORIAL   -->>   !5  => 5*4*3*2*1 = 120   |||   !10  => 10*9*8*7*6*5*4*3*2*1 = 3628800
// FIBONACCI   -->>   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// PRIME       -->>   1, 2, 3, 5, 7, 11, 13, 17, 19, 23, ...
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// 1. EN: Create a function that uses a for-loop and find n fibonacci numbers.(for loop)
// UZ: n ta fibonacci sonlarini topuvchi for-loopdan foydalanadigan funksiya yarating.(for loop)
function fibonacciNumbers(n) {
    let fibbos = [0, 1]
    for (let i = 0; fibbos.length < n; i++) {
        let next_fibbo = fibbos[fibbos.length - 1] + fibbos[fibbos.length - 2]
        fibbos.push(next_fibbo)
    }
    return fibbos
}
let r = fibonacciNumbers(10)
// console.log(r)
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// 2. EN: Create a function that is used to find n prime fibonacci numbers. (for loop)
// UZ: n ta tub fibonacci sonlarini topuvchi funksiya yarating. (for loop)
function isPrime(n) {
    if (n == 1 || n == 2 || n == 3 || n == 5 || n == 7) {
        return true
    } else if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
        return false
    } else {
        return true
    }
}
// ============================================
// ============================================
// let primes = []
// for (let i = 0; primes.length < 100; i++) {
//     if (isPrime(i)) {
//         primes.push(i)
//     }
// }
// console.log(primes)
// ============================================
// ============================================
function primeFibonacciNumbers(n) {
    let fibbos = [0, 1]
    let primeFibbos = [0, 1]

    for (let i = 0; primeFibbos.length < n; i++) {
        let next_fibbo = fibbos[fibbos.length - 1] + fibbos[fibbos.length - 2]
        fibbos.push(next_fibbo)

        if (isPrime(next_fibbo)) {
            primeFibbos.push(next_fibbo)
        }
    }
    return primeFibbos
}
r = primeFibonacciNumbers(10)
// console.log(r)
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// 3. EN: Use recursion to find a factorial of a number.    (recursion)
// UZ: Sonning faktorialini topuvchi rekursiya funksiyasini yarating.(recursion)
function findFactorialNumbers(nums) {
    console.log(nums)
    if (nums == 0) {
        return 1
    } else {
        return nums * findFactorialNumbers(nums - 1)
    }
}
// console.log(findFactorialNumbers(5))
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// 4. EN: Use recursion to find a fibonacci numbers upto n.(recursion)
// UZ: n gacha bulgan fibonacci sonlarini topuvchi rekursiya funksiyasini yarating.(recursion)
function findFibonaccisRecursively(maxFibbos, fibbos = [0, 1]) {
    if (maxFibbos == fibbos.length) {
        return fibbos
    }
    let fibbosCopy = fibbos.slice()
    let nextFibbo = fibbosCopy[fibbosCopy.length - 1] + fibbosCopy[fibbosCopy.length - 2]
    fibbosCopy.push(nextFibbo)
    return findFibonaccisRecursively(maxFibbos, fibbosCopy)
}
r = findFibonaccisRecursively(10)
// console.log(r)
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
// 5. EN: Use recursion to find a n prime fibonacci numbers. (recursion)
// UZ: n ta tub fibonacci sonlarini topuvchi rekursiya funksiyasini yarating. (recursion)
function findPrimeFibonaccisRecursively(maxFibbos, fibbos = [0, 1], primeFibbos = [0, 1]) {
    if (maxFibbos == primeFibbos.length) {
        return primeFibbos
    }
    // ----------------------------------------
    let fibbosCopy = fibbos.slice()
    let nextFibbo = fibbosCopy[fibbosCopy.length - 1] + fibbosCopy[fibbosCopy.length - 2]
    fibbosCopy.push(nextFibbo)

    let primeFibbosCopy = primeFibbos.slice()
    if (isPrime(nextFibbo)) {
        primeFibbosCopy.push(nextFibbo)
    }
    return findPrimeFibonaccisRecursively(maxFibbos, fibbosCopy, primeFibbosCopy)
}
r = findPrimeFibonaccisRecursively(10)
console.log(r)

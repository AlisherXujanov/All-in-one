// ✅1. Nested loops  
// ✅2. Recursion
// ✅3. Linear search
// ✅4. Binary search
// ✅5. Bubble sort 
// =============================================================================
// =============================================================================
let first = "✅1. Nested loops"
// BE CAREFUL: 
// This is a very slow algorithm. 
// It is not recommended to use it for large data sets.
// ----------------------------------------
// let counter = 0 
// let range = "-".repeat(100)
// for (let i = 0; i < range.length; i++) {
//     for (let i2 = 0; i2 < range.length; i2++) {
//         counter += 1
//         console.log("Hello world")
//     }
// }
// console.log("Result: ", counter)
// ----------------------------------------
// DOUBLE POINTER ALGORITHM:    i=0,  j=0
// =============================================================================
// =============================================================================
let second = "✅2. Recursion"
// RULES:
// 1. Recursive function should always check a CONDITION to stop the loop from infinite loop.
// 2. Recursive function should always call ITSELF.
// 3. Recursive function should always pass different PARAMETERS to itself.

// EXAMPLE:
// *
// **
// ***
// ****
// *****
function drawStarsUp(lines, startingPoint = 1) {
    console.log("*".repeat(startingPoint))
    if (lines == startingPoint) return
    return drawStarsUp(lines, startingPoint + 1)
}
// drawStarsUp(50)
// -----------------------------------------------
// *****
// ****
// ***
// **
// *
function drawStarsDown(lines) {
    console.log("*".repeat(lines))
    if (lines === 1) {
        return
    }
    return drawStarsDown(lines - 1)
}
// drawStarsDown(10)
// -----------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function showEvenNumbers(arr) {
    let firstItem = arr[0]

    if (firstItem % 2 == 0) {
        console.log(firstItem)
    }
    if (arr.length == 1) {
        return
    }
    return showEvenNumbers(arr.slice(1))
}
// showEvenNumbers(arr)
// -----------------------------------------------
// 'Hello world'.slice(2, 7) // "llo w"
// 'Hello world'.slice(2)    // "llo world"
// 'Hello world'.slice()     // "Hello world"

// function test(str) { return "Hello" }        // function declaration
// let test = function(str) { return "Hello" }  // function declaration
// let test = () => "Hello"                     // arrow function
// let                        // arrow function

// let r = test("Hello")
// console.log(r)
// -----------------------------------------------
// let callBackFn = (item, index, arr) => {
//     return item + 10
// }
function cbFn(item, index, arr) {
    return item + 10
}
arr = [1, 2, 3]
let newArr = arr.map(cbFn)
console.log(newArr)

// map
// filter
// find
// findIndex
// reduce


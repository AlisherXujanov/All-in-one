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
// function drawStarsUp(lines, startingPoint = 1) {
//     console.log("*".repeat(startingPoint))
//     if (lines == startingPoint) return
//     return drawStarsUp(lines, startingPoint + 1)
// }
// drawStarsUp(50)
// -----------------------------------------------
// *****
// ****
// ***
// **
// *
// function drawStarsDown(lines) {
//     console.log("*".repeat(lines))
//     if (lines === 1) {
//         return
//     }
//     return drawStarsDown(lines - 1)
// }
// drawStarsDown(10)
// -----------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function showEvenNumbers(arr) {
//     let firstItem = arr[0]

//     if (firstItem % 2 == 0) {
//         console.log(firstItem)
//     }
//     if (arr.length == 1) {
//         return
//     }
//     return showEvenNumbers(arr.slice(1))
// }
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

// =============================================================================
// =============================================================================
// =============================================================================
let third = "✅3. Linear search"
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let targetNumber = 5
// for (let i=0;  i<arr.length; i++) {
//     if (targetNumber == arr[i]) {
//         return "Found"
//     }
// }
// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================
let fourth = "✅4. Binary search"
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let targetNumber = 10

// let start = 0
// let end = arr.length

// let found = false

// while (end - start > 0) {
//     let middleItem = parseInt((start + end) / 2)
//     if (arr[middleItem] == targetNumber) {
//         found = true
//         break
//     } else {
//         if (targetNumber > arr[middleItem]) {
//             start = middleItem + 1
//         } else {
//             end = middleItem - 1
//         }
//     }
// }
// if (!found) {
//     console.log("Target number does not exist") 
// } else {
//     console.log("Target number found: ", targetNumber)
// }

// =============================================================================
// =============================================================================
let fifth = "✅5. Bubble sort"
function bubbleSort(unsortedList) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < unsortedList.length - 1; i++) {
            if (unsortedList[i] > unsortedList[i + 1]) {
                [unsortedList[i], unsortedList[i + 1]] = [unsortedList[i + 1], unsortedList[i]]
                sorted = false
            }
        }
    }
    return unsortedList
}
let unsortedList = [5, 3, 8, 1, 2, 7, 4, 6]
let sorted_list = bubbleSort(unsortedList)
console.log(sorted_list)
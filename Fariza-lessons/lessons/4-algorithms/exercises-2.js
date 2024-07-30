let URL = "https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php"
// not-1, not-6, 9-bubble-sort, not-11



// ===========================================================
// ===========================================================
//ex2
function divisionNums(a, b) {
    if (b === 0) {
        return a
    }
    else {
        return divisionNums(b, a % b)
        // 30,  50
        // 50,  30
        // 30,  20
        // 20,  10
        // 10,  0
    }
}
let fff = divisionNums(30, 50)
// console.log(fff)
// ===========================================================
// ===========================================================
//ex4
var arrays = [1, 2, 3, 4, 5, 6]
// function sum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
function sumRecursively(arr) {
    let first = arr[0]
    if (arr.length == 1) {
        return first
    }
    return first + sumRecursively(arr.slice(1))
}
// 1 + sumRecursively([2, 3, 4, 5, 6])
// 1 + 2 + sumRecursively([3, 4, 5, 6])
// 1 + 2 + 3 + sumRecursively([4, 5, 6])
// 1 + 2 + 3 + 4 + sumRecursively([5, 6])
// 1 + 2 + 3 + 4 + 5 + sumRecursively([6])
// 1 + 2 + 3 + 4 + 5 + 6
let r = sumRecursively(arrays)
// console.log("Exercise 4: ", r)
// ===========================================================
// ===========================================================
// ex5
function getRange(x, y) {
    let next = x + 1
    if (next == y) {
        return []
    }
    return [next, ...getRange(next, y)]
}
// --------
// 2, 9   |
// --------
// [3, ...getRange(3, 9)]
// [3, 4, ...getRange(4, 9)]
// [3, 4, 5, ...getRange(5, 9)]
// [3, 4, 5, 6, ...getRange(6, 9)]
// [3, 4, 5, 6, 7, ...getRange(7, 9)]
// [3, 4, 5, 6, 7, 8, ...getRange(8, 9)]
// [3, 4, 5, 6, 7, 8]
r = getRange(2, 9)
// console.log("Exercise 5: ", r)
// ===========================================================
// ===========================================================
//ex7
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]
function findEvens(nums) {
    let even = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i])
        }
    }
    return even
}
let resOfEvens = findEvens(numbers1)
console.log(resOfEvens)
// ===========================================================
// ===========================================================
//ex9
let unsortedNums = [34, 7, 23, 32, 5, 62]
function sortArray(nums) {
    return nums.sort((a, b) => a - b)
}
let resOfSort = sortArray(unsortedNums)
console.log("Simple sort: ", resOfSort)

let bubbleSort = [5, 6, 4, 2, 1, 8]
function bubbleSortNums(arr) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length + 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr
}
let d = bubbleSortNums(bubbleSort)
console.log("Bubble sort: ", d)
// ===========================================================
// ===========================================================
//ex10
let str = "A man, a plan, a canal - Panama"
function isPolindrom(str) {
    // TODO:  decrease the amount of code for optimization
    let sp = str.replace(/[^A-Z0-9]/gi, "").toLowerCase().split("").reverse().join("")
    console.log('sp', sp)
    for (let i = 0; i < str.length; i++) {
        let st = str.replace(/[^A-Z0-9]/gi, "").toLowerCase().split("").join("")
        console.log('st', str)
        if (st[i] === sp[i]) {
            return true
        } else {
            return false
        }
    }
}
let resOfPolindrome = isPolindrom(str)
console.log(resOfPolindrome)
// ===========================================================
// ===========================================================


//ex
let binary = [0, 1, 2, 3, 4, 5, 6]
let targetNum = 5
let found = false
function binarySearch(arr, target) {
    let start = 0

    let end = arr.length
    while (end - start > 0) {
        let middleItem = Math.floor((start + end) / 2)
        if (arr[middleItem] === target) {
            found = true
            break
        } else {
            if (target > arr[middleItem]) {
                start = middleItem + 1
            } else {
                end = middleItem - 1
            }
        }
    } if (found) {
        console.log('target number exist', target)
    } else {
        console.log('Target number exist')
    }

}
binarySearch(binary, targetNum)


//ex
let binaryNum = [0, 1, 2, 3, 4, 5, 6]
let target1 = 4
let find = false
function findTargetNum(arr, target) {
    let start = 0
    let end = arr.length
    while (end - start > 0) {
        let middle = parseInt((end + start) / 2)
        if (target === arr[middle]) {
            find = true
            break
        } else {
            if (target > arr[middle]) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
    }
    if (find) {
        console.log('target number exist')
    } else {
        console.log('Target number exist', target)
    }
}
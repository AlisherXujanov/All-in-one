//ex1
let string = "Security"
let repeated = [2]
function repeatStringNumTimes(str, num) {
    let message = str.split("").join("")
    let r = []
    for (let i = 0; i < message.length; i++) {
        r.push(message[i].repeat(num))
    }
    console.log('message =>', r.join(""))
    console.log(`Letter of ${message} repeated ${num} times`)
}
// repeatStringNumTimes(string, repeated)
// =============================================================================
// =============================================================================
//ex2
function ordinalNumbers(colors, suffixes) {
    colors.filter((item, index) => {
        let current = index + 1
        let suffix = current < 4 ? suffixes[current] : suffixes[0]
        console.log(`${current + suffix} choice is ${item}`)
    })
    // "1st choice is Blue."
    // "2nd choice is Green."
    // "3rd choice is Red."
}
let colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']
let suffixes = ['th', 'st', 'nd', 'rd']
// ordinalNumbers(colors, suffixes)
// =============================================================================
// =============================================================================

// //ex3
let array01 = [NaN, 0, 15, false, -22, "", undefined, 47, null]
function findNumbers(arr) {
    let number = []
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] !== 0) {
            number.push(arr[i])
        }
        // let item = arr[i]
        // if (typeof(item) == 'number' ) {
        //     if (!isNaN(item) && item !== 0) {
        //         number.push(item)
        //     }
        // }
    }
    return number
}
let findNumber = findNumbers(array01)
// console.log('number', findNumber)

// =============================================================================
// =============================================================================
// //ex4
let x1 = [1, 2, 3]
let y1 = [100, 2, 1, 10]
function findDifference(x, y) {
    let arr1 = y.filter(item => !x.includes(item))
    let arr2 = x.filter(item => !y.includes(item))
    return [...arr1, ...arr2]
}
let dddd = findDifference(x1, y1)
// console.log('k', dddd)
// =============================================================================
// =============================================================================
// ex5
function countEachLetter(s) {
    let count = {}
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]]++
        } else {
            count[s[i]] = 1
        }
    }
    return count
}
let strin = "Helloooo"
let result1 = countEachLetter(strin)
// console.log(result1)
// =============================================================================
// =============================================================================
// //ex6
let sentence = "Hello world welcome to the universe"
function countVowelsAndConstants(s) {
    let vowels = ""
    let constants = ""
    for (let i = 0; i < s.length; i++) {
        let letter = s[i].toLowerCase()
        if ("aeiou".includes(letter)) {
            vowels += letter
        } else {
            constants += letter
        }
    }
    return { constants, vowels }
}
// console.log(countVowelsAndConstants(sentence))
// =============================================================================
// =============================================================================

let fruits5 = ['apple', 'banana', 'grapes', 'mango', 'orange', 'peach']
let result5 = fruits5.find((item, index, array) => {
    let lastLetter = item[item.length - 1].toLowerCase()
    if ("aioue".includes(lastLetter)) {
        return item
    }
})
// console.log("Found item: ", result5)
// =============================================================================
// =============================================================================

// //ex7
let triple = [1, 2, 3, 4]
function tripleNumbers(num) {
    return num.map(item => item * 3)
}
// console.log(tripleNumbers(triple))
// =============================================================================
// =============================================================================
// //ex8
let x3 = [1, 2, 3]
let y3 = [3, 4, 5]
function findSimilarNumber(x, y) {
    return x.filter(item => y.includes(item))
}
// console.log(findSimilarNumber(x3, y3))
// =============================================================================
// =============================================================================
// //ex9
let array02 = ["Cyber", "Security", "JavaSkript", "HTML", "CSS", "Web"]
let n1 = 5
function findLongerWords(arr, num) {
    return arr.filter(item => item.length > num)
}
// console.log(findLongerWords(array02, n1))
// =============================================================================
// =============================================================================
// //ex10
function findEvenNumbers(text) {
    let evens = []
    let odds = []
    text.split("").filter(item => {
        if (!isNaN(item) && item != " ") {
            if (parseInt(item) % 2 == 0) {
                evens.push(parseInt(item))
            } else {
                odds.push(parseInt(item))
            }
        }
    })
    return { evens, odds }
}
let text = "This is 2nd task for 3rd day of 30 days of JavaScript"
let r = findEvenNumbers(text)
// console.log(r)
// ===============================================================
// ===============================================================
// //ex11
function findEvens(num) {
    let evens = []
    String(num).split("").filter(item => {
        if (parseInt(item) % 2 === 0) {
            evens.push(parseInt(item))
        }
    })
    // return evens.reduce((acc, next) => acc + next)
    return evens
}
let number7 = 123456789
// console.log(findEvens(number7))
// ===============================================================
// ===============================================================

// //ex12
let string01 = "helol"
function similarLetterS(s) {
    return s.split("").filter((item, idx, arr) => {
        if (idx != arr.length) {
            if (item == arr[idx + 1]) {
                return item
            }
        }
    })
}
// console.log(similarLetterS(string01))
// ===============================================================
// ===============================================================
// ex13
function findTarget(nums, target) {
    // let obj = {}
    // for (let i = 0; i < nums.length; i++) {
    //     let difference = target - nums[i]
    //     if (obj[difference] != undefined) {
    //         return [i, obj[difference]]
    //     }
    //     obj[nums[i]] = i
    // }
    let pool = []
    nums.filter((num, idx) => {
        nums.filter((num2, idx2) => {
            if (num + num2 == target) {
                if (idx !== idx2 && !pool.includes(idx) && !pool.includes(idx2)) {
                    pool.push(idx, idx2)
                }
            }
        })
        // if (idx != arr.length-1) {
        //     arr.slice(idx + 1).filter((num2, idx2) => {
        //         if (num + num2 == target) {
        //             console.log("True")
        //             pool.push([idx, idx2+1])
        //         }
        //     })
        // }
    })
    return pool
}
let numbers04 = [1, 21, 122, 11, 43, 25, 123]
let target04 = 44
console.log(findTarget(numbers04, target04))
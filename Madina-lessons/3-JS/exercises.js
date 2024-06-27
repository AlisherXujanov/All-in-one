// 1 TASK
// let text = 'HelloWorld'
// const MIDDLE = parseInt(text.length / 2) //  3.5  =>  3
// let result = text.slice(0, MIDDLE)
// console.log(result)
// ========================================================
// 2 TASK
// let text = 'HelloWorld'
// const MIDDLE = parseInt(text.length / 2) //  3.5  =>  3
// let result = text.slice(MIDDLE)
// console.log(result)
// ========================================================

// 3 TASK
// let text = 'Atomotic station'
// text = text.replace(/a/gi, "e")
// console.log(text)

// ========================================================
// 4 TASK
// let a = 'Hello World!'
// a = a.replace(/world/gi, "Universe")
// console.log(a)

// ========================================================
// 5 TASK
// let clientText = "Hello"
// let neededLength = 20

// // *******Hello********
// let lackingLength = neededLength - clientText.length 
// // This would give you 15 if the word was "Hello" and neededLen was 20
// let firstHalf = parseInt(lackingLength / 2) // 7.5 -> 7
// let lastHalf = parseInt(lackingLength  / 2) // 7.5 -> 7

// let result = "*".repeat(firstHalf) + clientText + "*".repeat(lastHalf)

// if (neededLength < result.length) {
//     result += "*"
// }
// console.log(result)
// ========================================================
// 6 TASK
// let fullName = 'Vladimir Vladimirovich Putin'

// let firstSpace = fullName.indexOf(' ')    // 8
// let lastSpace = fullName.lastIndexOf(' ') // 20

// let firstName = fullName.slice(0, firstSpace)
// let middleName = fullName.slice(firstSpace + 1, lastSpace)
// let lastName = fullName.slice(lastSpace + 1)

// let result = firstName + " " + middleName[0] + ". " + lastName[0]
// console.log(result)
// ========================================================
// 7 TASK
// let text = "Madina"
// let n = 3

// const MIDDLE = parseInt(text.length / 2) 
// let leftHalf = text.slice(0, MIDDLE)
// let rightHalf = text.slice(MIDDLE)

// console.log(leftHalf.repeat(n) + rightHalf.repeat(n))
// ========================================================
// 8 TASK
// let string = "Hello world hhh HHH"
// let symbol = "$"
// OUTPUT: 
// "This is $es$ $ex$"
// "Hello world $$$ $$$"
// let firstLetter = string[0] // T
// string = string.toLowerCase()
// string = string.replaceAll(firstLetter.toLowerCase(), symbol)
// "$his is $es$ $ex$"

// let result = firstLetter + string.slice(1)
// console.log(result)
// ========================================================


// FUNCTION DECLARATIONS

// function test(counter=10, name="John") {
//     console.log(`Hello ${name} - ${counter}`)
// }

// for (let i=0; i<5; i++) {
//     test(i, i+i)
// }

// ====================================================
// function sum_up(a, b) {
//     return a + b
// }

// let result = sum_up(1, 2)
// console.log("Result: ", result) 

// result = sum_up(2, 4)
// console.log("Result: ", result) 
// --------------------------------------------------------
// DRY  ->  Don't Repeat Yourself 


// function blender(fruit) {
//     let vowels = 'aeiou'
//     let new_text = ''
//     // ["A", "p", "p", "l", "e"]
//     for (let letter of fruit.split("")) {
//         if (vowels.includes(letter.toLowerCase())) {
//             new_text += letter
//         }
//     }
//     return `${new_text} juice is ready!`
// }

// let result = blender("Apple")
// console.log(result)

// result = blender("Banana")
// console.log(result)

// result = blender("Orange")
// console.log(result)

// result = blender("Berry")
// console.log(result)

// ====================================================
// ====================================================

// let result = calc(9, 8, "/")
// console.log(result)
// result = calc(10, 2, "*")
// console.log(result)


// function calc(num1, num2, operator) {
//     if (operator == '+') {
//         return num1 + num2
//     } else if (operator == '-') {
//         return num1 - num2
//     } else if (operator == '*') {
//         return num1 * num2
//     } else if (operator == '/') {
//         return num1 / num2
//     } else {
//         return "Not a valid operator"
//     }
// }

// --------------------------------------------------------
// --------------------------------------------------------
// FUNCTION EXPRESSIONS
// let calc = function (num1, num2, operator) {
//     if (operator == '+') {
//         return num1 + num2
//     } else if (operator == '-') {
//         return num1 - num2
//     } else if (operator == '*') {
//         return num1 * num2
//     } else if (operator == '/') {
//         return num1 / num2
//     } else {
//         return "Not a valid operator"
//     }
// }

// let result = calc(9, 8, "/")
// console.log(result)
// result = calc(10, 2, "*")
// console.log(result)



// --------------------------------------------------------
// --------------------------------------------------------
// ARROW FUNCTIONS
// let calc = (num1, num2, operator) => {
//     if (operator == '+') {
//         return num1 + num2
//     } else if (operator == '-') {
//         return num1 - num2
//     } else if (operator == '*') {
//         return num1 * num2
//     } else if (operator == '/') {
//         return num1 / num2
//     } else {
//         return "Not a valid operator"
//     }
// }

// let result = calc(9, 8, "/")
// console.log(result)
// result = calc(10, 2, "*")
// console.log(result)

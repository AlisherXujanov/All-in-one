// let answer = prompt("Enter a number: ")
// TASK-1
// let a = ["Hello", "How", "Are", "You"]
// console.log(a[1])


//TASK-2
// let a = [4, 2, 3, 4 , 5]
// console.log(0)
// if (a % 2 ==0) {
//     console.log("It's even!")
// } else {
//     console.log("It's not even")
// }


//TASK-3
// let answer = prompt("Enter a number: ")
// let result = (answer + 1/2 + 1/4)
// console.log(result)


//TASK-4
// let string = ['a', 'b', 'c', 'd', 'e', 'g']
// prompt("Add any text you want!")
// console.log(string.splice(3, 1, prompt))
// console.log(string)


//TASK-5
// let a = [1, 2, 3, 4, 5, 6, 8]
// let text = a.pop() 
// console.log(a)  

// ===================================================================================
// ---------------------------- INTERMEDIATE -----------------------------------------
// TASK-1
// EN: Write logic, which finds the longest string in the array of strings.

// let arr = ['Hello', 'World', 'how', 'is', 'life', 'goingggg']
// let result = arr[0]
// for (let i=0; i<arr.length; i++) {
//     let word = arr[i]
//     if (word.length > result.length) {
//         result = word
//     }
// }
// console.log("Longest: ", result) // goingggg
// -----------------------------------------------------------
// TASK-2
// EN: Write logic, which finds the shortest string in the array of strings.

// let arr = ['Hello', 'World', 'how', 'is', 'life', 'goingggg']
// let result = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     let word = arr[i]
//     if (word.length < result.length) {
//         result = word
//     }
// }
// console.log("Shortest: ", result)
// -----------------------------------------------------------
// TASK-3
// EN: Write logic, which finds the biggest number in the array of numbers.

// let arr = [12, 1, 55, 2, 95, 44, 33]
// let result = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     let number = arr[i]
//     if (number > result) {
//         result = number
//     }
// }
// console.log("Biggest: ", result)
// -----------------------------------------------------------
// TASK-4
// EN: Write logic, which finds the smallest number in the array of numbers.


// -----------------------------------------------------------
// TASL-5
// EN: Create an array of numbers. Find the biggest number (for example, 12345),
// then sum each digit in the number (for example, 1 + 2 + 3 + 4 + 5 = 15).

let numbers = [123, 1412, 2352, 2222, 55135, 1232]
let result = numbers[0]  // 55135
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if (number > result) {
        result = number
    }
}
let sum = 0
for (let i = 0; i < String(result).length; i++) {
    let number = String(result).charAt(i)
    sum += parseInt(number)
}
console.log(sum)

// '5' + 5 => 55
// parseInt('5') + 5 => 10






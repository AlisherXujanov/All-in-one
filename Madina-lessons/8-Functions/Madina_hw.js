// TASK 1
// function minutes_to_seconds(minutes) {
//     return minutes * 60
// }
// result = minutes_to_seconds(15)
// console.log(result)



// TASK 2
// function return_data_type(arr) {
//     return typeof(arr[0])
// }
// let arr_of_numbers = ["23", 'hello', 90]
// result = return_data_type(arr_of_numbers)
// console.log(result)



// TASK 3
// function greatest_number(numbers) {
//     let num = numbers[0]
//     for (let item of numbers) {
//         if (item > num) {
//             num = item
//         }
//     }
//     return num
// }
// let arr_of_numbers = [23, 6, 1, 15, 66, 123, 12, 55, 32]
// let result = greatest_number(arr_of_numbers)
// console.log(result)



// TASK 4
// function reversed_words(word) {
//     let split_words = word.split('')
//     let reverce_words = split_words.reverse()
//     let join_words = reverce_words.join('')
//     console.log(join_words)

//     return join_words
// }
// let word = "Madina"
// let result = reversed_words(word)
// console.log(result)




// function reverse_number(num) {
//     let split_words = String(num).split('')
//     let reverce_words = split_words.reverse()
//     let join_words = reverce_words.join('')
//     return parseInt(join_words)
// }
// let number = 12345
// let result = reverse_number(number)
// console.log(result)
// ======================================================================
// function swap_first_last(word) {
//     // find first letter
//     let first_letter = word[0]

//     // find last letter
//     let last_letter = word[word.length -1]

//     // find middle letters
//     let middle_letters = word.slice(1, word.length-1)
//     return last_letter + middle_letters + first_letter
// }
// let word = "Hello world"
// let result = swap_first_last(word)
// console.log(result)
// ======================================================================
// Напишите функцию, которая принимает целое число и:
//   - если число кратно 3, возвращает "Fizz";
//   - если число кратно 5, возвращает "Buzz";
//   - если число кратно и 3 и 5, возвращает "FizzBuzz";
//   - если число не кратно ни 3, ни 5, возвращает само число.

// function fizzBuzz(n) {
//     if (n % 3 == 0 && n % 5 == 0) {
//         console.log("Fizzbuzz")
//     } else if (n % 3 == 0) {
//         console.log("Fizz")
//     } else if (n % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(n)
//     }
// }
// fizzBuzz(1)
// fizzBuzz(10)
// fizzBuzz(15)




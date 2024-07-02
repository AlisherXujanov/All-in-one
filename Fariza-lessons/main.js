// 1. string   =>   '', "", ``
// 2. number   =>   integer, float
// 3. boolean  =>   true, false 
// 4. array    =>   [val-1, val-2, ...]
// 5. object   =>   {key:value}
// 6. undefined  =>   
// 7. null       =>  
// 7. BigInt     =>  17 < digits
// -------------------------------------
// Negatives:  false, null, undefined, 0, "", NaN
// -------------------------------------
// let answer = prompt("Enter a number: ")
// !true  ==  false
// !false ==  true

// isNaN("qwe") // true
// isNaN("123") // false

// if (!isNaN(answer)) {
//     alert("This is number")
// } else {
//     alert("This is NOT number")
// }
// -------------------------------------
// let text = "Hello world"
// let idxOfO = text.lastIndexOf("o")

// text[idxOfO+2]
// text.charAt(idxOfO+2)
// -------------------------------------
// EN: Use any methods to center the word if the 
// length of the word is less than the expected one.

// UZ: Agar so'z uzunligi kiritilgan qiymatdan kichik 
// bo'lsa, so'zni markazga joylashtirish uchun istalgan metodlardan foydalaning.

// Например: 
// let text = "Hello"
// let expectedLength = 10
// // "**Hello***"

// function centerWord(text, expected_length, desired_char = "*") {
//     let result = ''
//     let lacking_length = expected_length - text.length
//     if (lacking_length > 0) {
//         // "...".padStart()
//         // "...".padEnd()
//         let half = parseInt(lacking_length / 2)
//         result = desired_char.repeat(half) + text + desired_char.repeat(half)
//         if (result.length < expected_length) {
//             result += desired_char
//         }
//     }
//     return result
// }
// -------------------------------------
// EN: You have a full name "Vladimir Vladimirovich Putin".
// Display "Putin V. V" in the console using slice() and replace()

// UZ: To'liq ismingiz "Vladimir Vladimirovich Putin".
// "Putin V. V" ko'rinishini slice() va replace() orqali konsolga chiqaring

let fullname = "Vladimir Vladimirovich Putin"

function replaceWord(str) {
    let firstSpace = str.indexOf(" ")
    let lastSpace = str.lastIndexOf(" ")

    let firstName = str.slice(0, firstSpace)
    let middleName = str.slice(firstSpace + 1, lastSpace)
    let lastName = str.slice(lastSpace + 1)

    return `${lastName} ${firstName[0]}. ${middleName[0]}`
}


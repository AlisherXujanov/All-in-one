// 1. Sum of digits   =>  Сумма цифр числа
let number = 22222
let n_as_str = String(number) // "22222"
let first = parseInt(n_as_str[0])   //   "2"  =>  2
let second = parseInt(n_as_str[1])  //   "2"  =>  2
let third = parseInt(n_as_str[2])   //   "2"  =>  2
let fourth = parseInt(n_as_str[3])  //   "2"  =>  2
let fifth = parseInt(n_as_str[4])   //   "2"  =>  2

let result = first + second + third + fourth + fifth
// console.log(result)
// =============================================================
// 2. Sum of letters in a sentence of 3 words and
//    their first and last letters
// RU: Сумма букв в предложении из 3 слов и их 
//    первые и последние буквы
let text = "Hello World JavaScript"
// HoWdJt
// 5 5 10 => 20
// ---------------------------------------------------------------------
// let firstSpace = text.indexOf(" ")
// let lastSpace = text.lastIndexOf(" ")

// let firstWord = text.slice(0, firstSpace)
// let middleWord = text.slice(firstSpace+1, lastSpace)
// let lastWord = text.slice(lastSpace+1)
// ========================
// OR
let [firstWord, middleWord, lastWord] = text.split(" ") // [..., ..., ...]
// ========================

let result2 = firstWord[0] + firstWord[firstWord.length - 1] + middleWord[0] + middleWord[middleWord.length - 1] + lastWord[0] + lastWord[lastWord.length - 1]
// console.log("Total: ", result2)
// console.log(firstWord.length + middleWord.length + lastWord.length)
// ---------------------------------------------------------------------
// =============================================================
// ---------------------------------------------------------------------
// 3. Is the middle letter of previous task vowel?
// RU: Является ли средняя буква предыдущего задания гласной?
// const MIDDLE = parseInt(result2.length / 2)
// let letter = result2[MIDDLE]
// let vowels = "aioue"

// if (vowels.includes(letter.toLowerCase())) {
//     console.log("Гласная буква")
// } else {
//     console.log("Согласная буква")
// }
// ---------------------------------------------------------------------
// =============================================================
// ---------------------------------------------------------------------
// 4. Is the first and last letters of previous task NOT vowel?
// RU: Являются ли первая и последняя буквы предыдущего задания НЕ гласными?
// let test = "HoWdJt"
// let vowels = "aioue"
//  H   --   t   =>  True
//  H   --   o   =>  False
// let firstLetter = test[0].toLowerCase()
// let lastLetter = test[test.length-1].toLowerCase()

// if (!vowels.includes(firstLetter) && !vowels.includes(lastLetter)) {
//     console.log("True")
// } else {
//     console.log("False")
// }
// ---------------------------------------------------------------------
// =============================================================
// ---------------------------------------------------------------------
// 5. You have a word that has a length max 5 letters
//    Count how many vowels in that word has
// RU: У вас есть слово, длиной не более 5 букв
//     Посчитайте, сколько гласных букв в этом слове
// let text2 = "Hello"
// let vowels = "aioue"

// let [l1, l2, l3, l4, l5] = text2.split("")

// let счётчик = 0
// if (vowels.includes(l1)) { счётчик++ }
// if (vowels.includes(l2)) { счётчик++ }
// if (vowels.includes(l3)) { счётчик++ }
// if (vowels.includes(l4)) { счётчик++ }
// if (vowels.includes(l5)) { счётчик++ }

// console.log("Total vowels: ", счётчик)
// ---------------------------------------------------------------------
// =====================================================================
// ---------------------------------------------------------------------
// 6. You have a word that has a length max 10 letters
//    Devide it into two parts and cound constants in right side
let text2 = "Hello world"
let vowels = "aioue"

const MIDDLE = parseInt(text2.length/2)
let last_part = text2.slice(MIDDLE) 

let [l1, l2, l3, l4, l5] = last_part.split("")

let счётчик = 0
if (!vowels.includes(l1)) { счётчик++ }
if (!vowels.includes(l2)) { счётчик++ }
if (!vowels.includes(l3)) { счётчик++ }
if (!vowels.includes(l4)) { счётчик++ }
if (!vowels.includes(l5)) { счётчик++ }

console.log("Total vowels: ", счётчик)

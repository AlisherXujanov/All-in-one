//* 1. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Write a JavaScript function to retrieve the value of a 
// given property from all elements in an array
// RU: Напишите функцию JavaScript для получения значения
// заданного свойства из всех элементов в массиве

// ============================================================================
//* 2. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=

// Create a function that takes a str and number then 
// repeats every character of the str number of times

// RU: Создайте функцию, которая принимает строку и число,
//     затем повторяет каждый символ строки number раз

// Security, 2 => SSeecckkuurriittyy
// Cyber, 3    => CCCyyybbbeeerrr
// ============================================================================
function repeat_letters_of_str(str, number) {
    let splitted_str = str.split("")  //  =>    [...,  ...]
    let result = ""
    splitted_str.filter(letter => {
        result += letter.repeat(number)
        // result = result + ...
    })
    console.log(result)
}
// ============================================================================

//* 3. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=

// Create a function that takes a str and find out all numbers from this str
// Result should tell how many evens and odds we have in str
// RU: Создайте функцию, которая принимает строку и находит все числа из этой строки
// Результат должен сообщать, сколько у нас четных и нечетных чисел в строке

// "This is 2nd task for 3rd day of 30 days of JavaScript"
// OUTPUT: "Evens 2, 0  ...  Odds: 3, 3"
// -------------
// "Это 2-я задача на 3-й день 30 дней JavaScript"
// OUTPUT: "Четные 2, 0  ...  Нечетные: 3, 3"

// FIND Numbers
// ============================================================================
function find_numbers_from_str(str) {
    let splitted_text = str.split(""); // ['h', 'e', ...]
    let numbers = []
    splitted_text.filter(element => {
        if (element != " ") {
            if (!isNaN(element)) {
                numbers.push(parseInt(element))
            }}
    })
    return numbers
}
// --------------------
// FIND EVENs  and ODDs
function find_evens_odds_from_str(str) {
    let numbers = find_numbers_from_str(str)

    let evens = []
    let odds = []
    numbers.filter(num => {
        if (num%2 == 0) { evens.push(num) }
        else { odds.push(num) }
    })
    console.log(`Evens are: ${evens.toString()} ...  Odds are: ${odds.toString()}`)
}
// ============================================================================


//* 4. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Create a function that takes a string and counts each letter count
// RU: Создать функцию, которая принимает строку и считает каждую букву

// "Helloooo"
// {
//     "h": 1,
//     "e": 1,
//     "l": 2,
//     "o": 4
// }
// ============================================================================
function count_letters(str) {
    let splitted_text = str.split("")
    let result = {}
    splitted_text.filter(letter => {
        letter = letter.toLowerCase()
        let keys = Object.keys(result)
        if (keys.includes(letter)) {
            result[letter] += 1
        } else {
            result[letter] = 1
        }
    })
    return result
}
// ============================================================================



//* 5. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Гласные буквы на английском языке  =>   a, e, i, o, u
// Create a function that takes a string and counts how many vowels and constants it has

// RU: Создать функцию, которая принимает строку и считает сколько  в ней гласных и согласных букв
function count_vowels(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let splitted_text = str.split("")
    let result = {
        vowels: 0,
        constants: 0
    }
    splitted_text.filter(letter => {
        letter = letter.toLowerCase()
        if (vowels.includes(letter)) {
            result.vowels += 1
        } else {
            result.constants += 1
        }
    })
    return result
}



//* 6. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Write a JS program to triple all numbers in a given list of integers using map()
// RU: Напишите программу чтобы утроить все числа в данном списке целых чисел с помощью map()
function triple(arr) { "..." }
triple([1, 2, 3, 4])  // => [3, 6, 9, 12]


//* 7. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Write a JS program to get the similarity between the two lists using filter()
// RU: Напишите программу чтобы получить сходство между двумя списками с помощью filter()
let x = [1, 2, 3]
let z = [3, 4, 5]
// OUTPUT: [3]

//* 8. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Write a JS program to find the list of words that are longer 
// than n from a given list of words using filter()
// RU: Напишите программу JS, чтобы найти список слов, которые длиннее
// чем n из заданного списка слов с помощью filter()

let words = ["Cyber", "Security", "JavaScript", "HTML", "CSS", "Web"]
function longer_than_n(arr, number) { "..." }
longer_than_n(words, 5)  // => ["Security", "JavaScript"]
longer_than_n(words, 3)  // => ["Cyber", "Security", "JavaScript", "HTML"]


//* 9. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Write a JS program to find the letter that is most common in a given string
// If all numbers are unique, return -1
// RU: Напишите программу JS, чтобы найти букву, которая чаще всего 
// встречается в данной строке. Если все числа уникальны, верните -1

function most_common_letter(str) {
    let splitted_text = str.split("")
    let result = {}
    splitted_text.filter(letter => {
        letter = letter.toLowerCase()
        if (result[letter]) {
            result[letter] += 1
        } else {
            result[letter] = 1
        }
    })
    // result  =>   {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    let max = 0
    let last_result = ''
    const result_keys = Object.keys(result)
    result_keys.filter(key => {
        if (result[key] > max) {
            max = result[key]
            last_result = `${key}: ${max} раз`
        }
    })
    console.log(last_result)
}
most_common_letter("Hello")  // => "l"


//* 10. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Write a JS program to find the number of even digits in a given integer
// RU: Напишите программу JS, чтобы найти количество четных цифр в заданном целом числе`

function even_digits(number) { "..." }
even_digits(123456789)  // => 4 (2, 4, 6, 8)

//* 11. =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
//* =//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=
// Create a function that takes a text and returns true if it has two or more 
// same-letters that are next to each other and false otherwise. 
// RU: Создайте функцию, которая принимает текст и возвращает true, 
// если в нем есть две или более одинаковые буквы, которые находятся 
// рядом друг с другом, а в противном случае false.

// "Hello" => true
// "Helo"  => false

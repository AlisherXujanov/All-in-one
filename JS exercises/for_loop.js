// BEGINNER LEVEL
// 1. Create a function that takes an array of integers and finds the sum of all even numbers.
// RU: Создайте функцию, которая принимает список целых чисел и находит сумму всех четных чисел.

// 2. Create a function that takes an array of integers and finds the largest number
// RU: Создайте функцию, которая принимает список целых чисел и находит самое большое число

// 3. Create a function that takes an array of integers and finds the smallest number
// RU: Создайте функцию, которая принимает список целых чисел и находит самое маленькое число

// 4. Create a function that takes a string of random letters and numbers and sums all the numbers.
// RU: Создайте функцию, которая принимает строку из случайных букв и цифр и суммирует все числа.

// 5.  Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
// RU: Напишите программу на JavaScript, которая перебирает целые числа от 1 до 100. Но для кратных троек печатает "Fizz" вместо числа и для кратных пяти печатает "Buzz". Для чисел, кратных как трем, так и пяти, печатает "FizzBuzz".


// ================================================================================
// INTERMEDIATE LEVEL

// Create a function that takes a string and counts the number of 
// vowels. Afterwards, devides them into two groups - upper and lower
// RU: Создайте функцию, которая принимает строку и считает количество
// гласных букв. После чего, возвращает объект с двумя полями 
// - гласные в верхнем регистре и гласные в нижнем регистре. 
// EX: count_vowels('MicroSOFT') => { Uppercases: [I, O], Lowercases: [i] }
function count_vowels(слово) {
    let гласные_м = 'aioue'
    let гласные_б = 'AUIOE'
    let все_гласные_верхный = []
    let все_гласные_нижний = []
    for (let буква of слово) { // [a,b,c], 'abc'
        if (гласные_м.includes(буква)) {
            все_гласные_нижний.push(буква)
        } else if (гласные_б.includes(буква)) {
            все_гласные_верхный.push(буква)
        }
    }
    console.log(`Uppercases: ${все_гласные_верхный}`)
    console.log(`Lowercases: ${все_гласные_нижний}`)
}
let sentence = "Adis is the best!"
count_vowels(sentence)
// ==============================================================================
// ==============================================================================
// ==============================================================================
// Create a function that takes a string and swaps the uppercase to lowercase and vice versa
// RU: Создайте функцию, которая принимает строку и меняет регистры букв на противоположные
let sentence2 = "Adis is the best!"
// let sentence2 = "adIs Is thE bEst!"
function swap_vowels(слово) {
    let гласные_м = 'aioue'
    let гласные_б = 'AUIOE'
    let result = ''
    
    for (let буква of слово) { 
        if (гласные_м.includes(буква)) {
            result += буква.toUpperCase()
        } else if (гласные_б.includes(буква)) {
            result += буква.toLowerCase()
        } else {
            result += буква
        }
    }
    console.log(result)
}
// ==============================================================================
// ==============================================================================
// Create a function that takes whole integer and finds only even digits from it and sums them
// RU: Создайте функцию, которая принимает целое число и находит только четные цифры и суммирует их


function sum_even(число) {
    let числа = String(число)
    let result = 0
    for (let цыфра of числа) {
        цыфра = parseInt(цыфра)
        if (цыфра%2 == 0) {
            result += цыфра
        }
    }
    console.log(result)
}
let number = 1234567890 // 2, 4, 6, 8, 0  =>  20
sum_even(number)
// 2, 4, 6, 8, 0  =>  20

// ==============================================================================
// ==============================================================================
// Create a function that gives us 10 random even numbers from 1 to 100
// RU: Создайте функцию, которая дает нам 10 случайных четных чисел от 1 до 100
function get_n_of_random_even_numbers(max) {
    let result = []
    let попытки = 0
    for (let i=0;  max != result.length;  i++) {
        попытки += 1
        let random_number = parseInt(Math.random() * 100) + 1
        if (random_number%2 == 1) {
            result.push(random_number)
        }
    }
    console.log(`Попыток: ${попытки}`)
    return result
}
let res = get_n_of_random_even_numbers(10)
console.log(res)
// ==============================================================================
// ==============================================================================
function devide_vowel_constants(sentence) {
    let vowels  = []
    let constants = []
    for (let letter of sentence) {
        let letter_l = letter.toLowerCase() 
        if ('aiuoe'.includes(letter_l)) {
            vowels.push(letter)
        } else {
            constants.push(letter)
        }
    }
    console.log(`Vowels: ${vowels}`)
    console.log(`Constants: ${constants}`)
}

// ==============================================================================
// ==============================================================================
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
// RU: Напишите программу на JavaScript для вычисления наибольшего общего делителя (НОД) двух положительных целых чисел.
function gcd(a, b) {
    if (b == 0) { return a }
    else if (a == 0) { return b }

    for (let i = a; i > 0; i--) {
        if (a%i == 0 && b%i == 0) {
            return i
        }
    }
}

// ==============================================================================
// ==============================================================================

// Create a function that takes an integer as row-number and prints a triangle like this pattern:
// RU: Создайте функцию, которая принимает целое число в качестве номера строки и печатает треугольник таким образом:
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

// ==============================================================================
// ==============================================================================

// Write a JavaScript program to sum 3 and 5 multiples under 100.
// RU: Напишите программу на JavaScript для суммирования кратных 3 и 5 чисел до 100.
function sum_of_multiples() {
    let result = 0
    for (let i=1; i<100; i++) {
        if (i%3 == 0 || i%5 == 0) {
            result += i
        }
    }
    console.log(result)
}


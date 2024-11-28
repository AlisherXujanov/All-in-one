// let string  = "text  =>  текст"
// DATA TYPES
// 1. String    =>   текст
// 2. Number    =>   числа
// 3. Bigint    =>   большие цыфры
// 4. Boolean   =>   true/false  (истина / ложь) (haqiqtan / yolg'on)
// 5. Undefined =>   не определён  (not defined) (aniqlanmagan)
// 6. Null      =>   пусто  (empty) (bo'sh)
// 7. Symbol    =>   символ
// 8. Object    =>   объект 
// -------------------------------------------------------
// "use strict"
// This is strict mode that helps to avoid mistakes
// -------------------------------------------------------
//* String  ==  "...."  ==  simple text  == обычний текст
// -------------------------------------------------------
//* "",   '',   ``   =>  these quotes are used 
//                      to create a string
// -------------------------------------------------------
//* Number  ==  1, 2, 3, ...
// -------------------------------------------------------
//* VARIABLES
// 1. var       =>  5%
// 2. let       =>  55%
// 3. const     =>  40%

// var   =>  global variable
//           can be updated anytime anywhere with/without
//           keyword var
//           can leave block

// let   =>  local variable
//           can NOT be updated anytime anywhere with
//           keyword let but only possible without 'let'
//           can NOT leave block

// const =>  local variable
//           can NOT be updated
//           can NOT leave block
// ----------------------------------------------
//* ---- SYNTAX ----
// keyword variable-name = value
// ключавое-слово имя-переменной = значение
// ----------------------------------------------
//* Variables inside of BLOCK OF CODE
// {
//     var test1 = "var test"
//     let test2 = "let test"
//     const TEST3 = "const TEST"
// }
// console.log(test1)
// console.log(test2)
// console.log(TEST3)
// ----------------------------------------------
//* CASES  =>  Стили надписи имён
// camelCase  =>  ...^..^.. =>  greatBigAndBeautifulCity
// snake_case =>  ..._..._. =>  great_big_and_beautiful_
// PascalCase =>  ^..^..^.. =>  GreatBigAndBeautifulCity
// kebab-case =>  ..-..-... =>  great-big-and-beautiful-

// ----------------------------------------------
// console.log(...) => shows a message inside of console
//                     показывает сообщение в консоли
//                     нужен для проверки кода
// ----------------------------------------------
// var test = "test"
// `... ${test} ... `

// let myName = 'Alisher'
// let myAge = 28
// console.log(`
//     My name is ${myName}. 
//     I am ${myAge} years old
// `)
// ----------------------------------------------
// let myName = "Alisher"
// let info = `This is my first class. My name is ${myName}`
// console.log(info)




let numbersLesson
// String + Number == String
// ex:   "Hello " + 5  => "Hello 5"
// -----------------------------------
// Number + Number == Number
// ex:    5 + 5  => 10
// -----------------------------------
// parseInt(...) =>  converts a string into a number
//              RU:  преобразует строку в целое число
// console.log("5" + 5)  // =>   "55"
// console.log(parseInt("5") + 5) //  =>   10
// -----------------------------------
// let x = 5
// let a = typeof(x)
// let b = typeof("x")
// console.log(a)
// console.log(b)
// -----------------------------------
// let x = 5
// console.log("10a" - x)  // -> NaN  -> Not a Number
// console.log("10" - x)  // -> 5
// Here JS tries to help by converting a string into number 
// and then subtracting x from it
// RU: Здесь JS пытается помочь, преобразовав строку в число
//     и затем вычитая x из него
// -----------------------------------
// let x = 5
// EVAL => is a calculator that takes a string and calculates it
// RU: EVAL => это калькулятор, который берет строку и вычисляет ее
// let calc = eval("(100 - 1 + 10 - 9) / 10")
// console.log(calc)
// -----------------------------------
// let x = 5
// console.log(x ** 3) // 125   =>  5 * 5 * 5
// console.log(2 ** 3) // 8     =>  2 * 2 * 2
// -----------------------------------
// let x = 5
// % => Modulus (Division Remainder)  =>  Остаток от деления
// console.log(x / 2) // 2.5
// console.log(x % 2) // 1
// console.log(11 % 5) // 1
// console.log(15 % 2) // 1
// console.log(18 % 7) // 4
// -----------------------------------
// let x = 5
// x ++   // first it shows the original value of x, then adds 1
// ++ x   // 
// console.log(x++) // 5
// console.log(x)  // 6
// =============
// console.log(++x) // 6
// console.log(x)  // 6
// -----------------------------------
// let x = 5
// x --   // first it shows the original value of x, then subtructs 1
// -- x   // 
// console.log(x--) // 5
// console.log(x)  // 4
// =============
// console.log(--x) // 4
// console.log(x)  // 4
// -----------------------------------
// let x = 5
// console.log(x == 5)  // true
// console.log(x == 10) // false
// -----------------------------------
// let x = 5
// console.log(x + 5)  // x == 10   (-, *, /, **, %) are the same
// console.log(x)      // x == 5  
// console.log(x += 5) // x == 10   (-=, *=, /=, **=, %=) are the same
// console.log(x)      // x == 10  
// -----------------------------------

//! integer  =>  целая цыфра  =>  int       =>  1
//! float    =>  не целая цыфра  => float   =>  1.100
//! +	Addition
//! -	Subtraction
//! *	Multiplication
//! /	Division
//! **	Exponentiation (ES2016) => степень
//! %	Modulus (Division Remainder)  =>  остаток
//! ++	Increment
//! --	Decrement
//! =	  x = y	       x = y
//! +=	  x += y	   x = x + y
//! -=	  x -= y	   x = x - y
//! *=	  x *= y	   x = x * y
//! /=	  x /= y	   x = x / y
//! %=	  x %= y	   x = x % y
//! **=	 x **= y	   x = x ** y


//!  ==	equal to (проверяет только значения)
//!  ===	equal value and equal type
//!  !=	not equal
//!  !==	not equal value or not equal type
//!  >	    greater than
//!  <	    less than
//!  >=	greater than or equal to
//!  <=	less than or equal to

//!  &&	and  =>  и      ...ham    
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false
//!  ||	or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
//!  !	not  =>  не ... ... emas
// ex:   1 != 1   =>  false
//       1 != 2   =>  true

//! typeof	    Returns the type of a variable
// ex:  typeof("John")   =>  string

//! The maximum number of decimals is 17

//! NaN       =>  is a 'not a number'
//! parseInt(Number) => converts a number into Number() object
// RU:                 преобразует строку в целое число
// ex:  parseInt("10")  =>  10
//      parseInt("qwe") =>  NaN - Not a Number

//! isNaN() => checks if the object inside paratneses 
//            appears to not be a Number
//            Returns a Boolean value that indicates whether 
//            a value is the reserved value NaN (not a number)
//          RU: возвращает логическое значение, указывающее,
//              является ли значение зарезервированным значением NaN 
//              (не число)
// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true


//! Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number


//! .toFixed()	    Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35

//!  .toPrecision()	Returns a number written with a specified length  
//  ex: 10.345.toPrecision(2)  =>  10



let StringMethods
//*  /.../            => regular expression (regExp)
//!               RU: регулярное выражение
//*  /.../i           => insensitive
//!               RU: нечувствительный
//*  /.../g           => global
//!               RU: глобальный
//*  string           => text
//!               RU: текст
//*  length           => the length of the string (text)
//!               RU: длина строки (текста)
//*  slice()          => the special part of the string
//!               RU: специальная часть строки
//*  replace()        => replace the string with a new string
//!               RU: заменить строку на новую строку
//*                   can take a special regExp as an parameter
//!               RU: может принимать специальное регулярное выражение
//*  toUpperCase()
//*  toLowerCase()
//*  concat()         => merges two strings 
//!                RU: объединяет две строки
//*  trim()           => removes whitespace in the beginning
//*                      and at the end of the string
//!                RU: удаляет пробелы в начале и в конце строки
//*  split()          => splits the text into many pieces
//!                RU: разделяет текст на множество частей
//*  padStart()       => if the resulting string does NOT reach a 
//*                      given length we can fill it with a sybmol 
//*                      at the start
//!                RU: если полученная строка НЕ достигает заданной
//!                   длины, мы можем заполнить ее символом в начале
//*  padEnd()         => if the resulting string does NOT reach a 
//*                      given length we can fill it with a sybmol 
//*                      at the end
//!                RU: если полученная строка НЕ достигает заданной
//!                     длины, мы можем заполнить ее символом в конце
//*  charAt()         => Returns the character at the specified index
//!                RU: Возвращает символ по указанному индексу
//*  indexOf()        => returns the index of the first
//*                         string or letter that it finds
//!                RU: возвращает индекс первой строки или буквы,
//!                      которую он находит
//*  lastIndexOf()    => returns the last index of the string
//!                RU: возвращает последний индекс строки
//*  search()         => returns the first expression that it finds
//!                RU: возвращает первое выражение, которое он находит
//*  match()          => returns the matched string (all 
//*                         strings if we use /.../gi) 
//!                RU: возвращает совпавшую строку (все строки, если
//!                      мы используем /.../gi)
//*  includes()       => returns true if the string is found
//!                RU: возвращает true, если строка найдена
//*  startsWith()     => checks if the string starts with ...
//!                RU: проверяет, начинается ли строка с ...
//*  endsWith()       => checks if the string ends with ...
//!                RU: проверяет, заканчивается ли строка на ...
//*  repeat()         => repeats the string number of times
//!                RU: повторяет строку определенное количество раз
//*  join()           => joins all elements of an array into a string
//!                RU: объединяет все элементы массива в строку




let lesson = "Alert, Prompt, Confirm & Условные операторы Else If"
// //* alert   => оповышение
// //* prompt  => asks a question or information from client
// //*            задаёт вопрос (диалог), можно сохранить как контейнер
// //* confirm => даёт выбор (да или нет)
// let answer = prompt("What is your name?")
// let choice = confirm("Are you sure?")
// alert("Your choice is: " + choice)
// let confirmation = confirm("Are you hungry?")
// ========================================================================
// ========================================================================
// ========================================================================

// let answer = prompt("What would you like?")
// if (answer == "Snikers") {
//     alert("Ok, Snikers is $2.00")
// } 
// else if (answer == "Coca Cola") {
//     alert("Ok, Coca Cola is $1.00")
// }
// else if (answer == "Fanta") {
//     alert("Ok, Fanta is $1.00")
// }
// else {
//     alert("Sorry, we don't have it")
// }
// let answer2 = prompt("Would you like smth else?")
// if (answer2 == "Snikers") {
//     alert("Ok, Snikers is $2.00")
// } 
// else if (answer2 == "Coca Cola") {
//     alert("Ok, Coca Cola is $1.00")
// }
// else if (answer2 == "Fanta") {
//     alert("Ok, Fanta is $1.00")
// }
// else {
//     alert("Sorry, we don't have it")
// }

// ========================================================================
// ========================================================================
// ========================================================================
// if (условиеПервое == true) {
//     // код прочитается если условиеПервое окажется правдой
// } 
// else if (условиеВторое == true) {
//     // ...
// } 
// else if (условиеТретье == true) {
//     // ...
// } 
// else {
//     // код прочитается если некакое условие не окажется правдой
// }
// ========================================================================
// ========================================================================
// ========================================================================

// let answer = prompt(`
//     Добро пожаловать в наш магазин! 
//     Что вы желаете?
// `);
// if (answer.includes("Snikers")) {
//     console.log("Окей, Snikers стоит $2.00");
// } 
// else if (answer.includes("Кола")) {
//     console.log("Окей, Кола стоит $1.00");
// } 
// else {
//     console.log("Такого товара нет в наличии");
// }

// ========================================================================
// ========================================================================
// ========================================================================

// const clientName = prompt("Enter your name please: ") 
// let order = prompt(`
//     What would you like to order?
//     Soups:
//         1. Куриный бульён из тараканов
//         2. Бобуиный бульён
//         3. Бульён из ...
//         4. Червяной лагман
//     Dishes:
//         5. Димлама из кракадила
//         6. Стейк из рук ...
//         7. Жаренный нос верблюда
//     Desert:
//         8. Тапки Мухаммада
//         9. Фирменное блюдо из Червей
//         10. Баранина ...
// `)
// if (order == "1" || order.includes("Куриный бульён из тараканов")) {
//     let trueOrFalse = confirm(`
//         Куриный бульён из тараканов закончился но есть из муровей. 
//         Принести?
//     `)
//     if (trueOrFalse == true) {
//         alert("Ваш Куриный бульён из муровей будет после 5 минут")
//     } else {
//         alert('Если не хотите то идите и ещте ....!')
//     }
// } 

// ========================================================================
// ========================================================================
// ========================================================================

// switch(условный_контейнер) {
//     case значение_контейнера:
//         //* код прочитается если значение_контейнера == условный_контейнер
//         break;  // прерывает выполнение кода
// }

// ========================================================================
// ========================================================================
// ========================================================================

// let date = new Date()
// switch (date.getDay()) { // день недели в индексе 0-6
//     case 0:  //  date.getDay() === 0
//         console.log("Sunday")
//         break;
//     case 1: //  date.getDay() === 1
//         console.log("Monday")
//         break;
//     case 2: //  date.getDay() === 2
//         console.log("Tuesday")
//         break;
//     case 5: //  date.getDay() === 5
//         console.log("Friday")
//         break;
//     default: //  else
//         console.log("Default situation")
// }


// ========================================================================
// ========================================================================
// ========================================================================

// let myName = "Alisher"
// switch (myName) {
//     case "Aziz":
//         console.log("Aziz")
//         break;
//     case "Alisher":
//         console.log("Hello Boss!")
//     default:
//         console.log("Default situation")
// }





let dateLesson
//! UTC  => Coordinated Universal Time
//! GMT  => Greenwich Mean Time Zone
//! UNIX => January 1970
//! offset => UTC +- offset  (UZB => UTC+5)
// ---------------------------------------------
// GETTERS  -> are used to get a part of the total time
// date.get...()
// ...getDay(), ...getHour(), ...getMinutes() ...

// ---------------------------------------------
// SETTERS  -> are used to create special time
// SETTERS  =>  new Date(2022, 12, ....)
// ==============
// With one parameter => milliseconds (13 digits) for displaying date-time
// ==============
// let date = new Date(2024, 10, 20, 9, 0, 30)
// console.log(date)
// ---------------------------------------------
// date.getTimezoneOffset() / -60  =>  gets offset from current TZ
//                                     defaults to -minutes 
// ---------------------------------------------
// let date = new Date()
// console.log(date.toUTCString())
// console.log(date.toISOString())
//! date.toUTCString()  => is used to convert date to UTC
//! date.toISOString()  => is used for JSON.stringify 
// ---------------------------------------------
//! .toLocaleString("en-US")
//* https://www.w3schools.com/jsref/jsref_tolocalestring.asp
// Persian => "fa-IR"  => ۱۴۰۱/۱۱/۱۵،‏ ۱۷:۱۲:۴۲
// Korea  =>  "ko-KR"  =>  2023. 2. 3. 오전 11:45:30
// Arabic =>  "ar-EG"  =>  /٢‏/٢٠٢٣ ١١:٤٧:٢٢ ص
//! console.log(JSON.stringify({ date }))  =>  for interacting with Backend
// let date = new Date()
// console.log(date.toLocaleString("de-CH"))






let FunctionExamples
// Palindrome Number
// function isPolindrome(num) {
//     let reversedNumber = num).split("").reverse().join("")
//     if (num == reversedNumber) { return true; }
//     else { return false }
// }
// if polindrome => true
// else => false


// --------------------------------------------------------
// deletes given number from the end of array
// function deleteNumber(arr, num) {
//     let index = arr.lastIndexOf(num)
//     arr.splice(index, 1)
//     console.log(`
//         ${num} in the index: ${index} has been deleted!
//         The array is now: ${arr}
//     `)
// }

//  --------------------------------------------------------
//  Given an array of integers nums and an integer target, 
//     return indices of the two numbers such that they add 
//     up to target.
//     Sample array : [1,2,3,4,5]
//     Expected Output : 2,4
// function getTargets(arr, target) {
//     for (let i=0;   i<arr.length;   i++) {
//         let currentElement = arr[i]
//         if (currentElement == target) continue
//         else {
//             for (let item of arr) {
//                 if (currentElement + item == target) {
//                     return [arr.indexOf(currentElement), arr.indexOf(item)]
//                     return [currentElement, item]
//                 } else {
//                     continue
//                 }
//             }
//         }
//     }
// }

//  --------------------------------------------------------
// get second biggest and second lowest numbers from array

// function getBiggestAndLowest(arr) {
//     let  max=arr[0], min=arr[0]
//     for (let i of arr) {
//         if (i > max) { max = i }
//         if (i < min) { min = i }
//     }
//     return [min, max]
// }

// function getFormerBiggestSmallestVals(arr) {
//     let [max, min] = getBiggestAndLowest(arr)

//     arr.splice(arr.indexOf(max), 1)
//     arr.splice(arr.indexOf(min), 1)

//     return getBiggestAndLowest(arr)
// }




let  ArrayLesson = "Простые методы массивов"
// let arr = [1, 2, 'Test', 3, 4, 5, 6, 7, 8]
// arr[2]  => 'Test'

// Array  =>  лист
// [], {}  =>  object types  =>  array, object
// Array.isArray(arrayName) => checks if the array is 
//                          truly an instance of Array
// ===============================================
// .push(...)  => adds a new element to the end 
//                RU: добавляет элемент в конец массива
//              ---------------------------
// console.log("Length: " + arr.length)
// let new_length = arr.push(9)
// console.log("Length: " + new_length)
// console.log(arr)
// ===============================================
// .unshift(...) => adds a new element to the beginning
//                 RU: добавляет элемент в начало массива  
//              ---------------------------
// console.log("Length: " + arr.length)
// let new_length = arr.unshift(9)
// console.log("Length: " + new_length)
// console.log(arr)
// ===============================================
// .pop() => removes an element from the end
//           RU: удаляет элемент с конца массива
//          --------------------------------------
// console.log("Original arr before: " + arr)
// let deleted_item = arr.pop()
// console.log("Original arr after: " + arr)
// console.log("deleted_item: " + deleted_item)
// ===============================================
// .shift() => removes an element from the beginning
//             RU: удаляет элемент с начала массива
//          --------------------------------------
// console.log("Original arr before: " + arr)
// let deleted_item = arr.shift()
// console.log("Original arr after: " + arr)
// console.log("deleted_item: " + deleted_item)

// ===============================================
// .splice(...) => takes 3 parameters
//                 1st => where to start
//                 2nd => how many items to delete
//                 3rd => how many items to add
//         RU: принимает 3 параметра
//                 1й => с какого индекса начать
//                 2й => сколько элементов удалить
//                 3й => сколько элементов добавить
// const middle_idx = parseInt(arr.length / 2)
// let x = [10, 11, 12]

// arr.splice((middle_idx-3)**0,  2, "...['Jamol']")
// console.log(arr)

// ===============================================
// .concat() => merges two lists (Arrays)
//              RU: объединяет два массива
// let z = [1, 2, 3]
// let x = [4, 5, 6]
// y = z.concat(x)   // [1, 2, 3, 4, 5, 6]
// y2 = x.concat(z)  // [4, 5, 6, 1, 2, 3]
// let y  = [...z, ...x]
// let y2 = [...x, ...z]

// ===============================================
// ...  =>  spread operator adds only elements from 
//          the list into the list 
//          RU: распыляет элементы массива в массив
//          ex:
//              let x=[1,2]; 
//              let y=[3,4];
//              let z=[...x, ...z]
//              console.log(z)  // [1,2,3,4]
// ===============================================
// [].toString() => returns an Array as a string
//               RU: возвращает массив как строку
// ===============================================
// .indexOf(...)  => shows index of the element of item
// ===============================================
// .includes(...) => checks if the item is in the list or not
// ===============================================
// Sorting
//      .sort()     => sorts the list
//      .reverse()  => reverses the list

// let numbers = [23, 1, 25, 22, 12, 9, 2, 87, 6]
// let words = ["w", "d", "c", "a", "z", "y", "x"]
// // --------------------------------------------
// let sorted_ns = numbers.sort((a, b) => a - b)
// let sorted_ws = words.sort()
// // --------------------------------------------
// console.log("sorted_ns: " + sorted_ns)
// console.log("sorted_ws: " + sorted_ws)
// ===============================================
// STRING METHOD
//      .join("") => converts an array into a string
// [1, 2, 3].join("")  // "123"




let  Array2 = "Сложные методы массивов"
// SYNTAX -------------
// [].method-name((value, index) => {})

// (value, index) => {}  => is a helper function that
// is used to create a condition for checks
// RU:                   => это вспомогательная функция,
// которая используется для создания условия для проверки
// ================================================
// MAP ------------- 
// creates a new array by transforming 
// all items inside original array
// RU: создает новый массив, преобразовывая
// все элементы внутри исходного массива
// ------------- 
// let new_names = arr.map((value, index) => {
//     let first_letter = value.charAt(0)
//     return first_letter + value
// })
// console.log("new_names: ", new_names)

// ================================================
// ================================================
// FILTER -------------
// creates a new array by filtering out
// all items that don't match the condition
// RU: создает новый массив, отфильтровывая
// все элементы, которые не соответствуют условию
// -------------
// let wanted_car = cars.filter((value, index) => {
//     if (value.brand == 'Audi') {
//         return value
//     }
//     else {
//         console.log(index)
//     }
// })
// console.log("wanted_cars: ", wanted_car)
// ================================================
// ================================================
// FIND -------------
// finds the FIRST item that matches the condition
// RU: находит ПЕРВЫЙ элемент, который соответствует условию
// ------------------
// let wanted_name = arr.find((value, index) => {
//     if (value == 'Jomol') {
//         return value
//     }
//     else {
//         console.log(index)
//     }
// })
// console.log("wanted_name: ", wanted_name)
// ================================================
// ================================================
// REDUCE -------------
// reduces the array to a single value
// RU: сводит массив к одному значению
// ------------------
// let numbers = [12, 1, 4, 55, 122, 5, 9, 8]

// // 
// // (acc, next) 
// let max = numbers.reduce((acc, next) => {
//     if (acc > next) {
//         return acc
//     } else {
//         return next
//     }
// })
// ================================================
// ================================================
// arr.find(item => item.age === 20) -> finds only one element
// arr.filter(item => item.age === 20) -> creates an array from items
// arr.map(item => item[0]) -> returns a new array
// let cars = [
//     {brand:"Audi",  цена:82011,  color:"red"},
//     {brand:"Mazda",  цена:42007,  color:"black"},
//     {brand:"Nissan",  цена:32017,  color:"blue"},
//     {brand:"Audi",  цена:22020,  color:"white"},
//     {brand:"Audi",  цена:52021,  color:"blue"},
//     {brand:"Nissan",  цена:52002,  color:"blue"},
//     {brand:"Audi",  цена:12018,  color:"black"},
// ]
// let ответПоиска = cars.map(car => car.цена )
// let x = ответПоиска.sort((a,b) => a-b)
// console.log("$"+x[ответПоиска.length - 1])
// console.log("$"+x[ответПоиска.length - 2])






let FuntionLesson = ""
// DRY  =>  Dont Repeat Yourself
// -----------------------------
// Function MUST do only one thing at a time
// And do it well
// -----------------------------
// function showMyName(client_name) {
//     console.log("My name is: " + client_name)
// }
// showMyName("Alisher")
// showMyName("Sardor")
// showMyName("Fayruz")
// -----------------------------
// function blender(fruit="Orange") {
//     return fruit + " juice is ready!"
// }
// let glass1 = blender("Apple")
// let glass2 = blender()

// console.log(glass1)
// console.log(glass2)
// -----------------------------
// FUNCTION DECLARATION
// console.log(blender("Apple"))
// function blender(fruit="Orange") {
//     return fruit + " juice is ready!"
// }
// ------------------------------------
// FUNCTION EXPRESSION
// console.log(blender("Apple"))
// let blender = function(fruit="Orange") {
//     return fruit + " juice is ready!"
// }
// ------------------------------------
// FUNCTION EXPRESSION (ARROW FUNCTION)
// let blender = (fruit="Orange") => fruit + " juice is ready!"
// ------------------------------------


// function blender(meva="Olma") {
//     return `${meva}li sok tayyor!`
// }
// let blender = function(meva="Olma") {
//     return `${meva}li sok tayyor!`
// }
// let blender = (meva="Olma") => `${meva}li sok tayyor!`

// let bakal = blender("Banan")
// let bakal2 = blender()
// console.log(bakal)
// console.log(bakal2)
// -----------------------------------------------------------
// Function declarations => allow us to call them before 
//                          initialization (before creation)
//                      RU: позволяют вызывать их до инициализации
//                          (до создания)
//                      UZ: ularni yaratishdan oldin chaqirishga ruxsat beradi

// -----------------------------------------------------------

// When we create a function, we should be careful about choosing its
// name. So, the function would explain itself what it does
// showModal(),  calculateSum(),  createTag(),  addSmth() ...
// RU: При создании функции мы должны быть осторожны при выборе ее
//     имени. Так, функция сама должна объяснять, что она делает
//     показатьМодель(),  рассчитатьСумму(),  создатьТег(),  добавитьЧтото() ...
// UZ: Funksiya yaratganda, uning nomini tanlashda ehtiyot bo'lishimiz kerak.
//    Shunday qilib, funksiya o'zini qiladigan ishni tushunishini aytishi kerak
//    modalniKo'rsat(),  summaniHisobla(),  tegYarat(),  qo'shish() ...
// -----------------------------------------------------------

// return (Возврат) => is used for returning the value of the function outside
//                 RU: используется для возвращения значения функции вне
// -----------------------------------------------------------

// function makeDouble(number) {
//     return number * 2
// }
// const makeDouble = function(number) {
//     return number * 2
// }
// const makeDouble = (number) => number * 2
// -----------------------------------------------------------
// function blender(fruit="", temperature="Cold") {
//     if (!fruit || fruit.length == 0) { fruit = "Apple"}
//     return `${temperature} ${fruit} juice is ready!`
// }
// let juice1 = blender("", 'Hot')
// console.log(juice1)
// ----------------------------------------------------------
// 1. create a function that asks for three parameters
// RU: создать функцию, которая запрашивает три параметра
// UZ: uchta parametr so'raydigan funksiya yarating
//      1-number  2-number  3-equation (+, -, *, /)

// 2. the function should return the result of the equation of 
//    first and second number
// RU: функция должна возвращать результат уравнения
//    первого и второго числа
// UZ: funksiya tenglamani natijasini qaytarishi kerak
//    birinchi va ikkinchi sonning

// 3. the function then should check if the result of equation
//    is "odd or even"
// RU: функция должна проверять, является ли результат уравнения
//    "нечетным или четным"
// UZ: funksiya tenglamani natijasini tekis yoki juft ekanligini 
// tekshirishi kerak

// 4. Check the 3rd parameter. If it is number or not one of "-, +, *, /" 
//    then stop the function and return "Please enter a valid equation"
// RU: Проверьте 3-й параметр. Если это число или не один из "-, +, *, /"
//     тогда остановите функцию и верните "Пожалуйста, введите правильное уравнение"
// UZ: Uchinchisi parametrni tekshiring. Agar bu raqam yoki "-, +, *, /"
//     dan biri bo'lmasa, funksiyani to'xtating va "Iltimos, to'g'ri tenglamani kiriting" deb qaytarish kerak

// 5. Check 1st and 2nd parameters. If they are not numbers then 
//    stop the function and return "Please enter a valid number"
// RU: Проверьте 1-й и 2-й параметры. Если они не числа, то
//     остановите функцию и верните "Пожалуйста, введите правильное число"
// UZ: Birinchi va ikkinchi parametrlarni tekshiring. Agar ular raqam bo'lmasa,
//     funksiyani to'xtating va "Iltimos, to'g'ri raqam kiriting" deb qaytarish kerak


// sample output:   
//          2 + 2 = 4   is even
//          3 * 2 = 6   is even
//          3 * 2 = 1.5   is odd
//          'qwe' * 2 = Please enter a valid number
//          3 * 'qwe' = Please enter a valid number
//          3 "w" 2 = Please enter a valid equation
// function test(par1, par2, par3) {
//     let requiredSymbols = ['+', '-', '*', '/']

//     if (!requiredSymbols.includes(par3)) {
//         console.error("Пожалуйста, введите правильное уравнение")
//         return
//     } else if (typeof(par1) != 'number'  ||  typeof(par2) != 'number') {
//         console.error("Пожалуйста, введите правильное число")
//         return
//     }
//     let oddEven = ''
//     let result = 0
//     switch (par3) {
//         case "+":
//             result = par1+par2;
//             break;
//         case "-":
//             result = par1-par2;
//             break;
//         case "*":
//             result = par1*par2;
//             break;
//         case "/":
//             result = par1/par2;
//             break;
//     }

//     if (result%2 == 0) {oddEven = 'even'} 
//     else { oddEven = 'odd' }
//     console.log(`The result ${result} is => ${oddEven}`)
// }


// ============================================================
// Write a function that takes a string and changes first and last positions
// RU: Напишите функцию, которая принимает строку и меняет первую и последнюю позиции букв

function firstLast(str) {
    // 1. split string into array
    let strArr = str.split('') // ['a', 'b', 'c', 'd', 'e']
    // --------------------------------
    // 2. get first and last element
    let first = strArr.shift() // 'a'
    let last = strArr.pop()    // 'e'
    // --------------------------------
    // 3. swap first and last element
    strArr.unshift(last)     // ['e', 'b', 'c', 'd']
    strArr.push(first)       // ['e', 'b', 'c', 'd', 'a']
    // --------------------------------
    // 4. return the result by joining the array
    return strArr.join('')   // 'ebcda'
}


// function
//  swapFirstLast(str) {
//     // 'abcde'   =>   e + "bcd" + a
//     let first = str[0] 
//     let last = str[str.length - 1] 
//     let middle = str.slice(1, str.length - 1)
//     return last + middle + first
// }


// function firstUppercase(str) {
//     // 1. split string into array of words
//     let splittedStr = str.split(" ")  // [..., ..., ...]
    
//     // ----------------------------------
//     // 2. map over array of words
//     //    and capitalize first letter of each word
//     let upperFirstList =  splittedStr.map(word => 
//         word[0].toUpperCase() + word.slice(1)
//     ) // [^..., ^..., ^...]

//     // ----------------------------------
//     // 3. join array of words into string
//     return upperFirstList.join(' ') // "^... ^... ^..."
// }




let ErrorHandling
// "use strict"
// ________________ undefined & null _____________________
// undefined -> не определено
// null      -> пусто

// -----------------------------------------------------
// if (test()) {}  // "", 0, false, null, undefined, NaN
// else {}
// -----------------------------------------------------
// let x = Number(String(parseInt("24") + 5))
// console.log(typeof("29")===typeof(x)  ?  24 : "Sardor")

// _______________  HANDLING EMPTY VALUES  _______________
//   ... ? ... : ...  ->  Ternary Operator -> Тенарный оператор
//   is used when the first value is true
// --------------------------------------------
//   || (OR) -> is used when the first value is true
//          undefined, null, 0, ''
// --------------------------------------------
//   ?? (Nullish Coalescing) -> null или undefined
//          is used when the first value is null or undefined

// --------------------------------------------
// _________________ Error types __________________________
// 1. Syntax Error      =>  Синтаксическая ошибка
//                      EX:  "...
// 2. Reference Error   =>  Ошибка ссылки
//                      EX:  console.log(a) 
// 3. Type Error        =>  Ошибка типа
//                      EX:  let a = 1
//                           console.log(a()) 
// ...


// __________________ Error Status Codes __________________
// 400 - Bad Request            => Неверный запрос
// 401 - Unauthorized           => Не авторизован
// 403 - Forbidden              => Запрещено
// 404 - Not Found              => Не найдено
// 500 - Internal Server Error  => Внутренняя ошибка сервера
// 503 - Service Unavailable    => Сервис недоступен

// ___________________ try & catch _________________________
// It is used to handle errors
// RU: Используется для обработки ошибок

// try () {
    // code
// } catch (error) {
    // code
// }
// console.log("Started...")
// try {
//     console.log(a-)  // Syntax Error is not handled
// }
// catch (error) {
//     console.warn("Error happedend")
// }
// console.log("Continue...")


// ____________________ throw ________________________________
// throw  => throw new Error('Message')

// Is used to throw an error when something goes wrong
// we use it in order to create our own rules for our code
//          ------------------
// RU: Мы используем throw, чтобы создать свои 
// собственные правила для нашего кода
// function test(par) {
//     if (typeof(par) != 'number') {
//         let error = new Error('Вы ввели не число')
//         throw error
//     }
//     return par+10
// }
// console.log(test("10"))

// 




let exercise = "Try & catch"
// ask 5 numbers from client and ask them to separate it by comma
// RU: запросить 5 чисел у пользователя и попросить его их разделить запятой
// -----------------------------------------------------------------------

// After, take them and put them into function which is created to sum them 
// all together
// RU: После этого, взять их и поместить в функцию, которая 
// создана для суммирования их всех вместе

// -----------------------------------------------------------------------
// Then, create this function and use try/catch to catch any errors
// RU: Затем создайте эту функцию и используйте try / catch для
// перехватывать любые ошибки

// -----------------------------------------------------------------------
// Create and throw your own error if any of the numbers are negative
// RU: Создайте и сгенерируйте собственную ошибку, 
// если какое-либо из чисел отрицательное
// -----------------------------------------------------------------------

// let numbers = prompt("Напишите числа и разделите их запятой: ")
// let arr = numbers.split(",")  //  =>  ["1", "2", "3", "4", "5"]
// console.log(sumNumber(arr)) // => 15
// function sumNumber(arr) {
//     let result = 0 
//     let error = new Error("Число отрицательное")
//     try {
//         arr.filter(num => {
//             if (num < 0) throw error
//             result += parseInt(num)
//         })
//     } 
//     catch (error) {
//         result = 'Числы не были верны'
//         console.error(error)
//     }
//     return result
// }




let ObjectLessons
// let numbers = [1, 2, 3]
// index 0   ===  1
// index 1   ===  2
// index 2   ===  3

// numbers[1]   =>   2
// ========================================================
// let numbers_as_object = {first:11, "second":22, "...":"..." }
// KEYS ARE ALWAYS STRINGS   =>  КЛЮЧИ ВСЕГДА СТРОКИ

// key  first  = 1
// key  second = 2
// key  ...    = ...

// numbers_as_object["second"]   =>  22
// numbers_as_object.second      =>  22
// console.log("numbers_as_object['second']: ", numbers_as_object["second"])
// console.log("numbers_as_object.second: ", numbers_as_object.second)
// ========================================================

// Objects   =>   {}
// Arrays    =>   []

// OBJECT SYNTAX    =>   СИНТАКСИС ОБЕКТОВ
// {key: 'value'}   =>   {ключ: "значние"}

// Создаём обект "стол" в двух вариантах
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// console.log(table_arr[0])
// console.log(table_obj.color)

// console.log(table_arr)
// console.table(table_obj)


// ========================================================
// ----UPDATING--------------------------------------------
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// table_arr[0] = "blue"
// table_obj.color = "blue"   //  === table_obj["color"]

// if referring field exists then it gets updated
// BUT, if not, then it gets created
// RU: если поле существует, то оно обновляется
// НО, если нет, то оно создаётся

// ----DELETION-------------------------------------
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// console.log("До ",table_arr)
// delete table_arr
// console.log("После ",table_arr)

// console.log("До ",table_obj)
// delete table_obj.size
// console.log("После ",table_obj)


// ----ADDITION-------------------------------------
// let table_arr = ['red', 'big', 'for kitchen']
// let table_obj = {color:"red", size:"big", location:"for kitchen"}

// table_arr[3] = "new field"
// table_obj.new_field = "new field"   //  === table_obj["new_field"]

// if referring field does NOT exist
// then it gets added as a new field
// RU: если поле не существует, 
// то оно добавляется как новое поле

// ----MERGING-------------------------------------
// creates a new object from two objects
// создаёт новый обект из двух обектов
// let client = {
//     name: "name 1",
//     surname: "surname 1",
//     age: 20,
// }
// let client_address = {
//     city: "city 1",
//     street: "street 1",
//     house: 1,
// }
// let a = {...client, ...client_address}
// console.table(a)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
//* TASK TO GET INFO FROM CLIENT AND CREATE A TABLE
// RU: ЗАДАЧА ПОЛУЧИТЬ ИНФОРМАЦИЮ ОТ КЛИЕНТА И СОЗДАТЬ ТАБЛИЦУ

// let client_name = prompt("Enter your name: ")
// let client_surname = prompt("Enter your surname: ")
// let client_age = prompt("Enter your age: ")

// let client = {
//     name: client_name,
//     "surname": client_surname,
//     "age": client_age
// }
// console.table(client)
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// let client = {
//     name: "Name 1",
//     surname: "Surname 1",
//     age: 20
// }
// let x = ["a", "b", "c"]
// x.length - 1

// Array.isArray([])  => bool
// Object.keys(client)   // =>  ["name", "surname", "age"]  
// Object.values(client)  //  =>  ["Name 1", "Surname 1", 20]
// Object.entries(client)  // =>  [["name", "Name 1"], ["surname", "Surname 1"], ["age", 20]]

// Object.entries(...)  => gets every entry from 
//                         an object and makes a new Array
//              берёт каждый заход от обекта и создаёт 
//              маленькие листы от них

// Object.keys(...)    => gets every key from object
//                     получает каждый ключ от обекта

// Object.values(...)  => gets every value from object
//                     получает каждый значение от обекта

// let person = {
//     name: "name 1",
//     surname: "surname 1",
//     age: 20,
//     address: "address 1"
// }

// let x = Object.keys(person) // => ["name", "surname", "age", "address"]
// let v = Object.values(person) // => ["name 1", "surname 1", 20, "address 1"]
// let e = Object.entries(person) // => [["name", "name 1"], ["surname", "surname 1"], ["age", 20], ["address", "address 1"]]

// --------------------------------------------------------
// --FUNCTIONs inside Objcets------------------------------
// --------------------------------------------------------

// function fn_name(parameter) {
//    block of code
// }

// DRY  =>  Don't Repeat Yourself 

// let person = {
//     name: "Warren",
//     surname: "Buffet",
//     age: 80,
//     fullname: function() {
//         return this.name + " " + this.surname + ". And his age is " + this.age
//     }
// }
// console.log(person.fullname())

// -------------------------------------------------------------------
// ------CREATING OBJECTS---------------------------------------------
// -------------------------------------------------------------------

// function Person(cName, surname, age) {
//     this.name = cName
//     this.surname = surname
//     this.age = age
// }
// let p1 = new Person("name 1", "surname 1", 20)
// let p2 = new Person("name 2", "surname 2", 30)
// console.table(p1)
// console.table(p2)




const forLoops = ''
// function addUp(arr) {
//     let sum = 0
//     for (let i=0;  i<arr.length;  i++) {
//         sum  =  sum + arr[i]
//     }
//     return sum
// }
// console.log(addUp([1, 2, 3, 4, 5, 10]))

// for ("выражение 1"; "выражение 2"; "выражение 3") {
//     "код для цыкла"
// }
// выражение 1  =>  (выборочно)  => обычно здесь создаётся контейнер
// выражение 2  =>  условия для цыкла который каждый раз будет проверяться 
// выражение 3  =>  (выборочно)  => понадобиться для контрола цыкла 
// function test(message, number) {
//     for (let i=1;   i<=number;  i++) {
//         console.log(`${message}: => ` + i)
//     }
// }
// test("Hello", 10)
// ex:  for (let i=0; i<10; i++) {
    //      console.log(array[i])
    //  }
// --------------------------------------------------------
// for ... in 
// is used to get every <key> of the object 
// RU: используется для получения каждого <ключа> объекта
// UZ: obyektning har bir <kalitini> olish uchun ishlatiladi

// let xObject = {
//     name: "Samir", surname:'Muradkulov',
//     age: 16,       address: 'street address'
// }
// for (let key in xObject) {
//     console.log(xObject[key])
//     console.log(key)
// }
// --------------------------------------------------------
// for ... of 
//  is used to get the <value> of the object
// RU: используется для получения <значения> объекта
// UZ: obyektning <qiymatini> olish uchun ishlatiladi

// let zArray = [
//     "Mazda", "Nissan", "Lambo",
//     "Mazda 2", "Nissan 2", "Lambo 2",
// ]
// for (let item of zArray) {
//     console.log(item)
// }

// let z = []
// function test(value, index, array) {
//     z.push("---" + value + "---")
// }
// --------------------------------------------------------
// zArray.forEach(test)

// is used to iterate through every element of the array
// and work with it through the function
// RU: используется для перебора каждого элемента массива
// и работать с ним через функцию
// UZ: massivning har bir elementini tekshirish uchun ishlatiladi
// va uni funksiya orqali ishlash uchun

// console.log(z)
// --------------------------------------------------------
// WHILE  =>  while (condition) { code }
// is used to create a loop  
// RU: используется для создания цикла
// UZ: tsikl yaratish uchun ishlatiladi

// let sanoq = 0
// while  (sanoq < 100) {
//     console.log("Bu ->" + sanoq)
//     sanoq++
// }
// for (;  sanoq < 100; ) {
//     console.log("Bu ->" + sanoq)
//     sanoq++
// }

// --------------------------------------------------------
// break
// is used to stop the loop
// RU: используется для остановки цикла
// UZ: tsiklni to'xtatish uchun ishlatiladi

// continue
// is used to skip the loop
// RU: используется для пропуска цикла
// UZ: tsiklni o'tkazish uchun ishlatiladi

// let fruits = [
//     "Apple", "Orange", "discusting", 
//     "Banana", "Grape"
// ]
// for (let fruit of fruits) {
//     if (fruit == "discusting") {
//         break
//     }
//     console.log(fruit)
// }
// --------------------------------------------------------





let lessonMathMapSets = "Sets - Maps -  Math"
// ----------------------------------------------------
// .min(), .max(), .random()
// .sqrt(), .floor, .round(), .ceil(), 
// .pow(), .trunc(), sign(), .abs(), 
// ----------------------------------------------------
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// new Map()  Creates a new Map
// set()  Sets the value for a key in a Map
// get()  Gets the value for a key in a Map
// delete()  Removes a Map element specified by the key
// has()  Returns true if a key exists in a Map
// forEach()  Calls a function for each key/value pair in a Map
// entries()  Returns an iterator with the [key, value] pairs in a Map
// Property  Description
// size  Returns the number of elements in a Map
// ----------------------------------------------------
// create a new Set
// let xArr = [1, 2, 3, 1, 4, 5, 1, 4, 2];
// const mySet = new Set(xArr);
// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables

// new Set()  Creates a new Set
// add()  Adds a new element to the Set
// delete()  Removes an element from a Set
// has()  Returns true if a value exists in the Set
// forEach()  Invokes a callback for each element in the Set
// values()  Returns an iterator with all the values in a Set
// Property  Description
// size  Returns the number of elements in a Set



let mathLesson
//         sqrt(...)   => даёт квадратный корень
//         floor(...)  => округляет в меньшую сторону
//         ceil(...)   => округляет в большую сторону
//         round(....) => округляет до ближайшего целого
//         pow(...)    => возведение в степень
//         trunc(...)  => отбрасывает дробную часть
//         sign(...)   => показывает знак числа
//         abs(...)    => возвращает модуль числа (без знака)
//         random(...) => возвращает случайное число от 0 до 1
//                     ---------------------------
//                     если мы хотим получить случайное число от 0 до 10
//                     то мы должны умножить на 10
//                     ---------------------------
//                     а если от 10 до 90 то умножаем на 10 и прибавляем 80
//                     Например:
//                         Math.random() * 80 + 10
//                     ---------------------------
//         min(..., ..., ...)  => возвращает минимальное число
//         max(..., ..., ...)  => возвращает максимальное число

//     ... => 'SPREAD' operator => that is used to spread 
//                     the array by removing the brackets
//            Also, it is called as 'REST' operator because 
//            it is used to collect the arguments inside 
//            the function
// function get_5_number(max_numbers) {
//     let result = []
//     for (let i=0;   i<max_numbers;   i++) {
//         let num = Math.round(Math.random()*100)
//         result.push(num)
//     }
//     return result
// }
// console.log(get_5_number(5))
// console.log(get_5_number(6))
// console.log(get_5_number(7))



const letssonRecursion = "Callback"
// 10 - 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0
// function countDown(number) {
//     console.log(number)
//     if (number !== 0) {
//         countDown(number-1) // -1, -2 .... inifinity
//     } else {
//         console.log("Finished ...")
//     }
// }
// function countUp(upToNumber, current=1) {
//     console.log(current)
//     if (current != upToNumber) {
//         countUp(upToNumber, current+1)
//     } else {
//         console.log("Finished ...")
//     }
// }
// // Create a function that prints starts upto some number
// // RU: Создайте функцию, которая печатает звезды до некоторого числа
// // UZ: Biror soncha yulduzlar chiqaradigan funksiya yarating
// function star(upToNumber, starCount=1) {
//     let starStr = "*"
//     console.log(starStr.repeat(starCount))
//     if (starCount != upToNumber) {
//         star(upToNumber, starCount+1)
//     } else {
//         console.log("Finished ...")
//     }
// }
// function starDown(number) {
//     let starStr = "*"
//     console.log(starStr.repeat(number))
//     if (number > 1) {
//         starDown(number-1)
//     } else {
//         console.log("Finished ...")
//     }
// }

// function sum(array) {
//     if (array.length === 1) {
//         return array[0]
//     }
//     return array[0] + sum(array.slice(1))
// }
// function factorial(number) {
//     if (number === 1) {
//         return 1
//     }
//     return number * factorial(number-1)
// }
// function getNumbersBetween(num1, num2) {
//     if (num1+1 === num2) {
//         return []
//     }
//     return [num1+1, ...getNumbersBetween(num1+1, num2)]
// }
// =====================================================
// WHAT IS CALLBACK?
// callback in russian is => обратный вызов

// Callback is a function that is passed as an argument to 
// another function and is executed after some operation has been completed.
// RU: Callback - это функция, которая передается в качестве аргумента в
// другую функцию и выполняется после того, как какая-то операция была завершена.
// UZ: Callback - bu boshqa funksiya sifatida argument sifatida uzatiladi va
// biror operatsiya yakunlangandan keyin bajariladi.

// function showMessage(name) {
//     console.log(`Hello ${name}`)
// }
// function sendMessage(name) {
//     console.log(`Sending message to ${name}`)
// }
// function prepareFood(name) {
//     console.log(`Preparing food for ${name}`)
// }
// //! -----------------------------------------------
// function getName(cb) {
//     let CName = "John"
//     cb(CName)
// }


// Use setInterval
// const oneSecond = 1000
// let interval = setInterval(testFn, oneSecond)

// let counter = 1
// function testFn() {
//     console.log(`Hello world ${counter}`)

//     if (counter === 5) {
//         clearInterval(interval)
//         console.log("Stop interval")
//     }
//     counter++
// }
// ------------------------------------------------------------------
// let names = ["Aziz", "Shaxzod", "Shoxrux", "Parviz", "Firuz", "Adham"]
// const oneSecond = 1000

// let interval = setInterval(showName, oneSecond*2)
// let counter = 0
// function showName() {
//     let cName = names[counter]
//     console.log(cName)
//     counter++
//     if (cName == "Firuz") {
//         clearInterval(interval)
//         console.log("Stop interval")
//     }
// }




let ClassLesson
// function test(fName, Sname, age) {
//     return {
//         firstName: fName,
//         secondName: Sname,
//         age // ==   age: age
//     }
// }
// let user1 = new test("John", "Smith", 25)

// class Animal {
//     constructor(_name) {
//         this.name = _name;
//     }
//     скорость(km = 'неизвестно') {
//         return `${this.name} может бежать со скоростью ${km} км/час`
//     }
// }
// Animal.prototype.любимаяЕда = function (еда = 'неизвестно') {
//     this.food = еда
//     console.log(`${this.name} любит есть ${this.food}`)
// }
// // let тигр = new Animal("Тигр")
// // let аллигатор = new Animal("Аллигатор")

// // тигр.любимаяЕда()
// // аллигатор.любимаяЕда("рыбу")

// class Bird extends Animal {
//     constructor(_name, _color) {
//         // if we don't call super(), 
//         // "this" will be undefined in constructor
//         // если мы не вызываем super(),
//         // "this" будет undefined в конструкторе

//         super(_name);   // вызов конструктора родителя
//         this.color = _color; // добавление нового свойства
//     }
//     canFly(km = 'неизвестно') {
//         return `${this.name} может летать со скоростью ${km} км/час`
//     }
// }
// let попугай = new Bird("Попугай", "зеленый")
// console.log(попугай.canFly(10))
// console.log(попугай.скорость(1))



// class MyClass {
//     prop = value; // property

//     constructor is called every time when we create 
//     an instance of the class
//     constructor(...) { 
//     ...
//     }

//     method(...) {} // method

//   }
// ----------------------------
// rewriting class User in pure functions
// 1. Create constructor function
// function User(_name) {
//     this.name = _name;
// }
// a function prototype has "constructor" property by default,
// so we don't need to create it
// ----------------------------
// 2. Add the method to prototype
// User.prototype.sayHi = function() {
//     alert(this.name);
// };
// let x = [2, 3, 123, 122, 23, 21, 4]
// Array.prototype.сумма = function () {
//     let sum = 0
//     for (let num of this) {
//         sum += num
//     }
//     return sum
// }
// console.log(x.сумма())
// ----------------------------

// Usage of class:
// let user = new User("John");
// user.sayHi();
// class Rabbit extends Animal {
//     constructor(_name, _earLength) {
//         super(_name);
//         this.earLength = _earLength;
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 1.5);
// console.log(rabbit.canRun(1.5));
// console.log("Ear length is: " + rabbit.earLength);

// class Animal {
//     showName() {  // instead of this.name = 'animal'
//         alert('animal');
//     }
//     constructor() {
//         this.showName(); // instead of alert(this.name);
//     }
// }


let ClassAdvanced
```
// Classes and OOP (Object Oriented Programming)
// 

// There are two ways to create a class in JavaScript
// 1. Function Constructor
// 2. Class
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// Polymorphism  =>  The ability to present the same interface for different data types.
// ex:
class Character {
    attack() {
        throw new Error("Subclass must implement abstract method");
    }
}
class Soldier extends Character {
    attack() {
        return 'Soldier shoots a gun!';
    }
}
class Alien extends Character {
    attack() {
        return 'Alien uses a laser beam!';
    }
}
class Robot extends Character {
    attack() {
        return 'Robot uses a mechanical arm!';
    }
}
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// Encapsulation =>  The bundling of data with the methods that operate on that data.

// Real world example
class BankAccount {
    constructor() {
        this._account_number = null;
        this._pin = null;
        this._balance = 0;
    }
    setAccountDetails(account_number, pin) {
        this._account_number = account_number;
        this._pin = pin;
    }
    getBalance(account_number, pin) {
        if (this._account_number === account_number && this._pin === pin) {
            return this._balance;
        } else {
            return "Invalid account details";
        }
    }
    deposit(account_number, pin, amount) {
        if (this._account_number === account_number && this._pin === pin) {
            this._balance += amount;
            return "Deposit successful";
        } else {
            return "Invalid account details";
        }
    }
    withdraw(account_number, pin, amount) {
        if (this._account_number === account_number && this._pin === pin) {
            if (amount <= this._balance) {
                this._balance -= amount;
                return "Withdrawal successful";
            } else {
                return "Insufficient balance";
            }
        } else {
            return "Invalid account details";
        }
    }
}

let account = new BankAccount();
account.setAccountDetails(123456789, 1234);
console.log(account.getBalance(123456789, 1234)); // 0
console.log(account.deposit(123456789, 1234, 100)); // Deposit successful
console.log(account.getBalance(123456789, 1234)); // 100
console.log(account.withdraw(123456, 1234, 50)); // Invalid account details

// =====================================================
// =====================================================
// =====================================================
// =====================================================
// Types of classes:
// 1. Abstract Class
// 2. Concrete Class
// 3. Singleton Class
// 4. Static Class
// 5. Instance Class
// 6. Inner Class
// 7. Anonymous Class
// 8. Nested Class
// 9. Partial Class
// 10. Sealed Class
// 11. Final Class
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// 1. Abstract Class
// An abstract class is a class that cannot be instantiated. It is designed to be inherited by other classes.
// ex:
class AnimalAbstractClass {
    constructor(name, color, age) {
        if (new.target === AnimalAbstractClass) {
            throw new Error('Cannot instantiate an abstract class')
        }
        this.name = name
        this.color = color
        this.age = age
    }
    // ----------------------------------------------------
    // METHODS that are common to all animals and required to be implemented by the child classes
    eat() {
        throw new Error('eat method must be implemented')
    }
    // ...
    // ----------------------------------------------------
    // ----------------------------------------------------
    // Static method
    static staticMethod() {
        // Static method means that it belongs to the class itself and not to the instances of the class
        console.log('Static method')
    }
    // ----------------------------------------------------
    // ----------------------------------------------------
    // Getter and Setter
    get getName() {
        return this.name
    }

    /**
     * @param {string} name
    */
    set setName(name) {
        this.name = name
    }
    // TO CALL THESE GETTER AND SETTER
    // let dog = new AnimalAbstract('Dog', 'Black', 5)
    // console.log(dog.getName) // Dog
    // dog.setName = "Cat"
    // console.log(dog.getName) // Cat
    // ----------------------------------------------------
    // ----------------------------------------------------
    // Class method
    // A class method is a method that is called on the class itself, not on the instances of the class
}

// =====================================================
// =====================================================
// =====================================================
// =====================================================
// 2. Concrete Class
// A concrete class is a class that can be instantiated. It is a class that is not abstract.
// ex:
class Dog extends AnimalAbstractClass {
    constructor(name, color, age, breed) {
        super(name, color, age)
        this.breed = breed
    }

    // Implementing the abstract method
    eat() {
        console.log(this.name + "is eating")
    }
}
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// 3. Singleton Class
// A singleton class is a class that can only have one instance at a time.
// ex:

// SYNTAX:
// class Singleton {
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance
//         }
//         Singleton.instance = this
//     }
// }
// ex:
// let singleton1 = new Singleton()
// let singleton2 = new Singleton()
// console.log(singleton1 === singleton2) // true

class GameSettings {
    constructor() {
        if (GameSettings.instance) {
            return GameSettings.instance;
        }
        this.soundVolume = 5; // Default volume
        this.difficulty = "Easy"; // Default difficulty
        GameSettings.instance = this;
    }
    // Methods to update settings can be added here
}
// ----------- BENEFITS ----------- 
// - Encapsulation
// - Lazy Initialization -> The instance is created only when it is needed. It is better to create heavy instance only when it is needed. If not, the application could be slow to start or use a lot of memory.
// - Control over Access and Modification -> The instance is created only once and cannot be modified. This is useful when you want to have a single instance of a class that is shared across the application. One such instance is the database connection pool. When we have a single instance of the database connection pool, we can reuse the connections and reduce the overhead of creating a new connection every time.
// - Better for Testing 
// - Namespace Pollution


```


let fetch
// FETCH => 
//         returns a promise   
//         promise is an object that represents the eventual 
//         completion (or failure) of an asynchronous operation, 
//         and its resulting value.
//         It has 3 states:
//         1. pending
//         2. fulfilled
//         3. rejected
//         STYNTAX:
//         fetch(url, options)
//    для того, чтобы получить данные из API, нужно сделать запрос
//    fetch(url) - возвращает промис
//    fetch(url).then(response => response.json()) - возвращает промис

// const table = document.querySelector('table')
// async function getUsers() {
//     const url = 'https://reqres.in/api/users?page=2'
//     let response = await fetch(url)
//     let info = await response.json()

//     for (let user of info.data) {
//         let tr = document.createElement('tr')
//         for (let key in user) {
//             let td = document.createElement('td')
//             let text = document.createTextNode(user[key])
//             td.appendChild(text)
//             tr.appendChild(td)
//             table.appendChild(tr)
//         }
//     }
// }



let axiosLesson
// axios.get(url) - возвращает промис
//         1. GET    => получить данные
//         2. POST   => создать данные
//         3. PUT    => обновить данные
//         4. DELETE => удалить данные
//         5. PATCH  => обновить часть данных
// const table = document.querySelector('table')
// async function getUsers() {
//     const url = 'https://reqres.in/api/users?page=2'
//     let response = (await axios.get(url)).data

//     for (let user of response.data) {
//         let tr = document.createElement('tr')
//         for (let key in user) {
//             let td = document.createElement('td')
//             let text = document.createTextNode(user[key])
//             td.appendChild(text)
//             tr.appendChild(td)
//             table.appendChild(tr)
//         }
//     }
// }



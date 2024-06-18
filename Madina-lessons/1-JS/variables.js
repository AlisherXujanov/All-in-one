// DATA TYPES
// 1. String    =>   текст
// '', "",  ``
// -----------------------------------------
// 2. Number    =>   числа
// 1, 2, 3       =>  integer 
// 1.5, 2.5, 3.5 =>  float

// Maximum up to 17 digits
// -----------------------------------------
// 3. Bigint    =>   большие цыфры
// 17-digits  <   bigint
// -----------------------------------------
// 4. Boolean   =>   true/false  (истина / ложь) (haqiqtan / yolg'on)
// -----------------------------------------
// 5. Undefined =>   не определён  (not defined) (aniqlanmagan)
// -----------------------------------------
// 6. Null      =>   пусто  (empty) (bo'sh)
// -----------------------------------------
// 7. Symbol    =>   символ
// -----------------------------------------
// 8. Object    =>   объект
// -------------------------------------------------------
// "use strict"   // switchs on the strict mode
// This is strict mode that helps to avoid mistakes
// -------------------------------------------------------
//* String  ==  "...."  ==  simple text  == обычний текст
// console.log("Hello world")  // Hello world
// 
// -------------------------------------------------------
//* "",   '',   ``   =>  these quotes are used 
//                      to create a string
// console.log("Hello ")

// console.log(`
//         Hello 
//         World
//     `)
// -------------------------------------------------------
//* Number  ==  1, 2, 3, ...
// -------------------------------------------------------
//* VARIABLES
// 1. var       =>  5% 
// 2. let       =>  55%
// 3. const     =>  40%

// {
//     var a = 1
//     let b = 2
//     const c = 3
// }
// console.log(a)
// console.log(b)
// console.log(c)

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
// "use strict"
// a = 1
// console.log(a)
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
// var myName = "Madina"
// console.log(`... ${myName} ... `)

// let myName = 'Alisher'
// let myAge = 29
// console.log(` 
//     My name is ${myName}. 
//     I am ${myAge} years old
// `)
// ---------------------------------------
// let mySchool = '19 school'
// console.log(`
//     My school's number is ${mySchool}
//     `)
// ----------------------------------------------
// let myName = "Alisher"
// let info = `This is my first class. My name is ${myName}`
// console.log(info)


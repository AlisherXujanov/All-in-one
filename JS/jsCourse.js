let string  = "text  =>  текст"
// 1. String    =>   текст
// 2. Number    =>   числа
// 3. Bigint    =>   большие цыфры
// 4. Boolean   =>   true/false  (истина / ложь) (haqiqtan / yolg'on)
// 5. Undefined =>   не определён  (not defined) (aniqlanmagan)
// 6. Null      =>   пусто  (empty) (bo'sh)
// 7. Symbol    =>   символ
// 8. Object    =>   объект

// ----------------------------------------
// number  =>  целая цыфра  => 1
// float   =>  дробь        => 1.1000
// ----------------------------------------

// console.log(...) => shows a message inside of console
//                     показывает сообщение в консоли
//                     нужен для проверки кода
// ----------------------------------------
// CASES  =>  Стили надписи имён
// camelCase  =>  ...^..^.. =>  greatBigAndBeautifulCity
// snake_case =>  ..._..._. =>  great_big_and_beautiful_
// PascalCase =>  ^..^..^.. =>  GreatBigAndBeautifulCity
// kebab-case =>  ..-..-... =>  great-big-and-beautiful-
// ----------------------------------------
// VARIABLES
// container => variable => переменные => o'zgaruvchi
// RULE:
//      keyword nameOfContainer = valueOfContainer
//      ключевоеСлово имяКонтейнера = значениеКонтейнера
// ----------------------------------------

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
// ----------------------------------------

// for inserting a variable into string we use
// `... ... ${varName}`  =>  string templates

// ----------------------------------------
// let myName = 'Alisher'
// let myAge = 28
// console.log(`
//     My name is ${myName}. 
//     I am ${myAge} years old
// `)
// ----------------------------------------



let numbersLesson
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

//! The maximum number of decimals is 17.

//! NaN       =>  is a 'not a number'
//! parseInt(Number) => converts a number into Number() object
// RU:                 преобразует строку в целое число
// ex:  parseInt("10")  =>  10
//      parseInt("qwe") =>  NaN - Not a Number

//! isNaN() => checks if the object inside paratneses 
//            appears to not be a Number
//            Returns a Boolean value that indicates whether 
//            a value is the reserved value NaN (not a number)
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

// if (условиеПервое == true) {
//     // код прочитается если условиеПервое окажется правдой
// } else if (условиеВторое == true) {
//     // ...
// } else if (условиеТретье == true) {
//     // ...
// } else {
//     // код прочитается если некакое условие не окажется правдой
// }

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


// const clientName = prompt("Enter your name please: ") 
// let order = prompt(`
//     What would you like to order?
//     Soups:
//         1. Куриный бульён из тараканов
//         2. Бобуиный бульён
//         3. Бульён из ...
//         4. Червяной лагман
//     Dishes:
//         1. Димлама из кракадила
//         2. Стейк из рук ...
//         3. Жаренный нос верблюда
//     Desert:
//         1. Тапки Мухаммада
//         2. Фирменное блюдо из Червей
//         3. Баранина ...
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


// let date = new Date()
// switch (date.getDay()) {
//     case 0:
//         console.log("Sunday")
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     default:
//         console.log("Default situation")
// }
// switch(условный_контейнер) {
//     case значение_контейнера:
//         // код прочитается если значение_контейнера == условный_контейнер
//         break;  // прерывает выполнение кода
// }

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

// let switchCase = new Date()
// switch (date.getDay()) {
//     case 0:
//         console.log("Sunday")
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     default:
//         console.log("Default situation")
// }




let dateLesson
//! UTC => Coordinated Universal Time
//! GMT => Greenwich Mean Time Zone
//! January 1970 == UNIX-time  //  UTC  //  GMT
//! offset => UTC +- offset  (UZB => UTC+5)
//* Creation
//! With one parameter => milliseconds (13 digits) 
//!                             for displaying date-time
//! new Date(2022, 11, 30, 12, 0, 0) => in local timezone
//! date.getTimezoneOffset() / -60  =>  gets offset from current TZ
//!                                 defaults to -minutes 
//! GETTERS  =>  ...getDay(), ...getHour(), ...getMinutes() ...
//! SETTERS  =>  new Date(2022, 12, ....)
//! date.toUTCString() => UTC time
//! date.toISOString()  =>  “2022-11-12T12:00:00+5:00” GMT  => in UTC ( Standart version of time )

//! .toLocaleString(“en-US”)
//* https://www.w3schools.com/jsref/jsref_tolocalestring.asp
// Persian => "fa-IR"  => ۱۴۰۱/۱۱/۱۵،‏ ۱۷:۱۲:۴۲
// Korea  =>  "ko-KR"  =>  2023. 2. 3. 오전 11:45:30
// Arabic =>  "ar-EG"  =>  /٢‏/٢٠٢٣ ١١:٤٧:٢٢ ص
//! console.log(JSON.stringify({ date }))  =>  for interacting with Backend

// const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let today = weekDays[new Date().getDay()]





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
// Array  =>  лист
// [], {}  =>  object types  =>  array, object
// .push(...)  => adds a new element to the end 
//                RU: добавляет элемент в конец массива
// .unshift(...) => adds a new element to the beginning
//                 RU: добавляет элемент в начало массива  
// .pop() => removes an element from the end
//           RU: удаляет элемент с конца массива
// .shift() => removes an element from the beginning
//             RU: удаляет элемент с начала массива
// .splice(...) => takes 3 parameters
//                 1st => where to start
//                 2nd => how many items to delete
//                 3rd => how many items to add
//         RU: принимает 3 параметра
//                 1й => с какого индекса начать
//                 2й => сколько элементов удалить
//                 3й => сколько элементов добавить
// .concat() => merges two lists (Arrays)
//              RU: объединяет два массива
// ...  =>  spread operator adds only elements from 
//          the list into the list 
//          RU: распыляет элементы массива в массив
//          ex:
//              let x=[1,2]; 
//              let y=[3,4];
//              let z=[...x, ...z]
//              console.log(z)  // [1,2,3,4]
// .toString() => returns an Array as a string
//               RU: возвращает массив как строку
// Array.isArray(arrayName) => checks if the array is 
//                          truly an instance of Array
// .indexOf(...)  => shows index of the element of item
// .includes(...) => checks if the item is in the list or not

// Sorting
// .sort(), 
// .reverse(), 
// STRING METHOD
// .join("")



let  Array2 = "Сложные методы массивов"
// arr.find(item => item.age === 20) -> finds only one element
// arr.filter(item => item.age === 20) -> creates an array from items
// arr.findIndex(item => item.age === 20) -> finds its index
// arr.map(item => item[0]) -> returns a new array
// let cars = [
//     {brand:"Audi",  цена:2000,  color:"red"},
//     {brand:"Mazda",  цена:2007,  color:"black"},
//     {brand:"Nissan",  цена:2017,  color:"blue"},
//     {brand:"Audi",  цена:2020,  color:"white"},
//     {brand:"Audi",  цена:2021,  color:"blue"},
//     {brand:"Nissan",  цена:2002,  color:"blue"},
//     {brand:"Audi",  цена:2018,  color:"black"},
// ]
// let ответПоиска = cars.map(car => car.цена )
// let x = ответПоиска.sort((a,b) => a-b)
// console.log("$"+x[ответПоиска.length - 1])
// console.log("$"+x[ответПоиска.length - 2])





let FuntionLesson = ""
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

// function firstLast(str) {
//     // 1. split string into array
//     let strArr = str.split('') // ['a', 'b', 'c', 'd', 'e']
//     // --------------------------------
//     // 2. get first and last element
//     let first = strArr.shift() // 'a'
//     let last = strArr.pop()    // 'e'
//     // --------------------------------
//     // 3. swap first and last element
//     strArr.unshift(last)     // ['e', 'b', 'c', 'd']
//     strArr.push(first)       // ['e', 'b', 'c', 'd', 'a']
//     // --------------------------------
//     // 4. return the result by joining the array
//     return strArr.join('')   // 'ebcda'
// }


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
// Objects   =>   {}
// Arrays    =>   []

// {key: 'value'}   =>   {ключ: "значние"}

// let x = ['a', 'b', 'c']
// let z = {
//     name: 'a',  
//     'likesCats': true, 
//     age: 25
// }
// ----UPDATING-----------------------------------
// x.name = "updated-name"

// if referring field exists then it gets updated
// RU: если поле существует, то оно обновляется

// x[1] = 'd'  // => ['a', 'd', 'c']
// z['name'] = "John"  // => {name: "John", ...}
// z.name = "John"     // => {name: "John", ...}
// console.log(z)


// ----DELETION-------------------------------------
// deletes existing field
// delete x.name
// z.cat = z.likesCats
// delete z.likesCats
// console.table(z)

// ----ADDITION-------------------------------------
// if referring field does not exist
// then it gets added as a new field
// RU: если поле не существует, 
// то оно добавляется как новое поле
// z.name2 = "Updated name"

// ----MERGING-------------------------------------
// creates a new object from two objects
// создаёт новый обект из двух обектов
// let x = {
//     name: "name 1",
//     surname: "surname 1",
//     age: 20,
// }
// let a = {...z, ...x}
// console.table(a)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
//* TASK TO GET INFO FROM CLIENT AND CREATE A TABLE
// RU: ЗАДАЧА ПОЛУЧИТЬ ИНФОРМАЦИЮ ОТ КЛИЕНТА И СОЗДАТЬ ТАБЛИЦУ
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
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
// }

// let x = Object.keys(person) // => ["name", "surname", "age", "address"]
// let v = Object.values(person) // => ["name 1", "surname 1", 20, "address 1"]
// let e = Object.entries(person) // => [["name", "name 1"], ["surname", "surname 1"], ["age", 20], ["address", "address 1"]]

// --------------------------------------------------------
// --FUNCTIONs inside Objcets------------------------------
// --------------------------------------------------------

// let person = {
//     name: "name 1",
//     surname: "surname 1",
//     age: 20,
//     fullName: function() { 
//         return this.name + " " + this.surname 
//     }
// }

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



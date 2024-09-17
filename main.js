// String  =>  text         => "", '', ``
// Number  =>  numbers      => 123, 123.45
//      -  Integer   123 
//      -  Float     123.45

// let x = '123'  // -> string
// let z = 123    // -> number
// RULE:  string + number  =>  string
//        string + string  =>  string
//        number + number  =>  number
// -----------------------------------------------
// Functions always do something and have parathesis ()
// parathesis () ->  are used to get parameters
// console.log(parameter)
// --------------------------------------------------
// parseInt(parameter)  ->   parse=разбить  Int=число
// =====
// let x = '123'
// x = parseInt(x)
// =====
// let x = '123.12'
// x = parseInt(x)
// =====
// let x = 123.12
// x = parseInt(x)
// =====
// let x = "H121212312"
// x = parseInt(x)  //  NaN  ==>>  Not a Number  ->  Не является числом
// =====
// let x = "12Hello"
// x = parseInt(x)  //  12
// -----------------------------------------------
// TYPE-OF  ->  checks the data-type of the variable
// let x = 123
// let z = 'www'

// let type1 = typeof(x)
// console.log(type1)          // number
// // ------------------
// let type2 = typeof(z)
// console.log(type2)          // string
// ------------------
// -----------------------------------------------
// OPERATORS in JS

//   =   ->    assignment operator  ->  определение присваивания
//   +   ->    addition operator    ->  оператор сложения
//   -   ->    subtraction operator ->  оператор вычитания
//   *   ->    multiplication operator  ->  оператор умножения
//   /   ->    division operator    ->  оператор деления
// -------------
//   **  ->    exponentiation operator  ->  оператор возведения в степень 
//             2**3   ===   2*2*2   ===   8
// -------------
//   %   ->    modulus operator  ->  оператор остатка от деления
//             3 / 2      =>  1.5
//             3 % 2      =>  1
//             11 % 4     =>  3
//             13 % 6     =>  1
//             16 % 3     =>  1
//             500 % 150  =>  50 
//             1000 % 150 =>  100
// -------------
// let x = 5
// x = x + 1
// console.log(x) // 6
// -------------
//! ++	Increment
// let x = 5 
// x++
// ++x
// console.log(x)
// -------------
// let x = 5 
// x --
// console.log(x)
//! --	Decrement
// -------------
// let x = 5
// x += 10
// console.log(x)
//! +=	  x += y	   x = x + y
//! -=	  x -= y	   x = x - y
//! *=	  x *= y	   x = x * y
//! /=	  x /= y	   x = x / y
//! %=	  x %= y	   x = x % y
//! **=	 x **= y	   x = x ** y
// -----------
// let z = 10
// console.log("z"+z)  // z10
// -------------
// let x = "Jonik"
// let z = typeof(x) + 5
// console.log(z) // string5
// let a = 10
// const z = 5
// z = 10
// console.log(a)
// -------------
// let a = "Muhammad"
// let x = parseInt(a) 
// console.log(x)  // NaN
// -------------
// let a = 1
// let b = a
// b + a
// console.log(a)
// -------------
// let x = "Onur"
// let z = parseInt(5+x) - 5
// console.log(z)
// -------------
// console.log(2 < 3)   // true
// console.log(2 > 3)   // false
// console.log(2 >= 3)  // false
// console.log(3 >= 3)  // true
// console.log(3 <= 3)  // true
// console.log(3 <= 4)  // true
// -------------
//!  ==	equal to (проверяет только значения)
//!  ===	equal value and equal type
//!  !=	not equal
//!  !==	not equal value or not equal type
//!  >	    greater than
//!  <	    less than
//!  >=	greater than or equal to
//!  <=	less than or equal to
// -------------------------------------------------
// -------------------------------------------------
//!  &&	and  =>  и      ...ham    
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false

// let x = 1
// let y = 2
// let z = 3

// console.log(x > z  &&  x < y)  // false
// console.log(x < z  &&  x < y)  // true
// console.log(x < z  &&  x < y  &&  x+y == z) // true 

//!  ||	or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
// console.log(x > z  ||  x < y)  // true


//!  !	not  =>  не ... ... emas
// ex:   1 != 1   =>  false
//       1 != 2   =>  true

//! NaN       =>  is a 'not a number'


//! isNaN() => checks if the object inside paratneses 
//            appears to not be a Number
//            Returns a Boolean value that indicates whether 
//            a value is the reserved value NaN (not a number)
//          RU: возвращает логическое значение, указывающее,
//              является ли значение зарезервированным значением NaN 
//              (не число)
// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true


// Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number


//! .toFixed()	    Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35

//!  .toPrecision()	Returns a number written with a specified length  
//  ex: 10.345.toPrecision(2)  =>  10


// EVAL  ->  evaluates or executes an argument
// eval("...")   -> calculates the result
// eval("(10 + 5 - 1) * 2") // 28
// eval("10 + 5")           // 15

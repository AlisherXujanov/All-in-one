// String + Number == String
// 1 + "a"  => "1a"
// ex:   "Hello " + 5  => "Hello 5"
// -----------------------------------
// Number + Number == Number
// ex:    5 + 5  => 10
// 1 + 1.5 // 2.5
// -----------------------------------
// parseInt(...) =>  converts a string into a number
//              RU:  преобразует строку в целое число
// console.log("5" + 5)  // =>   "55"
// console.log(parseInt("5") + 5) //  =>   10
// console.log(parseInt("123"))  // =>  123
// console.log(parseInt("abc"))  // =>  NaN  =>  Not a Number
// console.log(parseInt("123 Hello"))  // 123
// console.log(parseInt("Hello 123"))  // NaN
// -----------------------------------
// let a = typeof(5)
// console.log(a)   //  'number'
// let b = typeof("x")
// console.log(b)   //  'string'
// let c = typeof(NaN)
// console.log(c)   //  'number'
// let d = typeof(true)
// console.log(d)   //  'boolean'
// -----------------------------------
// let x = 5
// console.log("10a" - x)  // -> NaN  -> Not a Number
// console.log("10" - x)   // -> 5
// Here JS tries to help by converting a string into number 
// and then subtracting x from it
// RU: Здесь JS пытается помочь, преобразовав строку в число
//     и затем вычитая x из него
// -----------------------------------
// EVAL => is a calculator that takes a string and calculates it
// RU: EVAL => это калькулятор, который берет строку и вычисляет ее
// let calc = eval("(100 - 1 + 10 - 9) / 10")  // 10
// let calc2 = eval(`${calc} * 2`)  // 20
// console.log(calc2)
// -----------------------------------
// exponent || power
// power of 2 to 3  =>   8  
// let x = 5
// console.log(x ** 3) // 125   =>  5 * 5 * 5
// console.log(2 ** 3) // 8     =>  2 * 2 * 2
// -----------------------------------
// let x = 5
// % => Modulus (Division Remainder)  =>  Остаток от деления
// console.log(x / 2)  // 2.5
// console.log(x % 2)  // 1
// console.log(11 % 5) // 1
// console.log(15 % 2) // 1
// console.log(18 % 7) // 4

// 15 % 3 == 0  //  0==0  - true
// 15 % 2 == 0  //  1==0  - false
// 21 % 6 == 0  //  3==0  - false
// -----------------------------------
// let x = 5
// x + 1
// x = x + 1
// ++x
// console.log(x)
// x ++   // first it shows the original value of x, then adds 1
// ++ x   // 
// console.log(x++) // 5
// console.log(x)   // 6
// =============
// console.log(++x) // 6
// console.log(x)   // 6
// -----------------------------------
// let x = 5
// x --   // first it shows the original value of x, then subtructs 1
// -- x   // 
// console.log(x--) // 5
// console.log(x)  // 4
// =============
// console.log(--x) // 4
// console.log(x)   // 4
// -----------------------------------
// let x = 5
// console.log(x == 5)  // true
// console.log(x == 10) // false
// -----------------------------------
// let x = 5
// console.log(x+5)    // x == 10   (-, *, /, **, %) are the same
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
//! **=	  x **= y	   x = x ** y


//!  ==	equal to (проверяет только значения)
//!  ===	equal value and equal type
// console.log("2" == 2)  // true
// console.log(2 === 2)   // true
// console.log("2" === 2) // false

//!  !=	not equal
//!  !==	not equal value or not equal type
// console.log("2" != 2)  // false
// console.log(2 !== 2)   // false
// console.log("2" !== 2) // true

//!  >	    greater than
//!  <	    less than
//!  >=	greater than or equal to
//!  <=	less than or equal to

// console.log(2 > 1)  // true
// console.log(2 < 1)  // false
// console.log(2 < 2)  // false
// console.log(2 <= 2) // true
// console.log(2 >= 2) // true

//!  &&	and  =>  и      ...ham    
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false
// console.log(2 < 1  &&  5==5  &&  7==7)  // false
// console.log(2 > 1  &&  5==5  &&  7==7)  // true


//!  ||	or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
// console.log(2 < 1 || 5 < 5 || 7 == 7)  // true
// console.log(2 < 1 || 5 < 5 || 7 == 8)  // false


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

// console.log(!true)  // negative + positive   =>   negative 
// console.log(!false) // negative + negative   =>   positive
// // -------------------------------
// console.log(isNaN('qwe')) // true
// console.log(isNaN(123))   // false
// // -------------------------------
// console.log(!isNaN('qwe')) // false
// console.log(!isNaN(123))   // true


// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true


//! Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number
// 10 / 0   =>  Infinity
// -10 / 0  =>  -Infinity

//! .toFixed()	    Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35
// console.log(10.1234.toFixed(2))  // 10.12


//!  .toPrecision()	Returns a number written with a specified length
//  ex: 10.345.toPrecision(2)  =>  10
// console.log(10.1234.toPrecision(3))  // 10.1

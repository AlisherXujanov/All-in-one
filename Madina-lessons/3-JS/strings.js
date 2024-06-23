// SYNTAX OF calling methods

// "".method-name()
// parameters are sent to the parenthesis () if they are needed
// --------------------------------------------------------
//*  /.../            => regular expression (regExp)
//!               RU: регулярное выражение

// --------------------------------------------------------
// SLICE
// let text = "Hello World!"
// let result = text.slice()  // Hello world
// let result = text.slice(2) // llo world
// let result = text.slice(2, 8) // llo wo
// console.log(result) // Hello World!

// index  =>  positions  ->  of letter  
// they always start from 0
// --------------------------------------------------------
// REPLACE        => replace the string with a new string
//*                   can take a special regExp as an parameter

//*  /.../i           => insensitive
//*  /.../g           => global

// let text = "Hello h World! h"
// /.../  ->   regular Expressions
// They help us search for a specific pattern in the text

// text = text.replace("h", "*")
// text = text.replace(/h/i, "*")
// text = text.replace(/h/gi, "*")
// console.log(text)
// --------------------------------------------------------
//*  length           => the length of the string (text)
//!               RU: длина строки (текста)

// console.log("Hello world".length)  // 11
// --------------------------------------------------------
//*  toUpperCase()
//*  toLowerCase()

// console.log('hello world'.toUpperCase()) // HELLO WORLD
// console.log('Hello WORLD'.toLowerCase()) // hello world
// --------------------------------------------------------
//*  concat()         => merges two strings 
// let text = 'Hello'
// console.log(text.concat(' World')) // Hello World
// OR
// console.log(text + ' World')       // Hello World
// They are the same
// --------------------------------------------------------
//*  trim()           => removes whitespace in the beginning
//*                      and at the end of the string
// let x = "       Hello world       "
// console.log(x)         // Without trim
// console.log(x.trim())  // With trim
// --------------------------------------------------------
//*  split()          => splits the text into many pieces
// let z = "Hello World"

// console.log(z)                   // Hello World
// console.log(z.split(" "))        // ["Hello", "World"]
// console.log(z.split("o"))        // ["Hell", " W", "rld"]
// console.log(z.split(""))         // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
// --------------------------------------------------------
//*  padStart()       => if the resulting string does NOT reach a 
//*                      given length we can fill it with a sybmol 
//*                      at the start
//*  padEnd()         => if the resulting string does NOT reach a 
//*                      given length we can fill it with a sybmol 
//*                      at the end
// let clientText = "Hello"
// let expectedLength = 20 

// console.log(clientText.padStart(expectedLength, "*")) // ***************Hello
// console.log(clientText.padEnd(expectedLength, "*"))   // Hello***************
// --------------------------------------------------------
//*  charAt()         => Returns the character at the specified index
// console.log("Hello".charAt(0)) // H
// OR
// console.log("Hello"[0]) // H
// --------------------------------------------------------
//*  indexOf()        => returns the index of the first
//*                         string or letter that it finds
// console.log("Hello World".indexOf("World")) // 6
// --------------------------------------------------------
//*  lastIndexOf()    => returns the last index of the string
// console.log("Hello World".indexOf("o"))     // 4
// console.log("Hello World".lastIndexOf("o")) // 7
// --------------------------------------------------------
//*  search()         => returns the first expression that it finds
// console.log("Madina".indexOf("a"))   // 1
// console.log("Madina".search(/a/i))   // 1
// --------------------------------------------------------
//*  match()          => returns the matched string (all 
//*                         strings if we use /.../gi) 
// console.log("Madina".match(/a/ig))   // [ 'a', 'a' ]
// --------------------------------------------------------
//*  includes()       => returns true if the string is found
// console.log("Madina".includes("a"))   // true
// console.log("Madina".includes("b"))   // false   
// --------------------------------------------------------
//*  startsWith()     => checks if the string starts with ...
//*  endsWith()       => checks if the string ends with ...
// console.log("Madina".startsWith("M"))   // true
// console.log("Madina".startsWith("B"))   // false

// console.log("Madina".endsWith("B"))   // false
// console.log("Madina".endsWith("a"))   // true
// --------------------------------------------------------
//*  repeat()         => repeats the string number of times
// console.log("*".repeat(10)) // **********
// console.log("Madina".repeat(2)) // MadinaMadina
// --------------------------------------------------------
//*  join()           => joins all elements of an array into a string
// let text = "Madina"
// console.log(text.split("a"))         // [ 'M', 'din', '' ]
// console.log(text.split("a").join(""))   // Mdin
// console.log(text.split("").reverse().join(""))   // anidaM
// --------------------------------------------------------




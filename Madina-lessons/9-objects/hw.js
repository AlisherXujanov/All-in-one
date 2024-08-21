// ========================================= UPDATE =========================================
// NUMBER 1
// let colors = {first: 'blue', second: 'red', third: 'purple'}

// colors.first = "Violet"
// console.log(colors)

// ======================================================================

// NUMBER 2
// let furniturePrices = {
//     couch: '$100',
//     bunkBeds: '$90',
//     tables: '$150'
// }
// furniturePrices.tables = '$75'
// console.log(furniturePrices)

// ============================================================================================

// NUMBER 3
// let theKardashians = {
//     Mom: 'Kris Kardashian',
//     firstSister: 'Kourtney Kardashian',
//     secondSister: 'Kim Kardashian',
//     thirdSister: 'Khloe Kardashian'
// }
// theKardashians.theJenners = { firstJenner: 'Kendall Jenner', secondJenner: 'Kylie Jenner' }
// console.log(theKardashians)

// =============================================================================================

// Number 4
// let schoolGrades = {
//     Excellent: 'A',
//     normal: 'B',
//     average: 'C',
// }
// schoolGrades.Excellent = 'A+'
// console.log(schoolGrades)

// ==========================================================

// NUMBER 5
// let toys = {
//     softToys: 'Plushies',
//     hardToys: 'Legos',
//     rubberToys: 'pop-its',
// }
// toys.rubberToys = 'Rubber Duckies'
// console.log(toys)


// ================================ DELETE ===================================

// NUMBER 1
// let colors = {
// first: 'red',
// second: 'blue',
// third: 'purple',
// fourth: 'gray',
// fifth: 'teal',
// sixth: 'white',
// seventh: 'black',
// eighth: 'red',
// ninth: 'red'
// }
// delete colors.eighth
// delete colors.ninth
// console.log(colors)

// =================================

// NUMBER 2
// let computerScience = {
// first: 'HTML',
// second: 'CSS',
// third: 'JAVASCRIPT',
// fourth: 'PYTHON',
// fifth: 'C++',
// sixth: 'HTML',
// seventh: 'HTML',
// }
// delete computerScience.sixth
// delete computerScience.seventh
// console.log(computerScience)

// ==================================== ADD =================================

// NUMBER 1
// let furniturePrices = {
// couch: '$100',
// bunkBeds: '$90',
// tables: '$150'
// }
// furniturePrices.bookShelves = '$190'
// console.table(furniturePrices)

// ============================================

// NUMBER 2
// let toys = {
// softToys: 'Plushies',
// hardToys: 'Legos',
// rubberToys: 'pop-its',
// }
// toys.dolls = 'Barbie'
// console.table(toys)

// ============================================

// NUMBER 3
// let computerScience = {
// first: 'HTML',
// second: 'CSS',
// third: 'JAVASCRIPT'
// }
// computerScience.fourth = 'PYTHON'
// console.table(computerScience)


// ====================================== MERGE =====================================
// NUMBER 1
// let theKardashians = {
//     Mom: 'Kris Kardashian',
//     firstSister: 'Kourtney Kardashian',
//     secondSister: 'Kim Kardashian',
//     thirdSister: 'Khloe Kardashian'
// }
// let the_jenners = {
//     firstJenner: 'Kendall Jenner',
//     secondJenner: 'Kylie Jenner'
// }
// let both = { ...theKardashians, ...the_jenners }
// console.table(both)

// ==========================================================

// NUMBER 2
// let alphabets = {
//     one: 'A',
//     two: 'B',
//     three: 'C',
// }
// let numbers = {
//     one: '1',
//     two: '2',
//     three: '3'
// }
// let both = { ...alphabets, ...numbers }
// console.table(both)

// ===========================================
// NUMBER 3
// let brands = {
// first: 'Apple',
// second: 'Samsung',
// third: 'Redmi'
// }
// let Famousproducts = {
// apple: 'Iphone 15 pro max',
// samsung: 'Samsung galaxy s24',
// redmi: 'Redmi note 13 pro'
// }
// let a = {...brands, ...Famousproducts}
// console.table(a)


// ============================ KEYS, VALUES, ENTRIES ============================
// NUMBER 1
// let colors = {
//     first: 'red',
//     second: 'blue',
//     third: 'purple',
//     fourth: 'gray',
//     fifth: 'teal',
//     sixth: 'white',
//     seventh: 'black',
//     eighth: 'red',
//     ninth: 'red'
// }
// let a = Object.keys(colors)
// let b = Object.values(colors)
// let c = Object.entries(colors)

// console.log(a)
// console.log(b)
// console.log(c)

// ======================================================================

// NUMBER 2
// let client = {
//     name: "Name 1",
//     surname: "Surname 1",
//     age: 20
// }
// Object.keys(client) // => ["name", "surname", "age"]
// Object.values(client) // => ["Name 1", "Surname 1", 20]
// Object.entries(client)

// ==========================================================================

// NUMBER 3
// let schoolGrades = {
//     Excellent: 'A',
//     normal: 'B',
//     average: 'C'
// }
// let a = Object.keys(schoolGrades)
// let b = Object.values(schoolGrades)
// let c = Object.entries(schoolGrades)





// ========================================================== FIGMA ==================================================================

// Task 1
// let car = {
//     brand: "porsche",
//     color: "ruby",
//     year: "2022"
// }
// console.table(car)

// =================================================================================================

// Task 2
// let movieGenre = {
//     first: 'funny',
//     second: 'dramatic',
//     third: 'Horror'
// }
// let a = Object.keys(movieGenre)
// console.log(a.length)

// =================================================================================================

// Task 3
// Create a function that takes an object and a key as
// parameters. Then remove the key from the object and return
// the remaining object.

// function del_key_from_object(object, key) {
//     delete object[key]
//     return object
// }

// let my_obj = {
//     first: 'blue',
//     second: 'red',
//     third: 'black'
// }
// let result = del_key_from_object(my_obj, 'first')
// console.log(result)

// =================================================================================================
// =================================================================================================
// =================================================================================================
// INTERMEDIATE

// 1. Create a function that takes an object as a parameter and returns the 
// sum of all values that are numbers.

function sum_all_numbers(object) {
    let result = 0
    for (let item of Object.values(object)) {
        if (typeof (item) == 'number') {
            result += item
        }
    }
    return result
}
let obj = { first: 'blue', second: 5, third: 10 }
let result = sum_all_numbers(obj)
console.log(result)

// =================================================================================================

// 2. Create a function that takes an object as a parameter and 
// converts each key to the opposite case (back and forth) and returns a new object.


function make_key_opposite_case(object) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let new_object = {}

    for (let key of Object.keys(object)) {
        let newKey = ''

        for (let letter of key) {
            if (alphabet.includes(letter)) {
                newKey += letter.toUpperCase()
            } else {
                newKey += letter.toLowerCase()
            }
        }
        // newKey = object[key]
        new_object[newKey] = object[key]
    }
    return new_object
}


let myObject = {
    fiRst: 'blue',
    SECOND: 'red',
    Third: 'black'
}
// output:
// {
//     FIrST: 'blue',
//     second: 'red',
//     tHIRD: 'black'
// }
// result = make_key_opposite_case(myObject)
// console.log(result)
// =================================================================================================

// 3. Create a function that takes as many objects as you want 
// and returns an object that contains all the keys and values of the passed objects.
function merge_objects(objects) {
    let pool = {}
    for (let obj of objects) {
        pool = { ...pool, ...obj }
    }
    return pool
}
let my_objects = [
    { first: 'blue', second: 'red' },
    { third: 'black', fourth: 'white' },
    { fifth: 'green', sixth: 'yellow' },
    { seventh: 'purple', eighth: 'pink' }
]
result = merge_objects(my_objects)
console.log(result)

// Output:
// {
//     first: 'blue',   second: 'red',
//     third: 'black',  fourth: 'white',
//     fifth: 'green',  sixth: 'yellow',
//     seventh: 'purple', eighth: 'pink'
// }


// =======================================================================
function make_seconds_from_minutes(minutes) {
    return minutes * 60
}
result = make_seconds_from_minutes(15)
console.log(`15 minutes in seconds: ${result}`)
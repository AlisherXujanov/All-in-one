// ADVANCED METHODS OF ARRAYS
// find || filter || map || reduce
// ===========================================================
// ===========================================================
// find & filter & map - SYNTAX  =>   (item, index, array) => {} 
// ===========================================================
// reduce  -  SYNTAX   =>   [...].reduce((acc, next) => { return == acc })
//                          [...].reduce((acc, next) => { return == acc }, 0)
// ===========================================================
// ===========================================================
// 1. FIND  ->  finds an item in an array by condition
//          ->  finds the first item and stops
//    UZ: massivda shartni tekshiradi va shartni qanoatlantiradigan biror elementni topadi
//        birinchi elementni topadi va to'xtaydi
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'peach']

let result = fruits.find((item, index, array) => {
    let lastLetter = item[item.length-1].toLowerCase()
    if (!"aioue".includes(lastLetter)) {
        return item
    }
})
// console.log("Found item: ", result)
// ===========================================================
// ===========================================================
// 2. FILTER   ->  finds all items in an array by condition
//             ->  finds all items and returns them
//    UZ: massivda shartni tekshiradi va shartni qanoatlantiradigan barcha elementlarni topadi
//        barcha elementlarni topadi va qaytaradi
result = fruits.filter((item, index, array) => {
    let lastLetter = item[item.length-1].toLowerCase()
    if (!"aioue".includes(lastLetter)) {
        return item
    }
})
// console.log("Found items: ", result)
// ===========================================================
// ===========================================================
// 3. MAP  ->   creates a new array by all items but can change them on the way
//           UZ: Massivni hamma elementlarini o'zgartirib yangi massiv yaratadi
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let square_numbers = numbers.map((item, index, array) => {
    return item ** 2
})
// console.log("Square numbers: ", square_numbers)
// ===========================================================
// ===========================================================
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = numbers.reduce((acc, next) => { 
    // acc == 1,    next == 2     =>  3
    // ---------------------------------
    // acc == 3,    next == 3     =>  6
    // ---------------------------------
    // acc == 6,    next == 4     =>  10
    // ---------------------------------
    // acc == 10,   next == 5     =>  15
    // ---------------------------------
    // acc == 15,   next == 6     =>  21
    // ...
    // acc == 36,   next == 9     =>  45
    return acc + next
})
// console.log("Sum: ", sum)
// -------------------------------------
numbers = [10, 5, 2, 19, 55, 52, 6, 7, 8, 9]
let maxNum = numbers.reduce((acc,next) => {
    // acc == 10,   next == 5    =>   10
    // acc == 10,   next == 2    =>   10
    // ... 
    if(acc < next){
        return next
    } else{
        return acc
    }
})
// console.log("maxNum: ", maxNum)
// -------------------------------------

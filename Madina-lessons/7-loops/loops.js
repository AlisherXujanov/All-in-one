// 1st type of loop 
// STANDARD FOR-LOOP
//     1. creates a control vars    (control qilish uchun o'zgaruvchi yaratadi)
//     2. condition                 (shart yaratiladi)
//     3. controls first expression (birinchi o'zgaruvchi kontrol qiladi)


// for (let i=0;  i<5;  i++) {
//     console.log("Hello")
//     console.log("Madina")
// }
// index == 0;   true   =>   JS will read our code   =>  index+=1
// index == 1;   true   =>   JS will read our code   =>  index++
// index == 2;   true   =>   JS will read our code   =>  index++
// index == 3;   true   =>   JS will read our code   =>  index++
// index == 4;   true   =>   JS will read our code   =>  index++
// index == 5;   false  =>   JS will stop reading our code


// for (let index = 0; index < 5; index++) {
//     console.log("Index: ", index)
// }
// 0
// 1
// 2
// 3
// 4

// -----------------------------------------------------------
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango']

// fruits.length == 5
// for (let i=0; i<fruits.length; i++) {
//     console.log(fruits[i].toUpperCase())
// }
// console.log(fruits[0].toUpperCase())
// console.log(fruits[1].toUpperCase())
// console.log(fruits[2].toUpperCase())
// console.log(fruits[3].toUpperCase())
// console.log(fruits[4].toUpperCase())
// ...

// Create a loop that prints out the numbers from 0 to 10 (both included)
// ...
// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// for (let i = 1; i < 11; i++){
//     console.log("*".repeat(i))
// }
// ------------------------------
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
// for (let i = 10; i > 0; i--) {
//     console.log("*".repeat(i))
// }
// -----------------------------------------------------------
// for ... of ...
let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango']

for (let el of fruits) {
    console.log(el.toUpperCase())
}

// -----------------------------------------------------------
// for ... in ...

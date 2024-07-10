// INTERMEDIATE LEVEL (Junior)

// -----------------------------------------------------------------------------
// 3. Create a function that gives us 10 random even numbers from 1 to 100
// Math.random()  //  0-1   =>    0.002432589862
// 0.12432589862 * 100 = 12.432589862
// 0.752432589862 * 100 = 75.2432589862

function getRandomEvenNumber(how_many = 10) {
    let pool_of_evens = []
    while (pool_of_evens.length < how_many) {
        let num = parseInt(Math.random() * 100)
        if (num % 2 == 0) {
            pool_of_evens.push(num)
        }
    }
    return pool_of_evens
}
let r = getRandomEvenNumber()
// console.log(r)

// -----------------------------------------------------------------------------
// 4. Write a JavaScript program to compute the greatest common divisor (GCD) 
// of two positive integers.

function find_gcd(num1, num2) {
    let min = num1 > num2 ? num1 : num2
    for (let i = min; i > 1; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            return i
        }
    }
    return 1
}
r = find_gcd(10, 20)
// console.log(r)  // 10

// -----------------------------------------------------------------------------
// 5. Create a function that takes an integer as the number of rows and prints a
// triangle like this:
// *  
// * *  
// * * *  
// * * * * 
// * * * * *
function stars_triangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i))
    }
}
// stars_triangle(50)
// -----------------------------------------------------------------------------
// 6. Write a JavaScript program to sum the multiples of 3 and 5 numbers up to 100.
// -----------------------------------------------------------------------------

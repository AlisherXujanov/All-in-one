// ----------------------- BEGINNER -----------------------
// 1. Create a function that takes a list of integers and finds the sum of all even numbers.
function sum_evens(arr_of_numbes) {
    let result = 0
    for (let num of arr_of_numbes) {
        // 1  =>  false   =>  0
        // 2  =>  true    =>  2
        // 3  =>  false   =>  2
        // 4  =>  true    =>  6
        // 5  =>  false   =>  6
        // 6  =>  true    =>  12
        // 7  =>  false   =>  12
        // 8  =>  true    =>  20
        // 9  =>  false   =>  20
        if (num % 2 == 0) {
            result += num
        }
    }
    return result
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = sum_evens(arr)
// console.log(result)  // 20


arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
result = sum_evens(arr)
// console.log(result)  // 450

// ----------------------------------------------------------------
// ------------------------- INTERMEDIATE -------------------------
// 1. EN: Create a function that takes a string and counts the number of vowels.
// Then, returns an object with two fields - vowels in uppercase and vowels in lowercase.
let alphabet = 'abcdefghijklmnopqrstuvwxyz'

function count_upper_lower(str) {
    let uppers = []
    let lowers = []

    // 'MicroSOFT'   =>   ["M", "i", "c", "r", "S", "O", "F", "T]
    for (let letter of str.split("")) {
        if (alphabet.includes(letter)) {
            lowers.push(letter)
        } else {
            uppers.push(letter)
        }
    }
    return `Uppers: ${uppers}.  Lowers: ${lowers}.`
}
result = count_upper_lower('MicroSOFT')
// console.log(result)  // Uppers: M,S,O,F,T.  Lowers: i,c,r.

result = count_upper_lower('APple')
// console.log(result)  // Uppers: A,P.  Lowers: p,l,e.

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// 2. Create a function that takes an integer and finds only even digits and sums them up
// 1234567890   =>>   2, 4, 6, 8, 0  =>>  20

function sum_whole_evens(number) {
    let result = 0
    for (let num of String(number).split("")) {
        if (parseInt(num) % 2 == 0) {
            result += parseInt(num)
        }
    }
    return result
}
let number = 1234567890
result = sum_whole_evens(number)
// console.log(result)  // 20
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ------------------------- ADVANCED -----------------------------
// 1. Print stars (*) in a pyramid form with N number of steps.
//       *
//      ***
//     *****
//    *******
//   *********
function create_pyramid_n_lines(lines) {
    for (let i = 1; i <= lines; i++) {
        // ----*
        // ---* *
        // --* * *
        // -* * * *
        // * * * * *
        let needed_spaces = lines - i
        console.log(" ".repeat(needed_spaces) + "* ".repeat(i))
        // TODO: Delete spaces after each star so that the piramid remains spaceless
    }
}
// create_pyramid_n_lines(5)
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// 2. Write a program to guess a number from 1 to 10.
// Note: the user is offered to enter a guess. If the user guesses wrong,
// then the hint appears again until the guess is correct, upon successful guessing
// the user will receive the message "Well guessed!" and the program will exit.

let lives = 5
let randomNumber = parseInt(Math.random() * 100) + 1
let enteredNumbers = []


function askAgain() {
    if (confirm("Do you want to play again?")) {
        lives = 5
        randomNumber = parseInt(Math.random() * 100) + 1
        enteredNumbers = []
        return true
    } else {
        alert("Goodbye!")
        return false
    }
}


while (lives > 0) {
    let answer = parseInt(prompt("Guess a number from 1 to 100"))  //  "2" -> 2

    if (isNaN(answer)) {
        alert("Please enter a number")
        continue // restart the loop
    }

    if (enteredNumbers.includes(answer)) {
        alert("You've already entered this number")
        continue // restart the loop
    } else {
        enteredNumbers.push(answer)
    }

    if (answer > randomNumber) {
        lives--
        if (lives == 0) {
            if (askAgain() == false) {
                break
            }
        }
        alert("Too high! You have " + lives + " lives left.")
    } else if (answer < randomNumber) {
        lives--
        if (lives == 0) {
            if (askAgain() == false) {
                break
            }
        }
        alert("Too low! You have " + lives + " lives left.")
    } else {
        alert("Well guessed! YOU WIN!")
        if (askAgain() == false) {
            break
        }
    }
}

if (lives == 0) {
    alert("GAME OVER! The number was " + randomNumber)
}


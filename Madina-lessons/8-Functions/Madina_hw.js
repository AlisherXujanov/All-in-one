// ----------------------------------------------------------------
// ------------------------- INTERMEDIATE -------------------------
// 5. Write a function that takes two arguments, a string and a letter,
// and the function will count the number of this specified letter in the string.

function countLetterInStr(str, target_letter) {
    let pool = 0
    // Steps:
    // 1. Create a loop for taking each letter in the string
    for (let i = 0; i < str.length; i++) { // 0-5,   0,1,2,3,4
        // retrieve a letter by index that's i here
        // Hello  =>   str[0]  =>  H
        // Hello  =>   str[1]  =>  e
        // ...
        // Hello  =>   str[4]  =>  o
        let letter = str.charAt(i)
        // 2. Check if the letter is equal to the target_letter
        if (letter == target_letter) {
            // 3. If so, them increment the pool by 1
            pool += 1
        }
    }
    return pool
}
let text = "hello"
let letter = "s"
// let result = countLetterInStr(text, letter)
// console.log(result) // 0

text = "Hello world"
letter = 'o'
// result = countLetterInStr(text, letter)
// console.log(result) // 2

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ------------------------- ADVANCED -----------------------------
// 1. Print stars (*) in a pyramid form with N number of steps.
function create_pyramid_n_lines(lines) {
    for (let i = 0; i <= lines; i++) {
        // ----*
        // ---* *
        // --* * *
        // -* * * *
        // * * * * *
        // let needed_spaces = lines - i
        // console.log(" ".repeat(needed_spaces) + "*".repeat(i))
        // ========================================================================
        //       *
        //      ***
        //     *****
        //    *******
        //   *********
        let needed_spaces = lines - i
        console.log(" ".repeat(needed_spaces) + "*".repeat(2 * i + 1))
        // i  ==  0    =>   2 * 0 + 1  =>  1            *
        // i  ==  1    =>   2 * 1 + 1  =>  3           ***
        // i  ==  2    =>   2 * 2 + 1  =>  5          *****
        // i  ==  3    =>   2 * 3 + 1  =>  7         *******
        // i  ==  4    =>   2 * 4 + 1  =>  9        *********
    }
}
create_pyramid_n_lines(10)
// Mobile Legends  =>  Moba   =>  5x5
// Very good strategy game    =>  enhance your brain and crytical thinking
// Interesting  and  fun      =>  you will never get bored
// ----------------------------------------------------------------
// ----------------------------------------------------------------

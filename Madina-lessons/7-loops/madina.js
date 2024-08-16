// Task 1
function sum_evens(arr) {
    let sum = 0
    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num
        }
    }
    return sum
}
let arr_of_numbers = [23, 45, 666, 332]
let result = sum_evens(arr_of_numbers)
// console.log(result)



// Task 2
function get_max(arr) {
    let max = arr[0]
    for (let num of arr) {
        if (num > max) {
            max = num
        }
    }
    return max
}
arr_of_numbers = [23, 45, 233, 123, 1]
result = get_max(arr_of_numbers)
// console.log(result)



// Task 3
function get_min(arr) {
    let min = arr[0]
    for (let num of arr) {
        if (num < min) {
            min = num
        }
    }
    return min
}
arr_of_numbers = [23, 45, 233, 123, 1]
result = get_min(arr_of_numbers)
// console.log(result)



// Task 4
function get_random(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'number') {
            result += arr[i]
        }
    }
    // 0 =>  23        =>  23
    // 1 =>  'sweet'   =>  23
    // 2 =>  34        =>  57
    // ...
    return result
}
arr_of_numbers = [23, 'sweet', 34, 55, 'hello', 1]
result = get_random(arr_of_numbers)
// console.log(result)



// Task 5
function get_number(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current_number = i + 1

        if (current_number % 3 == 0 && current_number % 5 == 0) {
            console.log("FizzBuzz")
        } else if (current_number % 3 == 0) {
            console.log("Fizz")
        } else if (current_number % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(current_number)
        }
    }
}
arr_of_numbers = "-".repeat(100)
// get_number(arr_of_numbers)

// =========================================================================
// Intermediate

// Task 6
function cases(strings) {
    let lowercase_vowels = []
    let uppercase_vowels = []

    for (let letter of strings) {
        if ('aioue'.includes(letter)) {
            lowercase_vowels.push(letter)
        }
        else if ('AIOUE'.includes(letter)) {
            uppercase_vowels.push(letter)
        }
    }
    console.log(`Lowercase ${lowercase_vowels.toString()}
Uppercase ${uppercase_vowels.toString()}`)
}
// cases('WOnderFUl')



// Task 7
function sum_of_evens_from_whole_number(whole_number) {
    let sum_of_evens = 0

    for (let num of String(whole_number)) {  // whole_number ==  "123456789"
        // "1" + "2"  ===  "12"
        //  1  +  2   ===   3 
        let num_as_int = parseInt(num)       // "1"  =>  1
        if (num_as_int % 2 == 0) {
            sum_of_evens += num_as_int
        }
    }
    return sum_of_evens
}
let number = 123456789
result = sum_of_evens_from_whole_number(number)
// console.log(result)



// Tasks 8
function getRandomEvenNumbers(count) {
    // count means that this-many whole-even number we should get from function
    let random_even_numbers = []
    while (random_even_numbers.length < count) {
        // Math.random()   ===>>>   0 - 1    =>>>>   0.1242342124
        // 0.1242342124 * 100  ==>> 12.42342124  => parseInt(...)  ==>> 12
        let randomNumber = parseInt(Math.random() * 100)
        if (randomNumber % 2 == 0 && !random_even_numbers.includes(randomNumber)) {
            random_even_numbers.push(randomNumber)
        }
    }
    return random_even_numbers
}
const r = getRandomEvenNumbers(10)
console.log(r)



// Task 9
// function gcd(a, b) {
// if (a <= 0 || b <= 0) {
// throw new Error('Both numbers must be positive integers.');
// }
// while (b !== 0) {
// let temp = b;
// b = a % b;
// a = temp;
// }
// return a;
// }
// const num1 = 56;
// const num2 = 98;
// const result = gcd(num1, num2);
// console.log(The GCD of ${num1} and ${num2} is ${result}.);



// Task 10
// function stars_triangle(rows) {
// for (let i = 1; i <=rows; i++) {
// console.log("*".repeat(i))
// }
// }
// stars_triangle(5)



// Task 11
// function sum_up(limit) {
// let sum = 0;

// for (let i = 1; i < limit; i++) {
// if (i % 3 === 0 || i % 5 === 0) {
// sum += i;
// }
// }

// return sum;
// }

// const limit = 100;
// const result = sum_up(limit);
// console.log(result);
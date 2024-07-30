//Homework1 & 
// let time = 1000
// let counter = 0
// let interval = setInterval(fn,time)
// function fn() {
//     console.log(`${counter} second is passed`)
//     //Homewor2
//     if (counter === 10) {
//         clearInterval(interval)
//         console.log("Stop interval")
//     }
//     counter++
// }
// =======================================================
// =======================================================
//Homework3
// let sentence = "Hello World, welcome to the universe";
// setTimeout(() => {
//     console.log(sentence)
// }, 3000)
// =======================================================
// =======================================================
// UNIX time  =>  1970 -> now  ==>   in milliseconds
function calculateTimeTaken(callback_ismi_farqi_yuq, url) {
    let startTime = new Date()
    callback_ismi_farqi_yuq(url)
    let endTime = new Date()
    let timeTaken = endTime.getTime() - startTime.getTime()
    console.log(`Total time taken: ${timeTaken / 1000} seconds`)


    setTimeout(callback_ismi_farqi_yuq, timeTaken, url)
}

function action(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}
// const URL = "https://reqres.in/api/users?page=2"
// calculateTimeTaken(action, URL)
// =======================================================
// =======================================================
// MEMOIZATION
const cache = {};

function memoization(callback) {
    return function (arg) {
        if (cache[arg]) {
            console.log("This is coming from MEMORY")
            return cache[arg];
        }
        console.log("This is coming from FUNCTION")
        const result = callback(arg);
        cache[arg] = result;
        return result;
    }
}
function recirsiveFactorial(num) {
    if (num === 0) return 1;
    return num * recirsiveFactorial(num - 1);
}
// console.log(memoization(recirsiveFactorial)(5))  # 120  ->  From FUNCTION
// console.log(memoization(recirsiveFactorial)(5))  # 120  ->  From MEMORY
// console.log(memoization(recirsiveFactorial)(5))  # 120  ->  From MEMORY
// console.log(memoization(recirsiveFactorial)(5))  # 120  ->  From MEMORY
// =======================================================
// =======================================================


// 1. Simple Timer: 
// Create a function that delay time is increased every time by twice.
// RU: Создайте функцию, задержка времени которой увеличивается каждый раз вдвое.

async function startTimer(max_seconds = 10, delay = 1) {
    //* 1. Using a loop
    //* Here, this loop actually works but fails the console.log currentDelay
    //* The reason is JS code do not wait for the setTimeout to finish 
    //* before moving to the next line of code
    // let currentDelay = delay;
    // while (max_seconds > currentDelay) {
    //     setTimeout(() => {
    //         console.log(`Delay: ${currentDelay}`);
    //     }, currentDelay * 1000);
    //     currentDelay *= 2;
    // }
    // console.log(`Max seconds reached: ${max_seconds}`);

    //* To fix this we use a Promise and async/await
    let currentDelay = delay;
    while (max_seconds > currentDelay) {
        await new Promise(resolve => setTimeout(resolve, currentDelay * 1000));
        console.log(`Delay: ${currentDelay}`);
        currentDelay *= 2;
    }
    console.log(`Max seconds reached: ${max_seconds}`);

    // -----------------------------------------------------
    // -----------------------------------------------------
    //* Using a recursive function
    // if (max_seconds <= 0) return;
    // else if (max_seconds < delay) return;
    // console.log(`Delay: ${delay}`);
    // const DOUBLE_DELAY = delay * 2
    // if (max_seconds > DOUBLE_DELAY) {
    //     setTimeout(() => {
    //         startTimer(max_seconds, DOUBLE_DELAY);
    //     }, delay * 1000);
    // } else {
    //     console.log(`Max seconds reached: ${max_seconds}`);
    // }
    // -----------------------------------------------------
    // -----------------------------------------------------
}
startTimer()

// 2. Stopwatch: 
// Improve the previous function by adding the ability to stop the timer. You'll need to use clearInterval for this.
// RU: Улучшите предыдущую функцию, добавив возможность остановить таймер. Для этого вам понадобится использовать clearInterval.
function startStopwatch() {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(count);
    }, 1000);

    return function stop() {
        clearInterval(intervalId);
    }
}
const stop = startStopwatch();
// When you want to stop the stopwatch, call the returned function
// stop();
// ex: 
// startStopwatch(); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// stop(); // stops the stopwatch


// 3. Delayed Message: 
// Write a function that takes a message and a delay in seconds, then prints that message to the console after the delay. Use setTimeout for this.
// RU: Напишите функцию, которая принимает сообщение и задержку в секундах, а затем выводит это сообщение в консоль после задержки. Используйте setTimeout для этого.
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay * 1000);
}

// 4. With Callbacks:
// Create a function that is for recursively calling itself after a delay. The function should take a number and a callback function as arguments. The function should call the callback with the current number and then call itself with the current number + 1 after a delay.
// RU: Создайте функцию, которая рекурсивно вызывает себя после задержки. Функция должна принимать число и функцию обратного вызова в качестве аргументов. Функция должна вызывать обратный вызов с текущим числом, а затем вызывать себя с текущим числом + 1 после задержки.
function recursiveFunction(number, callback) {
    setTimeout(() => {
        callback(number);
        recursiveFunction(number + 1, callback);
    }, 1000);
}

// ex:
// recursiveFunction(1, (number) => {
//     console.log(number);
// });

// 5. With fetch:
// This function should tell how much time it took to get a response from the server.
// RU: Эта функция должна сообщить, сколько времени потребовалось для получения ответа от сервера.
function timeToGetServerResponse() {
    const startTime = new Date();
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(() => {
            console.log(`Time to get the response: ${new Date() - startTime}ms`);
        });
}

// Improve the previous function by adding two arguments: the URL and a callback function. The function should call the callback with the time it took to get a response.
// RU: Улучшите предыдущую функцию, добавив два аргумента: URL и функцию обратного вызова. Функция должна вызывать обратный вызов с временем, которое потребовалось для получения ответа.
function timeToGetServerResponseWithCallback(url, callback) {
    const startTime = new Date();
    fetch(url)
        .then(() => {
            callback(new Date() - startTime);
        });
}


// 6. Memoization -> Caching the results of a function:
// RU: Мемоизация -> Кэширование результатов функции:
// Create a function that takes a function as an argument and returns a new function. The new function should cache the results of the original function.
// RU: Создайте функцию, которая принимает функцию в качестве аргумента и возвращает новую функцию. Новая функция должна кэшировать результаты исходной функции.

function memoize(func) {
    const cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        }
        const result = func(arg);
        cache[arg] = result;
        return result;
    }
}

// - 1e9 == 1 * 10^9 == 1 000 000 000  (1 billion)
// - 1e6 == 1 * 10^6 == 1 000 000  (1 million)
// - 1e3 == 1 * 10^3 == 1 000  (1 thousand)

const slowFunc = (n) => {
    for(let i = 0; i < 1e9; i++) {} // This loop is just to delay the function
    return n*n;
}
const memoizedSlowFunc = memoize(slowFunc);

console.log(memoizedSlowFunc(5)); // This call should take some time
console.log(memoizedSlowFunc(5)); // This call should be almost instant



// 7. Throttle Function -> Slows down the execution of a function:
// RU: Функция торможения -> Замедляет выполнение функции:

// We need these kind of functions when we want to limit the number of times a function is called. For example, when we want to limit the number of times a function is called when a user scrolls the page.
// RU: Нам нужны такие функции, когда мы хотим ограничить количество вызовов функции. Например, когда мы хотим ограничить количество вызовов функции, когда пользователь прокручивает страницу.

// Create a function that takes a function and a delay as arguments. The returned function should be able to call the original function only once in the given delay.
// RU: Создайте функцию, которая принимает функцию и задержку в качестве аргументов. Возвращаемая функция должна иметь возможность вызывать исходную функцию только один раз в заданной задержке.

function throttle(func, delay) {
    let canCall = true;
    return function () {
        if (canCall) {
            func();
            canCall = false;
            setTimeout(() => {
                canCall = true;
            }, delay);
        }
    }
}


// 8. Throttle (advanced):
// Throttle Function Exercise:

// Create a function throttle(func, delay) that takes a function 
// func and a delay as parameters. This function should return a 
// throttled version of the original function that, as long as it 
// continues to be invoked, will not be triggered more than once 
// every delay milliseconds.
function throttledExampleFunc(func, delay) {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            lastTime = now;
            return func(...args);
        }
    }
}

let count = 0;
const exampleFunc = () => { count++; console.log(count); };
const throttledExampleFunc = throttle(exampleFunc, 2000);

// Call the throttled function multiple times with less than 2 seconds between each call
throttledExampleFunc();
throttledExampleFunc();
throttledExampleFunc();


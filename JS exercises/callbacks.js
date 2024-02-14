// 1. Simple Timer: 
// Write a JavaScript function that starts a timer that counts up every second and displays the count in the console. Use setInterval for this.
// RU: Напишите функцию JavaScript, которая запускает таймер, который увеличивается каждую секунду и отображает счет в консоли. Используйте setInterval для этого.

function startTimer() {
    let count = 0;
    setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
}

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

// EX:
// Например:
function memoization(func) {
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


// 8. Memoization (advanced):
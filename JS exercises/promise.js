// Here's a step-by-step guide on how to use new Promise() in JavaScript:


// 1. Create a new Promise: 
// A Promise is an object that represents a value which may not be available 
// yet, but will be resolved at some point in the future or it will be rejected. 
// To create a new Promise, you use the new Promise() constructor.
// RU: Создание нового Promise:
// Promise - это объект, который представляет значение, которое может быть 
// недоступно в данный момент, но будет разрешено в какой-то момент в будущем или 
// будет отклонено. Чтобы создать новый Promise, используйте конструктор new Promise().

let promise1 = new Promise(function (resolve, reject) {
    // executor function
});


// 2. Executor Function:
// The executor function takes two parameters, resolve and reject, which are both functions. The resolve function is called when the Promise is resolved and the reject function is called when the Promise is rejected.
// RU: Функция исполнителя (resolve, reject):
// Функция исполнителя принимает два параметра, resolve и reject, которые оба являются функциями. Функция resolve вызывается, когда Promise разрешен, а функция reject вызывается, когда Promise отклонен.

let promise2 = new Promise(function(resolve, reject) {
    // some asynchronous operation

    if (/* operation successful */'') {
        resolve(value); // Promise2 is resolved with `value`
    } else {
        reject(error); // Promise2 is rejected with `error`
    }
});


// 3. Promise States:
// A Promise can be in one of three states: pending, fulfilled, or rejected. 
// The Promise is initially in the pending state. When the resolve function is 
// called, the Promise moves to the fulfilled state. When the reject function 
// is called, the Promise moves to the rejected state.

// RU: Состояния Promise (ожидание, выполнено или отклонено):
// Promise может находиться в одном из трех состояний: 
// ожидание, выполнено или отклонено. Promise изначально находится 
// в состоянии ожидания. Когда вызывается функция resolve, 
// Promise переходит в состояние выполнено. Когда вызывается функция 
// reject, Promise переходит в состояние отклонено.


// 4. Then and Catch:
// The then method is called when the Promise is resolved. 
// The catch method is called when the Promise is rejected.
// RU: Then и Catch:
// Метод then вызывается, когда Promise разрешен. 
// Метод catch вызывается, когда Promise отклонен.

promise2
    .then(function (value) {
        // handle resolved value
    })
    .catch(function (error) {
        // handle rejected value
    });


// 5. Finally:
// The finally method is called when the Promise is settled, whether 
// it was resolved or rejected.
// promise
// RU: Finally (наконец):
// Метод finally вызывается, когда Promise завершен, независимо 
// от того, был ли он разрешен или отклонен.

//     .then(function(value) {
//*         // handle resolved value
//     })
//     .catch(function(error) {
//*         // handle rejected value
//     })
//     .finally(function() {
//*         // code to be executed regardless of the Promise's state
//     });
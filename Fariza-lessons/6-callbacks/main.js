




// WHAT IS CALLBACK?
// callback in russian is => обратный вызов

// Callback is a function that is passed as an argument to 
// another function and is executed after some operation has been completed.
// RU: Callback - это функция, которая передается в качестве аргумента в
// другую функцию и выполняется после того, как какая-то операция была завершена.
// UZ: Callback - bu boshqa funksiya sifatida argument sifatida uzatiladi va
// biror operatsiya yakunlangandan keyin bajariladi.

// function showMessage(name) {
//     console.log(`Hello ${name}`)
// }
// function sendMessage(name) {
//     console.log(`Sending message to ${name}`)
// }
// function prepareFood(name) {
//     console.log(`Preparing food for ${name}`)
// }
// // //! -----------------------------------------------
// function getName(cb) {
//     let CName = "John"
//     cb(CName)
// }
// getName(showMessage)
// getName(sendMessage)
// getName(prepareFood)
// =======================================================
// function showItem(item, index, arr) {
//     console.log(item, index)
// }
// ['a','b','c','d','e'].filter(showItem)
// =======================================================

// Use setInterval
// const oneSecond = 1000
// let interval = setInterval(testFn, oneSecond)

// let counter = 1
// function testFn() {
//     console.log(`Hello world ${counter}`)
//     if (counter === 5) {
//         clearInterval(interval)
//         console.log("Stop interval")
//     }
//     counter++
// }

// ------------------------------------------------------------------
// let names = ["Aziz", "Shaxzod", "Shoxrux", "Parviz", "Firuz", "Adham"]
// const oneSecond = 1000

// let interval = setInterval(showName, oneSecond)
// let counter = 0
// function showName() {
//     let cName = names[counter]
//     console.log(cName)
//     counter++
//     if (counter == names.length) {
//         clearInterval(interval)
//         console.log("NO NAME LEFT...")
//         console.log("Stop interval")
//     }
// }

// setTimeout(() => {
//     console.log("Hello world")
// }, 2000)
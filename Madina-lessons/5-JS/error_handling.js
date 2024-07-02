// "use strict"
// ________________ undefined & null _____________________
// undefined -> не определено
// null      -> пусто

// -----------------------------------------------------
// if (test()) {}  // "", 0, false, null, undefined, NaN
// else {}
// -----------------------------------------------------
// let x = Number(String(parseInt("24") + 5))
// console.log(typeof("29")===typeof(x)  ?  24 : "Sardor")

// _______________  HANDLING EMPTY VALUES  _______________
//   ... ? ... : ...  ->  Ternary Operator -> Тенарный оператор
//   is used when the first value is true

// if (2==2) {
//     console.log("True")
// } else {
//     console.log("False")
// }
// 2 == 2 ? console.log("True") : console.log("False")
// --------------------------------------------
//   || (OR) -> is used when the first value is true
//          undefined, null, 0, ''

// let x = 0
// console.log(x || "Test")
// --------------------------------------------
//   ?? (Nullish Coalescing) -> null или undefined
//          is used when the first value is null or undefined

// let x = false
// console.log(x ?? "Test")
// --------------------------------------------
// _________________ Error types __________________________
// 1. Syntax Error      =>  Синтаксическая ошибка
//                      EX:  "...
// 2. Reference Error   =>  Ошибка ссылки
//                      EX:  console.log(a) 
// 3. Type Error        =>  Ошибка типа
//                      EX:  let a = 1
//                           console.log(a()) 
// ...


// __________________ Error Status Codes __________________
// 400 - Bad Request            => Неверный запрос
// 401 - Unauthorized           => Не авторизован
// 403 - Forbidden              => Запрещено
// 404 - Not Found              => Не найдено
// 500 - Internal Server Error  => Внутренняя ошибка сервера
// 503 - Service Unavailable    => Сервис недоступен

// ___________________ try & catch _________________________
// It is used to handle errors
// RU: Используется для обработки ошибок

// try () {
// code
// } catch (error) {
// code
// // }
// console.log("Started...")
// let a = 1
// try {
//     console.log(a())  // Syntax Error is not handled
// } catch (error) {
//     console.warn("Error happedend")
// }
// console.log("Continue...")


// ____________________ throw ________________________________
// throw  => throw new Error('Message')

// Is used to throw an error when something goes wrong
// we use it in order to create our own rules for our code
//          ------------------
// RU: Мы используем throw, чтобы создать свои
// собственные правила для нашего кода
// function test(par) {
//     if (typeof (par) != 'number') {
//         let error = new Error('NOMER EMAS!')
//         throw error
//     }
//     return par + 10
// }
// console.log(test("10"))



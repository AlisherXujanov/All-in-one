// RECURSIVE FUNCTIONs

// RULSEs:
// 1. Recursive function should always have to call itself.
// RU: Рекурсивная функция должна всегда вызывать саму себя.
// UZ: Qaytaruvchi funksiya doimo o'zini chaqirishi kerak.
// --------------------------------------------------------
// 2. It always has to pass a different parameter to itself
// RU: Она всегда должна передавать самой себе другой параметр.
// UZ: U doimo o'ziga boshqa parametr uzatishi kerak.
// --------------------------------------------------------
// 3. It always should check for a condition to escape the infinite loop
// RU: Она всегда должна проверять условие для выхода из бесконечного цикла.
// UZ: U har doim shartni tekshirib kurishi kerak cheksiz qaytarilishdan chiqish uchun.


// EXAMPLE 1:
// countDown   ->  считаетВниз   ->  pastgaSanash
function countDown(number) {
    console.log(number)
    if (number == 1){ 
        return
    }
    return countDown(number - 1)
}
countDown(10)
// 10
// 9
// ...
// 1
// ========================================================
// EXAMPLE 2:
// countUp   ->  считаетВверх   ->  yuqorigaSanash
function countUp(number, counter=1) {
    console.log(counter)
    if (number == counter){ 
        return
    }
    return countUp(number, counter+1)
}
countUp(10)
// ========================================================


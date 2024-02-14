let x = "Text"

// slice() 
// Exercise 1: Given a string str, 
// return the first half of the string using slice().
// RU: Дана строка str. Вам нужно вернуть первую половину строки, используя slice().
// Например: "Cтрока" => "Cтр"
// ------------------------------------------
// Exercise 2: Given a string str, return the last three characters of the string using slice().
// RU: Дана строка str. Вам нужно вернуть последние три символа строки, используя slice().
// Например: "Cтрока" => "ока"
// ====================================================================================================
// replace()
// Exercise 1: Given a string str, replace all occurrences of the letter "a" with the letter "e" using replace().
// RU: Дана строка str, замените все вхождения буквы "a" на букву "e", используя replace().
// Например: "Атомная станция" => "етомнeя стeнцeя
// ------------------------------------------
// Exercise 2: Given a string str, replace the first occurrence of the word "world" with the word "universe" using replace().
// RU: Дана строка str, замените первое вхождение слова "world" на слово "universe", используя replace().
// Например: "Hello world" => "Hello universe"
// ====================================================================================================
// padStart and padEnd
// Use these to center a word if the length of the word is less than expected.
// RU: Используйте эти методы, чтобы центрировать слово, если длина слова меньше ожидаемой.
// Например: "Hello"   =>  "***Hello***"
// ====================================================================================================
// INTERMEDIATE EXERCISES

// ============================================
// 1. You have a full name "Vladimir Vladimirovich Putin".
// The output should be "Putin  V. V"
// RU: У вас есть полное имя "Vladimir Vladimirovich Putin".
// Выведите в консоль "Putin V. V" используя slice() и replace()
// ============================================
// ============================================
// 2. You have a string and devide it into two parts from the middle. Then repeat each part n times
// RU: У вас есть строка и вы ее делиете на две части посередине. 
// Затем повторяете каждую часть n раз

// Example:
// let test_string = "..."
// let n = ...
// EXAMPLE - 1:    
// INPUT:  test_string = "Hello world",  n = 2
// OUTPUT: "HelloHello  WorldWorld"
// -------------
// EXAMPLE - 2:    
// Даём:  test_string = "Vladimir",  n = 3
// Берём: "VladVladVladimirimirimir"

// RU: ШАГИ:
// 1. Найдите середину строки
// 2. Разделите строку на две части
// 3. Повторите каждую часть n раз и объедините их
// ====================================================================================================

// 3. You have some kind of string. You have to get the first letter and replace it in all other 
// places except first occurence with any kind of wanted sign  "$, #, @, *, ...". 
// RU: У вас есть строка. Вам нужно получить первую букву и заменить ее во всех остальных
// местах кроме первого на любой желаемый знак "$, #, @, *, ..."
// -------------
// INPUT:   let string = "This is test text"
//          let symbol = "$"
// OUTPUT:  "This is $es$ $ex$"
// ====================================================================================================
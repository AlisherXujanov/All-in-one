// let unique = [1, 2, 3, 4, 3, 2, 1];
// 1   =>  _ 2, 3, 4, 3, 2, 1
// 2   =>  1, _, 3, 4, 3, 2, 1
// 3   =>  1, 2, _, 4, 3, 2, 1

// function findUniqueElement(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let before = arr.slice(0, i)
//         let after = arr.slice(i + 1)
//         if (!before.includes(arr[i]) &&  !after.includes(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// let props = findUniqueElement(unique);
// console.log("res", props);
// ==================================================================
// ==================================================================
// FizzBuzz
// function evenOdd(arr) {
//     let last = arr[arr.length - 1]
//     if (last % 2 == 0) {
//         return "Even" // Juft son
//     } else {
//         return "Odd" // Toq son
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let result = evenOdd(arr);
// console.log(result);
// ==================================================================
// ==================================================================
// let arrNums = [1, 2, 3, 1, 2, 3];
// let k11 = 2;
// function containDuplicate(nums, k) {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]]) {
//             if (i - obj[nums[i]] <= k) return true;
//         }
//         obj[nums[i]] = i;
//     }
//     return false;
// }
// let resOfDup = containDuplicate(arrNums, k11);
// console.log(resOfDup)
// ==================================================================
// ==================================================================
// //ex2 findEvensAndOdds
// let str = [2, 8, 9, 6, 3, 4, 7];
// function findEvensAndOdds(s) {
//     let odds = [];
//     let even = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] % 2 === 0) {
//             even.push(s[i]);
//         } else {
//             odds.push(s[i]);
//         }
//     }
//     return [odds, even];
// }
// let even = findEvensAndOdds(str);
// console.log(even);

// //ex2 findNumberOfEvens
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function findNumOfEvens(nums) {
//     let evens = [];
//     let numOfEv = 0;
//     nums.forEach((num) => {
//         if (num % 2 === 0) {
//             numOfEv += 1;
//             evens.push(num);
//         }
//     });
//     return [numOfEv, evens];
// }
// let tt = findNumOfEvens(numbers);
// console.log("evens", tt);

// //ex3
// let word = "Hello";
// function wordOccurence(s) {
//     let sp = s.split("")
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === s[i + 1]) {
//             return true
//         } else {
//             return false
//         }
//     }
//     return sp
// }

// let resOfWord = wordOccurence(word);
// console.log(resOfWord)

// //ex4
// let words = "Helloooo";
// function findChar(s) {
//     let obj = {};
//     let item = 0;
//     for (let i = 0; i < s.length; i++) {
//         item = s[i];
//         if (obj[item]) {
//             obj[item] += 1
//             console.log(obj[item])
//         } else {
//             obj[item] = 1
//         }
//     }
//     console.log(obj)
// }
// findChar(words)

// //ex5 findHowManyVowelsAndConstantsItHas
// // let words1 = ' a, e, i, o, u';
// // function findVowels(s){
// //   let spl = s.split(",")
// //   console.log(spl)
// //   let vowels = [];
// //   for(let i = 0; i < spl.length; i++){
// //     spl.indexOf(spl[i])
// //   }
// // }
// // findVowels(words1)

// //ex6 tripleArray
// let numsArr = [1, 2, 3, 4]
// function tripleArray(arr) {
//     let multiplier = [];
//     arr.map((nums) => {
//         if (nums) {
//             multiplier.push(nums * 3)
//         }
//     })
//     return multiplier
// }
// let result1 = tripleArray(numsArr)
// console.log(result1)

// //ex7 matchingNums
// let x = [1, 2, 3]
// let y = [3, 4, 5]
// function matchingNums(x, y) {
//     let match = 0
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== y[i]) {
//             match = x[i]
//         }
//     }
//     console.log(match)
// }
// matchingNums(x, y)

// //ex8
// // let words2 = ["Cyber","Security","JavaSkript","HTML","CSS","Web"]
// // let n = 5
// // function findLongestArray(arr){
// //   let longest = 0;
// //   for(let i = 0; i < arr.length; i++){
// //     if(arr[i].length > longest){
// //       longest = arr[i].length
// //     }if(longest > n){
// //       console.log(longest)
// //     }
// //   }
// // }
// // findLongestArray(words2)

// //ex1
// let words2 = ["Cyber", "Security", "JavaSkript", "HTML", "CSS", "Web"]
// let n = 5
// function findLongestArray(arr, n) {
//     let item = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > n) {
//             item.push(arr[i])
//         }
//     }
//     console.log(item)

// }
// findLongestArray(words2, n)


// //ex
// // let numbers2 = [1, 22, 122, 11, 43, 23, 123]
// // let target = 133
// // function findTarget(nums,target){
// //   let findNum = []
// //   let minus = 0
// //   for(let i = 0 ; i < nums.length; i++){
// //     minus =  target - nums[i]
// //     while(minus < target){
// //       minus += nums[i]

// //     }

// //   }
// //   return minus
// // }
// // let resOfN = findTarget(numbers2,target)
// // console.log(resOfN)

// //ex2
// let numbers2 = [1, 22, 122, 11, 43, 23, 123]
// let target = 44
// function findTarget(nums, target) {
//     let obj = {}
//     let item = 0
//     let res = 0
//     for (let i = 0; i < nums.length; i++) {
//         item = nums[i]
//         // obj[item] = i
//         if (obj[item]) {
//             obj[item] += 1
//             console.log('obj', obj)
//         } else {
//             obj[item] = 1
//         }
//     }

// }
// findTarget(numbers2, target)
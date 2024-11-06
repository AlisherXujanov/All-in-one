// // 1. Write a JS function to reverse a list at a specific location.
// function reverse_at_specific_location(arr, start, end) {
//     let first = arr.slice(0, start)
//     let last = arr.slice(end + 1)
//     let slice = arr.slice(start, end + 1).reverse()
//     return [...first, ...slice, ...last]
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let res = reverse_at_specific_location(arr, 2, 6)
// console.log(res) // [1, 2, 7, 6, 5, 4, 3, 8, 9, 10]
// ================================================================
// ================================================================
// 2.  Write a JS function find the length of the 
// longest sub-sequence in a list.
// [1, 5, 4, 6, 2, 3, 4, 9]  =>  4

function find_longest_increasing_sequence(arr) {
    let sequence_lengths = [1]
    // 1. Find last sequence length
    // 2. If the next number is greater than prev, then increment last-seq
    // 3. Else, create another sequence length as 1
    for (let i = 0;   i < arr.length-1;  i++) {
        // let last_length = sequence_lengths[sequence_lengths.length - 1]
        if (arr[i] < arr[i + 1]) {
            sequence_lengths[sequence_lengths.length - 1] += 1
        } else {
            sequence_lengths.push(1)
        }
    }
    return Math.max(...sequence_lengths)
}
let arr2 = [1, 5, 4, 6, 2, 3, 4, 9]
let found_result = find_longest_increasing_sequence(arr2)
console.log(found_result)
// ================================================================
// ================================================================




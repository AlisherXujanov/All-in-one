// ----------------------- ADVANCED -----------------------
// --------------------------------------------------------
// 1.


// --------------------------------------------------------
// 2. Write a function to get a copy of an object where 
// the keys became values, and the values became keys.
// You just need to swap keys and values
function swap_key_val(object) {
    let pool = {} // hovuz
    // for (let [key, val] of Object.entries(object)) {
    for (let key in object) {
        let val = object[key]
        pool[val] = key
    }
    return pool
}
// Test case
let testObject = {
    name: "name 1",
    surname: "surname 1",
    age: 20,
    address: "address 1"
}
let result = swap_key_val(testObject)
console.log(result)


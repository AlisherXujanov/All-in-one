// ----------------------- INTERMEDIATE ----------------------- //

// 4. EN: Create a function that takes an object as a parameter and
// sorts it by its keys
function sortByKeys(object) {
    let result = {}   
    let keys = Object.keys(object).sort()
    for (let key of keys) {
        result[key] = object[key]
        // result['name']  =  object['name']
    }
    return result
}

let result = sortByKeys({
    name: "name 1", 
    surname: "surname 1", 
    age: 20, 
    address: "address 1"
})
// console.log(result)

// ----------------------- ADVANCED ----------------------- //
// 1. EN: Write a function to count how many times each value
// occurs in an object.
function countVals(object) {
    let result = {}
    for (let val of Object.values(object)) {
        if (result[val]) {
            result[val] += 1
        } else {
            result[val] = 1
        }
    }
    return result
}

let result2 = countVals({
    name: "name 1", 
    surname: "surname 1", 
    age: 20, 
    test: 20, 
    address: "address 1"
})
// console.log(result2)  // => { "name 1": 1, "surname 1": 1, 20: 1, "address 1": 1 }

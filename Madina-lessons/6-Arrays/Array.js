// let letters = ['a', 'b', 'c', 'd', 'e']

// console.log(letters) // =>  [ 'a', 'b', 'c', 'd', 'e' ]

// --------------- GET ELEMENTS ----------------
// GET ITEM BY INDEX
// letters[index]
// letters.charAt(index)

// console.log(letters[0])             // =>  a
// console.log(letters.at(0))          // =>  a
// console.log(letters.slice(0, 3))    // =>  [ 'a', 'b', 'c' ]
// console.log(letters.indexOf('b'))   // =>  1

// --------------- UPDATE ELEMENTS ----------------
// UPDATE ITEM BY INDEX

// let letters = ['a', 'b', 'c', 'd', 'e']
// letters[0] = 'z'
// letters[3] = 'w'
// console.log(letters) //  =>  [ 'z', 'b', 'c', 'w', 'e' ]

// delete letters[0]            // delete element at index 0
// console.log(letters)         // =>  [ <1 empty item>, 'b', 'c', 'd', 'e' ]
// NOTE: DO NOT USE THIS METHOD

// --------------- ADD | DELETE BY METHODS ----------------

// 1. [].push(...)       => adds to the end of array
// 2. [].unshift(...)    => adds to the start of array
// ----------           ------------          ------------
// 3. [].pop()           => removes from the end of array
// 4. [].shift()         => removes from the start of array
// ----------           ------------          ------------
// 5. [].splice(index, del_count, item1, item2, ...) => removes and adds elements at index

// let z = [1, 2, 3]
// ------------
// z.push(4)                // =>  [ 1, 2, 3, 4 ]
// z.unshift(4)             // =>  [ 4, 1, 2, 3 ]
// console.log(z)          
// ------------
// let last_item = z.pop()               // =>  [ 1, 2 ]
// let first_item = z.shift()            // =>  [ 2, 3 ]
// console.log(z)          
// ------------
// let z = [1, 2, 3]
// z.splice(1, 1)           // =>  [ 1, 3 ]
// z.splice(1, 1, 'a')      // =>  [ 1, 'a', 3 ]
// z.splice(0, 1, 'a', 'b')        // =>  [ 'a', 'b', 2,  3 ]
// z.splice(2, 2, 'a', 'b')        // =>  [ 1, 2, 'a', 'b' ]
// console.log(z)

// let a = [2, 3, 4, 5]
// a.splice(0,0,0,1)


// // a.splice(2, 2, 2, 2)           // =>  [ 2, 3, 2, 2 ]
// // a.splice(1, 2, 3, 4, 5)        // =>  [ 2, 3, 4, 5, 5 ]
// a.splice(0, 0, 0, 0, 0, 0, 0, 0)
// console.log(a)
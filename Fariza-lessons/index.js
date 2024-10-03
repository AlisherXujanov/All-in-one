let arr = [12, true, 'text', 'text2', 55, "11", NaN, 0, Infinity]

function findIntegers(arr) {
    let result = 0
    for (let item of arr) {
        if (typeof(item) != "boolean" && !isNaN(item) && item != Infinity) {
            result += parseInt(item)
        }
    }
    return result
}

let r = findIntegers(arr)
console.log(r)



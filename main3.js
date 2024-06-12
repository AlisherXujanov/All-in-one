let numbers = [1, 22, 122, 1, 11, 43, 23, 123]
let purpose = 44

let result = numbers.filter((num,idx) => {
    let needed = purpose - num
    return numbers.includes(needed) && num !== needed
})
if (result.length === 2) {
    console.log(result + " = " + purpose)
} else {
    console.log("No two numbers to target.")
}
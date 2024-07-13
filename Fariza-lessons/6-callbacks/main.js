// let callBackFn = (item, index, arr) => {
//     return item + 10
// }
function cbFn(item, index, arr) {
    return item + 10
}
arr = [1, 2, 3]
let newArr = arr.map(cbFn)
console.log(newArr)

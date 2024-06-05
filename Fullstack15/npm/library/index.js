//     ./    ->  means that the file is inside the same folder as this file
// RU: ./ означает, что файл находится в той же папке, что и этот файл

//     ../     ->  means that the file is in the parent folder
// RU: ../     ->  означает, что файл находится в родительской папке

import sum_up from "./m1.js"
import { MY_NAME, MY_COUNTRY as CY, MY_AGE } from "./m2.js"

console.log("My name is " + MY_NAME)
console.log("My age is " + MY_AGE)
console.log("My country is " + CY)
console.log("Sum of:  5+10 =" + sum_up(5, 10))
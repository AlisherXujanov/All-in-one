"use strict";
const car = {
    type: "Toyota"
};
car.mileage = 2000;
// function with optional parameter
function printMileage(car) {
    if (car) {
        console.log(car);
    }
}

const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car.mileage = 2000;

// function with optional parameter
function printMileage(car?: { type: string, mileage?: number }) {
    if (car) {
        console.log(car);
    }
}
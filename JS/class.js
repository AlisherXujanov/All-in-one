// import ... from "QWE" // => NPM Library
class Animal {
    constructor(_name) {
        this.name = _name;
    }
    canRun(_speed) {
        this.speed = _speed;
        return `${this.name} can run ${this.speed} km/hour`
    }

    set setName(_name) {   
        if (_name.length <= 2) {
            console.log('Too short name ...')
            return
        } else {
            this.name = _name;
            console.log("New animal is: " + this.name)
        }
    }
    // gets the constructor value (could be used as function ) 
    get getName() {
        return this.name;
    }
}


console.log("Animal")

// Animal.prototype.belovedFood = function(_food) {
//     this.food = _food
//     return `${this.name} loves ${this.food}`
// }

// let Rabbit = new Animal("White Rabbit")
// let Lion = new Animal("Black Lion")

// console.log(Rabbit.canRun(0.5))
// console.log(Rabbit.belovedFood("Carrot"))
// console.log(Lion.belovedFood("Human"))
// class MyClass {
//     prop = value; // property

//     constructor is called every time when we create 
//     an instance of the class
//     constructor(...) { 
//     ...
//     }

//     method(...) {} // method
  
//     get something(...) {} // getter method
//     set something(...) {} // setter method
  
//      ...
//   }
//  rewriting class User in pure functions
//  1. Create constructor function
// function User(_name) {
//     this.name = _name;
// }
// a function prototype has "constructor" property by default,
//  so we don't need to create it
//  2. Add the method to prototype
// User.prototype.sayHi = function() {
//     alert(this.name);
// };
//  Usage:
// let user = new User("John");
// user.sayHi();
// class Rabbit extends Animal {
//     constructor(_name, _earLength) {
//         super(_name);
//         this.earLength = _earLength;
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 1.5);
// console.log(rabbit.canRun(1.5));
// console.log("Ear length is: " + rabbit.earLength);



// class Animal {
//     showName() {  // instead of this.name = 'animal'
//       alert('animal');
//     }
  
//     constructor() {
//       this.showName(); // instead of alert(this.name);
//     }
//   }
  
//   class Rabbit extends Animal {
//     showName() {
//       alert('rabbit');
//     }
//   }
  
//   new Animal(); // animal
//   new Rabbit(); // rabbit
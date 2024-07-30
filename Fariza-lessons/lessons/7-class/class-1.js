// function Test(fName, Sname, age) {
//     // return {
//     //     firstName: fName,
//     //     secondName: Sname,
//     //     age // ==   age: age
//     // }
//     this.firstName = fName
//     this.secondName = Sname
//     this.age = age

//     this.sayHi = function () {
//         return `Hello, ${this.firstName} ${this.secondName}`
//     }
// }
// let user1 = new Test("John", "Smith", 25)
// console.log(user1)
// =================================
// class Person {
//     constructor(fName, sName, age) { // quruvchi
//         this.firstName = fName
//         this.secondName = sName
//         this.age = age
//     }
//     sayHi() {
//         return `Hello, ${this.firstName} ${this.secondName}`
//     }
// }
// let person1 = new Person("John", "Doe", 18)
// console.log(person1)
// console.log(person1.sayHi())





// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
class Animal {
    constructor(_name) {
        this.name = _name;
    }
    скорость(km = 'неизвестно') {
        return `${this.name} может бежать со скоростью ${km} км/час`
    }
}


Animal.prototype.любимаяЕда = function (еда = 'неизвестно') {
    this.food = еда
    console.log(`${this.name} любит есть ${this.food}`)
}
// let тигр = new Animal("Тигр")
// let аллигатор = new Animal("Аллигатор")

// тигр.любимаяЕда()
// аллигатор.любимаяЕда("рыбу")

class Bird extends Animal {
    constructor(_name, _color) {
        // if we don't call super(), 
        // "this" will be undefined in constructor
        // если мы не вызываем super(),
        // "this" будет undefined в конструкторе

        super(_name);   // вызов конструктора родителя
        this.color = _color; // добавление нового свойства
    }
    canFly(km = 'неизвестно') {
        return `${this.name} может летать со скоростью ${km} км/час`
    }
}
let попугай = new Bird("Попугай", "зеленый")
console.log(попугай.canFly(10))
console.log(попугай.скорость(1))



// class MyClass {
//     prop = value; // property

//     constructor is called every time when we create 
//     an instance of the class
//     constructor(...) { 
//     ...
//     }

//     method(...) {} // method

//   }
// ----------------------------
// rewriting class User in pure functions
// 1. Create constructor function
function User(_name) {
    this.name = _name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it
// ----------------------------
// 2. Add the method to prototype
User.prototype.sayHi = function () {
    alert(this.name);
};
let x = [1, 2, 3, 4, 5] // 15
Array.prototype.сумма = function () {
    let sum = 0
    for (let num of this) {
        sum += num
    }
    return sum
}
console.log(x.сумма())
// ----------------------------

// Usage of class:
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
//         alert('animal');
//     }
//     constructor() {
//         this.showName(); // instead of alert(this.name);
//     }
// }

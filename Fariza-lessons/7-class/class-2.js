// Classes and OOP (Object Oriented Programming)
// 

// There are two ways to create a class in JavaScript
// 1. Function Constructor
// 2. Class
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// Polymorphism  =>  The ability to present the same interface for different data types.
// ex:
class Character {
    attack() {
        throw new Error("Subclass must implement abstract method");
    }
}
class Soldier extends Character {
    attack() {
        return 'Soldier shoots a gun!';
    }
}
class Alien extends Character {
    attack() {
        return 'Alien uses a laser beam!';
    }
}
class Robot extends Character {
    attack() {
        return 'Robot uses a mechanical arm!';
    }
}
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// Encapsulation =>  The bundling of data with the methods that operate on that data.

// Real world example
class BankAccount {
    constructor() {
        this._account_number = null;
        this._pin = null;
        this._balance = 0;
    }
    setAccountDetails(account_number, pin) {
        this._account_number = account_number;
        this._pin = pin;
    }
    getBalance(account_number, pin) {
        if (this._account_number === account_number && this._pin === pin) {
            return this._balance;
        } else {
            return "Invalid account details";
        }
    }
    deposit(account_number, pin, amount) {
        if (this._account_number === account_number && this._pin === pin) {
            this._balance += amount;
            return "Deposit successful";
        } else {
            return "Invalid account details";
        }
    }
    withdraw(account_number, pin, amount) {
        if (this._account_number === account_number && this._pin === pin) {
            if (amount <= this._balance) {
                this._balance -= amount;
                return "Withdrawal successful";
            } else {
                return "Insufficient balance";
            }
        } else {
            return "Invalid account details";
        }
    }
}

let account = new BankAccount();
const PIN_CODE = 100
const ACC_NUM = "Acc_num"
account.setAccountDetails(ACC_NUM, PIN_CODE);
console.log(account.getBalance(ACC_NUM, PIN_CODE)); // 0
console.log(account.deposit(ACC_NUM, PIN_CODE, 100)); // Deposit successful
console.log(account.getBalance(ACC_NUM, PIN_CODE)); // 100
console.log(account.withdraw(2000, PIN_CODE, 150)); // Invalid account details
console.log(account.withdraw(ACC_NUM, PIN_CODE, 50));  // "Withdrawal successful"
console.log(account.getBalance(ACC_NUM, PIN_CODE)); // 50

// =====================================================
// =====================================================
// =====================================================
// =====================================================
// Types of classes:
// 1. Abstract Class
// 2. Concrete Class
// 3. Singleton Class
// 4. Static Class
// 5. Instance Class
// 6. Inner Class
// 7. Anonymous Class
// 8. Nested Class
// 9. Partial Class
// 10. Sealed Class
// 11. Final Class
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// 1. Abstract Class
// An abstract class is a class that cannot be instantiated. It is designed to be inherited by other classes.
// ex:
class AnimalAbstractClass {
    constructor(name, color, age) {
        if (new.target === AnimalAbstractClass) {
            throw new Error('Cannot instantiate an abstract class')
        }
        this.name = name
        this.color = color
        this.age = age
    }
    // ----------------------------------------------------
    // METHODS that are common to all animals and required to be implemented by the child classes
    eat() {
        throw new Error('eat method must be implemented')
    }
    // ...
    // ----------------------------------------------------
    // ----------------------------------------------------
    // Static method
    static staticMethod() {
        // Static method means that it belongs to the class itself and not to the instances of the class
        console.log('Static method')
    }
    // ----------------------------------------------------
    // ----------------------------------------------------
    // Getter and Setter
    get getName() {
        return this.name
    }

    /**
     * @param {string} name
    */
    set setName(name) {
        this.name = name
    }
    // TO CALL THESE GETTER AND SETTER
    // let dog = new AnimalAbstract('Dog', 'Black', 5)
    // console.log(dog.getName) // Dog
    // dog.setName = "Cat"
    // console.log(dog.getName) // Cat
    // ----------------------------------------------------
    // ----------------------------------------------------
    // Class method
    // A class method is a method that is called on the class itself, not on the instances of the class
}

// =====================================================
// =====================================================
// =====================================================
// =====================================================
// 2. Concrete Class
// A concrete class is a class that can be instantiated. It is a class that is not abstract.
// ex:
class Dog extends AnimalAbstractClass {
    constructor(name, color, age, breed) {
        super(name, color, age)
        this.breed = breed
    }

    // Implementing the abstract method
    eat() {
        console.log(this.name + "is eating")
    }
}
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// 3. Singleton Class
// A singleton class is a class that can only have one instance at a time.
// ex:

// SYNTAX:
// class Singleton {
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance
//         }
//         Singleton.instance = this
//     }
// }
// ex:
// let singleton1 = new Singleton()
// let singleton2 = new Singleton()
// console.log(singleton1 === singleton2) // true

class GameSettings {
    constructor() {
        if (GameSettings.instance) {
            return GameSettings.instance;
        }
        this.soundVolume = 5; // Default volume
        this.difficulty = "Easy"; // Default difficulty
        GameSettings.instance = this;
    }
    // Methods to update settings can be added here
}
// ----------- BENEFITS ----------- 
// - Encapsulation
// - Lazy Initialization -> The instance is created only when it is needed. It is better to create heavy instance only when it is needed. If not, the application could be slow to start or use a lot of memory.
// - Control over Access and Modification -> The instance is created only once and cannot be modified. This is useful when you want to have a single instance of a class that is shared across the application. One such instance is the database connection pool. When we have a single instance of the database connection pool, we can reuse the connections and reduce the overhead of creating a new connection every time.
// - Better for Testing 
// - Namespace Pollution



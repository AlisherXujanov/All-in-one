// PASCAL CASE:  Animal,  BigBuilding, ...

// class Animal {
//     // hayvon  ->  животное
//     constructor(name, age, wild=false) {
//         // this   =>  bu   =>   этот
//         this.___name = name    // name  =>  ism
//         this.age = age      // age   =>  yosh
//         this.wild = wild    // wild  =>  yovvoyi
//     }
//     getInfo() {
//         return `This is ${this.___name}. It is ${this.age} years old.`
//     }
// }
// tiger   = new Animal('White tiger', 15, true)
// zebra   = new Animal("Zebra", 10)
// penguin = new Animal("Penguin", 5)

// console.log(tiger.getInfo())
// console.log(zebra.getInfo())
// console.log(penguin.getInfo())

// console.log(tiger.___name)

// ====================================================================
// ====================================================================
// ====================================================================
// class Hero { // qahramon   =>  герой
//     constructor(name, health, power) {
//         this.name = name        // name   =>  ism       =>  имя
//         this.health = health    // health =>  sog'lik   =>  здоровье
//         this.power = power      // power  =>  kuch      =>  сила
//     }
//     attack() {
//         throw new Error("Bu method-ni yarating...!!!")
//     }
// }
// OOP  ->  
//      Object Oriented Programming    
//      Ob'ektga yo'naltirilgan dasturlash
//      Объектно-ориентированное программирование
// ====================================================================
// class Soldier extends Hero {  // askar  =>  солдат
//     constructor(name, health, power, weapon) {
//         super(name, health, power)
//         this.weapon = weapon        // weapon  =>  qurol =>  оружие
//     }
//     attack(enemy) {  // enemy  =>  dushman  =>  враг
//         // return `${this.name} is attacking ${enemy.name} with ${this.weapon}`
//         return `${this.name} soldati ${enemy.name} ga ${this.weapon} bilan xujum qilmoqda`
//     }
// }
// class Alien extends Hero {    // o'zga sayyoralik  =>  инопланетянин
//     constructor(name, health, power, planet) {
//         super(name, health, power)
//         this.planet = planet        // planet  =>  sayyora =>  планета
//     }
//     attack(enemy) {  // enemy  =>  dushman  =>  враг
//         // return `${this.name} alien is attacking ${enemy.name} from ${this.planet}`
//         return `${this.planet} sayyoralik mavjudod ${this.name}  ${enemy.name} ga xujum qilmoqda`
//     }
// }
// class Elf extends Hero {      // elf  =>  elf
//     constructor(name, health, power, magic) {
//         super(name, health, power)
//         this.magic = magic          // magic  =>  sehr  =>  магия
//     }
//     attack(enemy) {  // enemy  =>  dushman  =>  враг
//         // return `${this.name} elf is attacking ${enemy.name} with ${this.magic}`
//         return `${this.name} elfi ${enemy.name} ga ${this.magic} bilan xujum qilmoqda`
//     }
// }
// ====================================================================
// ====================================================================
// let soldier = new Soldier("John", 100, 50, "AK-47")
// let alien = new Alien("Zorg", 200, 100, "Mars")
// let elf = new Elf("Legolas", 150, 75, "Kamon")  // archer  =>  kamonchi  =>  лучник

// console.log(soldier.attack(alien))
// console.log(alien.attack(elf))
// console.log(elf.attack(soldier))
// ====================================================================
// ====================================================================

class Bank {
    constructor(id, pin, account_number) {
        this._id = id
        this._pin = pin
        this._account_number = account_number
        this._balance = 0
    }
    validate(id, pin, ac) {
        return this._id == id && this._pin == pin && this._account_number == ac
    }
    getBalance(id, pin, ac) {
        if (this.validate(id, pin, ac)) {
            return this._balance
        } else {
            return "Error...!!!"
        }
    }
    deposit(id, pin, ac, amount) {
        if (this.validate(id, pin, ac)) {
            this._balance += amount
            return 'success'
        } else {
            return 'Failed to deposit...!!!'
        }
    }
    withdraw(id, pin, ac, amount) {
        if (this.validate(id, pin, ac)) {
            if (this._balance < amount) {
                return 'Not enough money!'
            }
            this._balance -= amount
            return 'success'
        } else {
            return 'Failed to withdraw...!!!'
        }
    }
}

const MY_ID = "12345"
const MY_PIN = "qweqweqwe"
const MY_ACC_NUM = "112e1e32r23r34f"

const BANK_ACCOUNT = new Bank(MY_ID, MY_PIN, MY_ACC_NUM)
console.log("My balance: ", BANK_ACCOUNT.getBalance(MY_ID, MY_PIN, MY_ACC_NUM))
console.log("----------------------------------------------------------------")
console.log("Deposit $1000: ", BANK_ACCOUNT.deposit(MY_ID, MY_PIN, MY_ACC_NUM, 1000))
console.log("My balance: ", BANK_ACCOUNT.getBalance(123, MY_PIN, MY_ACC_NUM))
console.log("----------------------------------------------------------------")
console.log("My balance: ", BANK_ACCOUNT.getBalance(MY_ID, MY_PIN, MY_ACC_NUM))
console.log("----------------------------------------------------------------")
console.log("Withdraw $1500: ", BANK_ACCOUNT.withdraw(MY_ID, MY_PIN, MY_ACC_NUM, 1500))
console.log("Withdraw $500: ", BANK_ACCOUNT.withdraw(MY_ID, MY_PIN, MY_ACC_NUM, 500))
console.log("My balance: ", BANK_ACCOUNT.getBalance(MY_ID, MY_PIN, MY_ACC_NUM))





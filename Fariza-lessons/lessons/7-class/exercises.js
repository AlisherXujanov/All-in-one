class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    getInfo() {
        return `${this.title} by ${this.author}, has ${this.pages} pages`    
    }
}
class EBook extends Book {
    constructor(title, author, pages, url) {
        super(title, author, pages)
        this.url = url
    }
    getInfo() {
        return super.getInfo() + ". Besides, it can be found at " + this.url
    }
}
class PBook extends Book {
    constructor(title, author, pages, weight) {
        super(title, author, pages)
        this.weight = weight
    }
    getInfo() {
        return super.getInfo() + `. Besides, it weights ${this.weight} grams`
    }
}

let eBook1 = new EBook("Harry Potter", "J.K. Rowling", 300, "https://example.com")
let pBook  = new PBook("Harry Potter", "J.K. Rowling", 300, 2000)

console.log(eBook1.getInfo())
console.log(pBook.getInfo())


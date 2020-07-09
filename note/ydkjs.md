# chapter 1
## var, let and const
var is function scope
let is "block scoping"
const is "block scoping" and cannot be re-assigned

## function
statement:
function greeting() {
    console.log("hello")
}
expression:
var func = function() {
    console.log("hi")
}
as property:
var whatToSay = {
    greeting() {
        console.log("hello")
    }
    question() {
        console.log("what's your name")
    }
}

## Comparisons
### ===
equal in type and value.
NaN === NaN //false
0 === -0 //true
Number.isNaN(NaN) // true
Object.is(0, -0) //false
=== test identity equality not structural equality,
all object are held by reference, the two object's reference not equal.
[ 1, 2, 3 ] === [ 1, 2, 3 ];    // false
{ a: 42 } === { a: 42 }         // false
(x => x * 2) === (x => x * 2)   // false

### ==
coercion and compare value.

## Classes
```
// classes
class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        let page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (const page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin con tan ...");
mathNotes.print();

// inheritance and polymorphism
class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
    print() {
        console.log(`
            Title: ${this.title}
            BY: ${this.author}
            ${this.pubDate}
        `);
    }
}

class Book extends Publication {
    constructor(bookDetails) {
        super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }
    print() {
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
        `);
    }

}
var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();
```
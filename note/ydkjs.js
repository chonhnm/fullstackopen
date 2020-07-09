
function hello(myName) {
    console.log(`Hello, ${ myName }.`)
}

hello('Kyle')
try {
    console.log(myName);
} catch (err) {
    console.log("err");
}

function awesomeFunction(coolThings) {
    return coolThings;
}

var awesomeFunction = function(coolThings) {
    return coolThings + '222'
}

console.log(awesomeFunction("awesome"))

var whatToSay = {
    greeting() {
        console.log('Hello')
    },
    question() {
        console.log('What is your name')
    },
    answer() {
        console.log("My name is Kyle.")
    }
}

whatToSay.greeting();
whatToSay.question();

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
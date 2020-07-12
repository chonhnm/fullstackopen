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
    },
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

## Modules

### classic modules

```
// classic modules
// function return instance of module with funcitons exposed that can operate the module instance's inner data
function PublicationM(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${title}
                By: ${author}
                ${pubDate}
            `);
        }
    };
    return publicAPI;
}

function BookM(bookDetails) {
    var pub = PublicationM(bookDetails.title, bookDetails.author, bookDetails.publishedOn);

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${bookDetails.publisher}
                ISBN: ${bookDetails.ISBN}
            `);
        }
    };
    return publicAPI;

}

function BlogPostM(title,author,pubDate,URL) {
    var pub = PublicationM(title,author,pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };

    return publicAPI;
}

var YDKJS = BookM({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();
```
### ES modules
es module is single instance. classic module can be multi instanced.
```
function printDetails(title,author,pubDate) {
    console.log(`
        Title: ${ title }
        By: ${ author }
        ${ pubDate }
    `);
}

export function create(title,author,pubDate) {
    var publicAPI = {
        print() {
            printDetails(title,author,pubDate);
        }
    };

    return publicAPI;
}
```

```
import { create as createPub } from "publication.js";

function printDetails(pub,URL) {
    pub.print();
    console.log(URL);
}

export function create(title,author,pubDate,URL) {
    var pub = createPub(title,author,pubDate);

    var publicAPI = {
        print() {
            printDetails(pub,URL);
        }
    };

    return publicAPI;
}
```

```
import { create as newBlogPost } from "blogpost.js";

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

====

# Chapter 3

## Iterator

## Closure
Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

## this
scope and execute context.

The benefit of this-aware functions—and their dynamic context—is the ability to more flexibly re-use a single function with data from different objects. A function that closes over a scope can never reference a different scope or set of variables. But a function that has dynamic this context awareness can be quite helpful for certain tasks.

## Prototypes
Where this is a characteristic of function execution, a prototype is a characteristic of an object, and specifically resolution of a property access.

Think about a prototype as a linkage between two objects; the linkage is hidden behind the scenes, though there are ways to expose and observe it. This prototype linkage occurs when an object is created; it's linked to another object that already exists.

Delegation through the prototype chain only applies for accesses to lookup the value in a property. If you assign to a property of an object, that will apply directly to the object regardless of where that object is prototype linked to.

```
homework.topic;
// "JS"

otherHomework.topic;
// "JS"

otherHomework.topic = "Math";
otherHomework.topic;
// "Math"

homework.topic;
// "JS" -- not "Math"
```

this revisited
```
var homework = {
    study() {
        console.log(`Please study ${ this.topic }`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();
// Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();
// Please study Math
```
Unlike many other languages, JS's this being dynamic is a critical component of allowing prototype delegation, and indeed class, to work as expected!

# three pillar of JS
## Scope & Closure
## Prototypes
## Types & Coercion


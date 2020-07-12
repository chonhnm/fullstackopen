
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
console.log('class===========================');
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

// Modules
console.log("modules=======================")
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

// ES modules
// es modules is one file as one module

// this
console.log('this==============');

function classroom(teacher) {
    return function study() {
        console.log(`
            ${teacher} says to students ${this.topic}
        `);
    }
}

var assignment = classroom('Teacher Ma');
assignment();

var homework = {
    topic: 'JS',
    assignment: assignment
}
homework.assignment();

var anotherHomework = {
    topic: 'Math'
}

assignment.call(anotherHomework);

// Prototypes
console.log('prototypes===========')

var hw = {
    topic : 'JS'
};
var ahw = Object.create(hw);
console.log("ahw:", ahw.topic);

///

var appendixWork = function() {
    const dayS = 7 * 60 + 30;
    const dayE = 17 * 60 + 45;
    var publicApi = {
        scheduleMeeting(startTime, durationMinutes) {
            let t = startTime.split(":");
            let start = 60 * Number(t[0]) + Number(t[1]);
            let end = start + durationMinutes;
            return start >= dayS && end <= dayE;
        },

        range(start, end) {
            if (end == undefined) {
                return e => {
                    if (e < start) {
                        return [];
                    } else {
                        return [...Array(e-start + 1).keys()].map(x=>x+start);
                    }
                }
            } else {
                return [...Array(end-start + 1).keys()].map(x=>x+start);
            }
        },


    }

    return publicApi;
}

var solution = appendixWork();
console.log(solution.scheduleMeeting("7:00",15));     // false
console.log(solution.scheduleMeeting("07:15",30));    // false
console.log(solution.scheduleMeeting("7:30",30));     // true
console.log(solution.scheduleMeeting("11:30",60));    // true
console.log(solution.scheduleMeeting("17:00",45));    // true
console.log(solution.scheduleMeeting("17:30",30));    // false
console.log(solution.scheduleMeeting("18:00",15));    // false
console.log('===========');
var range3 = solution.range(3);
console.log(solution.range(1));
console.log(solution.range(1,5));
console.log(range3(5));
console.log(range3(2));
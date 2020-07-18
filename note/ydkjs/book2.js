
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    for (let student of students) {
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);

// bad ideas

function badIdea() {
    // change scope on the fly
    eval("var oops = 'ugh!';");
    console.log(oops);
}
badIdea();

var bad = { oops: "Ugh!!!" };

with (bad) {
    console.log(oops);   // Ugh!
}
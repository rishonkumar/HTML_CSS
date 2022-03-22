// Objects are help in wrapping function and data together

// Objects in javascript are key value pair

var student = {}; //empty student
// keys are string

var student3 = new Object();

var student1 = {name : 'abc' , rollNo : 135 , marks : 100};


student1.marks;

marks = 87;

student1.marks;

student1.sem; // sem is not there but o/p undefined
// to add new key and value
student1.sem = 4;

student1.sem;

//accesing using bracket and double quotes
student1["marks"];

function printProperty(obj,prop) {
    console.log(obj[prop]); // here we use square brackets
}

printProperty(student , "marks");

//Deleting objects
delete student.marks;

delete student["sem"];
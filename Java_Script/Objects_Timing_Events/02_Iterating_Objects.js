var student1 = { 
    name : 'abc' , 
    rollNo : 135 , 
    marks : 100
};

for(var prop in student1) {
    console.log(prop);
    //to print values
    console.log(prop,student1[prop]);
}

//to figure all the keys
var keys = Object.keys(student1);

var keys = Object.getOwnPropertyNames(student1);


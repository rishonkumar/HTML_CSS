var student1 = { 
    name : 'abc' , 
    rollNo : 135 , 
    marks : 100
};

for(var c in student1) {
    console.log(c);
    //to print values
    console.log(c,student1[c]);
}

//to figure all the keys
var keys = Object.keys(student1);


var keys = Object.getOwnPropertyNames(student1);


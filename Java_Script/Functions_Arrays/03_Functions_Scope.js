
var name = "scope";

function scopeDemo() {
    var name = "function";
    var i =10;
    console.log(i);
    console.log(name); // function

}

scopeDemo();

// console.log(i); // i is not avaiable outside function
console.log(name); // scope


// Execution Context

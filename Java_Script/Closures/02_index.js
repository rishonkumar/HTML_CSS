function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();

// function x() {
//     var a = function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y; 
}
var z = x();
console.log(z);

// z(); // it will print 7 it remebers its lexical scope

// BOTH ARE SAME
function x() {  
    var a = 7;
    return function y() {
        console.log(a);
    }
     
}
var z = x();
console.log(z);

// z(); // it will print 7 it remebers its lexical scope


// A function bind together with its lexical environment 
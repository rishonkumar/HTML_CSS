
console.log(this); //window object(global objext)

//Function context

function demo() { // refering to window object in this case depending on function call
    console.log(this);
}

var demo2 = function() {
    console.log(this);
}

// By objects


var obj = {
    'prop1' : 12,
    'print' : function() {
        console.log(this);
    }
}

// demo();
// demo2();

obj.print(); // output is object { prop1: 12, print: [Function: print] }


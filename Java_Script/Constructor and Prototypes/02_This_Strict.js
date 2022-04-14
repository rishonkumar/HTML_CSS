
'use strict';

console.log(this);

function demo(a,b) {
    console.log(this);
    console.log(a,b);
    
}

// By objects


var obj = {
    'prop1' : 12,
    'print' : function() {
        console.log(this);
    }
}

demo.call(obj,3,4);
demo.apply(obj,[3,4]);
 
// demo(); undefined
// demo2();

obj.print(); 


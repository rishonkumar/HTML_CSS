
"use strict"
//so if we use strict mode then any error is done it will show
//basically js lenatency is removed
var box = document.getElementById('box');

var clickCount = document.getElementById('click-count')

var count = 0;
// count = 0; this does not show error
box.addEventListener('click',function(){
    count++;
    // demo = 100 .. it actually error but JS is not telling it
    console.log(count);
    clickCount.innerText = count + " ";
})
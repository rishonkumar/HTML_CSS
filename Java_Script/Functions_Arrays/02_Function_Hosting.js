console.log(j);

// it will run even though i is declared later
function hoistDemo() {
    console.log(i); // undefined
    var i = 10;
}

hoistDemo();

var j = 10;
// Function hositing
hoistDemo2();

function hoistDemo2() {
    console.log(k); // undefined
    var k = 10;
}

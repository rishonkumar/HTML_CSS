function showAlert() {
    console.log("Rishon")
    // alert("Hey!!")
}

function showAlert1(msg) {
    console.log(msg);
}

//calling functions
showAlert();

showAlert1("Hello!!");

function sum(a,b){
    console.log(a+b);
}

function sum1(a,b){
    return a+b;
}

sum(4,6);

var r1 = sum1(3,4);
console.log(r1);

var r2 = sum1(3);
console.log(r2); // NAN  it will take b as undefined

var r3 = sum1(3,3,4);
console.log(r3); // 6
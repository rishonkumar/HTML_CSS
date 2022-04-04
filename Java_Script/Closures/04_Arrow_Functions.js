

var multiply = function(x,y) {
    return x*y;
}   

var m = (x,y) => {
    return x*y;
}



function Person(name) {
    this.name = name;
    console.log(this);

    // setTimeout(function(){
    //     console.log(this);
    // },1000); 

    setTimeout(() => console.log(this),100);// in this will take from outer scope
}

var p = new Person("Rishon");

// console.log(multiply(2,3));
// console.log(m(2,3));



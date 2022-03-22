
//function name , interval
function sayHello() {
    console.log("Hello")
}
// millseconds
//it will execute after 2 seconds
setTimeout(sayHello,2000);

// it will excute reapeated interval    
setInterval(sayHello,1000);




var sec = 1;
function sayHello2() {
    console.log("after " , sec)
    sec++;

    if(sec == 6) {
        //Stop
        clearInterval(id);
    }
}


var id =  setInterval(sayHello2,1000);
function sayHelllo(){
    alert('Hello');
}


var helloButton2 = document.getElementById('btn2');
helloButton2.addEventListener('click',sayHelllo);


var helloButton = document.getElementById('btn');
helloButton.addEventListener('click',function(){
    alert('Hello');
});




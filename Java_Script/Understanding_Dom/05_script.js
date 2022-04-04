var outerDiv = document.getElementById('outer');


outerDiv.addEventListener('mouseover',function(){
    console.log('Mouse Over');
})


outerDiv.addEventListener('mouseout',function(){
    console.log('Mouse Out');
})


var searchInput = document.getElementById('search');

searchInput.addEventListener('keypress',function(){
    console.log('Key Pressed');
})

// // TO take care of up down shift keys

document.addEventListener('keydown',function(){
    console.log("Key Down");
})

//to detect which key is pressed
document.addEventListener('keydown',function(event){
    console.log("Key Down",event.keyCode);
})
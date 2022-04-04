
for(var i = 1 ; i<= 5 ; i++) {
    setTimeout(function(){
        console.log(i);
    },1000);
}
// O/p - 6 6 6 6 6 6 

console.log("After for loop " , i) // 6

for(let i = 1 ; i<= 5 ; i++) {
    setTimeout(function(){
        console.log(i);
    },1000);
}
// O/p - 1 2 3   4 5 6 

console.log("After for loop " , i) // 6
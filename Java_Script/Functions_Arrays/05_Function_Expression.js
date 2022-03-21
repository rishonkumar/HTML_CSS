// var a = 10;
var factorial = function fact(n) {
    var ans = 1;
    for(var i = 1 ; i <= n ; i++){
        ans = ans*i;
    }
    return ans;
};
// no function name
var factorial2 = function (n) {
    var ans = 1;
    for(var i = 1 ; i <= n ; i++){
        ans = ans*i;
    }
    return ans;
};

console.log(factorial);
console.log(factorial(5));
console.log(factorial(4));//  cannot do this
console.log(factorial2); // it will take variable name as function name


function outer(){
    var oV = 10;
    function inner(){
        var iV = 200;
        console.log(oV);
    }
    inner();
    // console.log(iV); error
}

outer();
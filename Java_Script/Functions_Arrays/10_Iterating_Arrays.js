var arr = [2,3,4,5,67];

for(var i = 0 ; i <= arr.length ; i++) {
    // console.log(i);
    print(arr[i]);
}


function print(element){
    console.log(element);
    
}

//for each method

arr.forEach(print);
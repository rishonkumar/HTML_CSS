var arr = [20,30,40,50]


var obj = {
    "0" : 20,
    "1" : 30,
    "2" : 40
}

obj.prop1 = "demo";


arr.prop2 = "demo";

// it will iterate all the properties
for(var i in arr) {
    console.log(i);
}
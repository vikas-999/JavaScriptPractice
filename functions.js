//function
function greet(){ //function definetion
    console.log("hello good morning"); //task
}
greet(); //calling a function



//template literals
function demo(us){
    return `helloo ${us}`
}
var us = "vikas";
var r = demo(us);
console.log(r);

//function expression
var add = function(num1,num2){
    return num1+num2;
}
var r = add(5,6);
console.log(r);

//arrow function  or anonymus fuctions
var sub = (n1, n2)=>{
    return n1-n2;
}
var x = sub(20,10);
console.log(x);

var mul = (n1,n2=3)=>{
    return n1*n2;
}
var z = mul(9);
console.log(z);
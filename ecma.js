//difference between var, let , const
//var :- var is going to work inside and outside the condition,loop or a function
if(true){
    var a = 10
    console.log(a);
}
console.log(a)

//let :- we cannot use let outside the condition,loop or a function
if(true){
    let b = 11;
    console.log(b);
}

//const:- we cannot use const outside the condition,loop or a function
if(true){
    const c=12;
    console.log(c);
}

//difference between let and constant
//let :- we cannot use let outside the condition,loop or a function
if(true){
    let b = 11;
    //let b = 21; this is re declaration and it is not possible with let
    b = 21;// re initialization is possible and re declaration is not possible
    console.log(b);
}

//const:- we cannot use const outside the condition,loop or a function
if(true){
    const c=12;
    //redeclaration and re initailization bot are not possible here
    console.log(c);
}
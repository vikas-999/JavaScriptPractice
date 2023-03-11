/*
//arithmetic operator
var a = 10;
var b = 21;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // if the value is greater than rhs value then mod  will give lhs value as output

//increment and decrement operators 
var a = 10;
console.log(++a);
var b = 20;
console.log(b++);
var c = 30;
console.log(--c);
var d = 40;
console.log(d--);


console.log(a+b);

//comparision operators   --->    > , < , <= , >=, ==, ===,!=
var a = 10;
var b =20;
console.log(a<b);
console.log(b<a);
console.log(b>a);
console.log(b>=a);
console.log(a<=a);

// difference between ==  and ===
var a = 10;
var b = 10;
console.log(a==b);
console.log(a===b);


var a = 1;
var b = true;
console.log(a==b);      //check with values
console.log(a===b);     //checks with data types


//!= (not equals)
var a = 5;
var b = 15;
console.log(a != b);

//logical operators  AND(&&) OR(||) NOT(!)
//AND --> multiplication
//0 * 1 =0
//0 * 0 =0
//1 * 1 =1
//1 * 0 =0

var a =20;
var b =60;
var c =80;
console.log((a>b) && (a>c));

console.log((b>a) && (b>c));

console.log((c>a) && (c>b));
 */


//OR --> addition
//0 + 1 =1
//0 + 0 =0
//1 + 1 =1
//1 + 0 =1
var a =20;
var b =60;
var c =80;
console.log((a>b) || (a>c));
console.log((b<a) || (b<c));
console.log((c<a) || (c<b));

//not(!)
//0 == 1
//1 == 0
var x = 10;
var y = 20;
var c = x < y;
console.log(c);
console.log(!c);

//string operator = working with single quotes and double quotes is noting but string operator
var d = "hello";
var e = 'hai';
console.log(d);
console.log(e);

//difference between nan and isnan
//nan --> not a number
var a = 10;
var b = "minnesota";
console.log(a/b);
//o/p nan  because we cant get a predictable output so the result is nan (not a number)


//isnan --> checks wheather the result is nan or not
console.log(isNaN(a/b));
// o/p is true becuase the result is nan so isNaN is checking wheter the result is nan or not

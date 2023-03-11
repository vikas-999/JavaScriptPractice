// control statements
// if
// if else
// if else if
// switch case

//-------------------------------------------------------

// if Syntax
// syntax:
// initialization
// if(condition){
//     printing statement;
// }

var a = 10;
var b = 20;
if(a<b){
    console.log("a is smaller");
}
//---------------------------------------------------------
// if else Syntax
// syntax:
// initialization;
// if(condition){
//     printing Statement;
// }
// else{
//     printing statement;
// }

var a =100;
var b = 500;
if(a > b){
    console.log("a is greater");
}
else{
    console.log("b is greater");
}
//------------------------------------------------------------------------------------
// ternary operator
// synatx:
// (condition)?printing statment1:printing statement2;

var a = 100;
var b = 200;
(a < b)?console.log("b is greater"):console.log("a is greater");

//-------------------------------------------------------------------------------------
//else if
// syntax:
// intitialization;
// if(condition){
//     printing statement;
// }
// else if(condition){
//     printing statement;
// }
// else{
//     printing statement;
// }

var a = 200;
var b = 300;
var c = 400;
if ((a>b) && (a>c)){
    console.log("a is greater");
}
else if((b>a) && (b>c)){
    console.log("b is greater");
}
else{
    console.log("c is greater");
}
//---------------------------------------------------------------
// switch case
//  syntax:
// switch(){
//     cases:
//         printing Statement;
//         break

//         cases:
//         printing Statement;
//         break

//         .
//         .
//         .
//         .
//         .
        
//          default:

//  }

var day = "wednesday";
switch(day){
    case  'monday':
        console.log("6am");
        break;
    case 'tuesday':
        console.log("7am");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("8am");
        break;
    case 'friday':
        console.log("10am");
        break;
    case "saturday":
        console.log("11am");
        break;
    case "sunday":
        console.log("12am");
        break;
        default:
            console.log("holiday");

}
//--------------------------------------------------------------------------
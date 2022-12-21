// var is function scoped

var a=20;
console.log(a);   // output 20
var a=10;
console.log(a);   //output 10;
//// Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.
//// let is block scoped
// let a=30;    //SyntaxError: Identifier 'a' has already been declared
// console.log(a);
{
    //let is block scoped
    let a=50;
    console.log(a);   //Output:50  &&  Datatype:- Number
}
console.log(a);  //OutPut: 10  && DataType:- Number  
a ="Arbaaz";
console.log(a); // "Arbaaz"  :- we even can redeclared variables to diffrent dataTypes
//this shows js is dynamically language because we can change it datatype like first it was number the it is string in it's runtime as we have changed a=10 to a="Ajay"

//// Varibles names can start with $,__,alphabets
let $ac =5;
let _ac =6;
var 2ac =3;     //This is an Syntax Error
console.log($ac) // output:5  && This is valid
console.log(_ac); // output:6 && This is also valid


let c=10;          //let and const are blocked scope.
var b ="Arbaaz";   //var is Globally Scoped.
{
    let c=7;
    console.log(c);  // output: 7
}
console.log(c);      // output: 10  


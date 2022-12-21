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
    console.log(a);   //50
}
console.log(a);  //10
// 🙋‍👨‍🏫 Interview Question 0 🙋‍👨‍🏫
// var is function scoped
// var vs let vs const 
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
// var 2ac =3;     //This is an Syntax Error
console.log($ac) // output:5  && This is valid
console.log(_ac); // output:6 && This is also valid




let c=10;          //let and const are blocked scope.
var b ="Arbaaz";   //var is Globally Scoped.
{
    let c=7;
    console.log(c);  // output: 7
}
console.log(c);      // output: 10  




console.log("var can be redeclared");
var a=10;
console.log(a);       //10
var a=20;
console.log(a);        //20
var a="Arbaaz";
console.log(a);        // Arbaaz




console.log("let can't be redeclared");
let x=122;
x=22;            //we can't do that Reassign the let
console.log(x);      //22
// let x=10;           
//console.log(x);       //SyntaxError: Identifier 'x' has already been declared





console.log("const can't be redeclared");
const y=133;
// y=23;                  // we can't do that Reassign the const
console.log(y)          //TypeError: Assignment to constant variable.

// let Cannot redeclare block-scoped variable that's why let is good than var
//because let's say in new line if I write again let a = 30 then this will be wrong though code will work but
//again redeclaration of same variable is wrong




//primitive datatype type
//null number bigint boolean string symbol undefined

//non primitve datatype
//object


let i1=null;                        // Object
let j1=32;                          //number
let k1=true;                        //Boolean
let l1=BigInt("576")+BigInt("4");   //BigInt
let m1="Harry";                     //String
let n1=Symbol("YOoooo BRoooo");     //symbol
let o1;                             // Undefined
console.log(i1,j1,k1,l1,m1,n1,o1);  // null 32 true 580n Harry Symbol(YOoooo BRoooo) undefined
console.log(typeof(o1)); //Datatype

console.log("---------------------------------------------------------------")





/////////////////////////////////////// JAVASCRIPT (YT) /////////////////////////////////////////////////
{
    /* 👉Section 1:  We need to do it in console. */
    // alert("Welcome, to JavaScript from alert");
    console.log("Welcome to javaScript from Console");   //Welcome to javaScript from Console
}




/**   👉Section 2: Values and Variables in JavaScript.   **/
{
    var myName='Arbaaz Khan';
    var myAge=26;
    console.log(myAge);      //26



    //Variables Name can be:
    var _myName="Arbaz";
    var _1myName="ark";
    var _1my_Name="Ark";
    var $myName="Ark Khan"
    
    
    //Variables Name can't be:
    // var 1myName="khan";
    // var myName%="its me";
}



/**  👉 Section 3: DataTypes in JavaScript  **/
{
    var myName="Akhay";
    console.log("From Section 3:"+myName);   //From Section 4: Akhay

    var myAge=21;
    console.log("From Section 3:"+myAge);     //From Section 4: 21

    var iAmArk=true;
    console.log("From Section 3:"+iAmArk);    // true

    // // Type of Operator
    console.log("From Section 3:"+typeof(iAmArk));   // boolean






    // DataType Practice
    console.log(10+"20");             //1020
    console.log(9-"5");               // output :4      bug
    console.log("Java "+"Script");    //Java Script
    console.log(" "+0);               //  0
    console.log("Java"-"Script");     //// NaN
    console.log(true+true);           // 2
    console.log(true-false);          // 1
    console.log(false-false);         // 0
    console.log(false-true);          // -1
}


/**  👨‍🎓  Interview Question 1  **/
{
    //👉  Difference between null vs undefined ? 

    var iAmNothing =null;    // It's typof is a bug Because it is Object
    console.log(`iAmNothing Value: ${iAmNothing}  && TypeOf: ${typeof iAmNothing}`);  //iAmNothing Value: null  && TypeOf: object



    var iAmSomething;
    console.log(`iAmSomething value: ${iAmSomething}  && TypeOf: ${typeof iAmSomething}`);
}



/**  👨‍🎓  Interview Question 2  **/
{
    //👉 What is NaN?  


    // NaN is a property of the global object. 
    // In other words, it is a variable in global scope.
    // The initial value of NaN is Not-A-Number 

    var myPhoneNo=8287817926;
    var myName="No One";

    console.log(isNaN(myPhoneNo));    //  faslse  !(Not a Number)
    console.log(isNaN(myName));       //  true     (Not a Number)

    if(isNaN(myName)){
    console.log("plz enter valid phone no");
    }


    NaN === NaN;        
    Number.NaN === NaN; 
    isNaN(NaN);         
    isNaN(Number.NaN);  
    Number.isNaN(NaN);


    console.log(Number.isNaN(NaN));
}


console.log("----------------------- Section 5 ------------------------");




/**** Section 5👉 Arithmetic operators in JavaScript ****/
{
    console.log(5+20);       //25


    // 1️⃣Assignment operators
    // An assignment operator assigns a value to its left operand 
    // based on the value of its right operand. 
    // The simple assignment operator is equal (=)

    var a = 5; 
    var b = 5;

    console.log("is both the a and b are equal or not" + a == b );   //false

    // I will tell you when we will see es6
    console.log(`Is both the a and b are equal : ${a == b}`);      //Is both the x and y are equal : true






// 2️⃣Arithmetic operators
    // An arithmetic operator takes numerical values 
    // (either literals or variables) as their operands and 
    // returns a single numerical value.

    console.log(3+3);
    console.log(10-5);
    console.log(20/5);
    console.log(5*6);

    console.log("Remainder Operator " + 27%4);






// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.




}



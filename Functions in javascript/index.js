// Declaration
var foo;
let bar;

// Assignment
foo = 'foo';
bar = 'bar';

//variable hoisting with var keyword
console.log(foo); //undefined
var foo="string";
console.log(foo);//"string"

var foo;//declaration
console.log(foo); //undefined
foo="bar";//assignment
console.log(foo);//bar

console.log(foo);//reference error
foo="bar";//not defined error


//By now, you may be thinking, "Huh, it's kind of weird that JavaScript lets us access variables before they're declared." This behavior is an unusual 
//part of JavaScript and can lead to errors. Using a variable before its declaration is usually not desirable.

//variable hoisting with let const
// Variables declared with let and const are hoisted but not initialized with
//  a default value. Accessing a let or const variable before it's declared will result in a ReferenceError:

console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization

let foo = 'bar';  // Same behavior for variables declared with const


//-----------------------------------------------------------------------------
//Function statement

function add(a,b){
    return a+b;
}

//function expression
var add=function (a,b){
    return a+b;
}

//first class functions
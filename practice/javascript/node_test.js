
// This is a single line comment.

/*
This is a multi-line
comment!
*/

// console.log () takes a value and passes it to the console.
console.log("Hello how are you!");

console.log("I'm fine, thanks!");

// Basic Datatypes of JavaScript

// String Datatype
"This is a string of characters";
'This is also a string';
"Yet another string!"
"1900"
// you cannot do math with this "1900" wrapped in code, because it still a string.
"false"
// false wrapped in quotes will not work in boolean, because it still a string.

// Number Datatype

1020;
1000000;
5000;
// you can do math with these numbers

// Boolean Datatype (keywords)
true;
false;

// Creating a variable (variable name is not supposed to be wrapped in quotes);
// Syntax: var nameOfVariable;
var message;

// the equal sign = means you're assigning a value
// Store a value into the message variable.
message = "This is stored inside of a variable!";

// Grab the value of the message variable and send it to the console.
console.log(message);

// Variables can only hold one value at a time, so we are overwriting the previous value in the message when we reassing.
message = "I overwrote the previous text in message variable";

// Because this console.log() happened after the update. we will get the new value to the console.
console.log(message);

var variable1 = "string";
var variable2 = 1000009;
var variable3 = false;

console.log(variable1);
console.log(variable2, variable3);

// camelCase is the most popular to writing variables. Example: myVariableIsImportant, anotherVariableName
// Snake Case is another way to writing variable, my variable is important, another variable name

// Bad example of variable name;
// DONT use LONG valuable names example bellow:
var thisVariableIsReallyImportantBecauseOtherwiseIWillBeFired = 10;

// Acceptable example of variable name;
var importantVar = 20;

// Bad example of variable name, be a little descriptive with what the variable holds for its name, dont use math language y = 10 example bellow.
var y = 10;

// END OF BASIC JAVASCRIPT.

var value1 = 100;

var value2 = value1;

console.log(value2);

// Order of operations for equal sign:
// runs second = runs first;

// Math Operators.
/*
+ addition
- subtraction
/ division
* multiplication
% modulo
*/

var sum = 39 + 74 + 1 + 4 + 300 + 3999;
var difference = 100 - 30;
var quotient = 10 / 3;
var product = 100 * 2;

// These math operators are only available to Number datatype.

/*
You cannot do this:
var diff = true / "string";
var other = "another string" * 100;
*/

// The + operator has two usages. The second one is called concatination.

var wholeSentence = "My name is " + "Eduardo!";
console.log(wholeSentence);

// Good use of concatination. Concatination lets you build things together.
var userName = "Eduardo Garcia";
var sentencePart1 = "Hello there,";
var sentencePart2 = ", how are you doing?";

var complete = sentencePart1 + userName + sentencePart2;
console.log(complete);

// Using variables to do math on changing data.

var num1 = 7;
var num2 = 40;

var sum1 = num1 + num2;
var difference1 = num1 - num2;
var difference2 = num2 - num1;

// Defining Variables again.
var createdVariable;
createdVariable = 100;

// createdVariable was already defined;
// var createdVariable = 100;

// Order of Operations

// Use PEMDAS math method
var someValue = 10 - 36 / 6 * 3;
// 8, 

// 8, -8

console.log(someValue);
// This is a single line comment.

/*
This is a 
multi-line
comment!
*/

// console.log () takes a value and passes it to the console.
console.log("Hello how are you!");

console.log("I'm fine, thanks!");

// Basic Datatypes of JavaScript

// String Datatype
// strings has to be in quotation, example bellow
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
// Because of nature of computers, turn things on and off
true;
false;

// Creating a variable (variable name is not supposed to be wrapped in quotes);
// Syntax: var nameOfVariable;
// variable is temporary, it doesn't save
// variable hold data, the keyword to create a variable is: var
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

// console can take multiple variable by splitting with a coma.
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

// assaign a variable value to another
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
% modulo (useful in rare cases)
** Exponentient (check out online)
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

// The + operator has two usages. The second one is called: Concatination.
// Concatination is useful because you can break sentences apart and glue them together.
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

// Use PEMDAS math method (parentesis, division, multiplication, addition and subtraction)
var someValue = 10 - 36 / 6 * 3;

// don't use parentesis because it doesnt have a meaning in javascrip
var exampleParen = ((((7))));
var example4 = (10);
// 8, 

// 8, -8

console.log(someValue);

var otherValue = 10 + (10 + ( (3 + 4) * 2 ));
var otherValue2 = 34;

// If Else statement
// always write with lowcase: if
// What does if statement do? it will only run if the condition is true. If it's false, it will not run.

if (true) {
    console.log("this is ture!");
} 

// Terminal only run is if its true boolean. It will not run if its false boolean.

if (true) {}

if (false) {}

// Conditional Operators, Comparitors
// all of these ends up being a boolean value: true or false.
/*
== Both sides are equal
=> Left side is equal or bigger
=< Left side is equal or smaller
< Left side is smaller
> Left side is bigger
!= Not equal to
! Flip Boolean
*/

10 == 100; // false

9 == 9; // true

"hello" == "hello"; // true

"Hello" == "hello"; // false

"hello" == 100; // false

100 > 50; // true
// >= greater than equal to
100 >= 100; // true
101 <= 100; // false
1 > 10; // false
1 < 10; // true

100 != 50; // true
50 != 50; // false

!false; // true
!true; // false

true != true; // false

false == false; // true

var age = 10;

if (age >= 21) {
    console.log("Congrats, you can now drink soda.")
}
// Math class: a collection of functions (JavaScript Math Object)
// You captilize the M for math in order for it to work, in class you need to captilize it. 
// Math.function();

// The Math.round() function returns the value of a number rounded to the nearest integer.
Math.round();

// rounds to the nearest interger in this case is 100.
Math.round(100.100010001000);


var someNumber = 50.30403;

// Math.round - Rounds to the nearest interger 
var results = Math.round(someNumber); // someNumber becomes 50.30403
var sentence = "The number " + someNumber + " rounded is " + results + "!";
console.log(sentence);

// example 2
var someNumber2 = 1943.48502;
var results = Math.round(someNumber2); 
var sentence = "The number " + someNumber2 + " rounded is " + results + "!";
console.log(sentence);

// Math.round - Rounds to the nearest interger
// Short example without var
console.log(Math.round(1943.48502) );

// example 3 with Math.ceil
var someNumber3 = 1943.48502;
var results = Math.ceil(someNumber3); 
var sentence = "The number " + someNumber3 + " ceil is " + results + "!";
console.log(sentence);

// Math.ceil - Rounds to the top integer
// Short example without using var
console.log(Math.ceil(45.2) );
// var ceiling = Math.ceil(45.2);
// console.log( ceiling );

// example 4 with Math.floor
var someNumber4 = 1943.48502;
var results = Math.floor(someNumber3); 
var sentence = "The number " + someNumber4 + " floor is " + results + "!";
console.log(sentence);

// Math.floor - Rounds to the lower integer
// Short example without using var
console.log(Math.floor(45.8) );


// example 5 with Math.pow
var someNumber5 = 1943.48502;
var results = Math.pow(someNumber3); 
var sentence = "The number " + someNumber5 + " pow is " + results + "!";
console.log(sentence);

// Argument 1 power to argument 2.
// Short example without using var
console.log(Math.pow(10, 3) );


// example 6 with Math.sqrt
var someNumber6 = 1943.48502;
var results = Math.sqrt(someNumber3); 
var sentence = "The number " + someNumber6 + " square is " + results + "!";
console.log(sentence);

// Square root of Argument 1.
// Short example without using var
console.log(Math.sqrt(100) );




// Example with Math.random
// Create a random number between 0 and .9999999~
var random = Math.random();
console.log(random);

// Take random number and multiply by -1. Negative variable will hold negative version of random.
var negative = random * -1;
console.log(negative);

// Take random number and multiply by 10, range will hold product.
var range = random * 10;
console.log(range);

// Take range value and round up, then store a number in wholeNumber variable.
var wholeNumber = Math.ceil(range);
// Send wholeNumber value to console.
console.log(wholeNumber);

// console.log is used to check if there's something wrong with your code. Aka Debug.

// Built-in function, just not part of the math built-in function
parseInt ();

// parseInt attempts to convert a Datatype String into a Datatype number.

parseInt("1000"); // Number 1000
parseInt("Hello"); // probably NaN 
parseInt("100Hello"); // Number 100
parseInt("hello100"); // NaN

// parseFloat is used for decimal point value. See example bellow
parseFloat("1000.303000"); // Number 1000.30300
// parseInt basically only look at numbers in the string and stops when it reaches to a dot
parseInt("1000.303000"); // Number 1000

var floatNumber = parseFloat("1000.303000");
parseInt("1000.303000");
console.log(floatNumber);

// example of comples code that generates a number between 1 and 10 and sends it directly to the console.
console.log ( Math.floor( ( Math.random() * 10 ) + 1 ) );

// .charAt() will call out the letter from whatver number inside the argument
console.log("Hello World!".charAt(7)); // Finds the character at position 7 (starting from 0, SPACE counts) and sends that character to the console.

// Find the character in the string, and return the position number and send it to the console.
// indexOf basically calls out the NUMBER from whatever LETTER inside the argument.
console.log ( "Hello World!".indexOf("l")) ; // Finds the number chracter position for l.

console.log ( "Hello World!".indexOf("h")) ; // this example will give a negative -1 because there is not a lowcase h in "Hello World!"

var myVariable = "One thing at a time";

myVariable = "This is a new value";

var firstDay = "Monday";
var secondDay = "Tuesday";
// ....

// Array Syntax: [ firstValue, secondValue, thirdValue ]
var weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// To call the whole array and send it to the console.
console.log(weekNames);

// To call the second value in the array, and send it to the console. Basically to select a single value from the array!
// Index (nunbers in Javascript starts with 0-9, zero is one)
console.log( weekNames[1] );
console.log( weekNames[4] );

// Array Methods/Functions

// Add element to the END of the array write: push();
// push(); NEEDS an argument to add an element
// Example on how to add element using push();
weekNames.push("Superday");
console.log(weekNames);

weekNames.push("Funday");
console.log(weekNames);

// Restoring Array using Array Methods
// unshift(); add an element to the start
// unshift(); NEEDS an argument to add an element

weekNames.unshift("Monday");
console.log(weekNames);

// You can ADD multiple elements in the same line, ORDER MATTERS, example bellow:
// weekNames.unshift("Monday, Tuesday, Wednesday, etc..");
// console.log(weekNames);

// Remove an element from the START of the array shift();
// .shift(); doesn't NEED an argument to remove 
// To pretty much get rid of an element from the array, example bellow:
// The first weekNames.shift pretty much removes the FIRST array also know as ZERO from index number counter in Javascript 0 - 9, add more weekNames.shift if you want to remove more. example bellow
weekNames.shift();
console.log(weekNames);
weekNames.shift();
console.log(weekNames);

// Remove an element from END of the array shift();
// .pop(); doesn't NEED an argument to remove

weekNames.pop();
weekNames.pop();
console.log(weekNames)

// Challenge: Move Sunday to the beginning of the array without writing any string in your code.

var weekName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(weekName);

// to use .shift(); and .pop(); to remove an elements it also returns the value removed. So create a VAR for it example bellow:
var day = weekName.pop();
weekName.unshift(day);
console.log(weekName);

// shorter way of this example bellow:
// weekNames.unshift( weekName.pop() );



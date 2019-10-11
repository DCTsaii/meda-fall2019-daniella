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
// Unshift adds to the start of an array.

// weekName.indexOf("Tuesday");
// Unshift adds to the start of an array.
// weekNames.unshift("Monday");
// weekNames.unshift("Monday", "Tuesday");

console.log(weekName);

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

// Challenge End


// Array Method Splice(); designed to extract a part of an array.

// Splice(); allows you to delete a chunk of arrays
// .splice(); go in between your array like cutting in line
// .splice(); takes TWO arguments
// 3 is the start of the index you want to delete, 1 is basically the selector of items you want to delete)
// weekNames.splice(3, 1);

// weekNames.splice(3, 2) // <-- this example starts from 3 and delete 2

var splitArray = weekName.splice (3,2);
console.log(splitArray)

// Add values to array manually by specifying the index number.
splitArray[2] = "Friday";
console.log(splitArray);

// Update value to array by specifying the index number.
splitArray[0] = "Wednesday";
console.log(splitArray);

// Assign a value to an index that doesn't exist yet.
splitArray[10] = "HiddenDay";
console.log(splitArray);

// Arrays and Loops
var names = ["Alpha", "Sam", "Georgio", "Geirmo", "Horacio", "Batman", "Bill", "Mackaw", "Robin"];
// counter = 0; means it starts at index ZERO
// counter < 10; means if the counter is bigger than 10. It's not so it will run
for (var counter = 0; counter < 10; counter = counter + 1) {
    // names is selecting the var names
    // [counter] is the counter for counter = 0 because this counter can change based on the number you input inside. In this case, it starts at Alpha because it's selected to start at 0
    console.log("Hello" + names[counter] + "!"); 
}

// Get a copy from Eduardo to replace this code for lenght example
var names = ["Alpha", "Sam", "Max", "Georgio", "Giermo", "Horacio", "Batman"];

                              //Instead of 10, we use .length so we always loop for the exact number of items of the names array.
for (var counter = 0; counter < names.length; counter = counter + 1) {
    console.log("Hello " + names[counter] + "!");
}

// for (var i = 0; i < 10; i++) {} 

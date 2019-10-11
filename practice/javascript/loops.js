// 3 Types of loops:
// Do While Loop - Common
// For Loop - Most Common
// While Loop - Least common
// .foreach() - Not covered

// Syntax of Do While

// do { /* code */ } while (true); // Because the value of true never changes, the loop will never end.


var aVariable = true;
var counter = 0;

do {
    // Grab the value of counter (after the =), then add a 1 to it, finally store the results back into the counter (before the =).
    counter = counter + 1; // counter++
    
    console.log("The value of counter: " + counter);

    if (counter > 5) {
        aVariable = false;

    }
    
} while ( aVariable ); // if you add a aVariable, you can change the variable. You cannot change true or false.

// To write a do while loop start with keyword: do {} while ():

// Creating a string to string to play with, a counter (i), a condition to stop the loop (loopContinue). and a variable to hold the number of the character of the string (lenghtOfString)
var stringToTest = "This has to be a really long sentence so we have a chance to count a character twice.";
var i = 0; // i is the text variable, i is the most common variable for loops. This line is the counter
var loopContinue = true; // in order for this to work, write loopContinue inside the while(). the true in the code will never change
var lenghtOfString = stringToTest.length;
// Console log the length of the String value.
console.log(lenghtOfString); // will give you the number of lenght

do {

    // i = i + 1; if added here it will start at 1
    
    // Pull a character based on the current loop number (i) using the charAt function.
    var character = stringToTest.charAt(i);
     
    // Add a 1 to the counter (1).
    i = i + 1; // if added here it will start at 0

    // Console log the current value of the character.
    console.log(character);
    
    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lenghtOfString) {
        loopContinue = false; 

    }
// After running the code check loopContinue to see if we should run this loop again.
} while (loopContinue);

// Do While Loop
// do is a keyword
// {} is a code block, the code block will always run first
// (); is a condition, it will run after the code block

// do {} while();

// For Loop
// for lopp, condition will run first, code block will run second

// For () {}

// For While
// for lopp, condition will run first, code block will run second

// While () {}

// 3 Types of loops:
// Do While Loop - Most common
// For Loop - Common
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
    
    if (counter > 1000) {
        aVariable = false;

    }
    
} while ( aVariable ); // if you add a aVariable, you can change the variable. You cannot change true or false.

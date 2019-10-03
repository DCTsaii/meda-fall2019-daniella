// A sample: do while Loop that will run 11.
// Syntax: do {} while ();

// Initialize counter variable for Loop
var counter = 0;

// Create variable for the condition
var continueLoop = true;

do {
    console.log("Loop number for Do While: " + counter);

    // Iterator, change something to modify the condition
    counter = counter + 1;

    if (counter > 10 ) {
        continueLoop = false;
    }
    // Iterator End

} while (continueLoop);

// A sample: for Loop that will run 10 times.
// Syntax: for ( Initialization ; Condition ; Iteration ) { Code }

for (var counter = 0; counter < 10; counter = counter + 1 ) {
    console.log("Loop number for For Loop: " + counter);

}
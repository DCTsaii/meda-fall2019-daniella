// A sample: do while Loop that will run 11.
// Syntax: do {} while ();

// Initialize counter variable for Loop
var counter = 0;

// Create variable for the condition
var continueLoop = true;

do {
    // console.log("Loop number for Do While: " + counter);

    // Iterator, change something to modify the condition
    counter = counter + 1;

    if (counter > 10 ) {
        continueLoop = false;
    }
    // Iterator End

} while (continueLoop);

// While Loop
while (false) {
    // then run this code.
}

// A sample: for Loop that will run 10 times.
// Syntax: for ( Initialization ; Condition ; Iteration ) { Code }

//                      <^> must be true to continue
for (var counter = 0; counter < 10; counter = counter + 1 ) {
    // console.log("Loop number for For Loop: " + counter);

}

// Default way of controlling a loop to run 45 times.
for (counter = 0; counter < 45; counter = counter + 1) {
    console.log("Hello!");
}

// Control the amount of loops based on counter start and condition end.
for (counter = 100; counter < 95; counter = counter + 1) {
    console.log("Hello!");
}

// Control the amount of loops based on the counter jump.
for (var counter = 0; counter < 90; counter + 2){
    console.log("Hello!");
}
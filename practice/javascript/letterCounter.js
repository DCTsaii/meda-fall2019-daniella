// Create a string to play with, a counter (i), a condition to stop the loop (loopContinue), and a variable to hold the the number of characters of the string (lengthOfString)
var stringToTest = "Hello";
var i = 0;
var count = 0;
var loopContinue = true;
var lengthOfString = stringToTest.length; // stringToTest.length is a property
// Console log the length of String value.


var characterToCheck = "s";

"hello".length;

Math.random();

do {

    // Pull a character based on the current loop number (i) using the charAt function.
    var character = stringToTest.charAt(i);

    // console.log("Grab character at index " + i + " and then store the letter " + stringToTest.charAt(i) + "inside of character variable");

    // Add a 1 to the counter (i).
    i = i + 1; 
    // console.log("The loop counter was updated to  +i);

    // Console log the current value of character.
    // console.log(character);

    // Compare value of character to value of characterToCheck;

    if (character == characterToCheck) {
        // console.log("We found a match! for " + characterToCheck + "!");
        cont = count + 1;
    } // else {
        // console.log("No match here for " + characterToCheck + "!"); }

    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lengthOfString) {
        loopContinue = false;
    }
}
    
    // After running the code check loopContinue to see if we should run this loop again.
} while ( loopContinue );

// Console log the length of String value.
console.log("The string we are testing is: " + stringToTest);
console.log("The string has a total length of " + lengthOfString + " characters.");

if (count > 1) {
    console.log("We have found a total of " + count + " matches for the letter " + characterToCheck + ".");
} else if (count == 0) {
    console.log("We didn't find any matches for " + characterToCheck + ".");

} else {
    console.log("We have found a total of " + count + " match for the letter " + characterToCheck + ".");

}


// ` back-ticks is used for multiline strings and string interpolation
// console.log(`We found ${count} match for the letter ${characterToCheck}.`);
// ${} it calls a javascript that it's a function/variable and not a text
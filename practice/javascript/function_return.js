function myFunction() {
    var text = "Hello World!";
    return text; // keyword return returns a piece data 
}

myFunction();

// Practice: Create Three Different Functions, each one returns a different datatype. Console.log the results of your functions.

function myFunction1() {
    var text = "1000";
    return text;
}
// to run a function you call it to run, example bellow
var anyName = myFunction1();
console.log(anyName);

function myFunction2() {
    var text = "hello";
    return text;
}

var word = myFunction2();
console.log(word);


// Data flow using in function.

var aNumber = 22000;

// Provide data to the Math.round function using aNumber as an arugment.
Math.round(aNumber);

// *Do not write this in code* Math.round() will return a value of 22000 based on line 32, and the line 50 would now look like:
22000;

// Define the function "ourOwnRound" with a paramater of "theNumber".
function ourOwnRound(theNumber) {
    // Create a variable "results" with no value given.
    var results;
    // Using the % equation, we can extra the decimal place, and store it in decimalOfTheNumber.
    var decimalOfTheNumber = theNumber % 1;

    // We test the decimal value in decimalOfTheNumber and test if it is larger or smaller than .5...
    if (decimalOfTheNumber >= .5) {
        // ...If it is larger, we round the original number stored in theNumber and store that in the results variable.
        results = Math.ceil(theNumber);
    } else {
        //...If it is smaller, we round the original number stored in theNumber and store that in the results variable.
        results = Math.floor(theNumber);
    }
    // Return the value of results to wherenever this function was called.
    return results;
}
 
// Ways to check your code: 
console.log ( ourOwnRound(63.2938) );

var values = ourOwnRound(392.983);
console.log(values);

// Equation to figure out just the decimal value.
// console.log( 50.39 % 1 )
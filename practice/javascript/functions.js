 // Function syntax.
 // Function keyword + function name + parenthesis + code block

 function myFunction() {

     console.log("This is line 1.");
     console.log("This is line 2.");
     console.log("This is line 3.");

 }

// to call a funcation just write the function name example bellow
// a function has to be called with a parenthesis ();
myFunction();

// The benefit of function is you can run/pull multiple functions by writing the function name a few times, example bellow
myFunction();
myFunction();
myFunction();

// you can define your function at the top or the bottom, this example is at the top example bellow:
function myMathFunction() {
    console.log(2+2);
    console.log(3-2);
    console.log(12/4);
    console.log(2*5);
}


myMathFunction();


// Parameters is values we can pass to functions.
// data goes inside the parenthesis () you don't need to write var because the () is design to store variables/data
// you can have as many variables/data in the paremeters ()

function mathify ( firstNumber, secondNumber ) {
    console.log(firstNumber + secondNumber); // NaN because there's no second number in the arugument mathify(1000) for secondNumber paremeters.
    console.log(firstNumber-1);
    console.log(firstNumber/2);
    console.log(firstNumber/2);

}

// call function to run using different values, values inside () 
// what's inside () is an argument, example bellow
mathify(100, 200)
mathify(1000)


// keywords are reserved
// variable reviews
// two option to write a var 
var variableName;
var variableNmae2 = "new Variable";

// datatypes
1000;
"This is a string";
true;
false;

/*
Pseudo-code for if statement nesting.

if (raining) {

    if (umbrella) {

        "take umbrella";

    } else {

     "take uber";

    }

} else {

    "enjoy your day";
}
*/

// if statement is not used for static questions
// the parenthesis is a condition ()


function math (firstNumber, secondNumber) {

    console.log("The following value were generated from " + firstNumber + " and " + secondNumber + ".");
    console.log("The sum " + (firstNumber + secondNumber));
    console.log("The difference is " + (firstNumber - secondNumber));
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}

math (22,47);


function math2 (firstNumber, secondNumber) {

    var description = "The following value were generated from " + firstNumber + " and " + secondNumber + ".";
    console.log(description);

    // Add firstNumber value and secondNumber value and store them in the variable sum.

    var sum = firstNumber + secondNumber;
    var sumSentence = "The sum is: " + sum;
    console.log(sumSentence);
    
    // Concatenate first part of sentence with sum and store in variable sumSentence.
    var difference = firstNumber - secondNumber;
    var differenceSentence = "The difference is: " + difference;
    console.log(differenceSentence);
    
    // Pass sumSentence value to console.
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}

math2 (21,46);


function mathExample (firstNumber, secondNumber) {

    var description = "The following value were generated from " + firstNumber + " and " + secondNumber + ".";
    console.log(description);

    var sum = firstNumber + secondNumber;
    var sumSentence = "The sum is: " + sum;
    console.log(sumSentence);
    
    var difference = firstNumber - secondNumber;
    var differenceSentence = "The difference is: " + difference;
    console.log(differenceSentence);

    var quotient = firstNumber / secondNumber;
    var quotientSentence = "The quotient is: " + quotient;
    console.log(quotientSentence);

    var product = firstNumber * secondNumber;
    var productSentence = "The product is: " + product;
    console.log(productSentence);
}

mathExample (2,2);
mathExample (3,3);
mathExample (4,4);
mathExample (5,5);


function mathExample2 (firstNumber, secondNumber) {

    var description = "The following value were generated from " + firstNumber + " and " + secondNumber + ".";
    console.log(description);

    var sum = firstNumber + secondNumber;
    var sumSentence = "The sum is: " + sum;
    console.log(sumSentence);
    
    var difference = firstNumber - secondNumber;
    var differenceSentence = "The difference is: " + difference;
    console.log(differenceSentence);

    var quotient = firstNumber / secondNumber;
    var quotientSentence = "The quotient is: " + quotient;
    console.log(quotientSentence);

    var product = firstNumber * secondNumber;
    var productSentence = "The product is: " + product;
    console.log(productSentence);
}

mathExample2 (22,20);
mathExample2 (32,31);
mathExample2 (42,6);
mathExample2 (52,32);
mathExample2 (11,11);


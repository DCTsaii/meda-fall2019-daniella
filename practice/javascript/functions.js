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
// data goes inside the parenthesis () you don't need to write var because the () is design to store variable

function mathify ( firstNumber ) {
    console.log(firstNumber+1);
    console.log(firstNumber-1);
    console.log(firstNumber/2);
    console.log(firstNumber/2);

}

// call function to run using different values, values inside () 
// what's inside () is an argument, example bellow
mathify(100)
mathify(1000)

console.log("Hello World");

//if statement does not require semicolon ;
// in the parentisis we need a boolean
// if only runs if the condition is true
if (true) {

    console.log("this code block ran because the condition was true");
// else does not need a condition to run.
// else only trigger as a backup plan/option if everything fails
// else is generally used only the if statement fails to run
} else {
    console.log("this code block ran because the condition was false");

}

var age = 8;
// if always come first
// if is always first, there's only one if statement
if (age >= 21) {
    console.log ("You are old enough!");
// else if is optional but must come after if and before else.
} else if (age == 18) {
    console.log ("You are an adolescent!");
// else is optional but must come last.
} else {
    console.log ("You are too young!");
}

// new test
// IF, ELSE IF, ELSE

var age = 99;

if (age == 0) {
    console.log ("Congrats on being born, life is hard, good luck!");
} else if (age <= 1) {
    console.log ("Congrats, you survived this long. You are now a toddler.");
} else if (age <= 5) {
    console.log ("You are now a child!");
} else if (age <= 13) {
    console.log ("You are now a teen!");
} else if (age <= 18) {
    console.log ("Young Adult!");
} else if (age <= 26) {
    console.log ("Adult!");
} else if (age <= 144) {
    console.log ("Elder!");
} else {
    console.log ("We don't know else.");
}


// if () then {}
// else if () then {}

// if (true) then {console.log (); }

// if () then {}
// else () {}

// if () then {}
// else if () then {}
// else () {}



// IF, ELSE, IF
// if () {} else if () {}

// IF, ELSE
// if () {} else {}


// OR Operator written as || 
// OR either side can be true or false

if ( true || true) {
    console.log ("Either was true!");
}

var age2 = 10;

if (age2 == 5 || age2 == 6 ) {
    console.log("You're a brat!");
}

// AND operator written as &&
if (true && false) {
    console.log("Both of these are true!");
}

// AND operator happens first before the OR operator.
// && FIRST regardless of order, || SECOND regardless of order.
if (true && true || false && true) {
    console.log("I have no clue!");
}

// ORDER MATTERS
if (false && (true || false) && true) {
    console.log("I have no clue!");
}

// Don't need to write Var if it's already on there

if (age == 0) {
    console.log ("Congrats on being born, life is hard, good luck!");
} else if (age > 0 && age < 18) {
    console.log ("Kid");
} else if (age > 17 && age < 65) {
    console.log ("Adult");
} else if (age > 65) {
    console.log ("Elder!");
} else {
    console.log ("You are not born yet!");
}

// Detecting Negative or Positive Numbers;
var numberTester = -100;

if (numberTester > 0) {
    console.log("This number is positive!");
} else if (numberTester < 0) {
    console.log("This number is negative number!");
}

// Detecting capital or lowercase B.
var testForLetterB = "B";

if (testForLetterB == "b" || testForLetterB == "B") {
    console.log("this character is a B character");
}

// Truthy and Falsies

// Falsies values in javascrip, these will always become a false when running a boolean 
false;
0;
"";
undefined;
null;
// NaN stands for not a number
NaN;

// Truthy
// > 0;
// < 0;
"anything in a string";
"false";
// a 0 in a string is consider a truthy
"0"

var test = "null";

if (test != 0) {
    console.log("The value of " + test + " is truthy!")
}

console.log("My favorite Number is " + 8);

/*
Variables
Datatypes
If Statements, If Else If Else
Logical Operators || Comparitors
AND and OR Operators || && ||
Truthy and Falsey values

*/


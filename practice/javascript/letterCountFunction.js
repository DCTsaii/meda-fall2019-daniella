letterCount("Hello there how are you, nice weather!", "l", 2931208301, true);

letterCount("This is another string!");

letterCount();



function letterCount(text, char) {

    if (text == undefined) {
        console.log("You did not provide a string to test on!");
        return;
    }

    if (char == undefined) {
        console.log("You did not provide a character to look for!");
        return;
    }

    var stringToTest = text;
    var i = 0;
    var count = 0;
    var loopContinue = true;
    var lengthOfString = stringToTest.length;
    var characterToCheck = char;

    do {
        var character = stringToTest.charAt(i);
        i = i + 1;
        
        if (character == characterToCheck) {
            count = count + 1;
        }

        if (i >= lengthOfString) {
            loopContinue = false;
        }

    } while ( loopContinue );

    console.log("The string has a total length of " + lengthOfString + " characters.");

    if (count > 1) {
        console.log("We found " + count + " matches for the letter " + characterToCheck + ".");
    } else if (count == 0) {
        console.log("We didn't find any matches for " + characterToCheck + ".");
    } else {
        console.log("We found " + count + " match for the letter " + characterToCheck + ".");
    }

}

// Break for loop
// Continue for loop
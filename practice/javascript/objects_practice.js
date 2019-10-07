// An object is built with a codeblock {}
// An object doesn't have index numbers by itself. You have to use a keyword/string and add "value" to it. See example bellow for firstKey: "value",

var mySecondArray = [
    "value",
    1000,
    true,
    "cool"
];


var myFirstObject = { 
    firstKey: "value",
    money: 1000,
    rain: true,
    data4: "cool"
};

// Accessing "cool" in array.
console.log( "Array Version: " + mySecondArray[3] );

// Accessing "cool" in object. Pretty much have to write the keyword in this case is "data4"
// You can grab more values by adding in the same code line. Example: myFirstObject["data4"], myFirstObject["rain"]
console.log( "Object Version: " + myFirstObject["data4"], myFirstObject["money"] );

// Updating a value inside of an Object.
myFirstObject["rain"] = false;

// Adding a new key-value to an existing Object.
myFirstObject["day"] = "sunny";

// Adding a new value to an array.
mySecondArray[1000] = 1;
mySecondArray[1000] = 2;
// You can add multiple values to an array example bellow
mySecondArray[1000] = [1 , 2];

console.log(myFirstObject);
console.log(mySecondArray);


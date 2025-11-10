// Example demonstrating first-class functions in JavaScript
// A first-class function is a function that can be treated like any other variable.
// This means you can assign functions to variables, pass them as arguments to other functions, 
// and return them from other functions.

// A function that doubles a number
function doubleMyNumber(num) {
    return num * 2;
}

// Assigning the function to another variable
const someFunction = doubleMyNumber;

const result1 = doubleMyNumber(4);
const result2 = someFunction(4);

console.clear();
console.log(`Result from doubleMyNumber: ${result1}`);
console.log(`Result from someFunction  : ${result2}`);

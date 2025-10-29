// Example demonstrating first-class functions in JavaScript

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

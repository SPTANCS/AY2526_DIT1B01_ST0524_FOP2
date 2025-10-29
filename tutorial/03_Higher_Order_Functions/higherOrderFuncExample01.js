// A higher-order function (HOF) is any function that does at least one of these:
// - Takes another function as an argument, or
// - Returns a function as its result.
// In short:
// A higher-order function either receives or produces another function.

// Example demonstrating higher-order functions in JavaScript - Takes another function as an argument
// A higher-order function that calls a given function 'xTimes'
function callFuncXTimes(func, xTimes) {
    for (let i = 0; i < xTimes; i++) {
        func();
    }
}

// Simple functions to be passed as an argument
function sayHello() {
    console.log("Hello!");
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Demo start here 
console.clear();
console.log("Higher Order Function Example 1\n");

console.log("---");
callFuncXTimes(sayHello, 3); // This will print "Hello!" three times
console.log("---");
callFuncXTimes(sayGoodbye, 5); // This will print "Goodbye!" five times
console.log("---");

console.log("\nEnd of Higher Order Function Example 1");
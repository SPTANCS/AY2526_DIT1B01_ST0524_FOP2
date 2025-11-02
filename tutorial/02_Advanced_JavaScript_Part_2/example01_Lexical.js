// Lexical Scope = Where a variable can be accessed (based on where the code is written).
// Lexical scope defines the "what can be seen".
//
// Example: Demonstrating Lexical Scope in JavaScript
// This file shows how inner functions retain access to variables
// from the scope where they were defined (lexical scope / closure).

// Global variable `x` in the outermost scope (global scope)
var x = 10;

function getAPrintXFunction() {
    // This `x` shadows the global `x` inside this function's scope
    // — it's a different variable even though it has the same name.
    var x = 20;

    // `innerFunction` is defined inside `getAPrintXFunction`.
    // Because of lexical scope, `innerFunction` captures the surrounding
    // scope where it was defined (the one with `x = 20`).
    function innerFunction() {
        // When this line runs later, JS looks for `x` in the inner scope,
        // then the outer function scope (where `x = 20`), then global.
        // It finds `x` = 20 and prints that value.
        console.log(`The value of x is ${x}`);
    }

    // Return the inner function (closure) to the caller. The returned
    // function still has access to the `x` variable above even after
    // `getAPrintXFunction` has finished executing.
    return innerFunction;
}

// Call the factory function to get the closure.
let printX = getAPrintXFunction(); 

// Execute the closure. Expect: "The value of x is 20"
printX();



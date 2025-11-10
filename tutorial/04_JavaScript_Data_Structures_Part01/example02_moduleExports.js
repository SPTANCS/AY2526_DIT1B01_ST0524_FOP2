const input = require('readline-sync')

// Purpose of module.exports (CommonJS)
// - module.exports is the value a module exposes to other files via require().
// - It starts as an empty object ({}); you can add properties or replace it with any value (object, function, primitive).
// - Controls the module's public API so other files can import functionality without exposing internal details.

// Initial state of module.exports
console.clear();
console.log(module.exports);
input.question('\nPress Enter to continue...\n');

// Adding properties to module.exports
module.exports.a = 5;
module.exports.b = 6;

// State after adding properties
console.clear();
console.log(module.exports);
input.question('\nPress Enter to continue...\n');

// Adding a method to module.exports
module.exports.sum = (a, b) => a + b;
console.clear();
console.log(module.exports);
input.question('\nPress Enter to continue...\n');

// Overwriting module.exports with a new object
module.exports = {
  x : 9,
  y : 10
}
// State after overwriting module.exports
console.clear();
console.log(module.exports);
input.question('\nPress Enter to continue...\n');

// Overwriting module.exports with a function
module.exports = function doPrintSomething() {
  console.log('function do PrintSomething')
}
// Final state of module.exports
console.clear();
console.log(module.exports);
input.question('\nPress Enter to continue...\n');


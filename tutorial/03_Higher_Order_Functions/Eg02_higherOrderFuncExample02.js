// A higher-order function (HOF) is any function that does at least one of these:
// - Takes another function as an argument, or
// - Returns a function as its result.
// In short:
// A higher-order function either receives or produces another function.

// Example demonstrating higher-order functions in JavaScript - Returns a function as its result.
// Higher-order function that creates and returns
// a customized text formatting function.
function createFormatter(prefix = "", suffix = "") {
  // Returns a new function that adds the prefix/suffix to a given text
  return function (text) {
    return `${prefix}${text}${suffix}`;
  };
}

// === Demo ===
console.clear();
console.log("Higher Order Function Example 2\n");

// Create reusable formatter functions
const addBold      = createFormatter("<b>", "</b>");
const addItalic    = createFormatter("<i>", "</i>");
const addUnderline = createFormatter("<u>", "</u>");    

// Use them to format text
console.log(addBold("Important"));          // <b>Important</b>
console.log(addItalic("Stylish Text"));     // <i>Stylish Text</i>
console.log(addUnderline("Highlighted"));   // <u>Highlighted</u>

// Combine formatters
console.log(addBold(addItalic("Fancy")));  // <b><i>Fancy</i></b>
console.log(addUnderline(addBold("Attention"))); // <u><b>Attention</b></u>

console.log("\nEnd of Higher Order Function Example 2");    
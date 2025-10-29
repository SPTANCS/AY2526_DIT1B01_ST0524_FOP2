// validateInputDemo.js
const input = require("readline-sync");

// === Without Callback Functions ===
// === Demo ===
console.clear();

console.log("=== Input Validation Demo without Callback ===\n");

// Validate number between 1 and 10
// Loop until valid input is received
let number;
do {
  number = input.question("Enter a number between 1 and 10: ");
  const num = parseInt(number); 
  if (isNaN(num) || num < 1 || num > 10) {
    console.log("Invalid input. Please try again.\n");
  } 
} while (isNaN(parseInt(number)) || parseInt(number) < 1 || parseInt(number) > 10);
console.log(`Your number is: ${number}`);
console.log();

// Validate color option
// Loop until valid input is received
const options = ['red', 'green', 'blue', 'black', 'white'];  
let color;
do {
  color = input.question("Enter a color: ");
     
  if (!options.includes(color.toLowerCase())) {
    console.log("Invalid input. Please try again.\n");
  }
} while (!options.includes(color.toLowerCase()));
console.log(`Your color is: ${color}`);

console.log("\nAll inputs collected successfully!");
const input = require("readline-sync");

// Higher-order function that asks a question until a valid answer is given
// The validation logic is provided via a callback function
// validate: function that takes input and returns true if valid, false otherwise
function askUntilValid(question, validate) {
  let answer;
  let isValid;

  do {
    answer = input.question(question);
    isValid = validate(answer); // Call the callback function to validate

    if (!isValid) { // the value is inValid
      console.log("Invalid input. Please try again.\n");
    }
  } while (!isValid); // the value is inValid
  return answer; // return valid value
}

// === Callback functions for validation ===
// Check if input is a number between 1 and 10
function isOneToTen(value) {
  const num = parseInt(value);
  return !isNaN(num) && num >= 1 && num <= 10;
}

// Check if input is a option
function isInOptions(value) {
  const options = ['red', 'green', 'blue', 'black', 'white'];
  return options.includes(value.toLowerCase());
}

// === Demo ===
console.clear();
console.log("=== Input Validation Demo using Callback ===\n");

let someNumber = askUntilValid("Enter a number between 1 and 10: ", isOneToTen);
console.log(`Your number is: ${someNumber}`);
console.log();

let color = askUntilValid("Enter a color: ", isInOptions);
console.log(`Your color is: ${color}`);

console.log("All inputs collected successfully!");

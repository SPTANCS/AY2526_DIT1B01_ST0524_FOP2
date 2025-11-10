const input = require("readline-sync");

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

// === Demo === using arrow functions for validation
console.clear();
console.log("=== Input Validation Demo using Callback ===\n");

let someNumber = askUntilValid("Enter a number between 1 and 10: ", (value) => {
  const num = parseInt(value);
  return !isNaN(num) && num >= 1 && num <= 10;
});
console.log(`Your number is: ${someNumber}`);
console.log();

let color = askUntilValid("Enter a color: ", value =>  ['red', 'green', 'blue', 'black', 'white'].includes(value.toLowerCase()));
console.log(`Your color is: ${color}`);

console.log("All inputs collected successfully!");

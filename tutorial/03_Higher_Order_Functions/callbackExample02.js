const input = require("readline-sync");
// callback function are functions passed as arguments to other functions
// They are commonly used in higher-order functions to customize behavior
// or to handle asynchronous operations.


// askUntilValid is a Higher-order function that asks a question until a valid answer is given
// The validation logic is provided via a callback function 'validate'
// question: string to ask the user
// validate: function that takes an input and returns true if valid, false otherwise
function askUntilValid(question, validate) {
  let answer;  // store user answer 
  let isValid; // store validation result

  do {
    answer = input.question(question); // ask question
    isValid = validate(answer);        // Call the callback function to validate

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
  return !isNaN(num) && num >= 1 && num <= 10; // read about isNaN function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
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
console.log();

function checkNumber(value) { // 100 and 200 or 500
  let num = parseInt(value);

  if (isNaN(num)) {
    return false;
  } else if (num >= 100 && num <= 200) {
    return true;
  } else if (num == 500) {
    return true;
  } else {
    return false;
  }
}


let someNumber2 = askUntilValid("Enter a number between 100 and 200 or 500: ", checkNumber);
console.log(`Your number is: ${someNumber2}`);
console.log();



console.log("All inputs collected successfully!");

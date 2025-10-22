// This program is a simple number guessing game. When it starts, it clears the console 
// and displays a welcome message. The program then randomly generates a number between 
// 1 and 100. The user is prompted to enter a guess, and the program checks if the guess 
// is correct. If the guess is too high or too low, the program informs the user and 
// asks for another guess. This continues until the user correctly guesses the number. 
// When the correct number is guessed, the program displays a message showing the number 
// and the total number of turns the user took to get the correct answer.

const input = require("readline-sync");

console.clear();
console.log("Welcom to the number guesssing game");

let randomNumber = Math.floor(Math.random() * 100) + 1; // random number between 1 to 100

if ((process.argv[2] + "").toLowerCase() === "showanswer") {
  console.log(`(The answer is ${randomNumber})`);
}

let count = 1;
let guess = input.questionInt("Enter your guess >> ", {
  limitMessage: "Please enter a valid integer number.",
});

while (guess != randomNumber) {
  if (guess > randomNumber) {
    console.log("Your guess is too high.");
  } else {
    console.log("Your guess is too low.");
  }

  count++;
  guess = input.questionInt("Enter your new guess >> ", {
    limitMessage: "Please enter a valid integer number.",
  });
}

console.log(`You are correct, the number is ${randomNumber}, you too ${count} turn(s)`);

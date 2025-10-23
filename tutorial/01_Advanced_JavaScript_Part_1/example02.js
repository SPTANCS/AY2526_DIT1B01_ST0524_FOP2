console.clear();

const input = require('readline-sync');

console.log('Welcome to the number guesssing game');

var randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(`randomNumber is ${randomNumber}`);

var counter = 0;
let userGuess;
do {

  userGuess    = parseInt(input.question("Enter your guess >> "));
  counter++;

  // console.log(typeof userGuess);
  // console.log(`userGuess is ${userGuess}`);

  if (userGuess < randomNumber) {
    console.log('Your guess is too low.');
  } else if (userGuess > randomNumber) {
    console.log('Your guess is too high.');
  } else {
    console.log(`You are correct, the number is ${randomNumber}, you too ${counter} turn(s)`);
  }

} while (randomNumber != userGuess ); // repeat while the guess is wrong



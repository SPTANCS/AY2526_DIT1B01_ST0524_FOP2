const {getRandomIntArray} = require('./randomData');

const randomIntArr = getRandomIntArray(5, 1, 5);

console.clear();
console.table(randomIntArr);

// randomIntArr.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log(`accumulator is ${accumulator}`);
//   console.log(`currentValue is ${currentValue}`);
//   console.log(`currentIndex is ${currentIndex}`);
//   console.log();

//   return accumulator + currentIndex; // remember to return for next round
// }, 0);

// let total =  randomIntArr.reduce((currentTotal, currentNumber) => {
//   return currentTotal + currentNumber; // remember to return for next round
// }, 0);

let total =  randomIntArr.reduce((currentTotal, currentNumber) => 
  currentTotal + currentNumber // remember to return for next round
);

console.log(`Total is ${total}`);
const {getRandomIntArray} = require('./randomData');

const randomIntArr = getRandomIntArray(10, 1, 10);

console.clear();
console.table(randomIntArr);

let totalEven1 = randomIntArr.reduce((currTotal, currentNumber ) => {
   if (currentNumber % 2 == 0) { // even
      return currTotal + currentNumber// for the next round
   } else { // odd
      return currTotal;// for the next round
   }
}, 0);

console.log(`Total of all even numbers is ${totalEven1}`);

let totalEven2 = randomIntArr
                  .filter(num => num % 2 == 0)
                  .reduce((currTotal, currentNumber) => currTotal + currentNumber, 0);

console.log(`Total of all even numbers is ${totalEven2}`);



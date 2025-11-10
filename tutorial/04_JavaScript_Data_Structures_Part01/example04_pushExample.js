console.clear();

// create an array of 10 random even numbers from 2 to 20;

const {getRandomInt} = require('./randomData');

const numArr = [];


// for (let i = 0 ; i < 10 ; i++ ) {
//   const randomNumber = getRandomInt(2, 20);

//   if (randomNumber % 2 == 0) {
//     numArr.push(randomNumber);
//   } else {
//     i--;
//   }
// }

for (let i = 0 ; i < 10 ; i++ ) {
  const randomNumber = getRandomInt(2, 20);

  if (randomNumber % 2 == 0) {
    numArr.push(randomNumber);
  } else {
    numArr.push(randomNumber + 1);
  } 
}


console.log(numArr);
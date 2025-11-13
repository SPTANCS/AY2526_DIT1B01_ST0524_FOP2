const {getRandomIntArray} = require('./randomData');

const randomIntArr = getRandomIntArray(5, 20, 100);

console.clear();
console.table(randomIntArr);

// double all the number in the array
console.log('double all the number in the array');
// const numberDoubledArr = randomIntArr.map( (element) => {
//   return (element * 2);
// });
const numberDoubledArr = randomIntArr.map(num=> num * 2);
console.table(numberDoubledArr);

// for even index double the value, for odd index, change value to 0
console.log();
console.log('for even index double the value, for odd index, change value to 0');
const numberDoubledZeroArr = randomIntArr.map((element, i) => {
  if (i % 2 == 0) // check for even
    return (element * 2);
  else // must be odd 
    return 0;
});
console.table(numberDoubledZeroArr);
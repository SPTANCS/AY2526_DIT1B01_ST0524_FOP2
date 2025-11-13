const {getRandomIntArray} = require('./randomData');

const randomIntArr = getRandomIntArray(10, 1, 10);

console.clear();
console.table(randomIntArr);

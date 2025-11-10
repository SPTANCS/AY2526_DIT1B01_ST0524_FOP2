const input = require('readline-sync');

const x = require('./randomData');

console.clear();
console.log(x); // logs the entire exported module
console.log();

// invoke function getRandomInt that belongs to the imported module x
console.log(x.getRandomInt(100, 200)); // logs a random integer between 100 and 200

// invoke function getRandomIntArray that belongs to the imported module x
console.log(x.getRandomIntArray(5, 10, 50)); // logs an array of 5 random integers between 10 and 50
input.question('\nPress Enter to continue...\n');



const { getRandomInt, getRandomIntArray } = require('./randomData');

console.clear();
// invoke function getRandomInt that was destructured from the imported module
console.log(getRandomInt(300, 400));

// invoke function getRandomIntArray that was destructured from the imported module
console.log(getRandomIntArray(3, 500, 600));  
input.question('\nPress Enter to continue...\n');


const { getRandomInt: randInt, getRandomIntArray: randIntArr } = require('./randomData');

console.clear();
console.log();
// invoke function getRandomInt that was destructured and renamed to randInt from the imported module
console.log(randInt(700, 800));
// invoke function getRandomIntArray that was destructured and renamed to randIntArr from the imported module
console.log(randIntArr(4, 900, 1000));  

console.log("\nEnd of Example02_RequireExample.js");

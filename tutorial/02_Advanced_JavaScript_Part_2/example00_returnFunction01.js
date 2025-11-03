function getANumber() {

  let randomInt = Math.floor(Math.random() * 100) + 1; // 1 to 100

  return randomInt;
}

// what is the difference between these 2 function
const x = getANumber(); // invoke function getANumber and return the value, assign to x
const y = getANumber;   // assign the function itself to y, y is now a function as well

console.log(`x is ${x}`);
console.log();

console.log(`y is`);
console.log(y);

// I can invoke y by:
let z = y();
console.log(`z is ${z}`);

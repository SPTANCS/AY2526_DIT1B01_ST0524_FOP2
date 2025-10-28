const number = 42;

console.log("value of number (after declaration) " + number);
try {
  number = 99;
  console.log("value of number in try catch statement " + number);
} catch (err) {
  // console.log(err);
  console.log("Error");
}

console.log("value of number (after the try catch statement) " + number);

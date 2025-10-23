console.clear();

var x = 1;
console.log("value of x (after declaration) " + x); // Expected output: 1

if (x === 1) {
  var x = 5;
  console.log("value of x (in if statement) " + x); // Expected output: 5
}
console.log("value of x (after the if statement)" + x); // Expected output: 5

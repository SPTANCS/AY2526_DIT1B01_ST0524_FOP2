// Declare an array
//             0          1         2       3        4
let cars = ["toyota", "mercedes", "bmw", "volvo", "honda"];

console.clear();

// accessing array elements
console.log(cars[0]); // toyota
console.log(cars[2]); // bmw
console.log(cars.length); // length of array
// Loop through the array
// You're writing an arrow-function here:

console.log();

// cars.forEach((item, index) => {
//   console.log(item, index);
// });

function displayFormat(name, index) {
  console.log(`The car brand at index position ${index} is ${name}`);
}

cars.forEach(displayFormat);
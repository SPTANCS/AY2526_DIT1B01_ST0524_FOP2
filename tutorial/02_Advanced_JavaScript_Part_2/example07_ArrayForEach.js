console.clear();

const myNumArray = [];

// 1. what is the start point
// 2. what is the endpoint. as long as ______ is true, I carry on
// 3. how to move from the start point towards the endpoint

for (let i = 0 ; i < 10 ; i++) {
  myNumArray[i] = Math.floor(Math.random() * 100) + 1; // 1 to 100;
}

console.log(myNumArray);

for (let i = 0 ; i < myNumArray.length ; i++) {
  console.log(`The number is ${myNumArray[i]} at index position ${i}`);
}
console.log();

myNumArray.forEach((number, index) => {
  console.log(`The number is ${number} at index position ${index}`);
});

// introduce a value at index position 15
myNumArray[15] = 99;

for (let i = 0 ; i < myNumArray.length ; i++) {
  console.log(`The number is ${myNumArray[i]} at index position ${i}`);
}
console.log();

myNumArray.forEach((number, index) => {
  console.log(`The number is ${number} at index position ${index}`);
});

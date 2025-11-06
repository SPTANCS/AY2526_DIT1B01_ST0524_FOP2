
// function functionName(parameters) {
//   return;
// }


// const functionName = function (parameters) {
//   return;
// }

// replace the keyword function with =>
const functionName =  (parameters) => {
  return;
}

function displaySomething1() {
  console.log("Hello 1");
}

const displaySomething2 = () => console.log("Hello 2");

displaySomething1();
console.log(displaySomething2());

function returnSomething1() {
  return 100 * 2;
}

const returnSomething2 = () => 100 * 2;

console.log( returnSomething1() );
console.log( returnSomething2() );

function addAndReturn1 (a , b) {
  return a + b;
}

const addAndReturn2 = (a , b) => a + b;

console.log(addAndReturn1(2, 4));
console.log(addAndReturn2(2, 4));

function doubleValue1 (num) {
  return num * 2;
}

const doubleValue2 = num => num * 2;

console.log(doubleValue1(5));
console.log(doubleValue2(5));
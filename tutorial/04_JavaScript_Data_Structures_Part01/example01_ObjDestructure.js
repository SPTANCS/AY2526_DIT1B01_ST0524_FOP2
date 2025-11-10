// Destructuring Assignment for Objects
const sampleObj = {
  a : 4,
  b : 6,
  sum: (a, b) => a + b 
}

// Basic destructuring
// let {a, b, sum} = sampleObj;
// Renaming variables during destructuring
let {a, b : x, sum} = sampleObj; // b is renamed to x

console.clear();
console.log(a);
console.log(x);
console.log(sum);
console.log(sum(5, 7));
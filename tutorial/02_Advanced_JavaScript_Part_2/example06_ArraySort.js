
console.clear();

const myStrArray = ['red', 'green', 'blue', 'yellow'];
const myNumArray = [ 2, 3, 1, 4, 12, 39];

console.table(myStrArray);
myStrArray.sort();
console.table(myStrArray);

console.log();

console.table(myNumArray);
myNumArray.sort();
console.table(myNumArray);

function sortNumberAsc1(a, b) {
  // return A negative value indicates that a should come before b.
  // return A positive value indicates that a should come after b.
  // return Zero or NaN indicates that a and b are considered equal.

  if (a > b) {
    return 100; // as long as it's positive
  } else if (a < b) {
    return -67; // as long as it's negative
  } else {  // a === b
    return 0;
  }
}

function sortNumberAsc2(a, b) {
  return (a - b);
}

//myNumArray.sort(sortNumberAsc1);
//myNumArray.sort(sortNumberAsc2);

myNumArray.sort((a, b) => a - b);
console.table(myNumArray);

myNumArray.sort(      );
console.table(myNumArray);


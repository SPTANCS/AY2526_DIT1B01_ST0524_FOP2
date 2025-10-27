

function createRectangle(length, height) {
  return {
    length,
    height : height,
    caomputeArea : function () { return this.length * this.height}
  }
}

const r1 = createRectangle(5, 8);
const r2 = createRectangle(6, 4);

console.clear();
console.table(r1);
console.table(r2);

//                               '.' belongs to
//                               I want the length that belongs to r1
console.log(`The length of r1 is ${r1.length} and height is ${r1.height} area is ${r1.caomputeArea()}`)
const input = require('readline-sync');

function sayHello() {
  console.log('Hello, whoever you are!');
}

function askNameSayHello() {
  const name = input.question("Please Enter your name >> ");
  console.log(`Hello ${name}, How are you today?`);
}

function singASong() {
  console.log("I would like to sing a Song");
  console.log("Mary had a little lamb,"); 
  console.log("little lamb, little lamb.");
  console.log("Mary had a little lamb,");
  console.log("its fleece was white as snow.");
}

function sayGoodBye() {
  console.log("G");
  console.log(" o");
  console.log("  o");
  console.log("   d");
  console.log("    b");
  console.log("     y");
  console.log("      e");
}

console.clear();

console.log("Welcome to Higher Order Functions Example 01\n");

// we are going to replace this code by using first class functions concepts
// start of code to replace
let rabdomSelect = Math.floor(Math.random() * 4);

if (rabdomSelect === 0) {
  sayHello();
} else if (rabdomSelect === 1) {
  askNameSayHello();
} else if (rabdomSelect === 2) {
  singASong();
} else {
  sayGoodBye();
}
// end of code to replace

console.log("\nEnd of Program");
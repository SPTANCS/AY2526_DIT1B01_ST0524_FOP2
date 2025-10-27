console.clear();

function someFunction (someValue) {
  return someVALUE; // wrong
}

let result = "No error life is good!";

try {
  result = someFunction("give a String");
} catch (error) {
 console.log('I caught an error, now I can decide what I can do.');
 result = "Something happended, well life goes on! Not going to Stop trying!";
}




console.log(result);
console.log("Program Completed! Nice!");
// Returns a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}

// Returns an array of random integers of specified size within the given range
function getRandomIntArray(size, min, max) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(getRandomInt(min, max));
  }
  return arr; 
}

// Formats and returns a string displaying the title and the array of integers
function displayStrIntArray(title, arr) {
  const maxNum   = Math.max(...arr); // Find the maximum number in the array using spread operator and Math.max
  const numWidth = maxNum.toString().length; // Determine the width needed for formatting

  let str = `${title}:`;
  arr.forEach(num => {
    str += ` ${num.toString().padStart(numWidth, ' ')}`; // Pad each number for alignment
  });
  return str;
}

// Exporting the functions for use in other modules
module.exports = {
  getRandomInt,
  getRandomIntArray,
  displayStrIntArray
};

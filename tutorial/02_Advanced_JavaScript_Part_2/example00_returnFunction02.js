function getANumber() {

  let randomInt = Math.floor(Math.random() * 100) + 1; // 1 to 100

  return randomInt;
}

function getNumberFunc () {

  const randomColor = function () {
    const colorArr = ['red', 'green', 'blue'];

    return colorArr[Math.floor(Math.random() * colorArr.length)];
  }

  return randomColor;
}

let x = getANumber();
let y = getNumberFunc();

console.log(x);
console.log(y);

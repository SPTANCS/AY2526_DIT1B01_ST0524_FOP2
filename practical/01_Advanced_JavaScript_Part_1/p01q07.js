const input = require("readline-sync");

console.clear();

let interest = 1 / 100;
let balance = 0;
let dailyInt = 0;

function userBalance() {
  let userName = "";
  let balance = 0;

  userName = input.question("Please enter your name : ");
  balance = input.question("Please enter amount in the bank : ");
}

function calculateInterest(balance, interest, noofDayDeposit) {
  dailyInt = (balance * interest) / 365;

  interestAmount = dailyInt * noofDayDeposit;

  return interestAmount;
}

let userSelect = 1;

while (userSelect != 0) {
  let menu =
    " 1. Enter name and bank deposit amount\n 2. Display Interest earned\n 3. Display bank balance \n 4. Display the bank interest rate \n0. Exit\n";

  userSelect = input.questionInt(menu);

  if (userSelect == 1) {
    userBalance();
  }

  if (userSelect == 2) {
    let intEarn = calculateInterest(balance, interest, 365);
    console.log("Interest Earned : $" + intEarn);
  }

  if (userSelect == 3) {
    console.log("Your bank balance is $" + balance);
  }

  if (userSelect == 4) {
    console.log(
      "Hi , " + userName + " the bank interest is : " + interest * 100 + "%"
    );
  }

  if (userSelect == 0) {
    console.log("End of application");
  }
}

console.log("Program Terminate");

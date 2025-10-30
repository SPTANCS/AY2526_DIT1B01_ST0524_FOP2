const input = require("readline-sync");
console.clear();

const MENU_OPTION = {
  ENTER_BALANCE         : 1,
  INTEREST_EARNED       : 2,
  DISPLAY_BALANCE       : 3,
  DISPLAY_INTEREST_RATE : 4,
  EXIT                  : 0
}

const MENU_OPTION_STR = `${MENU_OPTION.ENTER_BALANCE}. Enter name and bank deposit amount\n` +
                        `${MENU_OPTION.INTEREST_EARNED}. Display Interest earned\n` +
                        `${MENU_OPTION.DISPLAY_BALANCE}. Display bank balance \n` + 
                        `${MENU_OPTION.DISPLAY_INTEREST_RATE}. Display the bank interest rate \n` +
                        `${MENU_OPTION.EXIT}. Exit\n`;

const USER_ACCOUNT = {
  name    : '',
  interest: 1 / 100,
  balance : 0
}

function userBalance() {
  USER_ACCOUNT.name    = input.question("Please enter your name : ");
  USER_ACCOUNT.balance = input.question("Please enter amount in the bank : ");
}

function calculateInterest(noofDayDeposit) {
  const dailyInt = (USER_ACCOUNT.balance * USER_ACCOUNT.interest) / 365;
  return dailyInt * noofDayDeposit;
}

function handleSelectedOption(option) {
  switch (option) {
    case MENU_OPTION.ENTER_BALANCE:
      userBalance();
      break;
    case MENU_OPTION.INTEREST_EARNED:
      let intEarn = calculateInterest(365);
      console.log("Interest Earned : $" + intEarn);
      break;
    case MENU_OPTION.DISPLAY_BALANCE:
      console.log("Your bank balance is $" + USER_ACCOUNT.balance);
      break;
    case MENU_OPTION.DISPLAY_INTEREST_RATE:
      console.log(`Hi, ${USER_ACCOUNT.name} the bank interest is : ${USER_ACCOUNT.interest * 100}%`);
      break;
    case MENU_OPTION.EXIT:
      console.log("End of application");
  }  
}

function myApp() {
  let userSelect;
  do {
    userSelect = input.questionInt(MENU_OPTION_STR);
    console.clear();
    handleSelectedOption(userSelect);
  } while (userSelect != MENU_OPTION.EXIT);
  console.log("Program Terminate");
}


// Start my application
myApp();
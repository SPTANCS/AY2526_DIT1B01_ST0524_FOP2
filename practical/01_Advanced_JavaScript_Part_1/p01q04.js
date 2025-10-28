// Code Update on 24 Oct 2025
// Ticket price
// 1000 to 1400  (Off Peak) - $11.00
// 1400 to 2359  (Normal)  - $15.00
// 0000 to 0200  (Off Peak) - $11.00
// 0200 to 1000  (No Screen Time)
// First 2 days of movie premiere - $21.00
console.clear();
let input = require("readline-sync");

// Ticket Type
const OFFPEAK = 0;
const NORMAL = 1;
const PREMIERE = 2;
const NOSCREENTIME = 3;

// Global Scope
const type = ["offpeak", "normal", "premiere", "no screen time"];
const ticketprice = [11.0, 15.0, 21.0, 0.0];

// Block Scope
// Ticket type
function ticketType(time) {
  // Time is 0 means it is premiere tickets
  if (time == 0) {
    return PREMIERE;
  } else if (time >= 1400 && time <= 2359) {
    return NORMAL;
  } else if (time >= 1000 && time < 1400) {
    return OFFPEAK;
  } else if (time >= 1 && time < 200) {
    return OFFPEAK;
  } else if (time > 200) {
    return NOSCREENTIME;
  }
}

// function scope
// Determine the price of tickets
function buyticket(time) {
  // Check ticket type
  return ticketprice[ticketType(time)];
}

// Execute the program
let ticketTime = input.question("Enter the movies show time (1000, 1200) : ");
let price = buyticket(ticketTime);

// Show example of block scope ONLY
let tType;
// Block Scope
{
  // let tType = "";
  if (ticketTime == 0) {
    console.log("Premier Tickets");
    tType = type[PREMIERE];
  } else if (ticketTime >= 1400 && ticketTime <= 2359) {
    tType = type[NORMAL];
  } else if (ticketTime >= 1000 && ticketTime < 1400) {
    tType = type[OFFPEAK];
  } else if (ticketTime >= 1 && ticketTime < 200) {
    tType = type[OFFPEAK];
  } else if (ticketTime > 200) {
    tType = type[NOSCREENTIME];
  }
  console.log("The ticket type is (in block scope) " + tType);
}
console.log("The ticket type is (not in block scope) " + tType);
console.log("The ticket price is $" + price);

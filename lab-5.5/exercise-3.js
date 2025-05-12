const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a positive integer:"));

let leftDigit = 0;

if (num < 0) {
  console.log("Invalid input. Please try again.");
} else {
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    leftDigit = i;
  }
  console.log(`The most left digit is ${leftDigit}.`);
}

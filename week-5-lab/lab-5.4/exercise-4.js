const prompt = require("prompt-sync")();

const n = parseFloat(prompt("Enter positive integer:"));

let numOfDigits = 0;

if (n <= 0 || isNaN(n)) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    numOfDigits++;
  }

  console.log(numOfDigits);
}

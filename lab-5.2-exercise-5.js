const prompt = require("prompt-sync")();

const integerInput = prompt("Enter a positive integer:");

const rightMostDigit = integerInput % 10;

console.log(
  "The right most digit of " + integerInput + " is " + rightMostDigit + "."
);

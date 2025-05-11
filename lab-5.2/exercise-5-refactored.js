const prompt = require("prompt-sync")();

var integerInput = 0,
  rightMostDigit = 0;

integerInput = Number(prompt("Enter a positive integer:"));

rightMostDigit = integerInput % 10;

console.log(`The right most digit of ${integerInput} is ${rightMostDigit}.`);

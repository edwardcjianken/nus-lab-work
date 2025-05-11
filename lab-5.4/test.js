const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a positive integer:"));

if (number > 0) {
  console.log(`\nTimes table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
} else {
  console.log("Invalid input. Please enter a positive integer.");
}

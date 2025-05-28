const prompt = require("prompt-sync")();

const inputInt = parseFloat(prompt("Enter a positive integer:"));

if (inputInt > 0) {
  console.log(`\nTimes table for ${inputInt}`);

  for (let i = 1; i <= 10; i++) {
    outputInt = inputInt * i;

    console.log(`${inputInt} x ${i} = ${outputInt}`);
  }
} else {
  console.log("Invalid input. Please enter a positive integer.");
}

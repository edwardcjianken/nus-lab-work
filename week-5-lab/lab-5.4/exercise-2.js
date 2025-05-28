const prompt = require("prompt-sync")();

const base = parseFloat(prompt("Enter a positive integer as the base number:"));

const exponent = parseFloat(
  prompt("Enter a positive integer as the exponent number:")
);

let result = 1;

if (base < 0 || exponent < 0 || isNaN(base) || isNaN(exponent)) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  console.log(result);
}

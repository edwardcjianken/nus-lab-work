const prompt = require("prompt-sync")();

const limit = parseFloat(prompt("Enter limit:"));

const x = parseFloat(
  prompt(
    "Enter x (Will return the sum of all multiples of x less or equal to limit):"
  )
);

let multiplier = 1,
  currentMultiple = x,
  sumofMultiples = 0;

while (currentMultiple <= limit) {
  sumofMultiples += currentMultiple;
  multiplier++;
  currentMultiple = x * multiplier;
}

console.log(`\n${sumofMultiples}`);

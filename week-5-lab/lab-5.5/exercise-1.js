const prompt = require("prompt-sync")();

const num = parseInt(prompt("Enter a positive integer from 1 to 100:"));

if (num < 1 || num > 100 || isNaN(num)) {
  console.log("Invalid input. Please try again.");
} else {
  let isPerfectSquare = false;

  for (let i = 1; i <= 10; i++) {
    let currentValue = i * i;
    if (num == currentValue) {
      isPerfectSquare = true;
      break;
    }
  }

  if (isPerfectSquare) {
    console.log(`${num} is a perfect integer.`);
  } else {
    console.log(`${num} is not a perfect integer.`);
  }
}

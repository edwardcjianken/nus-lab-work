const prompt = require("prompt-sync")();

const num = parseInt(prompt("Enter a positive integer:"));

if (num < 1 || isNaN(num)) {
  console.log("Invalid input. Please try again.");
} else {
  let isPerfectSquare = false;
  let i = 1;

  while (i * i <= num) {
    console.log(i);
    if (i * i == num) {
      isPerfectSquare = true;
      break;
    } else {
      i++;
    }
  }

  if (isPerfectSquare) {
    console.log(`${num} is a perfect square.`);
  } else {
    console.log(`${num} is not a perfect square.`);
  }
}

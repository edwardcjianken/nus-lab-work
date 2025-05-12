const prompt = require("prompt-sync")();

//Enter a positive integer (with validtion checks)
let inputInt = 0;

while (true) {
  inputInt = Number(prompt("Enter a positive integer:"));
  if (inputInt <= 0 || isNaN(inputInt)) {
    console.log("Invalid input. Please enter a positive integer.");
    continue;
  } else {
    console.log(`Input integer: ${inputInt}`);
    break;
  }
}

//Collatz Conjecture
let array = [inputInt];
let currentNumber = inputInt;

while (currentNumber !== 1) {
  if (currentNumber % 2 == 0) {
    currentNumber /= 2;
    array.push(currentNumber);
  } else {
    currentNumber = 3 * currentNumber + 1;
    array.push(currentNumber);
  }
}

console.log(`Output: ${array.join(", ")}`);

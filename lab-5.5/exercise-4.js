const prompt = require("prompt-sync")();

let numInput = 0;

// Enter valid number input
while (true) {
  numInput = Number(prompt("Enter a positive integer:"));
  if (numInput < 0 || isNaN(numInput)) {
    console.log("Invalid input. Please enter positive integer.");
    continue;
  } else {
    console.log(`Number Input: ${numInput}`); //For debugging
    break;
  }
}

// Convert number input into array
let tempNum = numInput;
let arrayNum = [];

while (tempNum > 0) {
  arrayNum.unshift(tempNum % 10);
  tempNum = Math.floor(tempNum / 10);
}

console.log(`Array: ${arrayNum}`);

// Enter valid digit position
let digitPosition = 0;

while (true) {
  digitPosition = Number(prompt("Enter digit position for search:"));
  if (digitPosition <= 0 || isNaN(digitPosition)) {
    console.log("Error: Digit position must be greater than 0.");
    continue;
  } else if (digitPosition > arrayNum.length) {
    console.log("Error: Digit position is more than the number of digits.");
    continue;
  } else {
    console.log(`Digit position: ${digitPosition}`);
    break;
  }
}

//Find digit position value
let digitPositionValue = arrayNum[digitPosition - 1];
console.log(
  `Digit number ${digitPosition} of ${numInput} is ${digitPositionValue}.`
);

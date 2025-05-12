const prompt = require("prompt-sync")();

//Enter any number of integers, and add to array.
let array = [];

while (true) {
  let integer = Number(prompt("Enter an integer (invalid integer to stop): "));
  if (Number.isInteger(integer)) {
    array.push(integer);
    console.log(array); //For debugging
  } else {
    break;
  }
}

//Bubble sort array
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(`Sorted numbers = ${array.join(", ")}`);

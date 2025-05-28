const prompt = require("prompt-sync")();

//Enter any number of integers, and place into array.
let array = [];

while (true) {
  let int = Number(prompt("Enter an integer: (invalid integer to stop):"));
  if (Number.isInteger(int)) {
    array.push(int);
  } else {
    break;
  }
}

console.log(array); //For debugging

//Bubble sort the array
for (let i = 0; i < array.length - 2; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(`Sorted numbers: ${array.join(", ")}`);

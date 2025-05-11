const prompt = require("prompt-sync")();

const limit = parseFloat(prompt("Enter limit:"));
const x = parseFloat(prompt("Enter x:"));

let sum = 0;

for (let i = x; i <= limit; i += x) {
  sum += i;
}

console.log(sum);

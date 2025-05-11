const prompt = require("prompt-sync")();

var int1 = 0,
  int2 = 0,
  int3 = 0;

int1 = Number(prompt("Enter first integer:"));
int2 = Number(prompt("Enter second integer:"));
int3 = Number(prompt("Enter third integer:"));

var largest = int1;

if (int2 > largest) {
  largest = int2;
}

if (int3 > largest) {
  largest = int3;
}

console.log(`The largest integer entered is ${largest}.`);

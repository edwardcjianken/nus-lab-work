const prompt = require("prompt-sync")();

var int1 = 0,
  int2 = 0,
  int3 = 0;

int1 = Number(prompt("Enter first integer:"));
int2 = Number(prompt("Enter second integer:"));
int3 = Number(prompt("Enter third integer:"));

var smallest = int1;

if (int2 < smallest) {
  smallest = int2;
}

if (int3 < smallest) {
  smallest = int3;
}

console.log(`The smallest integer entered is ${smallest}.`);

const prompt = require("prompt-sync")();

const testScore = parseFloat(prompt("Enter student score:"));

let grade = "";

switch (true) {
  case testScore >= 90 && testScore <= 100:
    grade = "A";
    break;

  case testScore >= 80:
    grade = "B";
    break;

  case testScore >= 70:
    grade = "C";
    break;

  case testScore >= 60:
    grade = "D";
    break;

  case testScore >= 0:
    grade = "F";
    break;

  default:
    grade = "Error";
}

console.log(`Student grade: ${grade}.`);

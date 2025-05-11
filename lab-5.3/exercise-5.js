const prompt = require("prompt-sync")();

const testScore = parseFloat(prompt("Enter student score:"));

let grade = 0;

switch (true) {
  case testScore >= 90 && testScore <= 100:
    grade = "A";
    break;

  case testScore >= 80 && testScore <= 89:
    grade = "B";
    break;

  case testScore >= 70 && testScore <= 79:
    grade = "C";
    break;

  case testScore >= 60 && testScore <= 69:
    grade = "D";
    break;

  case testScore >= 0 && testScore <= 59:
    grade = "F";
    break;

  default:
    grade = "Error";
}

console.log(`Student grade: ${grade}.`);

const prompt = require("prompt-sync")();

const testScore = parseFloat(prompt("Enter student's test score:"));

let grade = "";

if (testScore >= 90 && testScore <= 100) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else if (testScore >= 0) {
  grade = "F";
} else {
  grade = "Error";
}

console.log(`Student grade: ${grade}.`);

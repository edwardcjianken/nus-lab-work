const prompt = require("prompt-sync")();

const typeOfConversion = prompt(
  "Choose type of temp conversion: (C2F or F2C)"
).toUpperCase();

const tempToConvert = parseFloat(prompt("Enter temperature for conversion:"));

let tempAfterConvert = 0;

switch (typeOfConversion) {
  case "C2F":
    if (tempToConvert >= 0 && tempToConvert <= 100) {
      tempAfterConvert = (tempToConvert / 100) * 180 + 32;
      tempAfterConvert = Math.round(tempAfterConvert * 100) / 100;
      console.log(
        `${tempToConvert} celsius is equivalent to ${tempAfterConvert} fahrenheit.`
      );
    } else {
      console.log("Error");
    }

    break;

  case "F2C":
    if (tempToConvert >= 32 && tempToConvert <= 212) {
      tempAfterConvert = ((tempToConvert - 32) / 180) * 100;
      tempAfterConvert = Math.round(tempAfterConvert * 100) / 100;
      console.log(
        `${tempToConvert} fahrenheit is equivalent to ${tempAfterConvert} celsius.`
      );
    } else {
      console.log("Error");
    }

    break;

  default:
    console.log("Invalid input. Please try again.");
}

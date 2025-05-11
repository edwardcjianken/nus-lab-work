const prompt = require("prompt-sync")();

var celsiusToConvert = 0,
  fahrenheitAfterConvert = 0;

celsiusToConvert = Number(prompt("Enter temperature in Celsius:"));

fahrenheitAfterConvert = (celsiusToConvert / 100) * 180 + 32;

fahrenheitAfterConvert = Math.round(fahrenheitAfterConvert * 10) / 10;

console.log(
  `${celsiusToConvert} celsius is equivalent to ${fahrenheitAfterConvert} fahrenheit.`
);

var fahrenheitToConvert = 0,
  celsiusAfterConvert = 0;

fahrenheitToConvert = Number(prompt("Enter temperature in Fahrenheit:"));

celsiusAfterConvert = ((fahrenheitToConvert - 32) / 180) * 100;

celsiusAfterConvert = Math.round(celsiusAfterConvert * 10) / 10;

console.log(
  `${fahrenheitToConvert} fahrenheit is equivalent to ${celsiusAfterConvert} celsius.`
);

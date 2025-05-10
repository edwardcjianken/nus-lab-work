const prompt = require("prompt-sync")();

const celsiusToConvert = prompt("Input a temperature in Celsius:");

const fahrenheitAfterConvert =
  Math.round((32 + (celsiusToConvert / 100) * 180) * 10) / 10;

console.log(
  celsiusToConvert +
    " Celsius is equivalent to " +
    fahrenheitAfterConvert +
    " Fahrenheit."
);

const fahrenheitToConvert = prompt("Input a temperature in Fahrenheit:");

const celsiusAfterConvert =
  Math.round(((fahrenheitToConvert - 32) / 180) * 100 * 10) / 10;

console.log(
  fahrenheitToConvert +
    " Fahrenheit is equivalent to " +
    celsiusAfterConvert +
    " Celsius."
);

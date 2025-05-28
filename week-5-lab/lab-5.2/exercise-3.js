const prompt = require("prompt-sync")();

const usdToExchange = prompt(
  "What is the amount of USD to be exchanged to SGD?"
);

const sgdAfterExchange = Math.round(usdToExchange * 1.31 * 100) / 100;

console.log(
  usdToExchange + " USD is equivalent to " + sgdAfterExchange + " SGD."
);

const sgdToExchange = prompt(
  "What is the amount of SGD to be exchanged to USD?"
);

const usdAfterExchange = Math.round((sgdToExchange / 1.31) * 100) / 100;

console.log(
  sgdToExchange + " SGD is equivalent to " + usdAfterExchange + " USD."
);

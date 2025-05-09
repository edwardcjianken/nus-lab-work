const prompt = require("prompt-sync")();

const usdToExchange = prompt(
  "What is the amount of USD to be exchanged to SGD?"
);

const sgdAfterExchange = usdToExchange * 1.31;

console.log(
  usdToExchange + " USD is equivalent to " + sgdAfterExchange + " SGD."
);

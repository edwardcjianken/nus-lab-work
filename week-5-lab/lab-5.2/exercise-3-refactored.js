const prompt = require("prompt-sync")();

var usdToExchange = 0,
  sgdAfterExchange = 0;

usdToExchange = Number(prompt("Enter USD amount for conversion:"));

sgdAfterExchange = usdToExchange * 1.31;

sgdAfterExchange = Math.round(sgdAfterExchange * 100) / 100;

console.log(
  `${usdToExchange} USD will be converted to ${sgdAfterExchange} SGD`
);

var sgdToExchange = 0,
  usdAfterExchange = 0;

sgdToExchange = Number(prompt("Enter SGD amount for conversion:"));

usdAfterExchange = sgdToExchange / 1.31;

usdAfterExchange = Math.round(usdAfterExchange * 100) / 100;

console.log(
  `${sgdToExchange} SGD will be converted to ${usdAfterExchange} USD.`
);

const prompt = require("prompt-sync")();

var chickenPerPax = 0,
  ricePerPax = 0,
  chilliPerPax = 0,
  numberOfDiner = 0;

chickenPerPax = Number(prompt("Enter amount of chicken needed per diner:"));
ricePerPax = Number(prompt("Enter amount of rice needed per diner:"));
chilliPerPax = Number(prompt("Enter amount of chilli needed per diner:"));
numberOfDiner = Number(prompt("Enter number of diner:"));

var totalChicken = 0,
  totalRice = 0,
  totalChilli = 0;

totalChicken = chickenPerPax * numberOfDiner;
totalRice = ricePerPax * numberOfDiner;
totalChilli = chilliPerPax * numberOfDiner;

console.log(
  `For ${numberOfDiner} diners, total of ${totalChicken} kg of chicken, ${totalRice} kg of rice, and ${totalChilli} kg of chilli is needed.`
);

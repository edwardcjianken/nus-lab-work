const prompt = require("prompt-sync")();

const chickenPerPax = prompt(
  "How much chicken (kg) needed per pax of chicken rice?"
);

const ricePerPax = prompt("How much rice (kg) needed per pax of chicken rice?");

const chilliPerPax = prompt(
  "How much chilli (kg) needed per pax of chicken rice?"
);

console.log(
  chickenPerPax + "kg of chicken is needed for per pax of chicken rice."
);
console.log(ricePerPax + "kg of rice is needed for per pax of chicken rice.");
console.log(
  chilliPerPax + "kg of chilli is needed for per pax of chicken rice."
);

const numOfDiners = prompt("How many diners are attending the event?");

const totalChickenNeeded = chickenPerPax * numOfDiners;
const totalRiceNeeded = ricePerPax * numOfDiners;
const totalChilliNeeded = chilliPerPax * numOfDiners;

console.log(
  "For " +
    numOfDiners +
    " diners, total " +
    totalChickenNeeded +
    " kg of chicken, " +
    totalRiceNeeded +
    " kg of rice, and " +
    totalChilliNeeded +
    " kg of chilli is needed."
);

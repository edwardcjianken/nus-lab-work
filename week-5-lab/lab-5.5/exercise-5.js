const prompt = require("prompt-sync")();

function guessGame() {
  let computerAge = Math.floor(Math.random() * 100) + 1;
  console.log(computerAge); //for debugging purpose
  let attempt = 1;
  let guessAnswer = Number(prompt("Enter your guess:"));

  while (guessAnswer != computerAge) {
    if (guessAnswer < 0 || isNaN(guessAnswer)) {
      console.log("Invalid input. Please enter a positive integer.");
      guessAnswer = Number(prompt("Guess again:"));
    } else if (guessAnswer > computerAge) {
      console.log("Wrong. You guessed too high.");
      attempt++;
      guessAnswer = Number(prompt("Guess again:"));
    } else {
      console.log("Wrong. You guessed too low.");
      attempt++;
      guessAnswer = Number(prompt("Guess again:"));
    }
  }

  if (guessAnswer == computerAge) {
    console.log(
      `Congratulations! You guessed it correctly in ${attempt} attempt(s).`
    );

    let playAgain = prompt(
      "Do you want to continue playing the game? (Y to continue):"
    ).toUpperCase();

    if (playAgain == "Y") {
      guessGame();
    }
  }
}

guessGame();

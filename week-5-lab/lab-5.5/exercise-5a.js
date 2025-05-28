const prompt = require("prompt-sync")();

function guessGame() {
  let computerAge = Math.floor(Math.random() * 100) + 1;
  let guessAnswer = 0;
  let attempt = 0;

  while (true) {
    console.log(computerAge); //For debugging
    guessAnswer = Number(prompt("Enter your guess:"));

    if (guessAnswer < 0 || isNaN(guessAnswer)) {
      console.log("Invalid input. Please try again.");
      continue;
    }

    attempt++;

    if (guessAnswer == computerAge) {
      console.log(
        `Congratulations! You guessed it correctly in ${attempt} attempts.`
      );

      let playAgain = prompt(
        "Do you want to continue playing the game? (Y to continue)"
      ).toUpperCase();

      if (playAgain !== "Y") {
        break;
      } else {
        computerAge = Math.floor(Math.random() * 100) + 1;
        guessAnswer = 0;
        attempt = 0;
      }
    } else if (guessAnswer > computerAge) {
      console.log("Wrong! You guessed too high.");
    } else if (guessAnswer < computerAge) {
      console.log("Wrong! You guessed too low.");
    }
  }
}

guessGame();

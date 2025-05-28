const prompt = require("prompt-sync")();

function guessGame() {
  let computerAge = Math.floor(Math.random() * 100) + 1; // Random age between 1 and 100
  let attempt = 0;
  let guessAnswer;

  console.log("Welcome to the Guess the Computer's Age game!");

  while (true) {
    guessAnswer = Number(prompt("Enter your guess (between 1 and 100):"));

    // Validate if the input is a valid number between 1 and 100
    if (isNaN(guessAnswer) || guessAnswer < 1 || guessAnswer > 100) {
      console.log(
        "Invalid input. Please enter a positive integer between 1 and 100."
      );
      continue;
    }

    attempt++; // Increase attempt count after each valid guess

    // Check if the guess is correct
    if (guessAnswer === computerAge) {
      console.log(
        `Congratulations! You guessed it correctly in ${attempt} attempt(s).`
      );

      let playAgain = prompt(
        "Do you want to continue playing the game? (Y to continue): "
      ).toUpperCase();
      if (playAgain !== "Y") {
        console.log("Thank you for playing! Goodbye.");
        break; // Exit the game loop if user doesn't want to play again
      } else {
        // Start a new game
        computerAge = Math.floor(Math.random() * 100) + 1; // New random age
        attempt = 0; // Reset attempt count
      }
    } else if (guessAnswer < computerAge) {
      console.log("Wrong. You guessed too low.");
    } else {
      console.log("Wrong. You guessed too high.");
    }
  }
}

guessGame();

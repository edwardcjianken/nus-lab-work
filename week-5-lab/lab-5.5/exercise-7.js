const prompt = require("prompt-sync")();

let word = "";

//Enter input and validation
while (true) {
  word = prompt("Enter word for palindrome check:").trim().toLowerCase();
  if (word.length <= 1) {
    console.log("Invalid input. Please enter a word.");
    continue;
  } else {
    console.log(word); //For debugging
    break;
  }
}

//Check if palindrome
let isPalindrome = true;
let stop = Math.floor(word.length - 1) / 2;

for (let i = 0; i < stop; i++) {
  if (word[i] != word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

/* 
level
0 = l
1 = e
2 = v
3 = e
4 = l

*/

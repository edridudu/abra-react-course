const MAX_GUESS_NUMBER = 10;
const MIN_GUESS_NUMBER = 1;

let guessedNumber = (Math.floor(Math.random() * 10) + 1);
console.log(guessedNumber);
let description = document.querySelector('#description');
let guessNumber = document.querySelector('#guessed-number');
let guessButton = document.querySelector('#guess-button');
let result = document.querySelector('#result');
// console.log(guessButton);
//create event click on guess button
guessButton.addEventListener('click', function () {
    if (guessNumber.value > MAX_GUESS_NUMBER || guessNumber.value < MIN_GUESS_NUMBER) {
        result.innerHTML = "Please enter a number between 1 and 10";
    } else if (guessNumber.value == guessedNumber) {
        result.innerHTML = "You guessed the number!";
    } else {
        result.innerHTML = "You guessed wrong!";
    }
    //create score  
    let score = document.querySelector('#score');
    score.innerHTML = "Score: " + (guessNumber.value - guessedNumber);
    
});

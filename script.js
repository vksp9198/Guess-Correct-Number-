// console.log(Math.floor(Math.random() * 100 + 1));   --> both are correct
console.log(parseInt(Math.random() * 100 + 1));
const randomNumber = parseInt(Math.random() * 100 + 1);

const userNum = document.getElementById('num')
const btn = document.querySelector(".btn")
const previousGuesses = document.querySelector('.previousGuesses')
const remainingGuesses = document.querySelector('.remainingGuesses')
const msg = document.querySelector(".msg")
// console.log(num, btn, previousGuesses, remainingGuesses)
let prevGuess = [];
let numOFguess = 1;
let playGame = true;

// starting of game
if (playGame) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userNum.value)
        // console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number!!");
    } else if (guess < 1) {
        alert("Please enter a number more than 0");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess)
        // console.log(previousGuesses)
        if (numOFguess === 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    previousGuesses.innerHTML = prevGuess
    // console.log(prevGuess)
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it correct. Random number was ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Tooo low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is Tooo high`)
    }
}

function displayGuess(guess) {
    userNum.value = ''  // clear all data of user input
    prevGuess.innerHTML += `${guess}`
    // previousGuessess.innerHTML += `${guess}`   ---> change this one                     
    numOFguess++;
    remainingGuesses.innerHTML = `${11 - numOFguess}`
}

function displayMessage(message) {
    msg.innerHTML = `${message}`
}
function endGame() {
    userNum.value = ''
    userNum.setAttribute('disabled', '')
    playGame = false
    newGame()
}
function newGame() {
    playGame = true
    prevGuess = []
}

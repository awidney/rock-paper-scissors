// randomly returns either 'rock', 'paper' or 'scissors'
function computerPlay() {
    while (true) {
        if (Math.floor(Math.random() * 100) == 0) {
            break;
        } else if (Math.floor(Math.random() * 100) <= 33) {
            return 'rock';
        } else if (Math.floor(Math.random() * 100) <= 66) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }
}

function declareWinner() {
    if (playerScore > computerScore) {
        winner.textContent = 'Game Over: Player Wins!';
    } else {
        winner.textContent = 'Game Over: Computer Wins!'
    }
    div3.appendChild(winner);
    
    // reset scores
    playerScore = 0;
    computerScore = 0;
}

// displays round result, running score
function playRound() {
    // remove winner declaration after new match begins
    if (div3.childElementCount) {
        winner.textContent = '';
    }

    const computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        result.textContent = 'Tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You Win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You Lose! Rock beats Scissors';
    } else {
        result.textContent = 'You Win! Scissors beats Paper';
    }

    // insert child div with round result
    if (!div.childElementCount) div.appendChild(result);
    
    // keeps score
    if (result.textContent.match(/You Lose.*/)) {
        computerScore++;
    } else if (result.textContent.match(/You Win.*/)) {
        playerScore++;
    }
    
    // update running score
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    
    // insert child div with running score
    if (!div2.childElementCount) div2.appendChild(score);

    // if a player reaches 5 points, declare a winner
    if (playerScore == 5 || computerScore == 5) declareWinner();
}

let computerScore = 0;
let playerScore = 0;

let playerSelection = '';

// returns a NodeList containing references to all <button> elements
const buttons = document.querySelectorAll('button');

// for each <button> element, add an event listener to update playerSelection upon click
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id');
    });
});

// for each <button> element, add an event listener to call playRound function upon click
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

// get reference to 'result' id
const div = document.querySelector('#result');

// create new <div> to display round result within parent <div>
const result = document.createElement('div');

// get reference to 'winner' id
const div3 = document.querySelector('#winner');

// create new <div> to display winner within parent <div>
const winner = document.createElement('div');

// get reference to 'score' id
const div2 = document.querySelector('#score');

// create new <div> to display running score within parent <div>
const score = document.createElement('div');

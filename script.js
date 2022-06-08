// randomly returns either 'rock', 'paper' or 'scissors'
function computerPlay() { 
   if (Math.floor(Math.random() * 100) <= 33) {
       return 'rock';
   } else if (Math.floor(Math.random() * 100) <= 66) {
       return 'paper';
   } else {
       return 'scissors';
   }
}

// determines round result
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return 'Tie!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else {
        return 'You Win! Scissors beats Paper';
    }
}

const playerSelection = prompt();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

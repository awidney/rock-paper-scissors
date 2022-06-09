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

// runs game
function game() {
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        // keeps score
        if (result.match(/You Lose.*/)) {
            computerScore++;
        } else if (result.match(/You Win.*/)) {
            playerScore++;
        }
    }
    
}

let computerScore = 0;
let playerScore = 0;

game();

// determines game result
if (playerScore > computerScore) {
    console.log('Match result: Player Wins!');
} else if (playerScore < computerScore) {
    console.log('Match result: Computer Wins!');
} else {
    console.log('Match result: Draw!');
}

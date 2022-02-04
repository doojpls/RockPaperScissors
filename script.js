
let attacks = ['rock', 'paper', 'scissors']

function computerPlay() {
    return attacks[Math.floor(Math.random() * attacks.length)]
}

// console.log(computerPlay()) //

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    } if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++
            return 'you lose this one'
        } else {
            userScore++
            return 'you win this one'
        }
    } if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++
            return 'you lose this one'
        } else {
            userScore++
            return 'you win this one'
        }
    } if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            return 'you lose this one'
        } else {
            userScore++
            return 'you win this one'
        }
    }
}

userScore = parseInt(0);
computerScore = parseInt(0);

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please input rock, paper, or scissors').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('player score: ' + userScore);
        console.log('computer score: ' + computerScore);
    }
}

game();

function endResult () {
    if (userScore > computerScore) {
        console.log('you won the game!')
    } else if (userScore < computerScore) {
        console.log('you lost the game.')
    } else console.log('game ended in a tie')
}

endResult();
//let playerSelection = prompt('Please input rock, paper, or scissors').toLowerCase();
//const computerSelection = computerPlay();


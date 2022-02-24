
let attacks = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');

let results = document.querySelector('.play');
let userScoreNum = document.querySelector('.user-score-num');
let compScoreNum = document.querySelector('.comp-score-num');

let scoreBoard = document.querySelector('.score-board');
let instructions = document.getElementsByClassName('instructions');

let playAgain = document.querySelector('.play-again');

function computerPlay() {
    return attacks[Math.floor(Math.random() * attacks.length)]
}


let rockClick = function () {
    console.log(playRound('rock'));
        console.log('user score: ' + userScore);
        console.log('computer score: ' + computerScore);
        endResult();
}

let paperClick = function () {
    console.log(playRound('paper'));
        console.log('user score: ' + userScore);
        console.log('computer score: ' + computerScore);
        endResult();
}

let scissorsClick = function () {
    console.log(playRound('scissors'));
        console.log('user score: ' + userScore);
        console.log('computer score: ' + computerScore);
        endResult();
}

function win () {
    userScore++;
    userScoreNum.innerHTML = userScore;
    for (var i = 0; i < instructions.length; i++ ) {
        instructions[i].style.display = "none";
    }
    scoreBoard.style.display = 'flex';
}

function lose () {
    computerScore++;
    compScoreNum.innerHTML = computerScore;
    for (var i = 0; i < instructions.length; i++ ) {
        instructions[i].style.display = "none";
    }
    scoreBoard.style.display = 'flex';
}

//playAgainBtn.addEventListener('click', startOver);

function buttons () {
    rockBtn.addEventListener('click', rockClick);

    paperBtn.addEventListener('click', paperClick);

    scissorsBtn.addEventListener('click', scissorsClick);        
}

function playRound (playerSelection) {

    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        results.innerHTML = `${playerSelection} vs ${computerSelection}: tie`
        results.style.fontSize= '50px';
        scoreBoard.style.display = 'flex';
        for (var i = 0; i < instructions.length; i++ ) {
            instructions[i].style.display = "none";
        }
        return 'tie'
    } if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            lose();
            results.innerHTML = `rock vs paper: you lose`
            results.style.fontSize= '50px';
            return 'you lose this one'
            
        } else {
            win();
            results.innerHTML = `rock vs scissors: you won`
            results.style.fontSize= '50px';
            return 'you win this one'
        }
    } if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            lose();
            results.innerHTML = `paper vs scissors: you lose`
            results.style.fontSize= '50px';
            return 'you lose this one'
        } else {
            win();
            results.innerHTML = `paper vs rock: you won`
            results.style.fontSize= '50px';
            return 'you win this one'
        }
    } if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            lose();
            results.innerHTML = `scissors vs rock: you lose`
            results.style.fontSize= '50px';
            return 'you lose this one'
        } else {
            win();
            results.innerHTML = `scissors vs paper: you won`
            results.style.fontSize= '50px';
            return 'you win this one'
        }
    }
}

function startOver () {
    userScore = 0;
    computerScore = 0;

    userScoreNum.innerHTML = userScore;
    compScoreNum.innerHTML = computerScore;

    rockBtn.addEventListener('click', rockClick);
    paperBtn.addEventListener('click', paperClick);
    scissorsBtn.addEventListener('click', scissorsClick);   
    results.innerHTML = 'choose your weapon.'
    results.style.fontWeight = 200;
    results.style.fontSize = '30px';
    playAgain.style.display = 'none';    
}

function endResult () {
    if (userScore === 5) {
        results.innerHTML = 'You won the game!'
        rockBtn.removeEventListener('click', rockClick);
        paperBtn.removeEventListener('click', paperClick);
        scissorsBtn.removeEventListener('click', scissorsClick);
        playAgain.style.display = 'block';
        playAgain.addEventListener('click', startOver);
    
    } else if (computerScore === 5) {
        results.innerHTML = 'You lost the game!'
        rockBtn.removeEventListener('click', rockClick);
        paperBtn.removeEventListener('click', paperClick);
        scissorsBtn.removeEventListener('click', scissorsClick);
        playAgain.style.display = 'block';
        playAgain.addEventListener('click', startOver);

    } else if ((userScore === 5) && (computerScore === 5)) {
        results.innerHTML = 'Game ended in a tie.'
        rockBtn.removeEventListener('click', rockClick);
        paperBtn.removeEventListener('click', paperClick);
        scissorsBtn.removeEventListener('click', scissorsClick);
        playAgain.style.display = 'block';
        playAgain.addEventListener('click', startOver);
    }
}


buttons();

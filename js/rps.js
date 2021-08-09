let selection = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

function computerSelection() {
    return selection[Math.floor(Math.random()*selection.length)];
}

function playerSelection(input) { //input is value passed from button's onclick
    if(computerScore === 5 || playerScore === 5 ) {
        resetGame();
        playRound(computerSelection(), input);
    }
     else {
         playRound(computerSelection(), input);
        }
}

function playRound(computer, player) {
    document.querySelector('#currentRound').textContent = `Computer chose: ${upperFirstLetter(computer)},  Player chose: ${upperFirstLetter(player)}`;
        let outcome = '';
        if (computer === player) {
            outcome = "It's a tie!"
        } else if (
            (computer === "rock" && player === "scissors") ||
            (computer === "paper" && player === "rock") ||
            (computer === "scissors" && player === "paper")
            ) {
                computerScore++;
                outcome = "Computer Wins!"
            } else {
                playerScore++;
                outcome = "Player Wins!"
            }
    updatePage(computerScore, playerScore, outcome);
}

function updatePage(computer, player, outcome) {

    document.querySelector('#computerScore').textContent = computer;
    document.querySelector('#playerScore').textContent = player;

    if (computerScore === 5 || playerScore === 5) {
        document.querySelector('#outcome').textContent = 'Game Over!';

    } else {
        document.querySelector('#outcome').textContent = outcome;
    }
}

function upperFirstLetter(text) {
    return text[0].toUpperCase() + text.substring(1);
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
}
let selection = ["rock", "paper", "scissors"];
let outcome = ["Player Wins!", "Computer wins!", "It's a tie"];
let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;
let history = [];
let hue = 0;


const rpsButtons = document.querySelectorAll('.rps-btn');

function computerSelection() {
    return selection[Math.floor(Math.random()*selection.length)];
}

function checkFirstToFive() { 
    if(computerScore === 5 || playerScore === 5 ) {
        resetGame();
        return false;
    }
    return true;
}

function startGame() {
    rpsButtons.forEach((choice) => {
      choice.addEventListener('click', function() {
        roundNumber++;
        let player;

        if (choice.id === 'rockBtn') {
            player = 'rock';
        } else if (choice.id === 'paperBtn') {
            player = 'paper';
        } else {
            player = 'scissors';
        }
        if(checkFirstToFive()) {
            let computer = computerSelection();
            let result = playRound(computer, player);
            updatePage(computer, player, computerScore, playerScore, result);
            generateRandomColour();
        };
      });
    });
  };

function playRound(computer, player) {
        if (computer === player) {
            return outcome[2];
        } else if (
            (computer === "rock" && player === "scissors") ||
            (computer === "paper" && player === "rock") ||
            (computer === "scissors" && player === "paper")
            ) {
                computerScore++;
                return outcome[1];
            } else {
                playerScore++;
                return outcome[0];
            }
}

function updatePage(computerChoice, playerChoice, computerScore, playerScore, result) {

    document.querySelector('#computerScore').textContent =`Computer :  ${computerScore}`;
    document.querySelector('#playerScore').textContent = `You : ${playerScore}`;
    document.querySelector('#roundNumber').textContent = `Round ${roundNumber}`;
    document.querySelector('#currentRound').textContent = `Player chose: ${upperFirstLetter(playerChoice)},  Computer chose: ${upperFirstLetter(computerChoice)}`;

    history.unshift(createHistoryElement(computerChoice, playerChoice, result));
    document.querySelector('#previousRound').append(history[0]) ;

    if (computerScore === 5) {
        document.querySelector('#outcome').textContent = 'You lose! Click any button to reset.';
    } 
    else if (playerScore === 5){
        document.querySelector('#outcome').textContent = 'You win! Click any button to reset.';
    } 
    else {
        document.querySelector('#outcome').textContent = result;
    }
}

function createHistoryElement(computerChoice, playerChoice, result) {
    
    const paragraph = document.createElement('p');
    paragraph.textContent = `Round ${roundNumber} ${upperFirstLetter(playerChoice)} vs ${upperFirstLetter(computerChoice)} [${result}]`;

    if(result === outcome[2]) {// TIE
        paragraph.classList.add('tie-colour');
        return paragraph;

    } else if (result === outcome[1]) { // COMPUTER WINS
        paragraph.classList.add('computer-win-colour');
        return paragraph;

    } else { // PLAYER WINS
        paragraph.classList.add('player-win-colour');
        return paragraph;
    }
    }

function upperFirstLetter(text) {
    return text[0].toUpperCase() + text.substring(1);
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    roundNumber = 0;
    document.querySelector('#previousRound').textContent = "";
    document.querySelector('#computerScore').textContent = '';
    document.querySelector('#playerScore').textContent = '';
    document.querySelector('#roundNumber').textContent = '';
    document.querySelector('#currentRound').textContent = '';
    document.querySelector('#outcome').textContent = 'Game Reset!';
    document.querySelectorAll('.random-colour').forEach(function(component) {
        component.style.color = '';
    });
}

function generateRandomColour() {
    document.querySelectorAll('.random-colour').forEach(function(component) {
        component.style.color = `hsla(${hue}, 75%, 50%, 1)`;
        hue += 222.5;
    });
}

startGame();
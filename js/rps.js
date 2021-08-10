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
            let currentChoice = `Player chose: ${upperFirstLetter(player)},  Computer chose: ${upperFirstLetter(computer)}`;
            let result = playRound(computer, player);
            updatePage(computerScore, playerScore, result, currentChoice);
            generateRandomColour();
            console.log(hue);
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

function updatePage(computer, player, result, currentChoice) {

    document.querySelector('#computerScore').textContent =`Computer :  ${computer}`;
    document.querySelector('#playerScore').textContent = `You : ${player}`;
    document.querySelector('#roundNumber').textContent = `Round ${roundNumber}`;

    history.unshift(createHistoryElement(currentChoice, result));

    const outcomeSpan = document.createElement("p");
    outcomeSpan.textContent = result;
    
    document.querySelector('#previousRound').append(history[0]) ;
    document.querySelector('#currentRound').textContent = currentChoice;

    if (computerScore === 5 || playerScore === 5) {
        document.querySelector('#outcome').textContent = 'Game Over! Click any button to reset.';
    } else {
        document.querySelector('#outcome').textContent = result;
    }
}

function createHistoryElement(currentChoice, result) {
    
    const paragraph = document.createElement('p');
    paragraph.textContent = `Round ${roundNumber}| ${currentChoice} [${result}]`;

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
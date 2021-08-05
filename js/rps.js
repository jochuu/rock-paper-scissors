selection = ['rock', 'paper', 'scissors']
computerScore = 0;
playerScore = 0;

function computerSelection() {
    return selection[Math.floor(Math.random()*selection.length)];
}

function playerSelection() {
    return selection[0];
}

function playRound(computer, player) {
    console.log('Computer chose:' + computer, 'Player chose:' + player);
    if (computer == player) {
        console.log("It's a tie");
    } else if (
        (computer == "rock" && player == "scissors") ||
        (computer == "paper" && player == "rock") ||
        (computer == "scissors" && player == "paper")
        ) {
        console.log("Computer Wins!");
        computerScore++;
        } else {
            console.log("Player Wins!");
            playerScore++;
        }
    }

function playerSelection() {
    let input = '';
    do {
        let input = prompt('Pick Rock, Paper or Scissors').toLowerCase();
        if(checkPromptInput(input)) {
            return input;
        };
    } while(!checkPromptInput(input));
}

function checkPromptInput(selection) {
    switch(selection) {
    case 'rock':
        return true;
    case 'paper':
        return true;
    case 'scissors':
        return true;
        default: 
    return false;
    }
}

(function() {
    for (let i = 0; i < 5; i++) {
    playRound(computerSelection(), playerSelection());
}
console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
})();


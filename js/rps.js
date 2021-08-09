selection = ['rock', 'paper', 'scissors']
computerScore = 0;
playerScore = 0;

function computerSelection() {
    return selection[Math.floor(Math.random()*selection.length)];
}

function playerSelection(input) {
    playRound(computerSelection(), input);
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
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


// (function() {
//     for (let i = 0; i < 5; i++) {
//     playRound(computerSelection(), playerSelection());
// }
// })();


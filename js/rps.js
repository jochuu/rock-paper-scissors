selection = ['rock', 'paper', 'scissors']

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
        } else {
            console.log("Player Wins!");
        }
    }

(function() {
    for (let i = 0; i < 5; i++) {
    playRound(computerSelection(), playerSelection());
}
})();


function computerPlay() {
    const choice = [
        "rock",       
        "paper",
        "scissors"
    ];
    return choice[Math.floor(Math.random() * choice.length)];
}

let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function winCondition() {
    if (playerScore >= 5) {
        console.log("CONGRATULATIONS! You win the game!");
        console.log("Refresh the page to play again.");
    }else if (computerScore >= 5) {
        console.log("OH NO! You lost the game!");
        console.log("Refresh the page to play again.");
}};

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        console.log("Its a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        document.getElementById("user-points").textContent = playerScore;
        console.log("You win. ROCK crushes scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        document.getElementById("computer-points").textContent = computerScore;
        console.log("You loose. Paper wraps ROCK");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        document.getElementById("user-points").textContent = playerScore;
        console.log("You win. PAPER wraps rock");
    } else if (playerSelection  === "paper" && computerSelection === "scissors") {
        ++computerScore;
        document.getElementById("computer-points").textContent = computerScore;
        console.log("You loose. Scissors cut PAPER");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        document.getElementById("user-points").textContent = playerScore;
        console.log("You win. SCISSORS cut paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        document.getElementById("computer-points").textContent = computerScore;
        console.log("You loose. Rock crushes SCISSORS");
    } else console.log("Is your spelling correct? Choose rock, paper or scissors.");
    winCondition();
}


document.querySelector(".rock-button").addEventListener("click", function() {
    playerSelection = "rock"
    return playRound(playerSelection, computerSelection);
});

document.querySelector(".paper-button").addEventListener("click", function() {
    playerSelection = "paper"
    return playRound(playerSelection, computerSelection);
});

document.querySelector(".scissors-button").addEventListener("click", function() {
    playerSelection = "scissors"
    return playRound(playerSelection, computerSelection);
});





/*
function game() {
    while (playerScore < 5 || computerScore < 5) {
        if (playerScore >= 5) {
            console.log("CONGRATULATIONS! You win the game!");
            console.log("Refresh the page to play again.");
            break;
        } else if (computerScore >= 5) {
            console.log("OH NO! You lost the game!");
            console.log("Refresh the page to play again.");
            break;
        }
        playRound(playerSelection, computerSelection);
        console.log("Your score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }   
} */ 



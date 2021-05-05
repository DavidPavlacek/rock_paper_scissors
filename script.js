function computerPlay() {
    const choice = [
        "rock",
        "paper",
        "scissors"
    ];

     return choice[Math.floor(Math.random() * choice.length)];
}

let playerSelection = "Enter rock, paper or scissors";
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    playerSelection = prompt(playerSelection).toLowerCase();
    computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        console.log("Its a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore
        console.log("You win. ROCK crushes scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore
        console.log("You loose. Paper wraps ROCK");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore
        console.log("You win. PAPER wraps rock");
    } else if (playerSelection  === "paper" && computerSelection === "scissors") {
        ++computerScore
        console.log("You loose. Scissors cut PAPER");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore
        console.log("You win. SCISSORS cut paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore
        console.log("You loose. Rock crushes SCISSORS");
    } else console.log("Is your spelling correct? Choose rock, paper or scissors.");
    }

//function game() {

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
//} 

//game();
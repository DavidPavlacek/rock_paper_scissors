const choice = [
    "rock",
    "paper",
    "scissors"
];
const randomChoice = choice[Math.floor(Math.random() * choice.length)];


function computerPlay() {
    return (randomChoice);
}

const playerSelection = prompt("Enter rock, paper or scissors");
const computerSelection = computerPlay();


function playRound() {

    
    if ( playerSelection.toLowerCase() === computerSelection) {
        console.log("Its a tie!");
    }

    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("You win. ROCK crushes scissors");
    }

    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log("You loose. Paper wraps ROCK");
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("You loose. Scissors cut PAPER");
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("You win. PAPER wraps rock");
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log("You win. SCISSORS cut paper");
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("You loose. Rock crushes SCISSORS");
    }

    else console.log("Did you spell choice of your weapon correctly?");
    }

console.log(playRound());

function game() {}
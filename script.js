const choice = [
    "rock",
    "paper",
    "scissors"
];
const randomChoice = choice[Math.floor(Math.random() * choice.length)];


function computerPlay() {
    return (randomChoice);
}


const playerSelection = "scissors";
const computerSelection = computerPlay();


function playRound(computerSelection, playerSelection) {

    computerSelection = computerPlay();
    playerSelection = "scissors";
    
    if ( playerSelection === computerPlay()) {
        console.log("Its a tie!");
    }

    else if (playerSelection === "rock" && computerPlay() === "scissors") {
        console.log("You win. ROCK crushes scissors");
    }

    else if (playerSelection === "rock" && computerPlay() === "paper") {
        console.log("You loose. Paper wraps ROCK");
    }

    else if (playerSelection === "paper" && computerPlay() === "scissors") {
        console.log("You loose. Scissors cut PAPER");
    }

    else if (playerSelection === "paper" && computerPlay() === "rock") {
        console.log("You win. PAPER wraps rock");
    }


    else if (playerSelection === "scissors" && computerPlay() === "paper") {
        console.log("You win. SCISSORS cut paper");
    }

    else if (playerSelection === "scissors" && computerPlay() === "rock") {
        console.log("You loose. Rock crushes SCISSORS");
    }

    else console.log("whatever");
    }

console.log(playRound(computerSelection, playerSelection));
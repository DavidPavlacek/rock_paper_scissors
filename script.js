const choice = [
    "rock",
    "paper",
    "scissors"
];
const randomChoice = choice[Math.floor(Math.random() * choice.length)];


function computerPlay() {
    return (randomChoice);
}


const playerSelection = "paper";
const computerSelection = computerPlay();

//console.log(computerPlay());
//console.log(playerSelection);

function playRound(computerSelection, playerSelection) {

    computerSelection = computerPlay();
    playerSelection = "paper";
    
    if ( playerSelection === computerPlay()) {
        console.log("Its a tie!");
    }

    else if (playerSelection === "rock" && computerPlay() === "scissors") {
        console.log("You win. Rock crushes scissors");
    }

    else if (playerSelection === "rock" && computerPlay() === "paper") {
        console.log("You loose. Paper wraps rock");
    }

    else if (playerSelection === "paper" && computerPlay() === "scissors") {
        console.log("You loose. Scissors cut PAPER");
    }

    else if (playerSelection === "paper" && computerPlay() === "rock") {
        console.log("You win. PAPER wraps rock");
    }

    else console.log("whatever");
}

console.log(playRound(computerSelection, playerSelection));
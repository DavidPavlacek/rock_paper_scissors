function computerPlay() {

    const choice = [
        "rock",
        "paper",
        "scissors"
    ];

    const randomChoice = choice[Math.floor(Math.random() * choice.length)];

    return (randomChoice);
}

let playerSelection = "Enter rock, paper or scissors";
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    playerSelection = prompt(playerSelection).toLowerCase();
    computerSelection = computerPlay();
    
    if ( playerSelection === computerSelection) {
        console.log("Its a tie!");
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        
        ++playerScore
        console.log("You win. ROCK crushes scissors");
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        
        ++computerScore
        console.log("You loose. Paper wraps ROCK");
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        
        ++playerScore
        console.log("You win. PAPER wraps rock");
    }

    else if (playerSelection  === "paper" && computerSelection === "scissors") {
        
        ++computerScore
        console.log("You loose. Scissors cut PAPER");
        
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        
        ++playerScore
        console.log("You win. SCISSORS cut paper");
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        
        ++computerScore
        console.log("You loose. Rock crushes SCISSORS");
    }

    else console.log("Did you spell choice of your weapon correctly?");
    }





function game() {

    playRound(playerSelection, computerSelection );
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playRound(playerSelection, computerSelection );
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playRound(playerSelection, computerSelection );
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playRound(playerSelection, computerSelection );
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playRound(playerSelection, computerSelection );
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore > computerScore) {

        console.log("You WIN the game!")
    }

    else if (playerScore < computerScore) {

        console.log("You LOOSE the game!")
    }
    

}

game();
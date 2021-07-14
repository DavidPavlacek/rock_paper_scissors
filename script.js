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
let round = 0;
let gameIsActive = true;

function winCondition() {
    if (playerScore >= 5) {
        gameIsActive = false;
        document.getElementById("round-result").textContent = "CONGRATULATIONS! You win the game!"
    }else if (computerScore >= 5) {
        gameIsActive = false;
        document.getElementById("round-result").textContent = "OH NO! You lost the game!"
}};

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    let newLine = "\r\n"

    if (playerSelection === computerSelection) {
        ++round
        document.getElementById("round-result").textContent += "#" + round + " Its a tie! No points." + newLine 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++round
        ++playerScore;
        document.getElementById("user-points").textContent = playerScore;
        document.getElementById("round-result").textContent += "#" + round + " You win. ROCK crushes scissors!"  + newLine
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++round
        ++computerScore;
        document.getElementById("computer-points").textContent = computerScore;
        document.getElementById("round-result").textContent += "#" + round + " You loose. Paper wraps ROCK!" + newLine
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++round
        ++playerScore;
        document.getElementById("user-points").textContent = playerScore;
        document.getElementById("round-result").textContent += "#" + round + " You win. PAPER wraps rock!" + newLine
    } else if (playerSelection  === "paper" && computerSelection === "scissors") {
        ++round
        ++computerScore;
        document.getElementById("computer-points").textContent = computerScore;
        document.getElementById("round-result").textContent += "#" + round + " You loose. Scissors cut PAPER!" + newLine
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++round
        ++playerScore;
        document.getElementById("user-points").textContent = playerScore;
        document.getElementById("round-result").textContent += "#" + round + " You win. SCISSORS cut paper!" + newLine
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++round
        ++computerScore;
        document.getElementById("computer-points").textContent = computerScore;
        document.getElementById("round-result").textContent += "#" + round + " You loose. Rock crushes SCISSORS!" + newLine
    } else console.log("Is your spelling correct? Choose rock, paper or scissors.");
    winCondition();
}


document.querySelector(".rock-button").addEventListener("click", function() {
    if (gameIsActive === true) {
    playerSelection = "rock"
    return playRound(playerSelection, computerSelection);
}});

document.querySelector(".paper-button").addEventListener("click", function() {
    if (gameIsActive === true) {
    playerSelection = "paper"
    return playRound(playerSelection, computerSelection);
}});

document.querySelector(".scissors-button").addEventListener("click", function() {
    if (gameIsActive === true) {
    playerSelection = "scissors"
    return playRound(playerSelection, computerSelection);
}});



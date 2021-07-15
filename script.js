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
let computerRock = document.getElementById("rock-button-computer");
let computerPaper = document.getElementById("paper-button-computer")
let computerScissors = document.getElementById("scissors-button-computer")
let userRock = document.getElementById("rock-button");
let userPaper = document.getElementById("paper-button")
let userScissors = document.getElementById("scissors-button")


function winCondition() {
    if (playerScore >= 5) {
        gameIsActive = false;
        document.getElementById("round-result").textContent = "CONGRATULATIONS! You've won the game!"
    }else if (computerScore >= 5) {
        gameIsActive = false;
        document.getElementById("round-result").textContent = "OH NO! You've lost the game!"
}};

function removeTransition() {
    computerRock.classList.remove("played");
    computerPaper.classList.remove("played");
    computerScissors.classList.remove("played");
    userRock.classList.remove("played");
    userPaper.classList.remove("played");
    userScissors.classList.remove("played");    
}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    let newLine = "\r\n"

    if (playerSelection === computerSelection) {
        ++round
        document.getElementById("round-result").textContent += "#" + round + " Its a tie! No points." + newLine 
        if (playerSelection === "rock") {userRock.classList.add("played") 
                                        computerRock.classList.add("played")}
        if (playerSelection === "paper") {userPaper.classList.add("played") 
                                         computerPaper.classList.add("played")}
        if (playerSelection === "scissors") {userScissors.classList.add("played") 
                                            computerScissors.classList.add("played")}
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++round
        ++playerScore;
        computerScissors.classList.add("played");
        userRock.classList.add("played");
        document.getElementById("user-points").textContent = playerScore;
        document.getElementById("round-result").textContent += "#" + round + " You win. ROCK crushes scissors!"  + newLine
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++round
        ++computerScore;
        computerPaper.classList.add("played");
        userRock.classList.add("played");
        document.getElementById("computer-points").textContent = computerScore;
        document.getElementById("round-result").textContent += "#" + round + " You loose. Paper wraps ROCK!" + newLine
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++round
        ++playerScore;
        computerRock.classList.add("played");
        userPaper.classList.add("played");
        document.getElementById("user-points").textContent = playerScore;
        document.getElementById("round-result").textContent += "#" + round + " You win. PAPER wraps rock!" + newLine
    } else if (playerSelection  === "paper" && computerSelection === "scissors") {
        ++round
        ++computerScore;
        computerScissors.classList.add("played");
        userPaper.classList.add("played");
        document.getElementById("computer-points").textContent = computerScore;
        document.getElementById("round-result").textContent += "#" + round + " You loose. Scissors cut PAPER!" + newLine
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++round
        ++playerScore;
        computerPaper.classList.add("played");
        userScissors.classList.add("played");
        document.getElementById("user-points").textContent = playerScore;
        document.getElementById("round-result").textContent += "#" + round + " You win. SCISSORS cut paper!" + newLine
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++round
        ++computerScore;
        computerRock.classList.add("played");
        userScissors.classList.add("played");
        document.getElementById("computer-points").textContent = computerScore;
        document.getElementById("round-result").textContent += "#" + round + " You loose. Rock crushes SCISSORS!" + newLine
    } else console.log("Is your spelling correct? Choose rock, paper or scissors.");
    winCondition();
}

document.querySelector("#rock-button").addEventListener("click", function() {
    removeTransition()
    if (gameIsActive === true) {
        playerSelection = "rock"
        return playRound(playerSelection, computerSelection);
}});

document.querySelector("#paper-button").addEventListener("click", function() {
    removeTransition() 
    if (gameIsActive === true) {
    playerSelection = "paper"
    return playRound(playerSelection, computerSelection);
}});

document.querySelector("#scissors-button").addEventListener("click", function() {
    removeTransition()
    if (gameIsActive === true) {
    playerSelection = "scissors"
    return playRound(playerSelection, computerSelection);
}});



function computerPlay() {
   const choice = ["rock", "paper", "scissors"];
   return choice[Math.floor(Math.random() * choice.length)];
}

let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let round = 0;
let gameIsActive = true;
let computerRock = document.getElementById("rock-button-computer");
let computerPaper = document.getElementById("paper-button-computer");
let computerScissors = document.getElementById("scissors-button-computer");
let userRock = document.getElementById("rock-button");
let userPaper = document.getElementById("paper-button");
let userScissors = document.getElementById("scissors-button");

function winCondition() {
   if (playerScore >= 5) {
      gameIsActive = false;
      document.getElementById("round-result").textContent =
         "CONGRATULATIONS! You've won the game!";
      document.getElementById("play-again").style.display = "";
   } else if (computerScore >= 5) {
      gameIsActive = false;
      document.getElementById("round-result").textContent =
         "OH NO! You've lost the game!";
      document.getElementById("play-again").style.display = "";
   }
}

function removeComputerTransition() {
   computerRock.classList.remove("played");
   computerPaper.classList.remove("played");
   computerScissors.classList.remove("played");
}

function removeTransitionUser(choice) {
   if (playerSelection === choice) {
      userRock.addEventListener("transitionend", function (e) {
         if (e.propertyName === "transform") {
            userRock.classList.remove("played");
            removeComputerTransition();
         }
      });
   }
   if (playerSelection === choice) {
      userPaper.addEventListener("transitionend", function (e) {
         if (e.propertyName === "transform") {
            userPaper.classList.remove("played");
            removeComputerTransition();
         }
      });
   }
   if (playerSelection === choice) {
      userScissors.addEventListener("transitionend", function (e) {
         if (e.propertyName === "transform") {
            userScissors.classList.remove("played");
            removeComputerTransition();
         }
      });
   }
}

function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay();
   const newLine = "\r\n";

   if (playerSelection === computerSelection) {
      ++round;
      document.getElementById("round-result").textContent +=
         "#" + round + " It's a tie! No points." + newLine;
      if (playerSelection === "rock") {
         userRock.classList.add("played");
         computerRock.classList.add("played");
      }
      if (playerSelection === "paper") {
         userPaper.classList.add("played");
         computerPaper.classList.add("played");
      }
      if (playerSelection === "scissors") {
         userScissors.classList.add("played");
         computerScissors.classList.add("played");
      }
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      ++round;
      ++playerScore;
      computerScissors.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You win. ROCK crushes scissors!" + newLine;
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++round;
      ++computerScore;
      computerPaper.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You loose. Paper wraps ROCK!" + newLine;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++round;
      ++playerScore;
      computerRock.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You win. PAPER wraps rock!" + newLine;
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      ++round;
      ++computerScore;
      computerScissors.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You loose. Scissors cut PAPER!" + newLine;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      ++round;
      ++playerScore;
      computerPaper.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You win. SCISSORS cut paper!" + newLine;
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++round;
      ++computerScore;
      computerRock.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You loose. Rock crushes SCISSORS!" + newLine;
   } else console.log("playRound doesnt work");
   winCondition();
}

document.querySelector("#rock-button").addEventListener("click", function () {
   if (gameIsActive === true) {
      playerSelection = "rock";
      userRock.classList.add("played");
      playRound(playerSelection, computerSelection);
      return removeTransitionUser("rock");
   }
});

document.querySelector("#paper-button").addEventListener("click", function () {
   if (gameIsActive === true) {
      playerSelection = "paper";
      userPaper.classList.add("played");
      playRound(playerSelection, computerSelection);
      return removeTransitionUser("paper");
   }
});

document
   .querySelector("#scissors-button")
   .addEventListener("click", function () {
      if (gameIsActive === true) {
         playerSelection = "scissors";
         userScissors.classList.add("played");
         playRound(playerSelection, computerSelection);
         return removeTransitionUser("scissors");
      }
   });

function init() {
   document.getElementById("user-points").textContent = "0";
   document.getElementById("computer-points").textContent = "0";
   document.getElementById("round-result").textContent = " ";
   document.getElementById("play-again").style.display = "none";
   round = 0;
   playerScore = 0;
   computerScore = 0;
   gameIsActive = true;
}

document.getElementById("play-again").addEventListener("click", init);
document.getElementById("play-again").style.display = "none";

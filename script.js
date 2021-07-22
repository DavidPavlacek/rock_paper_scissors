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

function resetTransition() {
   if (computerRock.classList.contains("played")) {
      computerRock.classList.remove("played");
   }
   if (computerPaper.classList.contains("played")) {
      computerPaper.classList.remove("played");
   }
   if (computerScissors.classList.contains("played")) {
      computerScissors.classList.remove("played");
   }
   if (userRock.classList.contains("played")) {
      userRock.classList.remove("played");
   }
   if (userPaper.classList.contains("played")) {
      userPaper.classList.remove("played");
   }
   if (userScissors.classList.contains("played")) {
      userScissors.classList.remove("played");
   }
}

function removeTransitionComputer() {
   computerRock.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") {
         computerRock.classList.remove("played");
      }
   });
   computerPaper.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") {
         computerPaper.classList.remove("played");
      }
   });
   computerScissors.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") {
         computerScissors.classList.remove("played");
      }
   });
}

function removeTransitionUser() {
   userRock.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") {
         userRock.classList.remove("played");
      }
   });

   userPaper.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") {
         userPaper.classList.remove("played");
      }
   });

   userScissors.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") {
         userScissors.classList.remove("played");
      }
   });
}

function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay();
   const newLine = "\r\n";
   resetTransition();

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
      userRock.classList.add("played");
      computerScissors.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You win. ROCK crushes scissors!" + newLine;
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++round;
      ++computerScore;
      userRock.classList.add("played");
      computerPaper.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You loose. Paper wraps ROCK!" + newLine;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++round;
      ++playerScore;
      userPaper.classList.add("played");
      computerRock.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You win. PAPER wraps rock!" + newLine;
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      ++round;
      ++computerScore;
      userPaper.classList.add("played");
      computerScissors.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You loose. Scissors cut PAPER!" + newLine;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      ++round;
      ++playerScore;
      userScissors.classList.add("played");
      computerPaper.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You win. SCISSORS cut paper!" + newLine;
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++round;
      ++computerScore;
      userScissors.classList.add("played");
      computerRock.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      document.getElementById("round-result").textContent +=
         "#" + round + " You loose. Rock crushes SCISSORS!" + newLine;
   } else console.log("playRound doesnt work");
   winCondition();
   removeTransitionUser();
   removeTransitionComputer();
}

document.querySelector("#rock-button").addEventListener("click", function () {
   if (gameIsActive === true) {
      playerSelection = "rock";
      playRound(playerSelection, computerSelection);
   }
});

document.querySelector("#paper-button").addEventListener("click", function () {
   if (gameIsActive === true) {
      playerSelection = "paper";
      playRound(playerSelection, computerSelection);
   }
});

document
   .querySelector("#scissors-button")
   .addEventListener("click", function () {
      if (gameIsActive === true) {
         playerSelection = "scissors";
         playRound(playerSelection, computerSelection);
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

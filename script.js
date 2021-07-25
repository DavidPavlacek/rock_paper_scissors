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

function resetTransitionInProgress() {
   if (computerRock.classList.contains("played")) {
      computerRock.classList.add("no-transition");
      computerRock.classList.remove("played");
      computerRock.offsetHeight;
      computerRock.classList.remove("no-transition");
   }
   if (computerPaper.classList.contains("played")) {
      computerPaper.classList.add("no-transition");
      computerPaper.classList.remove("played");
      computerPaper.offsetHeight;
      computerPaper.classList.remove("no-transition");
   }
   if (computerScissors.classList.contains("played")) {
      computerScissors.classList.add("no-transition");
      computerScissors.classList.remove("played");
      computerScissors.offsetHeight;
      computerScissors.classList.remove("no-transition");
   }
   if (userRock.classList.contains("played")) {
      userRock.classList.add("no-transition");
      userRock.classList.remove("played");
      userRock.offsetHeight;
      userRock.classList.remove("no-transition");
   }
   if (userPaper.classList.contains("played")) {
      userPaper.classList.add("no-transition");
      userPaper.classList.remove("played");
      userPaper.offsetHeight;
      userPaper.classList.remove("no-transition");
   }
   if (userScissors.classList.contains("played")) {
      userScissors.classList.add("no-transition");
      userScissors.classList.remove("played");
      userScissors.offsetHeight;
      userScissors.classList.remove("no-transition");
   }
}

function transitionEnd() {
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
   resetTransitionInProgress();

   if (playerSelection === computerSelection) {
      ++round;
      turnLogArr.push("#" + round + " It's a tie! No points.");
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
      turnLogArr.push("#" + round + " You win. ROCK crushes scissors!");
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++round;
      ++computerScore;
      userRock.classList.add("played");
      computerPaper.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      turnLogArr.push("#" + round + " You loose. Paper wraps ROCK!");
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++round;
      ++playerScore;
      userPaper.classList.add("played");
      computerRock.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      turnLogArr.push("#" + round + " You win. PAPER wraps rock!");
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      ++round;
      ++computerScore;
      userPaper.classList.add("played");
      computerScissors.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      turnLogArr.push("#" + round + " You loose. Scissors cut PAPER!");
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      ++round;
      ++playerScore;
      userScissors.classList.add("played");
      computerPaper.classList.add("played");
      document.getElementById("user-points").textContent = playerScore;
      turnLogArr.push("#" + round + " You win. SCISSORS cut paper!");
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++round;
      ++computerScore;
      userScissors.classList.add("played");
      computerRock.classList.add("played");
      document.getElementById("computer-points").textContent = computerScore;
      turnLogArr.push("#" + round + " You loose. Rock crushes SCISSORS!");
   } else console.log("playRound doesnt work");
   winCondition();
   transitionEnd();
   gameLog();
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
   roundResult.insertAdjacentElement("afterbegin", resultLog);
   removeChild();
   round = 0;
   playerScore = 0;
   computerScore = 0;
   turnLogArr = [];
   gameIsActive = true;
}

document.getElementById("play-again").addEventListener("click", init);
document.getElementById("play-again").style.display = "none";

let turnLogArr = [];
let roundResult = document.getElementById("round-result");
let resultLog = document.createElement("ul");
resultLog.style.listStyleType = "none";
roundResult.insertAdjacentElement("afterbegin", resultLog);

function removeChild() {
   while (resultLog.firstChild) {
      resultLog.removeChild(resultLog.firstChild);
   }
}

function gameLog() {
   let li = document.createElement("li");
   li.textContent = turnLogArr[`${turnLogArr.length - 1}`];
   resultLog.insertAdjacentElement("afterbegin", li);
}
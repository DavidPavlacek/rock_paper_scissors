'use strict';

//Můžeš někdy vidět, že funkce se takhle zaobalují a rovnou se sami na sebe zavolají
//Tím "nezačisťuješ" globální prostředí
(function(){
   function computerPlay() {
      const choice = ["rock", "paper", "scissors"];
      return choice[Math.floor(Math.random() * choice.length)];
   }

   let computerSelection = computerPlay();
   let playerScore = 0;
   let computerScore = 0;
   let round = 0;
   //Pokud se jedná o boolean hodnotu, tak je lepší používat prefix "is"
   let isGameActive = true;

   //Zde si deklaruji všechny možné DOM selectory, je to hezky na jednom místě
   const computerRock = document.getElementById("rock-button-computer");
   const computerPaper = document.getElementById("paper-button-computer");
   const computerScissors = document.getElementById("scissors-button-computer");

   const userRock = document.getElementById("rock-button");
   const userPaper = document.getElementById("paper-button");
   const userScissors = document.getElementById("scissors-button");

   const computerPoints = document.getElementById("computer-points");
   const userPoints = document.getElementById("user-points");

   const computerButtons = {
      rock: computerRock,
      paper: computerPaper,
      scissors: computerScissors
   }

   const userButtons = {
      rock: userRock,
      paper: userPaper,
      scissors: userScissors
   }

   const gameButtons = [computerRock, computerPaper, computerScissors, userRock, userPaper, userScissors];

   const roundResults = document.getElementById("round-result");
   const playAgainButton = document.getElementById("play-again");

   /**
    * Tabulka výher
    * Pokud je Kámen proti Papíru, tak -1 =>  kámen prohrál
    */
   const tableWin = {
      rock: {
         paper: -1,
         rock: 0,
         scissors: 1
      },
      paper: {
         paper: 0,
         rock: 1,
         scissors: -1
      },
      scissors: {
         paper: 1,
         rock: -1,
         scissors: 0
      }
   }

   /*
      1  - Hráč vyhrál
      0  - Remíza
      -1 - Počítač vyhrál
   */
   function whoWins(playerInput, computerInput) {
      return tableWin[playerInput][computerInput];
   }

   function PrintPlayerWin() {
      roundResults.textContent =
         "CONGRATULATIONS! You've won the game!";
      playAgainButton.style.display = "";
   }

   function PrintComputerWin() {
      roundResults.textContent =
         "OH NO! You've lost the game!";
      playAgainButton.style.display = "";
   }

   function winCondition() {
      if (playerScore >= 5) {
         isGameActive = false;
         PrintPlayerWin();
         return;
      }

      if (computerScore >= 5) {
         isGameActive = false;
         PrintComputerWin();
         return;
      }
   }

   function resetHtmlNodeClasslistProgress(node) {
      if (!node.classList.contains("played")) {
         return;
      }

      node.classList.add("no-transition");
      node.classList.remove("played");
      node.offsetHeight;
      node.classList.remove("no-transition");
   }

   function resetTransitionInProgress() {
      gameButtons.forEach(resetHtmlNodeClasslistProgress);
   }

   function addTransitionEndEvent(node) {
      node.addEventListener("transitionend", (e) => {
         if (e.propertyName === "transform")
            node.classList.remove("played");
      });
   }

   function transitionEnd() {
      gameButtons.forEach(addTransitionEndEvent);
   }

   function printRoundWinner(winResult, playerSelection, computerSelection) {
      switch (winResult) {
         case 1:
            playerScore++;

            turnLogArr.push(`# round: ${round} You win, ${playerSelection} beats ${computerSelection}`);
            userPoints.textContent = playerScore;
            break;
         case 0:
            turnLogArr.push(`# round: ${round} It's a tie.`);
            break;
         case -1:
            computerScore++;

            turnLogArr.push(`# round: ${round} You lose, ${computerSelection} beats ${playerSelection}`);
            computerPoints.textContent = computerScore;
            break;
      }
   }

   function playRound(playerSelection, computerSelection) {
      resetTransitionInProgress();
      round++;

      const winResult = whoWins(playerSelection, computerSelection);

      computerButtons[computerSelection].classList.add("played");
      userButtons[playerSelection].classList.add("played");

      printRoundWinner(winResult,playerSelection, computerSelection);

      winCondition();
      transitionEnd();
      gameLog();
   }


   //Toto vypadá divně, ale iteruju pomocí klíč - hodnota
   //Zde klíčem je rock/paper/scissor a hodnotou jsou tlačítka
   for (const [selection, button] of Object.entries(userButtons)) {
      button.addEventListener("click", () => {
         //Zde bylo isGameActive === true
         //Není to potřeba, protože isGameActive je booleanova hodnota, a.k.a samovypovídající
         if (!isGameActive) {
            return;
         }
         const playerSelection = selection;
         computerSelection = computerPlay();
         playRound(playerSelection, computerSelection);
      })
   }

   function init() {
      userPoints.textContent = "0";
      computerPoints.textContent = "0";
      roundResults.textContent = " ";
      playAgainButton.style.display = "none";
      roundResults.insertAdjacentElement("afterbegin", resultLog);
      removeChild();
      round = 0;
      playerScore = 0;
      computerScore = 0;
      turnLogArr = [];
      isGameActive = true;
   }

   playAgainButton.addEventListener("click", init);
   playAgainButton.style.display = "none";

   let turnLogArr = [];
   let resultLog = document.createElement("ul");
   resultLog.style.listStyleType = "none";
   roundResults.insertAdjacentElement("afterbegin", resultLog);

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
})()

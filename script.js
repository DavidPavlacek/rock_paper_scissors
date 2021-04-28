const choice = [
    "rock",
    "paper",
    "scissors"
];
const randomChoice = choice[Math.floor(Math.random() * choice.length)];


function computerPlay() {
    return (randomChoice);
}


const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound() {
    console.log(playerSelection);
    console.log(computerSelection);
}
console.log( playRound() );
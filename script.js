const array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    return array[number];
}

let playerscore = 0;
let computerscore = 0;
let playerSelection;
let roundnum = 1;
const result = document.querySelector("#result");
const results = document.querySelector("#results");
const playagain = document.querySelector("#playagain");
const round = document.querySelector("#round");
const buttons = document.querySelectorAll(".button");

function rock() {
    playerSelection = "rock";
}

function paper() {
    playerSelection = "paper";
}

function scissors() {
    playerSelection = "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Draw";
    }
    else if (computerSelection == "rock"){
        if (playerSelection == "scissors") {
            ++computerscore;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
        else {
            ++playerscore;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }}
    else if (computerSelection == "paper"){
        if (playerSelection == "rock") {
            ++computerscore;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
        else {
            ++playerscore;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }}
    else if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            ++computerscore;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
        else {
            ++playerscore;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }}
    }
    function game() {
        result.textContent = playRound(playerSelection, getComputerChoice());
        round.textContent = `Round: ${roundnum}`;
        results.textContent = `Jethro vs Player ${computerscore}-${playerscore}`;
        ++roundnum;
    }

buttons.forEach(button => button.addEventListener("click", () => {
game();
if (roundnum > 5)  {
    results.textContent = (playerscore > computerscore) 
    ? `You win ${computerscore}-${playerscore}.`
    : (playerscore < computerscore ) ? `You lose ${computerscore}-${playerscore}.`
    : `It's a ${computerscore}-${playerscore} draw.`;
    playagain.textContent = "Game complete! To play on, continue clicking. To restart, refresh this page.";
}
}))

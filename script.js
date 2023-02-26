const array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    return array[number];
}

let playerscore = 0;
let computerscore = 0;

function rock() {
    if (cc == "rock") {
        document.getElementById("result").innerHTML = "Jethro played rock. Draw."
    }
    if (cc == "paper") {
        document.getElementById("result").innerHTML = "Jethro played paper. Paper beats rock, you lose."
    }
    if (cc == "scissors") {
        document.getElementById("result").innerHTML = "Jethro played scissors. Rock beats scissors, you win."
    }
}
function paper() {
    if (cc == "rock") {
        document.getElementById("result").innerHTML = "Jethro played rock. Paper beats rock, you win."
    }
    if (cc == "paper") {
        document.getElementById("result").innerHTML = "Jethro played paper. Draw."
    }
    if (cc == "scissors") {
        document.getElementById("result").innerHTML = "Jethro played scissors. Scissors beats paper, you lose."
    }
}
function scissors() {
    if (cc == "rock") {
        document.getElementById("result").innerHTML = "Jethro played rock. Rock beats scissors, you lose."
    }
    if (cc == "paper") {
        document.getElementById("result").innerHTML = "Jethro played paper. Scissors beats paper, you win."
    }
    if (cc == "scissors") {
        document.getElementById("result").innerHTML = "Jethro played scissors. Draw."
        
    }
}

function playRound() {
    for (let i = 0; i < 5; i++) {
        let cc = getComputerChoice();
        
    }
}
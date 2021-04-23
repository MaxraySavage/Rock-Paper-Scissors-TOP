const MOVES = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3);
    return MOVES[randomSelection];
}

function validMove(testMove) {
    const lowercaseTestMove = testMove.toLowerCase();
    for (const move of MOVES) {
        if (lowercaseTestMove === move) {
            return true;
        }
    }
    return false;
}

function theMoveThatWinsAgainst(move){
    switch(move.toLowerCase()) {
        case "rock":
            return "paper";
        case "paper":
            return "scissors";
        case "scissors":
            return "rock";    
    } 
}

function promptPlayer() {
    let input = prompt("Choose rock, paper, or scissors:");
    while (!validMove(input)){
        input = prompt("Choose rock, paper, or scissors (not case sensitive):");
    }
    return input.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if(!validMove(playerSelection) || !validMove(computerSelection)) {
        return "One of ya'll somehow played an invalid move!";
    }
    
    const lowercasePlayerSelection = playerSelection.toLowerCase();
    const lowercaseComputerSelection = computerSelection.toLowerCase();
    
    if (lowercaseComputerSelection === lowercasePlayerSelection){
        return "It's a tie! You both played " + lowercasePlayerSelection + "!";
    }

    if (lowercasePlayerSelection === theMoveThatWinsAgainst(computerSelection)){
        return "You Win! " + lowercasePlayerSelection + " beats " + lowercaseComputerSelection + "!";
    }

    return "You Lose! " + lowercaseComputerSelection + " beats " + lowercasePlayerSelection + "!";
}

function printGreeting(){
    const greeting = "Hello! Let's play rock paper scissors!\n";
    console.log(greeting);
}


function game(){
    printGreeting();
    let playerScore = 0;
    let computerScore = 0;
    while ( playerScore + computerScore < 5) {
        let playerSelection = promptPlayer();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        // Uses the second word of the round result to figure out if the player won or lost the round
        let roundStatusIndicator = roundResult.split(" ", 2)[1];
        if (roundStatusIndicator === "Win!") {
            playerScore++;
        }
        else if (roundStatusIndicator === "Lose!") {
            computerScore++;
        }
        console.log("Current score is Player: " + playerScore + " Computer: " + computerScore);
    }
    
    if (playerScore > computerScore){
        console.log("You Win! This time...");
    }
    else {
        console.log("You Lose! This time...");
    }
}


const rockButton = document.getElementsByClassName('rock-button')[0];
const paperButton = document.getElementsByClassName('paper-button')[0];
const scissorsButton = document.getElementsByClassName('scissors-button')[0];

const resultsDisplay = document.getElementsByClassName('display-container')[0];


rockButton.addEventListener("click", () => {
    const div = document.createElement('div');
    div.classList.add('round-result');
    const roundResult = playRound("rock", computerPlay());
    div.textContent = roundResult;
    resultsDisplay.appendChild(div);
    
});

paperButton.addEventListener("click", () => {
    const div = document.createElement('div');
    div.classList.add('round-result');
    const roundResult = playRound("paper", computerPlay());
    div.textContent = roundResult;
    resultsDisplay.appendChild(div);
});

scissorsButton.addEventListener("click", () => {
    const div = document.createElement('div');
    div.classList.add('round-result');
    const roundResult = playRound("scissors", computerPlay());
    div.textContent = roundResult;
    resultsDisplay.appendChild(div);
});




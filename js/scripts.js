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
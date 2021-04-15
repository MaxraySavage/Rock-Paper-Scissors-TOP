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

function promptPlayer() {
    let input = prompt("Choose rock, paper, or scissors:");
    while (!validMove(input)){
        input = prompt("Choose rock, paper, or scissors (not case sensitive):");
    }
    return input.toLowerCase();
}
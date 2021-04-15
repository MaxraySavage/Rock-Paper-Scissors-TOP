function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3);
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[randomSelection];
}
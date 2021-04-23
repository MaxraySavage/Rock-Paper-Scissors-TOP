const MOVES = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomSelection = Math.floor(Math.random() * 3);
  return MOVES[randomSelection];
}

function theMoveThatWinsAgainst(move) {
  switch (move.toLowerCase()) {
    case "rock":
      return "paper";
    case "paper":
      return "scissors";
    case "scissors":
      return "rock";
  }
}

function playerResult(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "tie";
  }

  if (playerSelection === theMoveThatWinsAgainst(computerSelection)) {
    return "win";
  }

  return "lose";
}

function addDisplayText(text, divClass) {
    const div = document.createElement("div");
    div.classList.add(divClass);
    div.textContent = text;
    const displayContainer = document.getElementById("display-container");
    displayContainer.appendChild(div);
}

function updateScoreBoard() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerText = "Current score is Player: " + playerScore + " Computer: " + computerScore;
}

function resetGame() {
    const displayContainer = document.getElementById("display-container");
    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild);
    }
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
}

function playRound(playerMove) {
    if ((playerScore >= 5) || (computerScore >= 5)) {
        resetGame();
    }
    let computerMove = computerPlay();
    res = playerResult(playerMove, computerMove);
    if (res === "tie") {
        let message = "It's a tie!";
        addDisplayText(message, "round-tie");        
    } else if (res === "win") {
        let message = "You win this round!";
        addDisplayText(message, "round-win");
        playerScore++;
    } else {
        let message = "You lose this round!";
        addDisplayText(message, "round-lose");
        computerScore++;
    }
    updateScoreBoard();
    if (playerScore >= 5) {
        let message = "You win the whole game! Impressive.";
        addDisplayText(message, "game-win");
    }
    if (computerScore >= 5) {
        let message = "You lose the whole game! Keep training.";
        addDisplayText(message, "game-lose");
    }
}

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");


rockButton.addEventListener("click", () => {
  playRound("rock");
});

paperButton.addEventListener("click", () => {
  playRound("paper")
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});

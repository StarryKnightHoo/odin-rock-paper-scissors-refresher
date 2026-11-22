let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results");
const score = document.querySelector(".score");

function getComputerChoice () {
    let choice = Math.random();
    if (choice <= (1 / 3)) {
        choice = "rock";
    } else if (choice <= ((1 / 3) * 2)) {
        choice = "paper";
    } else {
        choice = 'scissors'
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            results.textContent = "It's a tie!";
        } else if (computerChoice === "paper") {
            computerScore++;
            results.textContent = "You lose! Rock loses to paper!";
        } else {
            humanScore++;
            results.textContent = "You win! Rock beats scissors!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            results.textContent = "You win! Paper beats rock!";
        } else if (computerChoice === "paper") {
            results.textContent = "It's a tie!";
        } else {
            computerScore++;
            results.textContent = "You lose! Paper loses to scissors!";
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            results.textContent = "You lose! Scissors loses to rock!";
        } else if (computerChoice === "paper") {
            humanScore++;
            results.textContent = "You win! Scissors beats paper!";
        } else {
            results.textContent = "It's a tie!";
        }
    }
    score.textContent = "Player: " + humanScore + " Computer:"  + computerScore;

    if (humanScore === 5) {
        results.textContent = "You win the game!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        results.textContent = "You lose the game!";
        humanScore = 0;
        computerScore = 0;
    }
}

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

score.textContent = "Player: " + humanScore + " Computer:"  + computerScore;

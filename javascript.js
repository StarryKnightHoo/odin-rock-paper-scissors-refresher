let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("What will you play?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return "It's a tie!"
        } else if (computerChoice === "paper") {
            computerScore++;
            return "You lose! Rock loses to paper!"
        } else {
            humanScore++;
            return "You win! Rock beats scissors!"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats rock!"
        } else if (computerChoice === "paper") {
            return "It's a tie!"
        } else {
            computerScore++;
            return "You lose! Paper loses to scissors!"
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            return "You lose! Scissors loses to rock!"
        } else if (computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beats paper!"
        } else {
            return "It's a tie!"
        }
    }
}

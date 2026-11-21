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
            console.log("It's a tie!");
        } else if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Rock loses to paper!");
        } else {
            humanScore++;
            console.log("You win! Rock beats scissors!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats rock!")
        } else if (computerChoice === "paper") {
            console.log("It's a tie!")
        } else {
            computerScore++;
            console.log("You lose! Paper loses to scissors!")
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Scissors loses to rock!")
        } else if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper!")
        } else {
            console.log("It's a tie!");
        }
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    } 

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (humanScore === computerScore) {
        console.log("The game is tied!")
    } else {
        console.log("You lose the game!")
    }
    humanScore = 0;
    computerScore = 0;
}

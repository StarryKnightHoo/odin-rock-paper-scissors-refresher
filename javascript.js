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
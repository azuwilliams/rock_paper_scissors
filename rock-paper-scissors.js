
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3) + 1;
    
    if (randomInt === 1) {
        return "rock";
    } else if (randomInt === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getPlayerChoice() {
    let choice = prompt("Make Your Selection", "");
    let result = choice.toLowerCase();
    return result
}

function alertDraw() {
    alert("You and the computer chose the same weapon!")
    alert("It's a Tie!") 
}

function alertLose() {
    alert("You Lose!") 
}

function alertWin() {
    alert("You win!")
}


function playRound() {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice()
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            alertDraw();
            return "Tie!";
        } else if (computerSelection === "paper") {
            alert("Paper beats Rock!");
            alertLose();
            return "You Lose!";
        } else {
            alert("Rock beats Scissors!");
            alertWin();
            return "You Win!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            alert("Paper beats Rock!");
            alertWin();
            return "You Win!";
        } else if (computerSelection === "paper") {
            alertDraw();
            return "Tie!"
        } else {
            alert("Scissors beats Paper!");
            alertLose();
            return "You Lose!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            alert("Rock beats Scissors!");
            alertLose();
            return "You Lose!";
        } else if (computerSelection === "paper") {
            alert("Scissors beats Paper!");
            alertWin();
            return "You Win!";
        } else {
            alertDraw();
            return "Tie!";
        }
    } else {
        alert("Invalid input, check your spelling and try again!")
    }
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}

game()

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

function writeDraw() {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = `You chose ${playerSelection}, and so did the computer, it's a draw!`
    list.appendChild(listItem);
}

function writeLose() {
    console.log("EEE");

    const listItem = document.createElement('li');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = `You chose ${playerSelection}, and the computer chose ${computerSelection}, you Lose!`
    list.appendChild(listItem);
}

function writeWin() {
    console.log("OOO");

    const listItem = document.createElement('li');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = `You chose ${playerSelection}, you Win!`
    list.appendChild(listItem);
}

function playRound() {
    let computerSelection = getComputerChoice()
    // let playerSelection = getPlayerChoice()
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            writeDraw();
            return "Tie!";
        } else if (computerSelection === "paper") {
            writeLose();
            return "You Lose!";
        } else {
            writeWin()
            return "You Win!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            alert("Paper beats Rock!");
            alertWin();
            return "You Win!";
        } else if (computerSelection === "paper") {
            writeDraw();
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
            writeDraw();
            return "Tie!";
        }
    } else {
        alert("Invalid input, try again!")
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const list = document.querySelector('#results')

let playerSelection

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
});
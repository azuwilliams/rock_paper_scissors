
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

function writeDraw() {
    listItem.appendChild(listText);
    listText.textContent = `You chose ${playerSelection}, and so did the computer, it's a draw!`
    list.appendChild(listItem);
}

function writeLose(computerSelection) {
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;

    listItem.appendChild(listText);
    listText.textContent = `You chose ${playerSelection}, and the computer chose ${computerSelection}, you Lose!`
    list.appendChild(listItem);

    if (computerScore >= 5){
        listItem.appendChild(listText);
        listText.textContent = "Computer has 5 points, Computer WINS!";
        list.appendChild(listItem);
        computerScore = 0
        playerScore = 0
        document.getElementById("computer-score").innerHTML = computerScore;
        document.getElementById("player-score").innerHTML = playerScore;
    }
}

function writeWin(computerSelection) {
    playerScore++;
    document.getElementById("player-score").innerHTML = computerScore;

    listItem.appendChild(listText);
    listText.textContent = `You chose ${playerSelection}, and the computer chose ${computerSelection}, you Win!`
    list.appendChild(listItem);

    if (playerScore >= 5){
        listItem.appendChild(listText);
        listText.textContent = "Player has 5 points, Player WINS!";
        list.appendChild(listItem);
        computerScore = 0
        playerScore = 0
        document.getElementById("computer-score").innerHTML = computerScore;
        document.getElementById("player-score").innerHTML = playerScore;
    }

}

function playRound() {
    let computerSelection = getComputerChoice()
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            writeDraw();
            return "Tie!";
        } else if (computerSelection === "paper") {
            writeLose(computerSelection);
            return "You Lose!";
        } else {
            writeWin(computerSelection)
            return "You Win!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            writeWin(computerSelection);
            return "You Win!";
        } else if (computerSelection === "paper") {
            writeDraw();
            return "Tie!"
        } else {
            writeLose(computerSelection);
            return "You Lose!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            writeLose(computerSelection);
            return "You Lose!";
        } else if (computerSelection === "paper") {
            writeWin(computerSelection);
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
const listItem = document.createElement('div');
const listText = document.createElement('span');


let playerSelection
let playerScore = 0
let computerScore = 0


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
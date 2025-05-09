let humanScore = 0;
let computerScore = 0;
const roundNumber = document.querySelector('.round-number');
const humanWinMessage = document.createElement('p');
humanWinMessage.textContent = 'Human win ! Human got 5 points!'
const computerWinMessage = document.createElement('p');
computerWinMessage.textContent = 'Computer win ! Computer got 5 points!'


// getComputerChoice declration
function getComputerChoice() {
    // create a number variable and store the random value of 1 - 3
    let randomNum = Math.floor(Math.random() * 3) + 1
    // seperate different cases using switch and return it
    switch (randomNum) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    const message = document.querySelector('.message');
    // computer win scenerio
    let computerWin = (humanChoice === "rock" && computerChoice == "paper" ||
        humanChoice === "paper" && computerChoice == "scissors" ||
        humanChoice === "scissors" && computerChoice == "rock");

    if (computerWin) {
        message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else if (humanChoice === computerChoice) { // draw scenerio
        message.textContent = `Draw ! ${humanChoice} and ${computerChoice}`;
    } else { // if not win and not draw then must be lose
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    roundNumber.textContent = `${humanScore}  :  ${computerScore}`;

    if (humanScore == 5) {
        humanWinMessage.setAttribute('class', 'yolo');
        message.appendChild(humanWinMessage);
        humanScore = 0;
        computerScore = 0;
    }

    if (computerScore == 5) {
        computerWinMessage.setAttribute('class', 'yolo');
        message.appendChild(computerWinMessage);
        humanScore = 0;
        computerScore = 0;
    }

}

['rock','paper','scissors'].forEach((choice) => {
    document.querySelector(`.${choice}`).addEventListener('click', () => {
        playRound(`${choice}`,getComputerChoice());
    })
})









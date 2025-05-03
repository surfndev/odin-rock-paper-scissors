// Step 2 
// getComputerChoice declration
function getComputerChoice() {
    // create a number variable and store the random value of 1 - 3
    let randomNum = Math.floor(Math.random() * 3) + 1
    // seperate different cases using switch and return it
    switch (randomNum) {
        // case 1 rock
        case 1:
            return "rock"
        // case 2 paper
        case 2:
            return "paper"
        // case 3 scissors
        case 3:
            return "scissors"
    }
}


// step 3
// getHumanChoice declaration
function getHumanChoice() {
    let userChoice = "";
    userChoice = prompt("Please choose \"rock\", \"paper\" or \"scissors\"");
    return userChoice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let lowerCaseHumanChoice = humanChoice.toLowerCase();
        // computer win scenerio
        let computerWin = (lowerCaseHumanChoice === "rock" && computerChoice == "paper" ||
            lowerCaseHumanChoice === "paper" && computerChoice == "scissors" ||
            lowerCaseHumanChoice === "scissors" && computerChoice == "rock");

        if (computerWin) {
            console.log(`You lose! ${computerChoice} beats ${lowerCaseHumanChoice}`);
            computerScore++;
        } else if (lowerCaseHumanChoice === computerChoice) { // draw scenerio
            console.log(`Draw ! ${lowerCaseHumanChoice} and ${computerChoice}`)
        } else { // if not win and not draw then must be lose
            console.log(`You win! ${lowerCaseHumanChoice} beats ${computerChoice}`)
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Round${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human ${humanScore} : ${computerScore} PC`)
    }
}

playGame();




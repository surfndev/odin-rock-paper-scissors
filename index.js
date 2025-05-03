// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0. 

// Step 2 
// getComputerChoice declration
function getComputerChoice(){
    // create a number variable and store the random value of 1 - 3
    let randomNum = Math.floor(Math.random()*3) + 1
    // seperate different cases using switch and return it
    switch(randomNum){
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
function getHumanChoice(){
    let userChoice = "";
    userChoice = prompt("Please choose \"rock\", \"paper\" or \"scissors\"");
    return userChoice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let lowerCaseHumanChoice = humanChoice.toLowerCase();
        //human lose scenerio
        if(lowerCaseHumanChoice === "rock" && computerChoice == "paper" || 
        lowerCaseHumanChoice === "paper" && computerChoice == "scissors" || 
        lowerCaseHumanChoice === "scissors" && computerChoice == "rock"){
            console.log(`You lose! ${computerChoice} beats ${lowerCaseHumanChoice}`);
            computerScore++;
        }else if(lowerCaseHumanChoice === "paper" && computerChoice == "rock" || 
        lowerCaseHumanChoice === "scissors" && computerChoice == "paper" || 
        lowerCaseHumanChoice === "rock" && computerChoice == "scissors"){
            console.log(`You win! ${lowerCaseHumanChoice} beats ${computerChoice}`)
            humanScore++;
        }else{
            console.log(`Draw ! ${lowerCaseHumanChoice} and ${computerChoice}`)
        }
    }

    for(let i =0 ; i<5; i++){
        console.log(`Round${i+1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human ${humanScore} : ${computerScore} PC`)
    }
}

playGame();




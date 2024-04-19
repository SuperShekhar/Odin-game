function computer(){
    let randomChoice = Math.floor(Math.random()*3);
    switch(randomChoice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
        default: return "Invalid";
    }
}

function player(){
    let playerChoice = prompt("Choose Rock Paper Scissor").toLowerCase();
    if (playerChoice === null || playerChoice === undefined || playerChoice === "" ||(playerChoice!= "rock" &playerChoice!= "paper"&playerChoice!= "scissor")) {
        console.log("Invalid choice");
        return player();
    }
    return playerChoice;
}

let playerSelection = player();
let computerSelection = computer();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`You have a tie! Both chose ${computerSelection}`);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        console.log(`You lose. Computer chose ${computerSelection}`);
    }
}

playRound(playerSelection, computerSelection);

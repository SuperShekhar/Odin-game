const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const container=document.querySelector(".cont");
let string;


// Function to generate computer's choice
function computerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
        default: return "Invalid";
    }
}

// Event listeners for player's choice
function play(){
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissor"));}


// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = computerChoice();

    if (playerSelection === computerSelection) {
        console.log(`You have a tie! Both chose ${playerSelection}`);
        string=`You have a tie! Both chose ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        string=`You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        console.log(`You lose. Computer chose ${computerSelection}`);
        string=`You lose. Computer chose ${computerSelection}`;
    }

const result=document.createElement("h1");
result.setAttribute("style", 
"color: blue; background:yellow; border:2px blue solid ; margin:30px ;font-size:50px;");
result.textContent=string;
container.textContent="";
container.append(result);
console.clear();

}
play();


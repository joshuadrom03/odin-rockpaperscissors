
//create a function that  radomly returns string values rock,paper or scissors

function getComputerChoice(){

    let rand = Math.random();

    if( rand <= 0.33){
        return "rock";

    } else if(rand > 0.33 && rand <= 0.66){
        return "paper";

    } else {
        return "scissors";
    }
}



//create a function that gets the users choice and returns it

function getHumanChoice(){

    let choice = prompt("Enter your throw: Rock, Paper, or scissors")

    if (choice.toLowerCase() === "rock"){
        return "rock";

    } else if(choice.toLowerCase() === "paper"){
        return "paper";

    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";

    } else{
        return "Please enter a valid input";
    }
}
//create 2 score variables for the player and the computer

let humanScore = 0;
let computerScore = 0;

//create a function that takes two choices as arguments,plays a round, adds a score to the winner

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){

    humanChoice = humanSelection
    computerChoice = computerSelection;

     if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Tie, rock and rock");

     } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log("You lose!, paper beats rock");
        console.log("player score: " + humanScore + " computer score: " + computerScore);   

     } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win!, rock beats scissors");
        console.log("player score: " + humanScore + " computer score: " + computerScore);  

     } else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Tie, paper and paper");

     } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log("You lose!, scissors beats paper");
        console.log("player score: " + humanScore + " computer score: " + computerScore);  

     } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log("You win!, paper beats rock");
        console.log("player score: " + humanScore + " computer score: " + computerScore);  

     } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Tie, scissors and scissors");

     } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log("You lose!, rock beats scissors");
        console.log("player score: " + humanScore + " computer score: " + computerScore);  

     } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log("You  win!, scissors beats paper");
        console.log("player score: " + humanScore + " computer score: " + computerScore);  

     } else {
        console.log("invalid")
     }

}

playRound(humanSelection, computerSelection);


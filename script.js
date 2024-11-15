
let humanScore = 0;
let computerScore = 0;
let playerChoice;

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

const button1 = document.querySelector("#rock");
button1.addEventListener("click",function (e) {

    console.log("rock");
    playerChoice = "rock";
    playRound();
});

const button2 = document.querySelector("#paper");
button2.addEventListener("click",function (e){

    console.log("paper");
    playerChoice = "paper";
    playRound();
});

const button3 = document.querySelector("#scissors");
button3.addEventListener("click",function (e){

    console.log("scissors");
    playerChoice = "scissors";
    playRound();
});


//create a function that takes two choices as arguments,plays a round, adds a score to the winner
function playRound(humanChoice, computerChoice){

    humanChoice = playerChoice;
    computerChoice = getComputerChoice();

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


//create a function that calls playRound 5 times
/*
function playGame(){

    let roundCount = 0;
    
    for (roundCount; roundCount < 5; roundCount++){
        playRound();
    }
    console.log("Game over!!!")

}

//call the main function
playGame();
*/
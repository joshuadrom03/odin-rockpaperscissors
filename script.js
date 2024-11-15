
let humanScore = 0;
let computerScore = 0;
let playerChoice;
const div = document.querySelector("#gameplay")

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

    playerChoice = "rock";
    playGame();
});

const button2 = document.querySelector("#paper");
button2.addEventListener("click",function (e){

    playerChoice = "paper";
    playGame();
});

const button3 = document.querySelector("#scissors");
button3.addEventListener("click",function (e){

    playerChoice = "scissors";
    playGame();
});


//create a function that takes two choices as arguments,plays a round, adds a score to the winner
function playRound(humanChoice, computerChoice){

    humanChoice = playerChoice;
    computerChoice = getComputerChoice();
    console.log(humanChoice);

     if (humanChoice === "rock" && computerChoice === "rock"){
        div.textContent = "Tie, rock and rock, player score: " + humanScore + " computer score: " + computerScore;

     } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        div.textContent = "You lose!, paper beats rock, player score: " + humanScore + " computer score: " + computerScore;

     } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        div.textContent= "You win!, rock beats scissors, player score: " + humanScore + " computer score: " + computerScore;

     } else if (humanChoice === "paper" && computerChoice === "paper"){
        div.textContent = "Tie, paper and paper, player score: " + humanScore + " computer score: " + computerScore;

     } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        div.textContent = "You lose!, scissors beats paper, player score: " + humanScore + " computer score: " + computerScore; 

     } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        div.textContent = "You win!, paper beats rock, player score: " + humanScore + " computer score: " + computerScore ;

     } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        div.textContent = "Tie, scissors and scissors, player score: " + humanScore + " computer score: " + computerScore;

     } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        div.textContent = "You lose!, rock beats scissors, player score: " + humanScore + " computer score: " + computerScore ;
        
     } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        div.textContent = "You  win!, scissors beats paper, player score: " + humanScore + " computer score: " + computerScore;

     } 

}


//create a function that calls playRound 5 times

function playGame(){

    let scorelimit = 5;
    
        if (humanScore == scorelimit){
            div.textContent = "Game over !, Player wins"
    
        } else if(computerScore == scorelimit){
            div.textContent = "Game over !, Computer wins"

        } else {
            playRound();
        }
}
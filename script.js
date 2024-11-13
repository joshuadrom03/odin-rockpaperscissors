
//create a function that  radomly returns string values rock,paper or scissors

function getComputerChoice(){

    let rand = Math.random();

    if( rand <= 0.33){
        return "Rock";

    } else if(rand > 0.33 && rand <= 0.66){
        return "Paper";

    } else {
        return "Scissors";
    }
}

//console.log(getComputerChoice());

//create a function that gets the users choice and returns it

function getHumanChoice(){

    let choice = prompt("Enter your throw: Rock, Paper, or scissors")

    if (choice.toLowerCase() === "rock"){
        return "rock";

    } else if(choice.toLowerCase() === "paper"){
        return "paper";

    } else if (choice.toLowerCase() === "scissor"){
        return "scissor";

    } else{
        return "Please enter a valid input";
    }
}

//console.log(getHumanChoice());
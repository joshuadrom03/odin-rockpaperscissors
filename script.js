//create a function that  radomly returns string values rock,paper or scissors
//1 create a variable that stores a random number 
//2 create if statements to generate the strings
//3 return the strings

function getComputerChoice(){

    let rand = Math.random();

    if( rand <= 0.33){
        return "Rock"

    } else if(rand > 0.33 && rand <= 0.66){
        return "Paper"

    } else {
        return "Scissors"
    }
}

//console.log(getComputerChoice());
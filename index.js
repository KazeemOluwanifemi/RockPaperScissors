// add function that ends the game if the user is tired of playing after 10 tries
// using a "do while" loop
// this is to avoid the use of recursive functions

function gameStart(){
    const startGame = prompt("Would you like to play Rock, Paper, Scissors? ");
    if(startGame == "Yes"){
        return playGame();
    } else{
        console.log("Your wishes are my command.");
    }
}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(){
    const userChoice = prompt("Choose your weapon: Rock || Paper || Scissors -> ")
    const computerChoice = getComputerChoice();
    
    if(userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors"){
        console.log("You didn't make your play, try again.")
        return playGame();
    }
    
    console.log(`Computer chose: ${computerChoice}`);
    console.log(gameOutcomes[userChoice][computerChoice]);
    return playGame();
}

const gameOutcomes = {
  Rock: {
    Rock: "It's a tie!",
    Paper: "Better luck next time!",
    Scissors: "You knocked me out!"
  },
  Paper: {
    Rock: "You win!",
    Paper: "It's a tie!",
    Scissors: "You've been cut up!"
  },
  Scissors: {
    Rock: "You lose.",
    Paper: "You cut me up!",
    Scissors: "We're tied up!"
  }
};

gameStart();
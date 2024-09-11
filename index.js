// add function that ends the game if the user is tired of playing after 10 tries
// using a "do while" loop
// this is to avoid the use of recursive functions

let gameOver = false;

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
    let tries = 0;
    const userName = prompt("What's your name? ");
    do {
        const userChoice = prompt("Choose your weapon: Rock || Paper || Scissors -> ")
        const computerChoice = getComputerChoice();
        
        if(userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors"){
            console.log("You didn't make your play, try again.")
            continue;
        }
        
        console.log(`Computer chose: ${computerChoice}`);
        console.log(gameOutcomes[userChoice][computerChoice]);
        
        scoreKeeper(userChoice, computerChoice);
        
        tries++;
        
        if (userScore >= 5 || computerScore >= 5 || tries >= 10) {
            endGame();
            break;
        }
        
        function endGame(){
            // if (userScore >=5 || computerScore >=5){
            //     console.log("Game Over!");
            // }
            if (userScore >= 5) {
                console.log(`Computer's Score: ${computerScore}`);
                console.log(`${userName}'s Score: ${userScore}`);
                console.log("You win the game!");
            } else if (computerScore >= 5) {
                console.log(`Computer's Score: ${computerScore}`);
                console.log(`${userName}'s Score: ${userScore}`);
                console.log("Computer wins the game!");
            }  
        }
    } while (true);
}

let userScore = 0;
let computerScore = 0;
function scoreKeeper(userChoice, computerChoice){
    const roundWinner = gameOutcomes[userChoice][computerChoice];
    if (roundWinner == "You win!"){
        userScore++
    } else if(roundWinner == "You lose."){
        computerScore++
    }
}

const gameOutcomes = {
  Rock: {
    Rock: "It's a tie!",
    Paper: "You win!",
    Scissors: "You lose."
  },
  Paper: {
    Rock: "You win!",
    Paper: "It's a tie!",
    Scissors: "You lose."
  },
  Scissors: {
    Rock: "You lose.",
    Paper: "You win!",
    Scissors: "We're tied up!"
  }
};

gameStart();
// endGame();
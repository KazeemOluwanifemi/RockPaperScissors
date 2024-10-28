let user_name = document.querySelector(".user_name");
let user_question = document.querySelector(".encouragement");
let start_btn = document.querySelector(".get_user_name");
let rps_btns = document.querySelector(".rps-btns");
let outcome = document.querySelector(".outcome");
let result = document.querySelector(".result");
let final_result = document.querySelector(".final_outcome");

user_name.focus();

// user picks weapon
function displayWeapons(){
  let name_value = user_name.value;
  user_question.textContent = `Choose your weapon, ${name_value}!`

  let main_content = document.querySelector(".main_game");

  if (main_content.style.display == "none" || main_content.style.display == ""){
    main_content.style.display = "block";
  } else if(main_content.style.display == "block") {
    main_content.style.display = "none";
  };
}
start_btn.addEventListener("click", displayWeapons);

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Determines the games outcome based on a 3 by 3 table, the outer keys represents the user's choice while the inner keys represents the computer's choice.

const gameOutcomes = {
    Rock: {
      Rock: "It's a tie!",
      Paper: "You lose.",
      Scissors: "You win!."
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

let userScore = 0;
let computerScore = 0;
let tries = 0;

let rock_btn = document.querySelector("#rock-btn");
rock_btn.addEventListener("click", function() {
    let user_choice = "Rock";
    let computer_choice = getComputerChoice();
    tries++;

    // This line of code gives an output based on subbing the user's choice and computer's random choice and giving a corresponding string

    const roundWinner = gameOutcomes[user_choice][computer_choice];
    if (roundWinner == "You win!"){
        userScore++
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `You win!!`;
    } else if(roundWinner == "You lose."){
        computerScore++
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `You lose.`;
    } else{
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `It's a tie, try again!`;
    }

    if(userScore >=5 || computerScore >=5 || tries >=10){
        if (userScore >= 5) {
            final_result.textContent = `Computer's Score: ${computerScore} \n Your Score: ${userScore} \n Congratulations!! You win the game!`;
        } else if (computerScore >= 5) {
            final_result.textContent = `Computer's Score: ${computerScore} \n Your Score: ${userScore} \n Aww, you lost.`;
        }  else{
            final_result.textContent = `Game Over.`
        }
    }
});

let paper_btn = document.querySelector("#paper-btn");
paper_btn.addEventListener("click", function(){
    let user_choice = "Paper";
    let computer_choice = getComputerChoice();
    tries++;

    // This line of code gives an output based on subbing the user's choice and computer's random choice and giving a corresponding string

    const roundWinner = gameOutcomes[user_choice][computer_choice];
    if (roundWinner == "You win!"){
        userScore++
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `You win!!`;
    } else if(roundWinner == "You lose."){
        computerScore++
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `You lose.`;
    } else{
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `It's a tie, try again!`;
    }

    if(userScore >=5 || computerScore >=5 || tries >=10){
        if (userScore >= 5) {
            final_result.textContent = `Computer's Score: ${computerScore} \n Your Score: ${userScore} \n Congratulations!! You win the game!`;
        } else if (computerScore >= 5) {
            final_result.textContent = `Computer's Score: ${computerScore} \n Your Score: ${userScore} \n Aww, you lost.`;
        }  else{
            final_result.textContent = `Game Over.`
        }
    }
})


let scissors_btn = document.querySelector("#scissors-btn");
scissors_btn.addEventListener("click", function(){
    let user_choice = "Scissors";
    let computer_choice = getComputerChoice();
    tries++;

    // This line of code gives an output based on subbing the user's choice and computer's random choice and giving a corresponding string

    const roundWinner = gameOutcomes[user_choice][computer_choice];
    if (roundWinner == "You win!"){
        userScore++
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `You win!!`;
    } else if(roundWinner == "You lose."){
        computerScore++
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `You lose.`;
    } else{
        result.textContent = `Computer chose: ${computer_choice}`;
        outcome.textContent =  `It's a tie, try again!`;
    }

    if(userScore >=5 || computerScore >=5 || tries >=10){
        if (userScore >= 5) {
            final_result.textContent = `Computer's Score: ${computerScore} \n Your Score: ${userScore} \n Congratulations!! You win the game!`;
        } else if (computerScore >= 5) {
            final_result.textContent = `Computer's Score: ${computerScore} \n Your Score: ${userScore} \n Aww, you lost.`;
        }  else{
            final_result.textContent = `Game Over.`
        }
    }
})

// figure out how to display results of each round and final result






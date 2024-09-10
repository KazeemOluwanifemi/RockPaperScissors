let initialPrompt = prompt("Would you like to play Rock, Paper, Scissors? ");

if (initialPrompt == "Yes"){
    return gameFunction();
} else if(initialPrompt == "No"){
    console.log("Alright.")
} else{
    console.log("Please enter `Yes` or `No`")
}

function gameFunction(){
    function getComputerChoice(){
        var min = 0;
        var max = 2;
        function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
        };

        // console.log(getRandomIntInclusive(min, max));
        var computerChoice = getRandomIntInclusive(min, max);

        switch(computerChoice){
            case 0:
                return "Rock";
                break
        
            case 1:
                return "Paper";
                break
        
            case 2:
                return "Scissors";
                break
            default:
                console.log("Please pick between `Rock, Paper Scissors`.")
        }
    }
    var computerChoiceFinal = getComputerChoice();

    userChoice = prompt("Choose your weapon: Rock || Paper || Scissors-> ");
    if(userChoice == "Rock" && computerChoiceFinal == "Rock"){
        console.log("It's a tie!")
        return gameFunction();
    }else if(userChoice == "Rock" && computerChoiceFinal == "Paper"){
        console.log("Better luck next time!");
        return gameFunction();
    } else if(userChoice == "Rock" && computerChoiceFinal == "Scissors"){
        console.log("You knocked me out!");
        return gameFunction();
    } else if(userChoice == "Paper" && computerChoiceFinal == "Paper"){
        console.log("It's a tie!");
        return gameFunction();
    } else if(userChoice == "Paper" && computerChoiceFinal == "Rock"){
        console.log("You win!");
        return gameFunction();
    } else if(userChoice == "Paper" && computerChoiceFinal == "Scissors"){
        console.log("You've been cut up!");
        return gameFunction();
    } else if(userChoice == "Scissors" && computerChoiceFinal == "Scissors"){
        console.log("We're tied up!");
        return gameFunction();
    } else if(userChoice == "Scissors" && computerChoiceFinal == "Rock"){
        console.log("You lose.");
        return gameFunction();
    } else if(userChoice == "Scissors" && computerChoiceFinal == "Paper"){
        console.log("You cut me up!");
        return gameFunction();
    } else{
        console.log("You didn't choose a weapon, try again.")
        return gameFunction();
    }
}
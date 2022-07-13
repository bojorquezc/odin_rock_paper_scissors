/* The odin project - Rock paper scissors game*/

//Function for the computer to return 1 of 3 values (rock, paper or scissor)
function computerPlay() {
    //A variable needs to be created to store a random number from 0 to 2
    let computerChoice = Math.floor(Math.random() * 3);
    //The number then needs to be compared to a list of 3 options
    //Depending on the number randomly generated, we will return a value
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

//Defining the player selection and computer selection
//let playerSelection = prompt('Choose your weapon:\nrock\npaper\nscissors');
const playerSelection = 'rock';
const computerSelection = computerPlay();


//Function for a single round of Rock Paper Scissors against computer
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock') {
                return ('It is a tie');
            } else if (computerSelection == 'paper') {
                return ('Computer wins');
            } else {
                return ('You win');
            }
        case 'paper':
            if (computerSelection == 'paper') {
                return ('It is a tie');
            } else if (computerSelection == 'scissors') {
                return ('Computer wins');
            } else {
                return ('You win');
            }
        case 'scissors':
            if (computerSelection == 'scissors') {
                return ('It is a tie');
            } else if (computerSelection == 'rock') {
                return ('Computer wins');
            } else {
                return ('You win');
            }
        default:
            console.log("No valid choice was entered");
    }
}

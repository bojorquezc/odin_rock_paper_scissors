/* The odin project - Rock paper scissors game*/

//Function for the computer to return 1 of 3 values (rock, paper or scissor)
function getComputerChoice() {
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
            return 'scissors'
            break;
    }
}


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
            console.log('No valid choice was entered');
    }
}



function game(playerSelection) {
    let playerScore = document.querySelector('player_score');
    let computerScore = document.querySelector('computer_score');
    let tiesScore = document.querySelector('ties_score');
    const computerSelection = getComputerChoice();

    if (playRound(playerSelection, computerSelection) == 'You win') {
        playerScore += 1;
    } else if (playRound(playerSelection, computerSelection) == 'Computer wins') {
        computerScore += 1;
    } else if (playRound(playerSelection, computerSelection) == 'It is a tie') {
        tiesScore += 1;
    } console.log(playRound(playerSelection, computerSelection) + `\nPlayer Chose: ${playerSelection} | Computer Chose: ${computerSelection}` + `\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}\nDraws: ${tiesScore}`);

    //Final result to show once the 5 games are played
    if (playerScore > computerScore) {
        console.log('\nPlayer Wins')
    } else if (computerScore > playerScore) {
        console.log('\nComputer Wins')
    } else {
        console.log('\nIt is a tie')
    }
}


const rockButton = document.getElementById("rock-button");
rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    return game(playerSelection);
});

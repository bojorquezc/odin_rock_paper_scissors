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
            return 'scissors';
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


//Function to play 5 games and log the score
/*
function game() {
    // Initial variable that will let us keep track of the score
    let gameScorePlayer = 0;
    let gameScoreComputer = 0;
    let gameDraws = 0;

    //Loop that plays the 5 games and increases each of the initial variables, depending if a game was won, lost or if it was tied
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose rock, paper or scissors',).toLowerCase();
        const computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection) == 'You win') {
            gameScorePlayer += 1;
        } else if (playRound(playerSelection, computerSelection) == 'Computer wins') {
            gameScoreComputer += 1;
        } else if (playRound(playerSelection, computerSelection) == 'It is a tie') {
            gameDraws += 1;
        } console.log(playRound(playerSelection, computerSelection) + `\nPlayer Chose: ${playerSelection} | Computer Chose: ${computerSelection}` + `\nPlayer Score: ${gameScorePlayer}\nComputer Score: ${gameScoreComputer}\nDraws: ${gameDraws}`);
    }

    //Final result to show once the 5 games are played
    if (gameScorePlayer > gameScoreComputer) {
        console.log('\nPlayer Wins')
    } else if (gameScoreComputer > gameScorePlayer) {
        console.log('\nComputer Wins')
    } else {
        console.log('\nIt is a tie')
    }
}
*/
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


//Button interaction to run a game per choice
const rockButton = document.getElementById('rock-button');
rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    return game(playerSelection);
});

const paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    return game(playerSelection);
});

const scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    return game(playerSelection);
});



let playerScoreCounter = 0;
const playerScore = document.querySelector('.player_score');

let computerScoreCounter = 0;
const computerScore = document.querySelector('.computer_score');

let tiesScoreCounter = 0;
const tiesScore = document.querySelector('.ties_score');

const playerChose = document.querySelector('.player_chose');
const computerChose = document.querySelector('.computer_chose');

const winnerMessage = document.querySelector('.winner_message');
const finalScore = document.querySelector('.final_score');



function game(playerSelection) {
    const computerSelection = getComputerChoice();

    playerChose.textContent = playerSelection;
    computerChose.textContent = computerSelection;

    if (playRound(playerSelection, computerSelection) == 'You win') {
        playerScoreCounter += 1;
        playerScore.textContent = playerScoreCounter;
    } else if (playRound(playerSelection, computerSelection) == 'Computer wins') {
        computerScoreCounter += 1;
        computerScore.textContent = computerScoreCounter;
    } else if (playRound(playerSelection, computerSelection) == 'It is a tie') {
        tiesScoreCounter += 1;
        tiesScore.textContent = tiesScoreCounter;
    } console.log(playRound(playerSelection, computerSelection) + `\nPlayer Chose: ${playerSelection} | Computer Chose: ${computerSelection}` + `\nPlayer Score: ${playerScoreCounter}\nComputer Score: ${computerScoreCounter}\nDraws: ${tiesScoreCounter}`);

    //Final result to show once the 5 games are played
    if (playerScoreCounter == 5) {
        winnerMessage.textContent = 'You Win!';
        winnerMessage.classList.add('winner_message_on');
        finalScore.textContent = `Final Score - Player:${playerScoreCounter} Computer:${computerScoreCounter}`;
        finalScore.classList.add('final_score_on');

        playerScoreCounter = 0;
        playerScore.textContent = 0;
        computerScoreCounter = 0;
        computerScore.textContent = 0;
        tiesScoreCounter = 0;
        tiesScore.textContent = 0;
    } else if (computerScoreCounter == 5) {
        winnerMessage.textContent = 'Computer Wins!';
        winnerMessage.classList.add('winner_message_on');
        finalScore.textContent = `Final Score - Player:${playerScoreCounter} Computer:${computerScoreCounter}`;
        finalScore.classList.add('final_score_on');

        playerScoreCounter = 0;
        playerScore.textContent = 0;
        computerScoreCounter = 0;
        computerScore.textContent = 0;
        tiesScoreCounter = 0;
        tiesScore.textContent = 0;
    }
}
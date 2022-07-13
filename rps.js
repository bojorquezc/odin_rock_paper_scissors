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
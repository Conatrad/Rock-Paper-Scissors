const buttons = document.querySelectorAll('button');
const picks = document.querySelector('.picks');
let win = 0;
let loss = 0;
let games  = 0;

computerSelection = () => {

    result = () => {
       return Math.floor(Math.random() * (4 - 1) + 1);
    }
    
    if(result() == 1){
        return 'rock';
    }
    if(result() == 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        playGame(button.id, computerSelection());

        picks.innerHTML = "Wins: " + win + " Losses: " + loss;

    });
});

playGame = (playerSelection, computerSelection) => {

    const result = document.querySelector('.result');
    
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        result.innerHTML =  "You Lose, Paper Beats Rock.";
        loss++;
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result.innerHTML = "You Lose, Scissors Beats Paper.";
        loss++;
    }
    
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        result.innerHTML = "You Lose, Rock Beats Scissors.";
        loss++;
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        result.innerHTML = "You Win, Rock Beats Scissors!";
        win++;
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        result.innerHTML = "You Win, Paper Beats Rock!";
        win++;
    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result.innerHTML = "You Win, Scissors Beats Paper!";
        win++;
    }

    else {
        result.innerHTML = "It's a Draw";
    }

    games++;
}

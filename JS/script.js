var win;
var loss;


const buttons = document.querySelectorAll('button');

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
    });
});


playGame = (playerSelection, computerSelection) => {

    const result = document.querySelector('.result');
    
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        result.innerHTML = "You Lose, Paper Beats Rock.";
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result.innerHTML = "You Lose, Scissors Beats Paper.";
    }
    
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        result.innerHTML = "You Lose, Rock Beats Scissors.";
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        result.innerHTML = "You Win, Rock Beats Scissors!";
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        result.innerHTML = "You Win, Paper Beats Rock!";
    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result.innerHTML = "You Win, Scissors Beats Paper!";
    }

    else {
        result.innerHTML = "It's a Draw";
    }
}
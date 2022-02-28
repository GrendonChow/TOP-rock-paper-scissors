let playerScore = 0, 
computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        });
});

const results = document.querySelector('.results');
const score = document.querySelector('.score');
score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
function computerPlay(){
    rand =  Math.floor((Math.random() * 3) + 1);
    let result = "";
    switch(rand){
        case 1:
            result = "paper";
            break;
        case 2:
            result = "rock";
            break;
        case 3:
            result = "scissors";
            break;
    }
    return result;
}

function playRound(playerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if(playerSelection === computerSelection)
    {
        result = 'draw';
        signs = playerSelection + ' draws with ' + computerSelection;
    }
    else if(playerSelection === 'paper')
    {
        if(computerSelection === 'rock')
        {
            result = 'win';
            signs = playerSelection + ' beats ' + computerSelection;
        }
        else if(computerSelection === 'scissors')
        {
            result = 'lose';
            signs =  computerSelection + ' beats ' + playerSelection;
        }
    }
    else if(playerSelection === 'rock')
    {
        if(computerSelection === 'paper')
        {
            result = 'lose';
            signs =  computerSelection + ' beats ' + playerSelection;
        }
        else if(computerSelection === 'scissors')
        {
            result = 'win';
            signs = playerSelection + ' beats ' + computerSelection;
        }
    }
    else if(playerSelection === 'scissors')
    {
        if(computerSelection === 'rock')
        {
            result = 'lose';
            signs =  computerSelection + ' beats ' + playerSelection;
        }
        else if(computerSelection === 'paper')
        {
            result = 'win';
            signs = playerSelection + ' beats ' + computerSelection;
        }
    }
    results.textContent = `You ${result}!, ${signs}`;
    return result;
}

function game(){



    


    if(result === 'win')
    {
        playerScore++;
    }
    else if(result == 'lose')
    {
        computerScore++;
    }
    console.log();

    if(playerScore > computerScore)
    {
        console.log('You won the game with computer!');
    }
    else if(playerScore < computerScore)
    {
        console.log('You lost the game with computer!');
    }
    else
    {
        console.log("You drew the game with computer!");
    }
    
}
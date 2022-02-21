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

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

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
    console.log(`You ${result}!, ${signs}`);
    return result;
}

function game(){
    let playerScore = 0, 
        computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Choose paper, rock or scissors: ");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if(result === 'win')
        {
            playerScore++;
        }
        else if(result == 'lose')
        {
            computerScore++;
        }
        console.log(`Score:
        You: ${playerScore}
        Computer: ${computerScore}`);
    }

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
let playerScore = 0, 
computerScore = 0;

const buttons = document.getElementById('playButtons').childNodes;
buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        });
});

const reset = document.querySelector('#reset')
reset.addEventListener('click', ()=> {
    resetGame();
});
const results = document.querySelector('.results');
const score = document.querySelector('.score');

//Randomise computer player
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

//Plays a round of RPS
function playRound(playerSelection)
{
    let result = "";

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

    setScore(result);
}

//Updates the score and determines winner
function setScore(result){
    if(result === 'win')
    {
        playerScore++;
    }
    else if(result == 'lose')
    {
        computerScore++;
    }
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    if(playerScore == 5)
    {
        alert('You won the game with computer!');
    }
    else if(computerScore == 5)
    {
        alert('You lost the game with computer!');
    }
}

//Used to reset game state
function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    results.textContent = '';
}
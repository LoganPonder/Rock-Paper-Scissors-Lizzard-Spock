const computerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let computerScore = 0;
let pScore = document.getElementById('player-score');
let cScore = document.getElementById('computer-score');

const playerWins = {
    rock: ['scissors', 'lizzard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizzard'],
    lizzard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
}

function play(playerChoice) {
    let message = document.getElementById('message');
    let computerChoice = computerChoices[randomChoice(computerChoices)];
    console.log(playerChoice);
    console.log(computerChoice);

    if(playerChoice == computerChoice) {
        message.textContent = 'Tie, Play Again!';
    } else if(playerWins[playerChoice].includes(computerChoice)) {
        playerScore++
        console.log(playerScore)
        message.textContent = `Congrats You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        pScore.innerText = `Player: ${playerScore}`;
    } else {
        computerScore++
        console.log(computerScore);
        message.textContent = `Sorry You Loose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
        cScore.innerText = `Computer: ${computerScore}`;
}
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    pScore.innerText = `Player: ${playerScore}`;
    cScore.innerText = `Computer: ${computerScore}`;
}

function randomChoice(arr) {
  let num = Math.floor(Math.random() * Math.floor(arr.length));
  return num;
}
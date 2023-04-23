const numberOptions = 3;
function getComputerChoice(numberOptions){
  //assigns random value to computer, from the only three options
  let randomNumber = Math.floor(Math.random() * numberOptions);//creates random number, only gives us 3 options (0,1,2)
  //let computerWeapon;

  if (randomNumber === 0) return 'ROCK';
  if (randomNumber === 1) return 'PAPER';
  if (randomNumber === 2) return 'SCISSORS';
}

let playerSelection;
let computerSelection;
/*function chooseWeapon(){
  //assigns weapon for every round to player and computer
  playerSelection = prompt("Choose your weapon: rock, paper or scissors");
  playerSelection = playerSelection.toUpperCase();//makes every combination to a default
  computerSelection = getComputerChoice(numberOptions);
}*/


function playRound(playerSelection, computerSelection){
  //compares the weapons to decide who wins
  if (this.className == 'rock-button' && computerSelection === 'PAPER') return 1;
  if (this.className == 'rock-button' && computerSelection === 'SCISSORS') return 2;
  if (this.className == 'paper-button' && computerSelection === 'ROCK') return 2;
  if (this.className == 'paper-button' && computerSelection === 'SCISSORS') return 1;
  if (this.className == 'scissors-button' && computerSelection === 'ROCK') return 1;
  if (this.className == 'scissors-button' && computerSelection === 'PAPER') return 2;
  if (this.textContent === computerSelection) return 0;

}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let score = 0;

  for (let index = 0; index < 1; index++) {
    chooseWeapon();
    score = playRound(playerSelection,computerSelection);
    if (score == 2) playerScore++;
    if (score == 1) computerScore++;
    console.log(`Player: ${playerScore}.  Computer: ${computerScore}`);
    //just to check if the weapons change
    console.log(`Computer weapon: ${computerSelection}`);
    console.log(`Player weapon: ${playerSelection}`);
  }

  if (playerScore === computerScore) console.log('Nobody wins');
  if (playerScore < computerScore) console.log('Computer wins');
  if (playerScore > computerScore) console.log('Player wins');
}



const btn = document.querySelector('button');
btn.addEventListener("click", clicking);

function clicking(){
  if (this.className == 'scissors-button') alert('scissors');
  if (this.className == 'rock-button') alert('rock');
  if (this.className == 'paper-button') alert('paper');
}
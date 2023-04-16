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
function chooseWeapon(){
  playerSelection = prompt("Choose your weapon: rock, paper or scissors");
  playerSelection = playerSelection.toUpperCase();
  computerSelection = getComputerChoice(numberOptions);

}


function playRound(playerSelection, computerSelection){
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER') return 1;
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') return 2;
  if (playerSelection === 'PAPER' && computerSelection === 'ROCK') return 2;
  if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') return 1;
  if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') return 1;
  if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') return 2;
  if (playerSelection === computerSelection) return 0;

}
//console.log(playRound(playerSelection, computerSelection));

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let score = 0;

  for (let index = 0; index < 5; index++) {
    chooseWeapon();
    score = playRound(playerSelection,computerSelection);
    if (score == 2) playerScore++;
    if (score == 1) computerScore++;
    console.log(`Player: ${playerScore}.  Computer: ${computerScore}`);
    console.log(`Computer weapon: ${computerSelection}`);
    console.log(`Player weapon: ${playerSelection}`);


  }

  if (playerScore === computerScore) console.log('Nobody wins');
  if (playerScore < computerScore) console.log('Computer wins');
  if (playerScore > computerScore) console.log('Player wins');
}
game();
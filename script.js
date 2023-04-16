const numberOptions = 3;
function getComputerChoice(numberOptions){
  //assigns random value to computer, from the only three options
  let randomNumber = Math.floor(Math.random() * numberOptions);//creates random number, only gives us 3 options (0,1,2)
  let computerWeapon;

  if (randomNumber === 0) computerWeapon = 'ROCK';
  if (randomNumber === 1) computerWeapon = 'PAPER';
  if (randomNumber === 2) computerWeapon = 'SCISSORS';

  return computerWeapon;
}

//let playerSelection = toUpperCase(prompt("Choose your weapon: rock, paper or scissors"));
const playerSelection = 'ROCK';
let computerSelection = getComputerChoice(numberOptions);

function playRound(playerSelection, computerSelection){
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER') return `You loose. ${computerSelection} hugs ${playerSelection}`;
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') return `You win. ${playerSelection} obliterates ${computerSelection}`;
  if (playerSelection === 'PAPER' && computerSelection === 'ROCK') return `You win. ${playerSelection} hugs ${computerSelection}`;
  if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') return `You loose. ${computerSelection} slashes ${playerSelection}`;
  if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') return `You loose. ${computerSelection} obliterates ${playerSelection}`;
  if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') return `You win. ${playerSelection} slashes ${computerSelection}`;
  if (playerSelection === computerSelection) return `Tie for now.`;

}
console.log(playRound(playerSelection, computerSelection));

function game(){
  let playerScore = 0;
  let computerScore = 0;

  for (let index = 0; index < 5; index++) {
    
    
  }
}
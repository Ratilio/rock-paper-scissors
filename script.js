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
console.log(getComputerChoice(numberOptions))

let playerSelection = toUpperCase(prompt("Choose your weapon: rock, paper or scissors"));
let computerSelection = getComputerChoice(numberOptions);

function round(){
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER') console.log(`You loose. ${computerSelection} hugs ${playerSelection}`);
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') console.log(`You win. ${computerSelection} obliterates ${playerSelection}`);
  if (playerSelection === 'PAPER' && computerSelection === 'ROCK') console.log(`You win. ${computerSelection} hugs ${playerSelection}`);
  if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') console.log(`You loose. ${computerSelection} slashes ${playerSelection}`);
  if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') console.log(`You loose. ${computerSelection} obliterates ${playerSelection}`);
  if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') console.log(`You win. ${computerSelection} slashes ${playerSelection}`);
  if (playerSelection === computerSelection) console.log(`Tie for now.`);

}
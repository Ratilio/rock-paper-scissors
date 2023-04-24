const numberOptions = 3;

let playerSelection = '';
let playerSelectionInt;
let computerSelection;
let computerSelectionInt;

const buttons = document.querySelectorAll('.btn');


/*function chooseWeaponInt(){*/
  //assigns weapon for every round to player and computer
  buttons.forEach((button) => {button.addEventListener('click', ()=>{
    playerSelection = button.id;
    if (playerSelection == 'rock') playerSelectionInt = 0;
    if (playerSelection == 'paper') playerSelection = 1;
    if (playerSelection == 'scissors') playerSelection = 2;
    })
  })
/*}*/
game();
function chooseWeapon(){
  if (this == 0) return 'rock';
  if (this == 1) return 'paper';
  if (this == 2) return 'scissors'
}

function getComputerChoiceInt(numberOptions){
  //assigns random value to computer, from the only three options
  let randomNumber = Math.floor(Math.random() * numberOptions);//creates random number, only gives us 3 options (0,1,2)
  return randomNumber;
}

function getComputerChoice(getComputerChoiceInt){
  if (computerSelectionInt == 0) return 'rock';
  if (computerSelectionInt == 1) return 'paper';
  if (computerSelectionInt == 2) return 'scissors';
}

function playRound(playerSelection, computerSelection){
  //compares the weapons to decide who wins
  if (playerSelectionInt == 0 && computerSelection === 1) return 1;
  if (playerSelectionInt == 0 && computerSelection === 2) return 2;
  if (playerSelectionInt == 1 && computerSelection === 0) return 2;
  if (playerSelectionInt == 1 && computerSelection === 2) return 1;
  if (playerSelectionInt == 2 && computerSelection === 0) return 1;
  if (playerSelectionInt == 2 && computerSelection === 1) return 2;
  if (playerSelectionInt == computerSelection) return 0;

}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let score = 0;

  for (let index = 0; index < 1; index++) {
    //playerSelectionInt = chooseWeaponInt();
    playerSelection = chooseWeapon(playerSelectionInt);
    computerSelectionInt = getComputerChoiceInt(numberOptions);
    computerSelection = getComputerChoice(computerSelectionInt)
    score = playRound(playerSelectionInt,computerSelection);
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

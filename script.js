const numberOptions = 3;

let playerSelection;
let playerSelectionInt;
let computerSelection;
let computerSelectionInt;

let playerScore = 0;
let computerScore = 0;
let score;

const buttons = document.querySelectorAll('.btn');

//assigns weapon for every round to player and computer
buttons.forEach((button) => {button.addEventListener('click', ()=>{
  playerSelection = button.id;
  if (playerSelection == 'rock') playerSelectionInt = 0;
  if (playerSelection == 'paper') playerSelectionInt = 1;
  if (playerSelection == 'scissors') playerSelectionInt = 2;

  computerSelectionInt = getComputerChoiceInt(numberOptions);
  computerSelection = getComputerChoice(computerSelectionInt)
  game();
  })
})

function getComputerChoiceInt(numberOptions){
  //assigns random value to computer, from the only three options
  return Math.floor(Math.random() * numberOptions);//creates random number, only gives us 3 options (0,1,2)
}

function getComputerChoice(computerSelectionInt){
  if (computerSelectionInt == 0) return 'rock';
  if (computerSelectionInt == 1) return 'paper';
  if (computerSelectionInt == 2) return 'scissors';
}

function playRound(playerSelectionInt, computerSelectionInt){
  //compares the weapons to decide who wins
  if (playerSelectionInt == 0 && computerSelectionInt === 1) return 1;
  if (playerSelectionInt == 0 && computerSelectionInt === 2) return 2;
  if (playerSelectionInt == 1 && computerSelectionInt === 0) return 2;
  if (playerSelectionInt == 1 && computerSelectionInt === 2) return 1;
  if (playerSelectionInt == 2 && computerSelectionInt === 0) return 1;
  if (playerSelectionInt == 2 && computerSelectionInt === 1) return 2;
  if (playerSelectionInt == computerSelectionInt) return 0;

}

function game(){
  

  if (playerScore == 5 || computerScore == 5) return;
  score = playRound(playerSelectionInt,computerSelectionInt);
  if (score == 2) {
    playerScore++
    console.log('player wins')
  };
  if (score == 1) {
    computerScore++
    console.log('computer wins')
  };
  if (score == 0) console.log('tie');

  console.log(`Player: ${playerScore}.  Computer: ${computerScore}`);
  //just to check if the weapons change
  console.log(`Computer weapon: ${computerSelection}`);
  console.log(`Player weapon: ${playerSelection}`);
}

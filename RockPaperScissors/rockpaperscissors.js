console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  return
  (userInput === 'rock' || 
  userInput === 'paper' || 
  userInput === 'scissors' ?
   userInput : console.log('Error'));
}

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
console.log(getComputerChoice())


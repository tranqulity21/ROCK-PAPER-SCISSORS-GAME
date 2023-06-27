// Get elements that we are going to use from the HTML
const rock = document.getElementById('ROCK');
const paper = document.getElementById('PAPER');
const scissors = document.getElementById('SCISSORS');
const choiceDiv = document.querySelector('.choices');
const computerScoreDiv = document.getElementById('computer-score');
const playerScoreDiv = document.getElementById('player-score');

// Initialize the scores
let playerScore = 0;
let computerScore = 0;

// Add event listeners
rock.addEventListener("click", function() {
  selection(rock);
});
paper.addEventListener("click", function() {
  selection(paper);
});
scissors.addEventListener("click", function() {
  selection(scissors);
});

// playerChoice parameter allows you to stimulate your user's input 
function selection(playerChoice) {
  // Declare an array for random selection
  const selection = ["rock", "paper", "scissors"];

  // Generate random choices for our computer player
  const computerChoice = selection[Math.floor(Math.random() * 3)];

  // Compare playerSelection and computerSelection to determine the winner
  // Define a variable to output the win or lose result
  let result;

  // If loop to determine who wins
  if (playerChoice.id === computerChoice.toUpperCase()) {
    result = "It's a tie!";
    playerScore++;
  } 
  else if (
    (playerChoice.id === "ROCK" && computerChoice === "scissors") ||
    (playerChoice.id === "SCISSORS" && computerChoice === "paper") ||
    (playerChoice.id === "PAPER" && computerChoice === "rock")
  ) 
  {
    result = "Lucky Chap!";
    playerScore++;
  } 
  else
  {
    result = "You got defeated by a machine!";
    computerScore++;
  }

  // Display the result
  const resultText = `You chose ${playerChoice.id}, the computer chose ${computerChoice}. ${result}`;
  choiceDiv.textContent = resultText;

  // Update the score display
  computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
  playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
}
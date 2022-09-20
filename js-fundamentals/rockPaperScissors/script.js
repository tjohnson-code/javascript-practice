const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const btnPressed = document.getElementById('playerChoice');
const arrayRPS = ['Rock', 'Paper', 'Scissors'];
let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
let computerOutput = document.getElementById('computerChoice');

rockBtn.addEventListener('click', () => {
    btnPressed.textContent = 'Rock'
    computerOutput.textContent = computerChoice
    console.log(computerChoice);
});
paperBtn.addEventListener('click', () => {
    btnPressed.textContent = 'Paper'
    computerOutput.textContent = computerChoice
    console.log(computerChoice);
});
scissorsBtn.addEventListener('click', () => {
    btnPressed.textContent = 'Scissors'
    computerOutput.textContent = computerChoice
    console.log(computerChoice);
});
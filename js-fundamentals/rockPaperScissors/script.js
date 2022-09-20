gameRPS();

function gameRPS() {
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');
    const btnPressed = document.getElementById('playerChoice');
    const arrayRPS = ['Rock', 'Paper', 'Scissors'];
    const resultRPS = document.getElementById('gameResult');

    rockBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Rock'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Rock') {
            resultRPS.textContent = 'Tie Game!'
        }else if (computerChoice === 'Paper') {
            resultRPS.textContent = 'You Lose!'
        }else {
            resultRPS.textContent = 'You Win!'
        }
    });
    paperBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Paper'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Paper') {
            resultRPS.textContent = 'Tie Game!'
        }else if (computerChoice === 'Scissors') {
            resultRPS.textContent = 'You Lose!'
        }else {
            resultRPS.textContent = 'You Win!'
        }
    });
    scissorsBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Scissors'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Scissors') {
            resultRPS.textContent = 'Tie Game!'
        }else if (computerChoice === 'Rock') {
            resultRPS.textContent = 'You Lose!'
        }else {
            resultRPS.textContent = 'You Win!'
        }
    });
}

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
        computerOutput.textContent = computerChoice
        console.log(computerChoice);
        resultRPS.textContent = 'testing';
    });
    paperBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Paper'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice
        console.log(computerChoice);
        resultRPS.textContent = 'testing2';
    });
    scissorsBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Scissors'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice
        console.log(computerChoice);
        resultRPS.textContent = 'testing3';
    });
}

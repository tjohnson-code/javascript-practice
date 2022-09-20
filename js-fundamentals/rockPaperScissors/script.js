gameRPS();

function gameRPS() {
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');
    const btnPressed = document.getElementById('playerChoice');
    const arrayRPS = ['Rock', 'Paper', 'Scissors'];
    const resultRPS = document.getElementById('gameResult');
    const playerWins = document.getElementById('playerWins');
    const computerWins = document.getElementById('computerWins');
    const ties = document.getElementById('ties');
    let tieCount = 0;
    let winCount = 0;
    let loseCount = 0;

    rockBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Rock'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Rock') {
            tieCount ++;
            resultRPS.textContent = 'Tie Game!'
            ties.textContent = tieCount;
        }else if (computerChoice === 'Paper') {
            loseCount ++;
            resultRPS.textContent = 'You Lose!'
            computerWins.textContent = loseCount;
        }else {
            winCount ++;
            resultRPS.textContent = 'You Win!'
            playerWins.textContent = winCount;
        }
    });
    paperBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Paper'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Paper') {
            tieCount ++;
            resultRPS.textContent = 'Tie Game!'
            ties.textContent = tieCount;
        }else if (computerChoice === 'Scissors') {
            loseCount ++;
            resultRPS.textContent = 'You Lose!'
            computerWins.textContent = loseCount;
        }else {
            winCount ++;
            resultRPS.textContent = 'You Win!'
            playerWins.textContent = winCount;
        }
    });
    scissorsBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Scissors'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Scissors') {
            tieCount ++;
            resultRPS.textContent = 'Tie Game!'
            ties.textContent = tieCount;
        }else if (computerChoice === 'Rock') {
            loseCount ++;
            resultRPS.textContent = 'You Lose!'
            computerWins.textContent = loseCount;
        }else {
            winCount ++;
            resultRPS.textContent = 'You Win!'
            playerWins.textContent = winCount;
        }
    });
}

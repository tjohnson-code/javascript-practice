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
    const totalGames = document.getElementById('totalGames');
    let tieCount = 0;
    let winCount = 0;
    let loseCount = 0;
    let gameCount = 0;

    rockBtn.addEventListener('click', () => {
        btnPressed.textContent = 'Rock'
        let computerChoice = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
        let computerOutput = document.getElementById('computerChoice');
        computerOutput.textContent = computerChoice;
        console.log(computerChoice);
        if (computerChoice === 'Rock') {
            tieCount ++;
            gameCount ++;
            resultRPS.textContent = 'Tie Game!'
            ties.textContent = tieCount;
            totalGames.textContent = gameCount;
        }else if (computerChoice === 'Paper') {
            loseCount ++;
            gameCount ++;
            resultRPS.textContent = 'You Lose!'
            computerWins.textContent = loseCount;
            totalGames.textContent = gameCount;
        }else {
            winCount ++;
            gameCount ++;
            resultRPS.textContent = 'You Win!'
            playerWins.textContent = winCount;
            totalGames.textContent = gameCount;
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
            gameCount ++;
            resultRPS.textContent = 'Tie Game!'
            ties.textContent = tieCount;
            totalGames.textContent = gameCount;
        }else if (computerChoice === 'Scissors') {
            loseCount ++;
            gameCount ++;
            resultRPS.textContent = 'You Lose!'
            computerWins.textContent = loseCount;
            totalGames.textContent = gameCount;
        }else {
            winCount ++;
            gameCount ++;
            resultRPS.textContent = 'You Win!'
            playerWins.textContent = winCount;
            totalGames.textContent = gameCount;
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
            gameCount ++;
            resultRPS.textContent = 'Tie Game!'
            ties.textContent = tieCount;
            totalGames.textContent = gameCount;
        }else if (computerChoice === 'Rock') {
            loseCount ++;
            gameCount ++;
            resultRPS.textContent = 'You Lose!'
            computerWins.textContent = loseCount;
            totalGames.textContent = gameCount;
        }else {
            winCount ++;
            gameCount ++;
            resultRPS.textContent = 'You Win!'
            playerWins.textContent = winCount;
            totalGames.textContent = gameCount;
        }
    });
}

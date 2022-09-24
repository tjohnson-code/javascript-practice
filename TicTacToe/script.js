//const for GRIDSIZE
const GRIDSIZE = 3;

//Global Variables
let xMark = "X";
let oMark = "O";
let lastMark = "";
let boardArray = new Array(GRIDSIZE); //Array with initial size of GRIDSIZE

//Reference Variables for the TicTacToe Board and New Game Button
let tictacBoard = document.getElementById('tictacBoard');
let newGame = document.getElementById('newGame');

//Event Listeners
window.onload = function() {
    initialize();
};

newGame.addEventListener('click', () => {
    initialize();
});

//Game Functions
function initialize() {
    document.body.style.backgroundColor = 'Red';
};
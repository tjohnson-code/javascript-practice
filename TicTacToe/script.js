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

//Initialize game onload
window.onload = function() {
    initialize();
};
//Event Listener for New Game Button
newGame.addEventListener('click', () => {
    initialize();
});

//Game Functions
// ********************************************************************************************************************************
function initialize() {
    //for loop creating array of columns for every row,
    //so we can later reference the tic-tac-toe cell as boardArray[row][column] -- a multi-dimensional array
    for (let i = 0; i < GRIDSIZE; i++) {
        boardArray[i] = new Array(GRIDSIZE)
    };

    //Draw Game Board
    let htmlCode = "";
    let boxNumber = 0;
    let colSize = Math.round(12/GRIDSIZE);
    //for loop for rows
    for (row = 0; row < GRIDSIZE; row++) {
        htmlCode += '<div class = "row h-25">';
        //for loop for columns
        for (col = 0; col < GRIDSIZE; col++) {
            htmlCode += 
            '<div onClick="markIt('+
            row+
            ','+
            col+
            ')" id="'+
            row+
            '_'+
            col+
            '" class="col-'+
            colSize+
            ' h-100 bg-primary bg-gradient border border-info shadow d-flex align-items-center justify-content-center fs-1">'+
            boxNumber+++'('+
            row+
            ','+
            col+
            ')</div>';
        }
        htmlCode += '</div>';
    }
    tictacBoard.innerHTML = htmlCode;

};

// ********************************************************************************************************************************
function markIt(row, col) {
    //if statement to change the marker from "X" to "O"
    if (lastMark == xMark) {
        mark = oMark;
    }else {
        mark = xMark;
    }
    lastMark = mark;

    document.getElementById(row + '_' + col).innerHTML = mark;

    //save each mark in the multi-dimensional array boardArray
    boardArray[row][col] = mark;

    //check if there's a winner
    let winner = checkBoard();
    if (winner != "") {
        alert("Game Over! " + winner);
    };
};

// ********************************************************************************************************************************
function checkBoard() {
    let xTest = true;
    let oTest = true;

    //check columns for X's
    for (col = 0; col < GRIDSIZE; col++) {
        xTest = true;
        for (row = 0; row < GRIDSIZE; row++) {
            if (boardArray[row][col] != xMark) {
                xTest = false;
                break;
            }
        }
        if (xTest === true) {
            return xMark + " is the vertical winner!";
        }
    }
    //check columns for O's
    for (col = 0; col < GRIDSIZE; col++) {
        oTest = true;
        for (row = 0; row < GRIDSIZE; row++) {
            if (boardArray[row][col] != oMark) {
                oTest = false;
                break;
            }
        }
        if (oTest === true) {
            return oMark + " is the vertical winner!";
        }
    }
        
    //check rows for X's
    for (row = 0; row < GRIDSIZE; row++) {
        xTest = true;
        for (col = 0; col < GRIDSIZE; col++) {
            if (boardArray[row][col] != xMark) {
                xTest = false;
                break;
            }
        }
        if (xTest === true) {
            return xMark + " is the horizontal winner!";
        }
    }

    //check rows for O's
    for (row = 0; row < GRIDSIZE; row++) {
        oTest = true;
        for (col = 0; col < GRIDSIZE; col++) {
            if (boardArray[row][col] != oMark) {
                oTest = false;
                break;
            }
        }
        if (oTest === true) {
            return oMark + " is the horizontal winner!";
        }
    }

    //check diagonals for X's upper left to lower right
    xTest = true;
    for (grid = 0; grid < GRIDSIZE; grid++) {
        if (boardArray[grid][grid] != xMark) {
            xTest = false;
            break;
        }
    }
    if (xTest === true) {
        return xMark + " is the diagonal winner!";
        }

    //check diagonals for X's upper right to lower left
    if (boardArray[0][2] == xMark && boardArray[1][1] == xMark && boardArray[2][0] == xMark) {
        return xMark + " is the diagonal winner!";
    }

    //check diagonals for O's upper left to lower right
    oTest = true;
    for (grid = 0; grid < GRIDSIZE; grid++) {
        if (boardArray[grid][grid] != oMark) {
            oTest = false;
            break;
        }
    }
    if (oTest === true) {
        return oMark + " is the diagonal winner!";
    }

    //check diagonals for O's upper right to lower left
    if (boardArray[0][2] == oMark && boardArray[1][1] == oMark && boardArray[2][0] == oMark) {
        return oMark + " is the diagonal winner!";
    }

    return false;
}
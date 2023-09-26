// Game Board module object (IIFE)
const gameBoard = (() => {
    let boardArr = [];

    const createGameBoardArray = () => { // Populate game board with object to store a postion index and a symbol, with a default of 'empty'
        for (let i = 1; i < 10 ; i++) {
            gameBoard.boardArr.push({"index" : i, "symbol" : "empty"})
        }
        return gameBoard.boardArr;
    }
    
    return {boardArr, createGameBoardArray};
})();

const gamecontainer = document.querySelector('#gamecontainer');
const playerPrompt = document.querySelector('#playerPrompt')

const playerFactory = (playerSymbol) => { // Player factory
    return {playerSymbol};
}



const playerMove = (playerSymbol) => {
    createBoardListeners(playerSymbol);
}

// Create players - TODO: Make dynamic and prompt players for names
const player1 = playerFactory('X');
const player2 = playerFactory('O');

const playGame = () => {
    gameBoard.createGameBoardArray();
    createGameBoardView();
    playerPrompt.innerText = ("X's Turn");
    playerMove(player1.playerSymbol);
}



const createGameBoardView = () => {
    let count = 0;
    for (let i = 0; i < 3; i++){
        const boardRow = document.createElement('div');
        boardRow.classList.add('row');
        gamecontainer.appendChild(boardRow);
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', count);
            cell.setAttribute('id', count);
            boardRow.appendChild(cell);
            count ++;
        };
    };
}

const createBoardListeners = (playerSymbol) => { // Create a click event listener on each gameboard space which will trigger the playRound function
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i);
        cell.addEventListener('click', function() {
            playerSymbol = playRound(i, playerSymbol, cell);
        });
    }
}

const playRound = (index, playerSymbol, cell) => {
    if (gameBoard.boardArr[index].symbol == "empty") {
        gameBoard.boardArr[index].symbol = playerSymbol;
        cell.innerText = (gameBoard.boardArr[index].symbol);
        if (checkTie() == true) {
            gameResultsOpen('Tie!');
        }

        if (checkWinner(playerSymbol) == true) {
            gameResultsOpen(`${playerSymbol} Wins!`);
        }
        
        if (playerSymbol == 'X') {
            playerSymbol = 'O';
            playerPrompt.innerText = ("O's Turn");
            return playerSymbol;

        }
        else if (playerSymbol == 'O') {
            playerSymbol = 'X';
            playerPrompt.innerText = ("X's Turn");
            return playerSymbol;
        }
    };
};

const gameResultsOpen = (resultmessage) => { // When a winner or a tie is determined, create a popup window declaring winner and give option to start new game
    document.querySelector('#game-results').style.display = 'flex';
    gamecontainer.classList.add('is-blurred');
    playerPrompt.classList.add('is-blurred');
    const winner = document.getElementById('winner');
    winner.innerText = resultmessage;
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', newGame);
}

const newGame = () => { // Start a new game
    document.getElementById('game-results').style.display = 'none';
    gamecontainer.classList.remove('is-blurred');
    playerPrompt.classList.remove('is-blurred');
    clearBoard();
    playGame();
}

const clearBoard = () => { // Clear the gameboard by resetting the board array and resetting the gameboard view
    gameBoard.boardArr.length = 0;
    while (gamecontainer.firstChild) {
        gamecontainer.removeChild(gamecontainer.firstChild);
    }
}

const checkTie = () => { // Check for a tie by checking for any empty board spaces
    for (let i = 0; i < gameBoard.boardArr.length; i++) {
        if (gameBoard.boardArr[i].symbol == "empty") {
            return false;
        }
    }
    return true;
}

const checkWinner = (playerSymbol) => { // TODO: Fix doodoo logic
    if (gameBoard.boardArr[0].symbol == playerSymbol && gameBoard.boardArr[1].symbol == playerSymbol && gameBoard.boardArr[2].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[3].symbol == playerSymbol && gameBoard.boardArr[4].symbol == playerSymbol && gameBoard.boardArr[5].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[6].symbol == playerSymbol && gameBoard.boardArr[7].symbol == playerSymbol && gameBoard.boardArr[8].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[0].symbol == playerSymbol && gameBoard.boardArr[3].symbol == playerSymbol && gameBoard.boardArr[6].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[1].symbol == playerSymbol && gameBoard.boardArr[4].symbol == playerSymbol && gameBoard.boardArr[7].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[2].symbol == playerSymbol && gameBoard.boardArr[5].symbol == playerSymbol && gameBoard.boardArr[8].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[0].symbol == playerSymbol && gameBoard.boardArr[4].symbol == playerSymbol && gameBoard.boardArr[8].symbol == playerSymbol){
        return true;
    }
    else if (gameBoard.boardArr[2].symbol == playerSymbol && gameBoard.boardArr[4].symbol == playerSymbol && gameBoard.boardArr[6].symbol == playerSymbol){
        return true;
    } else {
        return false;
    }
}

playGame();
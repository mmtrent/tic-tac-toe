// Create game board with 9 spaces
let boardArr = [];
const createGameBoard = () => {
    for (let i = 1; i < 10 ; i++) {
        boardArr.push({"space" : i, "mark" : "empty"})
    }
    return boardArr;
}

const Player = (name, symbol) => { // Player factory
    const getName = name;
    const getSymbol = symbol;
}

// Create player 1
const playerX = Player('Player 1', 'X');
// Create player 2
const playerO = Player('Player 2', 'O');




const playerMove = (symbol, space) => {
    if (boardArr[space].mark == "empty") {
        boardArr[space].mark = symbol;
    }
}

const playGame = () => {
    createGameBoard();
    let winner = 'none';
    while (winner == 'none') {
        // player 1 pick space
        playerPrompt.innerText = ("Player 1 Turn (X)");
        playerMove('X', space);
        // check winner
        // check tie
        // player 2 pick space
        layerPrompt.innerText = ("Player 2 Turn (O)");
        playerMove('O', space);
        //check winner
        // check tie
        // repeat
    }
}

const container = document.querySelector('#container');
const playerPrompt = document.querySelector('#playerPrompt')

const createGameBoardView = () => {
    let count = 1;
    for (let i = 0; i < 3; i++){
        const boardRow = document.createElement('div');
        boardRow.classList.add('row');
        container.appendChild(boardRow);
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', count);
            count ++;
            cell.addEventListener('click', function () {
                // select space
                cell.innerText = ("X"); // test
            });
            boardRow.appendChild(cell);
        };
    };
}

createGameBoardView();
playGame();
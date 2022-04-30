// Create game board with 9 spaces
let boardArr = [];
const createGameBoardArr = () => {
    for (let i = 1; i < 10 ; i++) {
        boardArr.push({"space" : i, "mark" : "empty"})
    }
    return boardArr;
}

const Player = (name, symbol) => { // Player factory
    return {name, symbol};
}

// Create player 1
const player1 = Player('Mark', 'X');
// Create player 2
const player2 = Player('Jenn', 'O');

const playerMove = (space, cell) => {
    if (boardArr[space].mark == "empty") {
        boardArr[space].mark = player1.symbol;
        cell.innerText = (boardArr[space].mark)
        console.log(boardArr);
    }
}

const playGame = () => {
    createGameBoardArr();
    createGameBoardView();
    let winner = 'none';
    while (winner == 'none') {
        // player 1 pick space
        playerPrompt.innerText = (player1.name + "'s Turn (X)");
        createBoardListeners();
        playerMove();
        // check winner
        // check tie
        // player 2 pick space
        playerPrompt.innerText = (player2.name + "'s Turn (O)");
        // playerMove('O', space);
        //check winner
        // check tie
        // repeat
    }
}

const container = document.querySelector('#container');
const playerPrompt = document.querySelector('#playerPrompt')

const createGameBoardView = () => {
    let count = 0;
    for (let i = 0; i < 3; i++){
        const boardRow = document.createElement('div');
        boardRow.classList.add('row');
        container.appendChild(boardRow);
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', count);
            cell.setAttribute('id', count);
            boardRow.appendChild(cell);
            //createBoardListener(cell);
            count ++;
        };
    };
}

//const createBoardListener = (cell) => {
//    cell.addEventListener('click', function () {
///        // select space
//        playerMove(cell.dataset.index, cell);
//    });
//}

const createBoardListeners = () => {
    for (let i = 0; i < 9; i++) {
        if (boardArr[i].mark == "empty") {
            const cell = document.getElementById(i);
            cell.addEventListener('click', function() {
                clickFunction(cell.dataset.index, cell);
            });
        };
    }
}

const clickFunction = (index, cell) => {
    playerMove(index, cell);
    cell.removeEventListener('click', function() {
        clickFunction;
    });
}

playGame();
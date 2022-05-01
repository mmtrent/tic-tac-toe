// Create game board with 9 spaces
let boardArr = [];
const createGameBoardArray = () => {
    for (let i = 1; i < 10 ; i++) {
        boardArr.push({"index" : i, "symbol" : "empty"})
    }
    return boardArr;
}

const playerFactory = (name, playerSymbol) => { // Player factory
    const playerMove = () => {
        //playerPrompt.innerText = (name + "'s Turn (" + playerSymbol + ")");
        createBoardListeners(playerSymbol);
    }
    return {name, playerSymbol, playerMove};
}

// Create player 1
const player1 = playerFactory('Mark', 'X');
// Create player 2
const player2 = playerFactory('Jenn', 'O');

const playGame = () => {
    createGameBoardArray();
    createGameBoardView();
    let winner = 'none';
    playerPrompt.innerText = ("X's Turn");
    // player 1 pick index
    player1.playerMove();
    // check winner
    // check tie
    // player2.playerMove();
    //check winner
    // check tie
    // repeat

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
            count ++;
        };
    };
}

const createBoardListeners = (playerSymbol) => {
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i);
        cell.addEventListener('click', function() {
            if (boardArr[i].symbol == "empty") {
                boardArr[i].symbol = playerSymbol;
                cell.innerText = (boardArr[i].symbol);
                checkWinner(playerSymbol);
                

                if (playerSymbol == 'X') {
                    playerSymbol = 'O';
                    playerPrompt.innerText = ("O's Turn");

                }
                else if (playerSymbol == 'O') {
                    playerSymbol = 'X';
                    playerPrompt.innerText = ("X's Turn");
                }
                


            };
        });
    }
}

const checkWinner = (playerSymbol) => {
    if (boardArr[0].symbol == playerSymbol && boardArr[1].symbol == playerSymbol && boardArr[2].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[3].symbol == playerSymbol && boardArr[4].symbol == playerSymbol && boardArr[5].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[6].symbol == playerSymbol && boardArr[7].symbol == playerSymbol && boardArr[8].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[0].symbol == playerSymbol && boardArr[3].symbol == playerSymbol && boardArr[6].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[1].symbol == playerSymbol && boardArr[4].symbol == playerSymbol && boardArr[7].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[2].symbol == playerSymbol && boardArr[5].symbol == playerSymbol && boardArr[8].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[0].symbol == playerSymbol && boardArr[4].symbol == playerSymbol && boardArr[8].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
    else if (boardArr[2].symbol == playerSymbol && boardArr[4].symbol == playerSymbol && boardArr[6].symbol == playerSymbol){
        console.log(playerSymbol + " Wins");
    }
}

playGame();
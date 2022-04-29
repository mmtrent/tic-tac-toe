// Gameboard module
const gameBoard = () => {
    let boardArr = [
        {
            "space" : 0,
            "mark" : "empty"
        },

    ]
}

// Player factory



/*
TIC TAC TOE Logic:
Create game board - array of 9 [0 - 8] in 3 x 3 grid

Player factory
    Name
    Turn
Create player 1
Create player 2

Game Flow:
    First round
        All nine spaces are marked as inPlay: true
        Player 1 picks
        Selected space is marked as inPlay: false
    Check for winner
    Check for tie
    Player 1 picks


*/

const createGameBoard = () => {
    let boardArr = [];
    for (let i = 0; i < 9 ; i++) {
        boardArr.push({"space" : i, "mark" : "empty"})
    }
}

createGameBoard();
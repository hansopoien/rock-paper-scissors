const makeCaseInsensitive = require("./makeCaseInsensitive");

const validMoves = ["Rock", "Paper", "Scissors"];

function isValidMove(move) {
    return validMoves.some(validMove =>
        makeCaseInsensitive(validMove).test(move)
    );
}

module.exports = { isValidMove, validMoves };

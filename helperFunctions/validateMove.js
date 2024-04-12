const makeCaseInsensitive = require("./makeCaseInsensitive");

const validMoves = ["Rock", "Paper", "Scissors"];

function validateMove(move) {
    return validMoves.some(validMove =>
        makeCaseInsensitive(validMove).test(move)
    );
}

function getValidMoves() {
    return validMoves;
}

module.exports = { validateMove, getValidMoves };

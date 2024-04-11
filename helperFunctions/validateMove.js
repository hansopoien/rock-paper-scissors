const makeCaseInsensitive = require("./makeCaseInsensitive");

const validMoves = ["Rock", "Paper", "Scissors"];

function validateMove(move) {
    if (validMoves.includes(makeCaseInsensitive(move))) {
        return true;
    } else {
        return false;
    }
}

function getValidMoves() {
    return validMoves;
}

module.exports = { validateMove, getValidMoves };

const { isValidMove, validMoves } = require("../helperFunctions/isValidMove");

function handleInvalidMove(req, res, next) {
    const move = isValidMove(req.body.move);
    if (!move) {
        return res.status(400).send({
            error: [
                "Invalid move!",
                "Valid moves are:",
                validMoves[0],
                validMoves[1],
                validMoves[2],
            ],
        });
    }
    next();
}

module.exports = handleInvalidMove;

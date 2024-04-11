function sendSuccsessMoveMessage(res, playerName, playerMove) {
    return res.status(200).send({
        message: `Player: '${playerName}' have successfully registered the move: '${playerMove}'!`,
    });
}

module.exports = sendSuccsessMoveMessage;

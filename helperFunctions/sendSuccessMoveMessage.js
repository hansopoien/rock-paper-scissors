function sendSuccessMoveMessage(res, player) {
    return res.status(200).send({
        message: `Player: '${player.name}' have successfully registered the move: '${player.move}'!`,
    });
}

module.exports = sendSuccessMoveMessage;

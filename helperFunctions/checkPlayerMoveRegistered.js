function checkPlayerMoveRegistered(playerMove, playerName, res) {
    if (playerMove) {
        return res.status(409).send({
            error: `A move by: '${playerName}' has already been registered!`,
        });
    } else {
        return null;
    }
}

module.exports = checkPlayerMoveRegistered;

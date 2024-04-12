function checkPlayerMoveStatus(player, res) {
    if (player.move) {
        return res.status(409).send({
            error: `A move by: '${player.name}' has already been registered!`,
        });
    }
    return null;
}

module.exports = checkPlayerMoveStatus;

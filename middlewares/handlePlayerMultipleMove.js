const findPlayerByName = require("../helperFunctions/findPlayerByName");

function handlePlayerMultipleMove(req, res, next) {
    const player = findPlayerByName(req.body.name);
    if (player.move) {
        return res.status(409).send({
            error: `A move by player: '${player.name}' has already been registered!`,
        });
    }
    next();
}

module.exports = handlePlayerMultipleMove;

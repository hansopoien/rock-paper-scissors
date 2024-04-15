const { players } = require("../models/players");

function handlePlayerMultipleJoins(req, res, next) {
    if (players.length > 1) {
        return res.status(409).send({
            error: [
                "You have already joined the game against player:",
                players[0].name,
                "you player name is:",
                players[1].name,
            ],
        });
    }
    next();
}

module.exports = handlePlayerMultipleJoins;

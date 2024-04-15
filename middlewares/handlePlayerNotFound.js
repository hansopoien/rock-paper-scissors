const findPlayerByName = require("../helperFunctions/findPlayerByName");
const { players } = require("../models/players");

function handlePlayerNotFound(req, res, next) {
    const player = findPlayerByName(req.body.name);
    if (!player) {
        return res.status(400).send({
            error: [
                "Invalid player name!",
                "Valid names are:",
                players[0].name,
                "And",
                players[1].name,
            ],
        });
    }
    next();
}

module.exports = handlePlayerNotFound;

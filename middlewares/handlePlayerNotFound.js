const findPlayerByName = require("../helperFunctions/findPlayerByName");
const { players } = require("../models/players");

function handlePlayerNotFound(req, res, next) {
    const player = findPlayerByName(req.body.name);
    let playerList = [];
    if (!player) {
        players.forEach(player => {
            playerList.push(player.name);
        });
        return res.status(400).send({
            error: ["Invalid player name!", "Valid names are:", ...playerList],
        });
    }
    next();
}

module.exports = handlePlayerNotFound;

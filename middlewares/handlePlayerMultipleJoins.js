const { players } = require("../models/players");
const instructionMessages = require("../helperFunctions/instructionMessages");
const { getMakeMoveUrl } = require("../helperFunctions/url");
const gameID = require("../models/gameIDNumber");

function handlePlayerMultipleJoins(req, res, next) {
    if (players.length > 1) {
        return res.status(409).send({
            error: [
                "You have already joined the game against player:",
                players[0].name,
                "you player name is:",
                players[1].name,
                ...instructionMessages.getInstructionsForConnectedToGame(
                    getMakeMoveUrl(gameID.number)
                ),
            ],
        });
    }
    next();
}

module.exports = handlePlayerMultipleJoins;

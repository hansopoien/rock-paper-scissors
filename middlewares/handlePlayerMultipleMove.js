const findPlayerByName = require("../helperFunctions/findPlayerByName");
const gameID = require("../models/gameIDNumber");
const instructionMessages = require("../helperFunctions/instructionMessages");
const { getStateOfGameUrl } = require("../helperFunctions/url");

function handlePlayerMultipleMove(req, res, next) {
    const player = findPlayerByName(req.body.name);
    if (player.move) {
        return res.status(409).send({
            error: [
                `A move by player: '${player.name}' has already been registered!`,
                ...instructionMessages.getInstructionsForMoveIsMade(
                    getStateOfGameUrl(gameID.number)
                ),
            ],
        });
    }
    next();
}

module.exports = handlePlayerMultipleMove;

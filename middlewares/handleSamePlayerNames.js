const findPlayerByName = require("../helperFunctions/findPlayerByName");

function handleSamePlayerNames(req, res, next) {
    const player = findPlayerByName(req.body.name);
    if (player) {
        return res.status(409).send({
            error: [
                "Player name:",
                player.name,
                `has already been taken by: 'player 1'!`,
                "Please choose a different name.",
            ],
        });
    }
    next();
}

module.exports = handleSamePlayerNames;

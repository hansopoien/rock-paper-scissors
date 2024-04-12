const { gameID } = require("../models/gameIDNumber");
const { players } = require("../models/players");
const checkPlayerMoveStatus = require("./checkPlayerMoveStatus");
const findPlayerByName = require("./findPlayerByName");
const { validateMove, getValidMoves } = require("./validateMove");

function handleID(id, res) {
    const paramGameIDNumber = Number(id);

    if (paramGameIDNumber !== gameID.number) {
        return res.status(400).send({ error: "Invalid game ID." });
    }
    return null;
}

function handleMultipleJoins(res) {
    if (players.length > 1) {
        return res.status(409).send({
            error: [
                "You have already joined the game against player:",
                `${players[0].name}`,
                "you player name is:",
                `${players[players.length - 1].name}`,
            ],
        });
    }
    return null;
}

function handleSamePlayerNames(name, res) {
    const player = findPlayerByName(name);
    if (player) {
        return res.status(409).send({
            error: [
                "Player name:",
                `${player.name}`,
                `has already been taken by: 'player 1'!`,
                "Please choose a different name.",
            ],
        });
    }
    return null;
}

function handleInvalidMove(move, res) {
    if (!validateMove(move)) {
        return res.status(400).send({
            error: [
                "Invalid move!",
                "Valid moves are:",
                getValidMoves()[0],
                getValidMoves()[1],
                getValidMoves()[2],
            ],
        });
    }
    return null;
}

function handlePlayerMove(player, res) {
    if (!player) {
        return res.status(400).send({
            error: [
                "Invalid player name!",
                "Valid names are:",
                `${players[0].name}`,
                "And",
                `${players[players.length - 1].name}`,
            ],
        });
    }
    if (checkPlayerMoveStatus(player, res)) {
        return true;
    }
    return null;
}

module.exports = {
    handleID,
    handleMultipleJoins,
    handleSamePlayerNames,
    handleInvalidMove,
    handlePlayerMove,
};

const { gameID } = require("../models/gameIDNumber");
const { players } = require("../models/players");
const { validMoves } = require("./isValidMove");

function handleNoProvidedName(validateName, defaultName) {
    if (!validateName) {
        return defaultName;
    }
    return validateName;
}

function handleProvidedNameMessage(name) {
    return !name
        ? "Since you have not provided a name, your player name is defaulted to:"
        : "Your player name is:";
}

function handleID(id, res) {
    const paramGameIDNumber = Number(id);

    if (paramGameIDNumber !== gameID.number) {
        return res.status(400).send({ error: "Invalid game ID." });
    }
    return null;
}

function handlePlayerMultipleJoins(res) {
    if (players.length > 1) {
        return res.status(409).send({
            error: [
                "You have already joined the game against player:",
                players[0].name,
                "you player name is:",
                players[players.length - 1].name,
            ],
        });
    }
    return null;
}

function handleSamePlayerNames(player, res) {
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
    return null;
}

function handleInvalidMove(move, res) {
    if (!move) {
        return res.status(400).send({
            error: [
                "Invalid move!",
                "Valid moves are:",
                validMoves[0],
                validMoves[1],
                validMoves[2],
            ],
        });
    }
    return null;
}

function handlePlayerNotFound(player, res) {
    if (!player) {
        return res.status(400).send({
            error: [
                "Invalid player name!",
                "Valid names are:",
                players[0].name,
                "And",
                players[players.length - 1].name,
            ],
        });
    }
}

function handlePlayerMultipleMove(player, res) {
    if (player.move) {
        return res.status(409).send({
            error: `A move by: '${player.name}' has already been registered!`,
        });
    }
    return null;
}

module.exports = {
    handleNoProvidedName,
    handleProvidedNameMessage,
    handleID,
    handlePlayerMultipleJoins,
    handleSamePlayerNames,
    handleInvalidMove,
    handlePlayerNotFound,
    handlePlayerMultipleMove,
};

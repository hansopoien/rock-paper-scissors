const crypto = require("crypto");
const { players, addPlayer } = require("../models/players");
const { gameID, setGameIDNumber } = require("../models/gameIDNumber");
const conditions = require("../helperFunctions/conditions");
const findPlayerByName = require("../helperFunctions/findPlayerByName");
const { isValidMove } = require("../helperFunctions/isValidMove");

function handleNewGame(req, res) {
    try {
        let { name = "" } = req.body;
        name = name.trim();
        players.length = 0;
        addPlayer(conditions.handleNoProvidedName(name, "Player 1"));
        const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
        setGameIDNumber(tenRandomDigits);

        return res.status(201).send({
            message: [
                "A new game have successfully been created!",
                conditions.handleProvidedNameMessage(name),
                players[0].name,
                "here is the game-ID:",
                gameID.number,
            ],
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

function handleConnectToGame(req, res) {
    try {
        let { name = "" } = req.body;
        name = name.trim();

        if (conditions.handleID(req.params.id, res)) return;

        if (conditions.handlePlayerMultipleJoins(res)) return;

        if (conditions.handleSamePlayerNames(findPlayerByName(name), res))
            return;

        addPlayer(conditions.handleNoProvidedName(name, "Player 2"));

        return res.status(200).send({
            message: [
                "You have successfully join the game against player:",
                players[0].name,
                conditions.handleProvidedNameMessage(name),
                players[1].name,
            ],
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

function handleMove(req, res) {
    try {
        let { name = "", move = "" } = req.body;
        name = name.trim();
        move = move.trim();
        const player = findPlayerByName(name);

        if (conditions.handleID(req.params.id, res)) return;

        if (conditions.handlePlayerNotFound(player, res)) return;

        if (conditions.handlePlayerMultipleMove(player, res)) return;

        if (conditions.handleInvalidMove(isValidMove(move), res)) return;

        player.move = move;
        return res.status(200).send({
            message: `Player: '${player.name}' have successfully registered the move: '${player.move}'!`,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

function handleStateOfGame(req, res) {
    try {
        if (players[0].move && players[1].move) {
            return res.status(200).send({ message: "Todo!" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    handleNewGame,
    handleConnectToGame,
    handleMove,
    handleStateOfGame,
};

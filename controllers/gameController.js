const crypto = require("crypto");
const determinePlayerName = require("../helperFunctions/determinePlayerName");
const getPlayerNameMessagePrefix = require("../helperFunctions/getPlayerNameMessagePrefix");
const { players, addPlayer } = require("../models/players");
const { gameID, setGameIDNumber } = require("../models/gameIDNumber");
const conditions = require("../helperFunctions/conditions");
const findPlayerByName = require("../helperFunctions/findPlayerByName");

function handleNewGame(req, res) {
    try {
        let { name = "" } = req.body;
        name = name.trim();
        players.length = 0;
        addPlayer(determinePlayerName(name, "Player 1"));
        const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
        setGameIDNumber(tenRandomDigits);

        return res.status(201).send({
            message: [
                "A new game have successfully been created!",
                getPlayerNameMessagePrefix(name),
                `${players[0].name}`,
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

        if (conditions.handleMultipleJoins(res)) return;

        if (conditions.handleSamePlayerNames(name, res)) return;

        addPlayer(determinePlayerName(name, "Player 2"));

        return res.status(200).send({
            message: [
                "You have successfully join the game against player:",
                `${players[0].name}`,
                getPlayerNameMessagePrefix(name),
                `${players[players.length - 1].name}`,
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

        if (conditions.handleID(req.params.id, res)) return;

        if (conditions.handleInvalidMove(move, res)) return;

        const player = findPlayerByName(name);
        if (conditions.handlePlayerMove(player, res)) return;

        player.move = move;
        return res.status(200).send({
            message: `Player: '${player.name}' have successfully registered the move: '${player.move}'!`,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = { handleNewGame, handleConnectToGame, handleMove };

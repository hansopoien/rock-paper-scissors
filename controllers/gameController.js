const crypto = require("crypto");
const { players, addPlayer } = require("../models/players");
const { gameID, setGameIDNumber } = require("../models/gameIDNumber");
const findPlayerByName = require("../helperFunctions/findPlayerByName");
const handleNoProvidedName = require("../helperFunctions/handleNoProvidedName");
const handleProvidedNameMessage = require("../helperFunctions/handleProvidedNameMessage");

function handleNewGame(req, res) {
    try {
        let { name = "" } = req.body;
        players.length = 0;
        addPlayer(handleNoProvidedName(name, "Player 1"));
        const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
        setGameIDNumber(tenRandomDigits);

        return res.status(201).send({
            message: [
                "A new game have successfully been created!",
                handleProvidedNameMessage(name),
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

        addPlayer(handleNoProvidedName(name, "Player 2"));

        return res.status(200).send({
            message: [
                "You have successfully join the game against player:",
                players[0].name,
                handleProvidedNameMessage(name),
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
        const player = findPlayerByName(name);

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

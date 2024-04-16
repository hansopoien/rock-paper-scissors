const crypto = require("crypto");
const { players, addPlayer } = require("../models/players");
const gameID = require("../models/gameIDNumber");
const findPlayerByName = require("../helperFunctions/findPlayerByName");
const handleNoProvidedName = require("../helperFunctions/handleNoProvidedName");
const handleProvidedNameMessage = require("../helperFunctions/handleProvidedNameMessage");
const handlePlayerStateMessage = require("../helperFunctions/handlePlayerStateMessage");
const determineWinner = require("../helperFunctions/determineWinner");
const { fullBaseAddress, url } = require("../helperFunctions/url");
const instructionMessages = require("../helperFunctions/instructionMessages");

function handleNewGame(req, res) {
    try {
        let { name = "" } = req.body;
        players.length = 0;
        addPlayer(handleNoProvidedName(name, "Player 1"));
        const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
        gameID.number = tenRandomDigits;
        return res.status(201).send({
            message: [
                "A new game have successfully been created!",
                handleProvidedNameMessage(name),
                players[0].name,
                ...instructionMessages.newGameCreatedInstructions(),
                ...instructionMessages.connectedToGameInstructions(),
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
                ...instructionMessages.connectedToGameInstructions(),
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
        const isMovesRegistered = players[0]?.move && players[1]?.move;
        let messageAndWinner;

        if (isMovesRegistered) {
            messageAndWinner = determineWinner(players[0], players[1]);
        }

        res.status(200).send({
            message: [
                `---STATE OF GAME---`,
                `Game-ID: ${gameID.number || "Not registered"}`,
                "---",
                ...handlePlayerStateMessage(players[0], 1, isMovesRegistered),
                "---",
                ...handlePlayerStateMessage(players[1], 2, isMovesRegistered),
                "---",
                `${
                    isMovesRegistered
                        ? `${messageAndWinner.message}${messageAndWinner.winner}`
                        : "Game result will be here"
                }`,
            ],
        });
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

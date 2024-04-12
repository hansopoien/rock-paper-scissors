const crypto = require("crypto");
const determinePlayerName = require("../helperFunctions/determinePlayerName");
const getPlayerNameMessagePrefix = require("../helperFunctions/getPlayerNameMessagePrefix");
const {
    validateMove,
    getValidMoves,
} = require("../helperFunctions/validateMove");
const makeCaseInsensitive = require("../helperFunctions/makeCaseInsensitive");
const checkPlayerMoveRegistered = require("../helperFunctions/checkPlayerMoveRegistered");
const sendSuccsessMoveMessage = require("../helperFunctions/sendSuccessMoveMessage");
const { players, addPlayer } = require("../models/players");
const { gameID, setGameIDNumber } = require("../models/gameIDNumber");
const conditions = require("../helperFunctions/conditions");

async function handleNewGame(req, res) {
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

async function handleConnectToGame(req, res) {
    try {
        let { name = "" } = req.body;
        name = name.trim();
        const handleParamIdRes = conditions.handleParamID(req.params.id, res);
        if (handleParamIdRes) return;

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

        if (makeCaseInsensitive(name).test(players[0].name)) {
            return res.status(409).send({
                error: [
                    "Player name:",
                    `${players[0].name}`,
                    "Have already been taken by: 'player 1'!",
                    "Please choose a different name.",
                ],
            });
        }

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

async function handleMove(req, res) {
    try {
        let { name = "", move = "" } = req.body;
        const handleParamIdRes = conditions.handleParamID(req.params.id, res);
        if (handleParamIdRes) return;

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

        if (makeCaseInsensitive(players[0].name).test(name)) {
            const moveResponse = checkPlayerMoveRegistered(
                players[0].move,
                name,
                res
            );
            if (moveResponse) return;
            players[0].move = move;
            return sendSuccsessMoveMessage(res, name, players[0].move);
        } else if (
            makeCaseInsensitive(players[players.length - 1].name).test(name)
        ) {
            const moveResponse = checkPlayerMoveRegistered(
                players[players.length - 1].move,
                name,
                res
            );
            if (moveResponse) return;
            players[players.length - 1].move = move;
            return sendSuccsessMoveMessage(
                res,
                name,
                players[players.length - 1].move
            );
        } else {
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
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = { handleNewGame, handleConnectToGame, handleMove };

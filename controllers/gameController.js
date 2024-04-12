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

let gameIDNumber;

let playerOneName;
let playerTwoName;

let playerOneMove;
let playerTwoMove;

async function handleNewGame(req, res) {
    try {
        let { name = "" } = req.body;
        name = name.trim();
        players.length = 0;
        addPlayer(determinePlayerName(name, "Player 1"));
        // playerOneName = determinePlayerName(name, "Player 1");
        const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
        gameIDNumber = tenRandomDigits;
        // playerOneMove = "";
        // playerTwoMove = "";

        return res.status(201).send({
            message: [
                "A new game have successfully been created!",
                getPlayerNameMessagePrefix(name),
                `${players[0].name}`,
                "here is the game-ID:",
                gameIDNumber,
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
        const paramGameIDNumber = Number(req.params.id);

        if (paramGameIDNumber !== gameIDNumber) {
            return res.status(400).send({ error: "Invalid game ID." });
        }

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

        if (
            makeCaseInsensitive(players[players.length - 1].name).test(
                players[0].name
            )
        ) {
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
        const paramGameIDNumber = Number(req.params.id);

        if (paramGameIDNumber !== gameIDNumber) {
            return res.status(400).send({ error: "Invalid game ID." });
        }

        if (
            !makeCaseInsensitive(playerOneName).test(name) &&
            !makeCaseInsensitive(playerTwoName).test(name)
        ) {
            return res.status(400).send({
                error: [
                    "Invalid player name!",
                    "Valid names are:",
                    `${playerOneName}`,
                    "And",
                    `${playerTwoName}`,
                ],
            });
        }

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

        if (makeCaseInsensitive(playerOneName).test(name)) {
            const moveResponse = checkPlayerMoveRegistered(
                playerOneMove,
                name,
                res
            );
            if (moveResponse) return;
            playerOneMove = move;
            return sendSuccsessMoveMessage(res, name, playerOneMove);
        } else if (makeCaseInsensitive(playerTwoName).test(name)) {
            const moveResponse = checkPlayerMoveRegistered(
                playerTwoMove,
                name,
                res
            );
            if (moveResponse) return;
            playerTwoMove = move;
            return sendSuccsessMoveMessage(res, name, playerTwoMove);
        } else {
            return res.status(500).send({ error: "Something went wrong." });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = { handleNewGame, handleConnectToGame, handleMove };

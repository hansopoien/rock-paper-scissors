const crypto = require("crypto");
const determinePlayerName = require("../helperFunctions/determinePlayerName");
const getPlayerNameMessagePrefix = require("../helperFunctions/getPlayerNameMessagePrefix");

let gameIDNumber;

let playerOneName;
let playerTwoName;

let playerOneMove;
let playerTwoMove;

async function handleNewGame(req, res) {
    let { name = "" } = req.body;
    playerOneName = determinePlayerName(name, "player 1");
    const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
    gameIDNumber = tenRandomDigits;

    try {
        res.status(201).send({
            message: [
                "A new game have successfully been created!",
                getPlayerNameMessagePrefix(name),
                `${playerOneName}`,
                "here is the game-ID:",
                gameIDNumber,
            ],
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

async function handleConnectToGame(req, res) {
    let { name = "" } = req.body;
    playerTwoName = determinePlayerName(name, "player 2");
    const paramGameIDNumber = Number(req.params.id);
    try {
        if (paramGameIDNumber === gameIDNumber) {
            res.status(200).send({
                message: [
                    "You have successfully join the game against player:",
                    `${playerOneName}`,
                    getPlayerNameMessagePrefix(name),
                    `${playerTwoName}`,
                ],
            });
        } else {
            res.status(400).send({ error: "Invalid game ID." });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

async function handleMove() {
    let { name = "", move = "" } = req.body;
    try {
        if (!validateName(name)) {
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
        }

        if (name === playerOneName) {
            playerOneMove = move;
        } else if (name === playerTwoName) {
            playerTwoMove = move;
        }
    } catch (error) {}
}

module.exports = { handleNewGame, handleConnectToGame };

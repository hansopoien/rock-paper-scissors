const crypto = require("crypto");
const determinePlayerName = require("../functions/determinePlayerName");
const determinePlayerNameMessage = require("../functions/determinePlayerNameMessage");

let gameIDNumber;
let playerOneName;
let playerTwoName;
async function handleNewGame(req, res) {
    let { name = "" } = req.body;
    playerOneName = determinePlayerName(name, "player 1");
    const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
    gameIDNumber = tenRandomDigits;

    try {
        res.status(201).send({
            message: [
                "A new game have successfully been created!",
                determinePlayerNameMessage(name),
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
                    determinePlayerNameMessage(name),
                    `${playerTwoName}`,
                ],
            });
        } else {
            res.status(400).send({ message: "No match with the provided ID." });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = { handleNewGame, handleConnectToGame };

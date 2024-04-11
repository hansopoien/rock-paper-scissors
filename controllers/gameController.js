const crypto = require("crypto");
async function handleNewGame(req, res) {
    let { name = "player 1" } = req.body;
    const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
    const gameIDNumber = tenRandomDigits;

    try {
        res.status(201).send({
            message: [
                "A new game have successfully been created!",
                "Your player name is:",
                `${name}`,
                "here is the game-ID:",
                gameIDNumber,
            ],
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = { handleNewGame };

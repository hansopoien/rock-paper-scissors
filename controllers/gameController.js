async function handleNewGame(req, res) {
    let { name = "player 1" } = req.body;

    try {
        res.status(201).send({
            message: `A new game have successfully been created! Your player name is: '${name}'`,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = { handleNewGame };

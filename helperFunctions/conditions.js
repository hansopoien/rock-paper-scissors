const { gameID } = require("../models/gameIDNumber");

function handleParamID(id, res) {
    const paramGameIDNumber = Number(id);

    if (paramGameIDNumber !== gameID.number) {
        return res.status(400).send({ error: "Invalid game ID." });
    } else {
        return null;
    }
}

module.exports = { handleParamID };

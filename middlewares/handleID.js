const { gameID } = require("../models/gameIDNumber");

function handleID(req, res, next) {
    const paramGameIDNumber = Number(req.params.id);

    if (paramGameIDNumber !== gameID.number) {
        return res.status(400).send({ error: "Invalid game ID." });
    }
    next();
}

module.exports = handleID;

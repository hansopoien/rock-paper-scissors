function formatMove(req, res, next) {
    const { move } = req.body;
    if (typeof move === "string" && move.trim().length > 0) {
        req.body.move =
            move.trim()[0].toUpperCase() +
            move.trim().substring(1).toLowerCase();
    }
    next();
}

module.exports = formatMove;

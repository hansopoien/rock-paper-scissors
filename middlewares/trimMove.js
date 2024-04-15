function trimMove(req, res, next) {
    if (req.body.move && typeof req.body.move === "string") {
        req.body.move = req.body.move.trim();
    }
    next();
}

module.exports = trimMove;

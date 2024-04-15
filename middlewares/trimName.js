function trimName(req, res, next) {
    if (req.body.name && typeof req.body.name === "string") {
        req.body.name = req.body.name.trim();
    }
    next();
}

module.exports = trimName;

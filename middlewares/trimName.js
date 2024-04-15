function trimName(req, res, next) {
    const { name } = req.body;
    if (name && typeof name === "string") {
        req.body.name = name.trim();
    }
    next();
}

module.exports = trimName;

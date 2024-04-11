function makeCaseInsensitive(value) {
    return new RegExp(`^${value}$`, "i");
}

module.exports = makeCaseInsensitive;

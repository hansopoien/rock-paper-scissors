function getPlayerNameMessagePrefix(name) {
    return !name
        ? "Since you have not provided a name, your player name is defaulted to:"
        : "Your player name is:";
}

module.exports = getPlayerNameMessagePrefix;

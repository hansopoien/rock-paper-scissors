function determinePlayerName(validateName, defaultName) {
    if (!validateName) {
        return defaultName;
    }
    return validateName;
}

module.exports = determinePlayerName;

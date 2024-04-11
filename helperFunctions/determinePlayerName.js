function determinePlayerName(validateName, defaultName) {
    if (!validateName) {
        return defaultName;
    } else {
        return validateName;
    }
}

module.exports = determinePlayerName;

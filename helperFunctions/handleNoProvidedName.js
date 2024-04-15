function handleNoProvidedName(validateName, defaultName) {
    if (!validateName) {
        return defaultName;
    }
    return validateName;
}

module.exports = handleNoProvidedName;

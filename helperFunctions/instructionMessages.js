function getInstructionsForApplicationIsRunning(address) {
    return [
        "Hello!",
        "Make a POST request that contains a json-body",
        "with the following key-value pair:",
        "name: <your player name>",
        "to the following address to start a new game!:",
        address,
    ];
}

function getInstructionsForNewGameCreated(address) {
    return [
        "Now tell 'Player 2' to make a POST request",
        "that contains a json-body with the following key-value pair:",
        "name: <Player 2 name>",
        "to the following address:",
        address,
    ];
}

function getInstructionsForConnectedToGame(address) {
    return [
        "You can make your 'Rock, Paper, Scissors' move",
        "by making a PUT request,",
        "that contains a json-body with the following two key-value pairs:",
        "name: <your player name>",
        "move: <your move>",
        "to the following address:",
        address,
    ];
}

function getInstructionsForMoveIsMade(address) {
    return [
        "Check the state of the game",
        "by making a GET request",
        "to the following address, if the opponent isn't finished",
        "you can make the request several times:",
        address,
    ];
}

module.exports = {
    getInstructionsForApplicationIsRunning,
    getInstructionsForNewGameCreated,
    getInstructionsForConnectedToGame,
    getInstructionsForMoveIsMade,
};

const gameID = require("../models/gameIDNumber");
const { fullBaseAddress, url } = require("./url");

function applicationIsRunningInstructions() {
    return [
        "Hello!",
        "Make a POST request that contains a json-body",
        "with the following key-value pair:",
        "name: <your player name>",
        "to the following address to start a new game!:",
        `${fullBaseAddress.address + url.path}`,
    ];
}

function newGameCreatedInstructions() {
    return [
        "Now tell 'Player 2' to make a POST request",
        "that contains a json-body with the following key-value pair:",
        "name: <Player 2 name>",
        "to the following address:",
        `${fullBaseAddress.address}${url.path}/${gameID.number}/${url.join}`,
    ];
}

function connectedToGameInstructions() {
    return [
        "You can make your 'Rock, paper, scissors' move",
        "by making a PUT request,",
        "that contains a json-body with the following two key-value pairs:",
        "name: <your player name>",
        "move: <your move>",
        "to the following address:",
        `${fullBaseAddress.address}${url.path}/${gameID.number}/${url.move}`,
    ];
}

module.exports = {
    applicationIsRunningInstructions,
    newGameCreatedInstructions,
    connectedToGameInstructions,
};

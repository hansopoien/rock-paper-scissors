const { players } = require("../models/players");
const makeCaseInsensitive = require("./makeCaseInsensitive");

function findPlayerByName(name) {
    return players.find(player => makeCaseInsensitive(player.name).test(name));
}

module.exports = findPlayerByName;

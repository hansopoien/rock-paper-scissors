let players = [];

function addPlayer(name) {
    players.push({ name: name, move: "" });
}

module.exports = { players, addPlayer };

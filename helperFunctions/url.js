const url = {
    server: "http://localhost",
    port: process.env.PORT || 3000,
    path: "/api/games",
    join: "join",
    move: "move",
};

const fullBaseAddress = {
    address: `${url.server}:${url.port}`,
};

function getNewGameUrl() {
    return `${fullBaseAddress.address}${url.path}`;
}

function getJoinGameUrl(id) {
    return `${fullBaseAddress.address}${url.path}/${id}/${url.join}`;
}

function getMakeMoveUrl(id) {
    return `${fullBaseAddress.address}${url.path}/${id}/${url.move}`;
}

function getStateOfGameUrl(id) {
    return `${fullBaseAddress.address}${url.path}/${id}`;
}

module.exports = {
    url,
    fullBaseAddress,
    getNewGameUrl,
    getJoinGameUrl,
    getMakeMoveUrl,
    getStateOfGameUrl,
};

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

module.exports = { url, fullBaseAddress };

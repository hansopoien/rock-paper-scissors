const url = {
    server: "http://localhost",
    port: process.env.PORT || 3000,
    path: "/api/games",
    join: "join",
    move: "move",
};

const fullAddress = {
    address: `${url.server}:${url.port}${url.path}`,
};

module.exports = { url, fullAddress };

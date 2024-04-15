const localtunnel = require("localtunnel");
const { fullAddress } = require("./url");

let tunnelUrl;

async function setupLocaltunnel(port) {
    try {
        const tunnel = await localtunnel({
            port,
        });
        console.log(`Tunnel established at: ${tunnel.url}`);
        tunnelUrl = tunnel.url;
        return tunnel.url;
    } catch (error) {
        console.error(`Error establishing tunnel: ${error.message}`);
    }
}

module.exports = { setupLocaltunnel, tunnelUrl };

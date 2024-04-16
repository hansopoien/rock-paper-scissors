const localtunnel = require("localtunnel");

async function setupLocaltunnel(port) {
    try {
        const tunnel = await localtunnel({
            port,
        });
        return tunnel.url;
    } catch (error) {
        console.error(`Error establishing tunnel: ${error.message}`);
    }
}

module.exports = setupLocaltunnel;

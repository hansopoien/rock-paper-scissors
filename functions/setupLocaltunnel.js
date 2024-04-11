const localtunnel = require("localtunnel");

async function setupLocaltunnel(port) {
    try {
        const tunnel = await localtunnel({
            port,
            subdomain: "testing88031533523831",
        });
        console.log(`Tunnel established at: ${tunnel.url}`);
    } catch (error) {
        console.error(`Error establishing tunnel: ${error.message}`);
    }
}

module.exports = setupLocaltunnel;

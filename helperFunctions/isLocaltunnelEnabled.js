const isLocaltunnelEnabled = process.argv.includes("--use-localtunnel");

module.exports = isLocaltunnelEnabled;

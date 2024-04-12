const conditionValue = process.argv.includes("--use-localtunnel");

function isLocaltunnelEnabled() {
    return conditionValue;
}

module.exports = isLocaltunnelEnabled;

const express = require("express");
const app = express();
const gameRouter = require("./routes/gameRouter.js");
const isLocaltunnelEnabled = require("./helperFunctions/isLocaltunnelEnabled.js");
const { url, fullAddress } = require("./helperFunctions/url.js");

app.use(express.json());
app.use(url.path, gameRouter);

app.get("/", function (req, res) {
    res.send("Backend is running");
});

app.listen(url.port, function () {
    console.log(`Server is running on port ${url.port}`);
    if (isLocaltunnelEnabled) {
        const {
            setupLocaltunnel,
            tunnelUrl,
        } = require("./helperFunctions/setupLocaltunnel.js");
        fullAddress.address = setupLocaltunnel(url.port);
        // fullAddress.address = tunnelUrl;
    }
    console.log(fullAddress.address);
});

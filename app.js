const express = require("express");
const app = express();
const gameRouter = require("./routes/gameRouter.js");
const isLocaltunnelEnabled = require("./helperFunctions/isLocaltunnelEnabled.js");
const {
    url,
    fullBaseAddress,
    getNewGameUrl,
} = require("./helperFunctions/url.js");
const instructionMessages = require("./helperFunctions/instructionMessages.js");

app.use(express.json());
app.use(url.path, gameRouter);

app.get("/", function (req, res) {
    res.send("Backend is running");
});

app.listen(url.port, async function () {
    console.log(`Server is running on port ${url.port}`);
    if (isLocaltunnelEnabled) {
        const setupLocaltunnel = require("./helperFunctions/setupLocaltunnel.js");
        fullBaseAddress.address = await setupLocaltunnel(url.port);
    }
    console.log(
        instructionMessages
            .getInstructionsForApplicationIsRunning(getNewGameUrl())
            .join("\n")
    );
});

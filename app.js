const express = require("express");
const setupTunnel = require("./functions/setupLocaltunnel");

const app = express();
const port = 3000;
const gameRouter = require("./routes/gameRouter.js");

app.use(express.json());
app.use("/api/games", gameRouter);

app.get("/", function (req, res) {
    res.send("Backend is running");
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
    setupTunnel(port);
});

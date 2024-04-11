const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const gameRouter = require("./routes/gameRouter.js");
const useLocaltunnel = process.argv.includes("--use-localtunnel");

app.use(express.json());
app.use("/api/games", gameRouter);

app.get("/", function (req, res) {
    res.send("Backend is running");
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
    if (useLocaltunnel) {
        const setupLocaltunnel = require("./helperFunctions/setupLocaltunnel.js");
        setupLocaltunnel(port);
    }
    console.log(useLocaltunnel); // remove this line
});

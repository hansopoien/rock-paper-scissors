const express = require("express");
const localtunnel = require("localtunnel");
const router = express.Router();

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

async function setupTunnel() {
    try {
        const tunnel = await localtunnel({
            port,
            subdomain: "testing8803158230",
        });
        console.log(`Tunnel established at: ${tunnel.url}`);
    } catch (error) {
        console.error(`Error establishing tunnel: ${error.message}`);
    }
}
let counter = 0;

router.post("/", async (req, res) => {
    counter++;
    res.status(200).send({ message: `Hello there! ${counter}` });
});

app.get("/", function (req, res) {
    res.send("Backend is running");
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
    setupTunnel();
});

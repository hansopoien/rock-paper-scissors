const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.post("/", gameController.handleNewGame);

module.exports = router;

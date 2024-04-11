const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.post("/", gameController.handleNewGame);
router.post("/:id/join", gameController.handleConnectToGame);
router.put("/:id/move", gameController.handleMove);

module.exports = router;

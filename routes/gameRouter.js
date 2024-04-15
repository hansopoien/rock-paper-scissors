const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");
const handleID = require("../middlewares/handleID");
const handlePlayerMultipleJoins = require("../middlewares/handlePlayerMultipleJoins");
const handleSamePlayerNames = require("../middlewares/handleSamePlayerNames");
const handleInvalidMove = require("../middlewares/handleInvalidMove");
const handlePlayerNotFound = require("../middlewares/handlePlayerNotFound");
const handlePlayerMultipleMove = require("../middlewares/handlePlayerMultipleMove");
const trimName = require("../middlewares/trimName");
const formatMove = require("../middlewares/formatMove");

router.post("/", trimName, gameController.handleNewGame);

router.post(
    "/:id/join",
    handleID,
    handlePlayerMultipleJoins,
    trimName,
    handleSamePlayerNames,
    gameController.handleConnectToGame
);
router.put(
    "/:id/move",
    handleID,
    trimName,
    handlePlayerNotFound,
    handlePlayerMultipleMove,
    formatMove,
    handleInvalidMove,
    gameController.handleMove
);

router.get("/:id", handleID, gameController.handleStateOfGame);

module.exports = router;

function handlePlayerStateMessage(player, playerNumber, isMovesRegistered) {
    const playerName = player?.name ?? "Not registered";
    const playerMove = player?.move ? "Registered" : "Not registered";

    return [
        `Player ${playerNumber} name: ${playerName}`,
        `Player ${playerNumber} move: ${
            isMovesRegistered ? player.move : playerMove
        }`,
    ];
}

module.exports = handlePlayerStateMessage;

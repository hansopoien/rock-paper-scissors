function determineWinner(playerOne, playerTwo) {
    const rules = {
        Rock: { winsAgainst: "Scissors", losesAgainst: "Paper" },
        Paper: { winsAgainst: "Rock", losesAgainst: "Scissors" },
        Scissors: { winsAgainst: "Paper", losesAgainst: "Rock" },
    };

    if (playerOne.move === playerTwo.move) {
        return { message: "It's a tie!", winner: "" };
    }

    if (rules[playerOne.move].winsAgainst === playerTwo.move) {
        return { message: "The winner is player: ", winner: playerOne.name };
    }

    if (rules[playerOne.move].losesAgainst === playerTwo.move) {
        return { message: "The winner is player: ", winner: playerTwo.name };
    }

    return { message: "Invalid moves", winner: "" };
}

module.exports = determineWinner;

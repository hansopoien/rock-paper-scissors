# **[Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors)**

## Backend application:

This application is used to make API requests that simulates the classic game **[Rock Paper Scissors.](https://en.wikipedia.org/wiki/Rock_paper_scissors)**

A API testing software, for example: **[Postman](https://www.postman.com/)** is used as a user interface.

## Public or Local:

The application can be used either public over internet or local on the same computer based of the choice made by the user who launching the application.

There is no web host service involved, so the public option is possible using a package named: **[Localtunnel](https://theboroer.github.io/localtunnel-www/)** which allows the computer launching the application (in public mode) to share a web service from the local machine.

## Installation:

### Requirements:

-   **[Node.js](https://nodejs.org/en)** (Author is using version 20.9.0)
-   **[NPM](https://www.npmjs.com/)** (node package manager) (Author is using version 10.1.0)
-   **[CLI](https://en.wikipedia.org/wiki/Command-line_interface)** (Command Line Interface) (Author is using Windows Command Prompt on Windows 10 x64)

### Installation process:

-   If not already done, unzip the folder named: **rock-paper-scissors** and save it in an location of preferred choice.
-   Use a CLI and navigate to the unzipped folder.
-   Below is how the directory should look like:

```cmd
2024-04-17  13:16    <DIR>          .
2024-04-17  13:16    <DIR>          ..
2024-04-10  19:29                13 .gitignore
2024-04-16  15:48               976 app.js
2024-04-17  13:16    <DIR>          controllers
2024-04-17  13:16    <DIR>          helperFunctions
2024-04-17  13:16    <DIR>          middlewares
2024-04-17  13:16    <DIR>          models
2024-04-11  10:42            58 613 package-lock.json
2024-04-11  14:35               516 package.json
2024-04-10  19:38                 0 readme.md
2024-04-17  13:16    <DIR>          routes
               5 File(s)         60 118 bytes
               7 Dir(s)  25 882 996 736 bytes free
```

-   run the following command:

```cmd
npm install
```

### The following packages will be installed:

-   **[Nodemon](https://nodemon.io/)** (Automatically restarts the server if developer save any changes in source code)
-   **[Express.js](https://expressjs.com/)** (Simplifies the process of building server-side applications)
-   **[Localtunnel](https://theboroer.github.io/localtunnel-www/)** (Allows to share a web service from local machine)

**---Ignore the following warning message---**

Due to the installation of package: **[Localtunnel](https://theboroer.github.io/localtunnel-www/)** the following warning text may appear:

```cmd
2 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

**---Do not run the following command---**

By experience the following command will make the application to not work when using the public mode.

```cmd
npm audit fix --force
```

The package: **[Localtunnel](https://theboroer.github.io/localtunnel-www/)** will only be used in early production before the application is hosted by, for example a web host service!  
In this case the package: **[Localtunnel](https://theboroer.github.io/localtunnel-www/)** will no longer be needed an can be removed!

## Running the application:

### Requirements:

-   API testing software (Author is using **[Postman](https://www.postman.com/)**)

### Launching process:

-   After the installation phase, use the CLI from the same directory as when making the installation command!
-   The following two commands is for running the application either locally or public:

Below command runs the application locally, without **[Localtunnel](https://theboroer.github.io/localtunnel-www/)**:

```cmd
npm run local
```

Below command runs the application publicly, with the use of **[Localtunnel](https://theboroer.github.io/localtunnel-www/)**. **(In some isolated cases when the application has been running for a while, the application has crashed due to firewall restrictions with **[Localtunnel](https://theboroer.github.io/localtunnel-www/). But usually the application works just fine when using [Localtunnel](https://theboroer.github.io/localtunnel-www/))\*\*  
If the application crashes, a restart of the server can be made by pressing "CTRL + C" then press the character: "y" then run the command: "npm run public" again.

```cmd
npm run public
```

-   If you choose to run the command "npm run public" in the CLI, a message that looks like the following will appear:

```cmd
Hello!
Make a POST request that contains a json-body
with the following key-value pair:
name: <your player name>
to the following address to start a new game!:
https://itchy-apples-say.loca.lt/api/games
```

-   Now you choose your prefered API testing software.
-   You need to set the request to:  
    **POST**
-   The format must be in:  
    **JSON**
-   The body should contain a key-value pair like the following example for player 1 name:

```json
{
    "name": "Millennium Falcon"
}
```

-   By sending the above request, with the address for this example:  
    https://itchy-apples-say.loca.lt/api/games  
    The following should be returned:

```json
{
    "message": [
        "A new game have successfully been created!",
        "Your player name is:",
        "Millennium Falcon",
        "Now tell 'Player 2' to make a POST request",
        "that contains a json-body with the following key-value pair:",
        "name: <Player 2 name>",
        "to the following address:",
        "https://itchy-apples-say.loca.lt/api/games/3613614387/join",
        "You can make your 'Rock, Paper, Scissors' move",
        "by making a PUT request,",
        "that contains a json-body with the following two key-value pairs:",
        "name: <your player name>",
        "move: <your move>",
        "to the following address:",
        "https://itchy-apples-say.loca.lt/api/games/3613614387/move"
    ]
}
```

-   Now tell player 2 to choose a prefered API testing software.
-   Player 2 needs to set the request to:  
    **POST**
-   The format must be in:  
    **JSON**
-   The body should contain a key-value pair like the following example for player 2 name:

```json
{
    "name": "X-wing Starfighter"
}
```

-   And send the included address that ends with: "/join" for the above example the following address, to player 2:  
    https://itchy-apples-say.loca.lt/api/games/3613614387/join

-   By sending the above request, the following should be returned to player 2:

```json
{
    "message": [
        "You have successfully join the game against player:",
        "Millennium Falcon",
        "Your player name is:",
        "X-wing Starfighter",
        "You can make your 'Rock, Paper, Scissors' move",
        "by making a PUT request,",
        "that contains a json-body with the following two key-value pairs:",
        "name: <your player name>",
        "move: <your move>",
        "to the following address:",
        "https://itchy-apples-say.loca.lt/api/games/3613614387/move"
    ]
}
```

-   Now both players must choose a move to make.  
    Player 1 and player 2 needs to set the request to:  
    **PUT**
-   The format must be in:  
    **JSON**
-   The body must contain two key-value pairs like the following example for player 1 name and move:

```json
{
    "name": "Millennium Falcon",
    "move": "rock"
}
```

-   The request must be send to the included address, for the above example the following address:  
    https://itchy-apples-say.loca.lt/api/games/3613614387/move
-   By sending the above request, the following should be returned, for this example to player 1:

```json
{
    "message": [
        "Player: 'Millennium Falcon' have successfully registered the move: 'Rock'!",
        "Check the state of the game",
        "by making a GET request",
        "to the following address, if the opponent isn't finished",
        "you can make the request several times:",
        "https://itchy-apples-say.loca.lt/api/games/3613614387"
    ]
}
```

-   Now when either player 1 or player 2 have made a move,  
    the player needs to set the request to:  
    **GET**
-   The request address must be as included in the above message:  
    https://itchy-apples-say.loca.lt/api/games/3613614387

-   Now for the following example, player 1 may need to make several requests if the opponent (player 2) isn't finished:

```json
{
    "message": [
        "---STATE OF GAME---",
        "Game-ID: 3613614387",
        "---",
        "Player 1 name: Millennium Falcon",
        "Player 1 move: Registered",
        "---",
        "Player 2 name: X-wing Starfighter",
        "Player 2 move: Not registered",
        "---",
        "Game result will be here"
    ]
}
```

-   When player two also have made a successful move request, the following message may look like this:

```json
{
    "message": [
        "---STATE OF GAME---",
        "Game-ID: 3613614387",
        "---",
        "Player 1 name: Millennium Falcon",
        "Player 1 move: Rock",
        "---",
        "Player 2 name: X-wing Starfighter",
        "Player 2 move: Scissors",
        "---",
        "The winner is player: Millennium Falcon"
    ]
}
```

The game is finished!

The same game process is for running the command: "npm run local"  
But the server address will then be: "http://localhost:3000"

## Language and Platforms

The application is written in the code language: "Javascript", using **[Node.js](https://nodejs.org/en)** and **[Express.js](https://expressjs.com/)**.  
This choice is made because of the author's own preferences and coding skills.

## Code structure

The folder structure is following the MVC (Model-View-Controller) pattern, it's a popular pattern that is recognized by developers when navigating through the folder structure.

### gameRouter.js

The following is the **gameRouter.js** file that is located in the **routes** folder.  
Here are the four routes defined for creating a new game, joining an existing game, making a move, and retrieving the current state of the game.

Each route specifies a corresponding middleware or middlewares to handle tasks such as input validation, player authentication, and formatting data before passing control to the appropriate controller function.  
This structure organize and separate the code, making it easier to understand and modify.

```js
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
```

### gameController.js

The following is the **gameController.js** file that is located in the **controllers** folder.  
Here is an example of the first controller function named: **handleNewGame**.  
It resets an array of **players** which acts as a model, stored in **models** folder. The reset of the **players** array enables a new game to take place, without restarting the server.

A player gets added, a helperFunction named: **handleNoProvidedName** from the **helperFunctions** folder is used for setting a default name to: "Player 1" if no name is provided by user. (The helper functions are also used in the middlewares and in app.js)

Ten randomized digits are created and gets stored in the **gameID** object which act as a second model, stored in **models** folder.

The **return** contains helper functions, and functions from the **instructionMessages** file which is located in the **helperFunctions** folder.

```js
function handleNewGame(req, res) {
    try {
        let { name = "" } = req.body;

        players.length = 0;
        addPlayer(handleNoProvidedName(name, "Player 1"));

        const tenRandomDigits = crypto.randomBytes(4).readUInt32LE(0);
        gameID.number = tenRandomDigits;

        return res.status(201).send({
            message: [
                "A new game have successfully been created!",
                handleProvidedNameMessage(name),
                players[0].name,
                ...instructionMessages.getInstructionsForNewGameCreated(
                    getJoinGameUrl(gameID.number)
                ),
                ...instructionMessages.getInstructionsForConnectedToGame(
                    getMakeMoveUrl(gameID.number)
                ),
            ],
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
```

### app.js

The following is the starting file: **app.js** that triggers first when the application starts, it has a **if-statement** **isLocaltunnelEnabled** that depends on if the user run the application with "npm run local" or "npm run public".

```js
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
```

## Author's thoughts

I realize that this application may be more than what is expected, due to the imagination that the application was going to work between two computers. When I got feedback from my contact at Cygni that this application only need to work locally, i already have implemented the structure

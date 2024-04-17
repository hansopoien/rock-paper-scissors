# **[Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors)**

## Backend application:

This application is used to make API requests that simulates the classic game **[Rock Paper Scissors.](https://en.wikipedia.org/wiki/Rock_paper_scissors)**

A API testing software, for example: **[Postman](https://www.postman.com/)** is used as a user interface.

## Public or Local:

The application can be used either public over internet or local on the same computer based of the choice made by the user who launching the application.

There is no web host service involved, so the public option is possible using a package named: **[Localtunnel](https://theboroer.github.io/localtunnel-www/)** which allows the computer launching the application (in public mode) to share a web service from the local machine.

## Installation:

### Requirements:

-   **Node.js** (Author is using version 20.9.0)
-   **NPM** (node package manager) (Author is using version 10.1.0)
-   **CLI** (Command Line Interface) (Author is using Windows Command Prompt on Windows 10 x64)

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
-   **[Express](https://expressjs.com/)** (Simplifies the process of building server-side applications)
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

Below command runs the application publicly, with the use of **[Localtunnel](https://theboroer.github.io/localtunnel-www/)**. **(In some isolated cases when the application has been running for a while, the application has crashed due to firewall restrictions. But usually the application works just fine when using [Localtunnel](https://theboroer.github.io/localtunnel-www/))**

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
-   The format must be in in:  
    **JSON**
-   The body should contain a key-value pair like the following example for player 1 name:

```json
{
    "name": "Millennium Falcon"
}
```

-   By sending the above request, the following should be returned:

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
-   The format must be in in:  
    **JSON**
-   The body should contain a key-value pair like the following example for player 2 name:

```json
{
    "name": "X-wing Starfighter"
}
```

-   And Send the included address that ends with: "/join" for this example the following address, to player 2:  
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

-   Now both players must choose a move to make

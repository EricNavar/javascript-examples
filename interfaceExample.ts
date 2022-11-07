interface Game {
    name: string;
}

function printGame(game: Game) {
    console.log(game.name);
}

// myObj is not of type Game, but kind of.
// Game is an interface, and interfaces can't be instantiated.
// printGame() only checks that myObj has the same properties that Game has.

const myObj = {
    name: "Wizard 101",
    releaseDate: 2008
};
printGame(myObj);

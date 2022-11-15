interface VideoGame {
    name: string;
}

function printGame(game: VideoGame) {
    console.log(game.name);
}

// myObj is not of type VideoGame, but kind of.
// VideoGame is an interface, and interfaces can't be instantiated.
// printGame() only checks that myObj has the same properties that Game has.

const wizard101: VideoGame = {
    name: "Wizard 101",
};

const legoStarWars: VideoGame = {
    name: "Lego Star Wars",
    releaseDate: 2005
};

printGame(wizard101);
printGame(legoStarWars);

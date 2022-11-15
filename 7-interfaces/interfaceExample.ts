interface VideoGame {
    genre: string;
}

function printGame(game: VideoGame) {
    console.log(game.genre);
}

// VideoGame is an interface, and interfaces can't be instantiated.
// printGame() only checks that myObj has the same properties that Game has.

const wizard101: VideoGame = {
    genre: "Fantasy",
};

const legoStarWars: VideoGame = {
    genre: "Action",
    releaseDate: 2005
};

printGame(wizard101);
printGame(legoStarWars);


// ts-node 7-interfaces/interfaceExample.ts

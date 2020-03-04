// need to write a game class with a function to start the game, to restart (play again), collision
// need to check how to write whose turn it is, need to check how to check who wins and how it restarts

class Game {
    constructor() {
        this.dog = new Dog();
        this.cat = new Cat();
        this.turn = "Dog";
        this.timeBegin;
        this.timeStop;
    }
    start() {
        game.initMouseEvents();
        setInterval(() => {
            renderEverything();
        }, 50)
    }
    initMouseEvents() {
        let $game = document.querySelector("#game");
        $game.addEventListener("mousedown", () => {
            this.timeBegin = new Date();
        })

        $game.addEventListener("mouseup", () => {
            this.timeStop = new Date();
            this.switchTurn();
        })
    }
    switchTurn() {
        let self = this;
        if (this.turn === "Dog") {
            this.dog.throw(this.timeBegin, this.timeStop)
            this.turn = "Cat";
        } else if (this.turn === "Cat") {
            this.cat.throw(this.timeBegin, this.timeStop)
            this.turn = "Dog";
        }
    }
}

let game = new Game()
game.start();


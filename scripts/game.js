// need to write a game class with a function to start the game, to restart (play again), collision
// need to check how to write whose turn it is, need to check how to check who wins and how it restarts
var collisions = document.getElementById("healthbar");

class Game {
    constructor(){
        this.dog = new Dog();
        this.cat = new Cat();
        this.turn = "Dog";
        this.timeBegin;
        this.timeStop;

    }
    start(){
        game.initMouseEvents();
        setInterval(()=> {
            renderEverything();
        }, 50)
        // setInterval(() => {
        //     this.detectCollision();
        //  }, 100);
    }
    initMouseEvents(){
        let $game = document.querySelector("#game");
        $game.addEventListener("mousedown", ()=>{
            this.timeBegin = new Date();
        })

        $game.addEventListener("mouseup", ()=>{
            this.timeStop = new Date();
            this.switchTurn();  
        })  
    } 
    switchTurn(){
        let self = this;
        if (this.turn === "Dog"){
            this.dog.throw(this.timeBegin, this.timeStop)
            this.turn = "Cat";
        } else if (this.turn === "Cat"){
            this.cat.throw(this.timeBegin, this.timeStop)
            this.turn = "Dog";
        }
    }

}

let game = new Game()
game.start();

//isCollide($player, $obstacle) {
//     const $playerRect = $player.getBoundingClientRect();
//     const $obstacleRect = $obstacle.getBoundingClientRect();
//     return !(
//         $playerRect.top + $playerRect.height < $obstacleRect.top ||
//         $playerRect.top > $obstacleRect.top + $obstacleRect.height ||
//         $playerRect.left + $playerRect.width < $obstacleRect.left ||
//         $playerRect.left > $obstacleRect.left + $obstacleRect.width
//     );
// }
// // this function is checking if both rectangular dom elements are overlapping
// function isCollide($element1, $element2) {
//     var a = {
//         y: 100 - $element1.offsetTop - $element1.height, 
//         x: $element1.offsetLeft,
//         height: $element1.height,
//         width: $element1.width
//     }
//     var b = {
//         y: 100 - $element2.offsetTop - $element2.height, 
//         x: $element2.offsetLeft,
//         height: $element2.height,
//         width: $element2.width
//     }    return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }


// //collision MDN for two rectangles
// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.y + rect1.height > rect2.y) {
//     // collision detected!
// }


const modalCatWin = document.getElementById("modal-catwin");
const modalDogWin = document.getElementById("modal-dogwin");
const modalStart = document.getElementById("modal-start");
$startbutton = document.getElementById("startbutton");
const restartDogWin = document.getElementById("restart1");
const restartCatWin = document.getElementById("restart2");

class Game {
    constructor() {
        this.dog = new Dog();
        this.cat = new Cat();
        this.fishBone = new FishBone();
        this.bone = new Bone();
        this.turn = "Dog";
        this.timeBegin;
        this.timeStop;
    }
    start() {
        this.initMouseEvents();
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
    collideDog() {
       this.dog.health--;
        collisionsDog.innerText = `Health Dog = ${this.dog.health}`;
        document.querySelector("#boingsound").play();   
    }
    collideCat(){
        this.cat.health--;
        collisionsCat.innerText = `Health Cat =  ${this.cat.health}`;
        document.querySelector("#boingsound").play();
    }
    gameOver(){
        if (this.dog.health <= 0){        
                modalCatWin.style.display = "block";
        } else if (this.cat.health <= 0){
                modalDogWin.style.display = "block";
        }
    }
    restartGame(){
        if (modalCatWin.style.display === "block" || modalDogWin.style.display === "block"){     
            this.cat.health = 20;
            this.dog.health = 20;
            collisionsDog.innerText = `Health Dog = ${this.dog.health}`;
            collisionsCat.innerText = `Health Cat =  ${this.cat.health}`;
        }
    }
}

let game = new Game()

$startbutton.addEventListener("click", function(){
    modalStart.style.display = "none";
    game.start();
})

restartDogWin.addEventListener("click", function(){
    game.restartGame();
    modalDogWin.style.display = "none";

})

restartCatWin.addEventListener("click", function(){
    game.restartGame();
    modalCatWin.style.display = "none";
})
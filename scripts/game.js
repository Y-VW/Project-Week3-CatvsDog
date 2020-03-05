const modalCatWin = document.getElementById("modal-catwin");
const modalDogWin = document.getElementById("modal-dogwin");
const modalStart = document.getElementById("modal-start");
$startbutton = document.getElementById("startbutton");

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
}

let game = new Game()

$startbutton.addEventListener("click", function(){
    modalStart.style.display = "none";
    game.start();
})



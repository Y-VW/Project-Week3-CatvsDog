const modalCatWin = document.getElementById("modal-catwin");
const modalDogWin = document.getElementById("modal-dogwin");
const modalStart = document.getElementById("modal-start");
$startbutton = document.getElementById("startbutton");
const restartDogWin = document.getElementById("restart1");
const restartCatWin = document.getElementById("restart2");
let $progressBarCat = document.getElementById("progress-bar1");
let $progressBarDog = document.getElementById("progress-bar2");


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
       let widthProgress = Math.floor((this.dog.health / 20)*100);
       $progressBarDog.innerHTML = `${widthProgress}%`;
       $progressBarDog.style = `width:${widthProgress}%`;
        document.querySelector("#boingsound").play();   
    }
    collideCat(){
        this.cat.health--;
        let widthProgress = Math.floor((this.dog.health / 20)*100);
        $progressBarCat.innerHTML = `${widthProgress}%`;
        $progressBarCat.style = `width:${widthProgress}%`;
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
            let widthProgress = (this.dog.health / 20)*100;
            $progressBarCat.innerHTML = `${widthProgress}%`;
            $progressBarCat.style = `width:${widthProgress}%`;
            $progressBarDog.innerHTML = `${widthProgress}%`;
            $progressBarDog.style = `width:${widthProgress}%`;
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
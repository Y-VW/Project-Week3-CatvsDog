let $dog = document.createElement("div")
let $cat = document.createElement("div")
var collisions = document.getElementById("healthbar");

class Character {
    constructor() {
        this.throw = this.throw.bind(this);
    }
    throw(startClick, stopClick) {
        this.trash.timeBegin = startClick;
        this.trash.timeStop = stopClick;
    }
}

class Cat extends Character {
    constructor() {
        super()
        this.trash = new FishBone();
        this.health = 20;
    }
    createCat() {
        $cat.setAttribute("class", "cat");
        $game.appendChild($cat);
    }
    collide() {
        this.health--;
        collisions.innerText = "Health Cat = " + this.health;
    }
}

class Dog extends Character {
    constructor() {
        super();
        this.trash = new Bone();
        this.health = 20;
    }
    createDog() {
        $dog.setAttribute("class", "dog");
        $game.appendChild($dog)
    }
    collide() {
        this.health--;
        collisions.innerText = "Health Dog = " + this.health;
    }
}








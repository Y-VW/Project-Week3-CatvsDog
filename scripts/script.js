let $dog = document.createElement("div")
let $cat = document.createElement("div")
var collisionsDog = document.getElementById("health-dog");
var collisionsCat = document.getElementById("health-cat");

class Character {
    constructor() {
        this.throw = this.throw.bind(this);
        this.health = 20;
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
    }
    createCat() {
        $cat.setAttribute("class", "cat");
        $game.appendChild($cat);
    }
}

class Dog extends Character {
    constructor() {
        super();
        this.trash = new Bone();
    }
    createDog() {   
        $dog.setAttribute("class", "dog");
        $game.appendChild($dog)
    }
}








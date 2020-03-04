let $dog = document.createElement("div")
$dog.setAttribute("class", "dog");
let $cat = document.createElement("div")

class Character {
    constructor(){
        this.throw = this.throw.bind(this);
    }
    throw(startClick, stopClick){
        this.trash.timeBegin = startClick;
        this.trash.timeStop = stopClick;
    }
}

class Cat extends Character {
    constructor(){
        super()
        this.trash = new FishBone();
    }
    createCat(){
        $cat.setAttribute("class", "cat");
        $game.appendChild($cat);
    }

}

class Dog extends Character{
    constructor(){
        super();
        this.trash = new Bone();
    }
   createDog(){
   
    $game.appendChild($dog)
   }

}








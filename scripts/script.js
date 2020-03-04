$dog = document.createElement("div")
$cat = document.createElement("div")

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
    $dog.setAttribute("class", "dog");
    $game.appendChild($dog)
   }
}




//     getRandomNumber(min, max) {                                              //not sure if this is necessary
//         return Math.random() * (max - min) + min;
//       }
//     moveTrash(){
//         let a = this.getRandomNumber(-0.08, -0.15)
//         let timePassedInseconds  = (new Date() - now)/100;
//         trashCat.x = timePassedInseconds;
//         trashCat.y = a *Math.pow(trashCat.x,2) + 1.6*trashCat.x -1;
//    }
//    throwParabole(){
//        let $trashCat = document.querySelector("#trash-cat"); 
//        $trashCat.style.left = `${trashCat.x * 2.5}%`;
//        $trashCat.style.bottom = `${trashCat.y * 10}%`;
//}






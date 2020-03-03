let $game = document.querySelector("#game")
let $bone = document.createElement("img");
let $fishbone = document.createElement("img");

class Trash {
    constructor(direction){
        this.position = {
            x: 0,
            y: 0
        }
        this.timeBegin = new Date();
        this.timeStop = new Date();
    }    
    clickTimeMouse(){
        let timeClicked = this.timeStop - this.timeBegin;
        return timeClicked;
    }
    timeClickedToCoefficient(timeClicked){
        console.log(this.clickTimeMouse())
    }
    getTrashPosition(){
         let timePassedInseconds  = (new Date() - this.timeStop)/100;
         this.position.x = timePassedInseconds;
         this.position.y = -0.09 *Math.pow(this.position.x,2) + 1.6*this.position.x -1; //the -0.09 needs to be replaced by a variable that calculates the ClickTimeMouse into a number (between -0.09 and -0.11)
        return {
            x: this.position.x,
            y: this.position.y  
        }
    }

}

class Bone extends Trash {
    createTrash(){
        $bone.setAttribute("id", "bone");
        $bone.setAttribute("src", "./images/bone.png")
        $game.appendChild($bone);
    }
    renderTrash(){   
        $bone.style.right = `${this.getTrashPosition().x * 2.5}%`;
        $bone.style.bottom = `${this.getTrashPosition().y * 10}%`;
    }
}


class FishBone extends Trash {
    createTrash(){
        $fishbone.setAttribute("id", "fishbone");
        $fishbone.setAttribute("src", "./images/fishbone.png")
        $game.appendChild($fishbone);
    }
    renderTrash(){
        // let $fishbone = document.querySelector("#fishbone"); 
        $fishbone.style.left = `${this.getTrashPosition().x * 2.5}%`;
        $fishbone.style.bottom = `${this.getTrashPosition().y * 10}%`;
    }
}
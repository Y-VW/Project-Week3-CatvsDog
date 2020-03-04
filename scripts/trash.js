// for clickTimeMouse I need to create a var now that takes the time when mouse is down and a var later that takes the time when mouse is up and substract those two. 
// i then need to calculate with that var so that it is the right input for the parabola. (need to convert it in a number between -0.08 and -0.15) it is factor a

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
        return timeClicked/100;
    }
    timeClickedToCoefficient(){
        if(this.clickTimeMouse() > 20) {
            return -0.03;
        } else {
            return -this.clickTimeMouse() * 0.08;
        }
    }
    getTrashPosition(){
        if(this.timeStop - this.timeBegin <= 5 ) return {x:0,y:0};
        let timePassedInseconds  = (new Date() - this.timeStop)/100;
        this.position.x = timePassedInseconds;
        this.position.y = this.timeClickedToCoefficient() *Math.pow(this.position.x,2) + 1.6*this.position.x -0.7; //the -0.09 needs to be replaced by a variable that calculates the ClickTimeMouse into a number (between -0.09 and -0.11)
       return {
           x: this.position.x,
           y: this.position.y  
       }
    }
}

class Bone extends Trash {
    constructor(){
        super()
        this.renderTrash = this.renderTrash.bind(this);
    }
    createTrash(){
        $bone.setAttribute("id", "bone");
        $bone.setAttribute("src", "./images/bone.png")
        $game.appendChild($bone);
    }
    renderTrash(){  
        this.createTrash(); 
        $bone.style.right = `${this.getTrashPosition().x * 3.5}%`;
        $bone.style.bottom = `${this.getTrashPosition().y * 8}%`;
        if ((this.position.x < 0 || this.position.x > 100) || this.position.y < -30){
            this.position.x = 0;
            this.position.y = 0;
            $bone.style.right = 0;
            $bone.style.bottom = 0;
        }
    }      
}


class FishBone extends Trash {
    constructor(){
        super()
        this.renderTrash = this.renderTrash.bind(this);
    }
    createTrash(){
        $fishbone.setAttribute("id", "fishbone");
        $fishbone.setAttribute("src", "./images/fishbone.png")
        $game.appendChild($fishbone);
    }
    renderTrash(){
        this.createTrash();
        $fishbone.style.left = `${this.getTrashPosition().x * 3.5}%`;
        $fishbone.style.bottom = `${this.getTrashPosition().y * 8}%`;
        if ((this.position.x < 0 || this.position.x > 100) || this.position.y < -30){
           this.position.x = 0;
           this.position.y = 0;
           $fishbone.style.left = 0;
           $fishbone.style.bottom = 0;
        }   
    }
}
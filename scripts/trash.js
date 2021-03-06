let $game = document.querySelector("#game")
let $bone = document.createElement("img");
let $fishbone = document.createElement("img");
$fishbone.setAttribute("id", "fishbone");
$bone.setAttribute("id", "bone");

class Trash {
    constructor(direction) {
        this.position = {
            x: 0,
            y: 0
        }
        this.timeBegin = new Date();
        this.timeStop = new Date();
    }
    clickTimeMouse() {
        let timeClicked = this.timeStop - this.timeBegin;
        return timeClicked / 100;
    }
    timeClickedToCoefficient() {
        if (this.clickTimeMouse() > 20) {
            return -0.03;
        } else {
            return -this.clickTimeMouse() * 0.08;
        }
    }
    getTrashPosition() {
        if (this.timeStop - this.timeBegin <= 5) return { x: 0, y: 0 };
        let timePassedInseconds = (new Date() - this.timeStop) / 100;
        this.position.x = timePassedInseconds;
        this.position.y = this.timeClickedToCoefficient() * Math.pow(this.position.x, 2) + 1.6 * this.position.x - 1;
        return {
            x: this.position.x,
            y: this.position.y
        }
    }
}

class Bone extends Trash {
    constructor() {
        super()
        this.$cat = $cat;
    }
    createTrash() {
        $bone.setAttribute("src", "../images/bone.png")
        $game.appendChild($bone);
    }
    renderTrash() {
        this.createTrash();
        $bone.style.right = `${this.getTrashPosition().x * 3.5}%`;
        $bone.style.bottom = `${this.getTrashPosition().y * 8}%`;
        if ((this.position.x < 0 || this.position.x > 100) || this.position.y < -10) {
            this.position.x = 0;
            this.position.y = 0;
            $bone.style.right = 0;
            $bone.style.bottom = 0;
        }
    }
    detectCollision() {
        let $boneRect = $bone.getBoundingClientRect();
        let $catRect = this.$cat.getBoundingClientRect();
        if (!(
            $catRect.top + $catRect.height < $boneRect.top ||
            $catRect.top > $boneRect.top + $boneRect.height ||
            $catRect.left + $catRect.width < $boneRect.left ||
            $catRect.left > $boneRect.left + $boneRect.width
        )) {
            game.collideCat();
        }
    }
}

class FishBone extends Trash {
    constructor() {
        super()
        this.renderTrash = this.renderTrash.bind(this);
        this.$dog = $dog
    }
    createTrash() {

        $fishbone.setAttribute("src", "../images/fishbone.png")
        $game.appendChild($fishbone);
    }
    renderTrash() {
        this.createTrash();
        $fishbone.style.left = `${this.getTrashPosition().x * 3.5}%`;
        $fishbone.style.bottom = `${this.getTrashPosition().y * 8}%`;
        if ((this.position.x < 0 || this.position.x > 100) || this.position.y < -10) {
            this.position.x = 0;
            this.position.y = 0;
            $fishbone.style.left = 0;
            $fishbone.style.bottom = 0;
        }
    }
    detectCollision() {
        let $fishboneRect = $fishbone.getBoundingClientRect();
        let $dogRect = this.$dog.getBoundingClientRect();
        if (!(
            $dogRect.top + $dogRect.height < $fishboneRect.top ||
            $dogRect.top > $fishboneRect.top + $fishboneRect.height ||
            $dogRect.left + $dogRect.width < $fishboneRect.left ||
            $dogRect.left > $fishboneRect.left + $fishboneRect.width
        )) {
            game.collideDog();
        }
    }
}


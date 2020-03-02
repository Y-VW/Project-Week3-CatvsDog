//Need to write a class for: 1) trash item 2) cat (computer) 3) dog (player) 4) The fence over which it needs to be thrown
// in the trash class there needs to be a function for: 1) out of bounds 2) click time 3) parabole throw 
// in the cat class there needs to be a function for: 1) health 2) random generated throw 3)square
// in the dog class there needs to be a function for: 1) health 2) throw  3) square

// if parabola throw is not possible, then use the mouseclick time as to how much it will move forward (straight line)

// Parabole
// Quadratic formula y = ax2 + b
// If a is a positive number (a > 0), the formula opens upward (dalparabool)
// If a is a negative number (a < 0), the formula opens downward (bergparabool).
// I need the formula to open downward (berparabool)

// for clickTimeMouse I need to create a var now that takes the time when mouse is down and a var later that takes the time when mouse is up and substract those two. 
// i then need to calculate with that var so that it is the right input for the parabola. (need to put it in as a negative number! between -1 and 0) it is factor a
// b should be taken in as a factor with the canvas size 

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight -300 ;

var c = canvas.getContext("2d");

var trashCat = {
    positionStartX = cat.X + 20,
    positionStartY = cat.y + 20,
    trashCatInProgress = false,
    draw(trashCat){
        var img = new Image ();
        img.onload = function (){
            ctx.drawImage(img, trashCat.x, trashCat.y, 50, 50)
        }
        // img.src = "";
    },
    updateCanvas(){
        ctx.clearRect(); //4 variables need to go inside
        draw(trashCat);
    },
    clickTimeMouse(){
        let timeBegin = 0;
        document.addEventListener("mousedown", function(){
            timeBegin = new Date();
            return timeBegin;
        })
        let timeStop = 0;
        document.addEventListener("mouseup", function(){
            timeStop = new Date();
            return timeStop;
        })
        let timeClicked = timeStop - timeBegin;
        return timeClicked;
    },
    throwParabole(){

    }
}


var trashDog  = {
    positionStartX = dog.X + 20,
    positionStartY = dog.y + 20,
    trashDogInProgrses = false,
    draw(trashDog){
        var img = new Image ();
        img.onload = function (){
            ctx.drawImage(img, trashDog.x, trashDog.y, 50, 50)
        }
        // img.src = "";
    },
    updateCanvas(){
        ctx.clearRect(); //4 variables need to go inside
        draw(trashDog);
    },
    clickTimeMouse(){
        let timeBegin = 0;
        document.addEventListener("mousedown", function(){
            timeBegin = new Date();
            return timeBegin;
        })
        let timeStop = 0;
        document.addEventListener("mouseup", function(){
            timeStop = new Date();
            return timeStop;
        })
        let timeClicked = timeStop - timeBegin;
        return timeClicked;
    },
    throwParabole(){

    }
}


var dog = {
    heigth = 100,  //this might need to be larger
    width = 100,    //this might need to be larger
    // x = 15,   X should be right of the canvas, with some distance between end of canvas and dog
    // y = 20, Y should be bottom of canvas minus height of dog
    draw (dog){
        var img = new Image ();
        img.onload = function (){
            ctx.drawImage(img, dog.x, dog.y, 100, 100)
        }
        // img.src = "";
    },
    updateCanvas(){
        ctx.clearRect(); //4 variables need to go inside
        draw(dog);
    }
}

var cat = {
  heigth = 100, //this might need to be larger
  width = 100,  //this might need to be larger
//   x = 50, X should be left of the canvas, with some distance between end of canvas (x = 0) and cat
// y = 20, Y should be bottom of canvas minus height of cat
  draw(cat){
    var img = new Image ();
    img.onload = function (){
        ctx.drawImage(img, cat.x, cat.y, 100, 100)
    }
     // img.src = "";
  },
  updateCanvas(){
      ctx.clearRect(); //4 variables need to go inside
      draw(cat);
  }

}


/* 
var fence = 
*/



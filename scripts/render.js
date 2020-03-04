function clear(){
    $game.innerHTML = "";
}

function renderEverything(){
    clear();
    game.dog.trash.renderTrash()
    game.cat.trash.renderTrash()
    game.cat.createCat();
    game.dog.createDog();
    game.cat.trash.detectCollision();
    game.dog.trash.detectCollision();
}




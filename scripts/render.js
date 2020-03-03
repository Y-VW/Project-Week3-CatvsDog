function renderTrashCat() {
    requestAnimationFrame(renderTrashCat);
}

function renderTrashDog(){
    requestAnimationFrame(renderTrashDog);
}

function renderEverything(){
    this.bone = new Bone();
    this.fishbone = new FishBone();
    renderTrashCat();
    renderTrashDog();
    this.bone.createTrash();
    this.fishbone.createTrash();
}


renderEverything();

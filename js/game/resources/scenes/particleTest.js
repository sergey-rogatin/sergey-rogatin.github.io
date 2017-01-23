Engine.currScene = new Scene("testScene", 1000, 1000);
//Engine.mainCamera.background = Loader.loadSprite("js/game/resources/sprites/gameOfLife.png");

var particleTest = new GameObject("pTest");

var emit;
var amount = 1;

particleTest.onInit = function() {
    this.pe = this.addModule(ModuleType.particleEmitter);
    emit = this.pe;
}

particleTest.onUpdate = function() {
    this.pe.burst(amount);
}

let pTest = particleTest.instantiate(200, 100);

document.getElementById("pAmount").oninput = function() {
    amount = Number(this.value);
}

document.getElementById("xScaleMin").oninput = function() {
    emit.xScaleMin = Number(this.value);
}

document.getElementById("xScaleMax").oninput = function() {
    emit.xScaleMax = Number(this.value);
}

document.getElementById("yScaleMin").oninput = function() {
    emit.yScaleMin = Number(this.value);
}

document.getElementById("yScaleMax").oninput = function() {
    emit.yScaleMax = Number(this.value);
}

document.getElementById("scaleChange").oninput = function() {
    emit.scaleChange = Number(this.value);
}

document.getElementById("alphaMin").oninput = function() {
    emit.alphaMin = Number(this.value);
}

document.getElementById("alphaMax").oninput = function() {
    emit.alphaMax = Number(this.value);
}

document.getElementById("speedMin").oninput = function() {
    emit.speedMin = Number(this.value);
}

document.getElementById("speedMax").oninput = function() {
    emit.speedMax = Number(this.value);
}

document.getElementById("accMin").oninput = function() {
    emit.accMin = Number(this.value);
}

document.getElementById("accMax").oninput = function() {
    emit.accMax = Number(this.value);
}





// let player0 = oPlayer.instantiate(100, 100);

// let enemy0 = oEnemy.instantiate(400, 100);
// let enemy1 = oEnemy.instantiate(400, 140);
// let enemy2 = oEnemy.instantiate(400, 60);


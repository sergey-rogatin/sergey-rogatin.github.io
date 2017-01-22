var oPlayer = new GameObject("oPlayer");
var o = oPlayer;

var rend = o.addModule(ModuleType.renderer);
var spr = Loader.loadSprite("js/game/resources/sprites/player.png", 32, 32);
rend.setSprite(spr, 16, 16);
var coll = o.addModule(ModuleType.boxCollider);
coll.offX = 16;
coll.offY = 16;

var emit = o.addModule(ModuleType.particleEmitter);
emit.setAlpha(0.05, 0.15, 0.01);
emit.setColor("lawngreen");
emit.setLifeTime(5, 10);
emit.setDirection(160, 200);
emit.setSpeed(2, 4, 0.1);
emit.setScale(0.4, 0.4, 0.4, 0.4, -0.03);
emit.setRegion(-25, 0, -16, 0);
emit.setAlpha(0.2, 0.4, -0.02);

//behaviour
o.onInit = function() {
    let o = this;
    oUnit.onInit.call(this);

    o.acc = 0.25;

    o.emit = o.getModule(ModuleType.particleEmitter);
}

o.onUpdate = function() {
    let o = this;
    oUnit.onUpdate.call(this);
    o.emit.burst(5);

    let incrPart = Input.getKeyPressed(KeyCode.page_up);
    let decrPart = Input.getKeyPressed(KeyCode.page_down);

    if (incrPart) {
        o.emit.particleMax++;
        console.log("Dsd");
    }

    if (decrPart) {
        o.emit.particleMax--;
    }
}
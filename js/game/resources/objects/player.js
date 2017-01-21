var oPlayer = new GameObject("oPlayer");
var o = oPlayer;

var rend = o.addModule(ModuleType.renderer);
var spr = Loader.loadSprite("js/game/resources/sprites/player.png", 32, 32);
rend.setSprite(spr, 16, 16);
var coll = o.addModule(ModuleType.boxCollider);
coll.offX = 16;
coll.offY = 16;

//behaviour
o.onInit = function() {
    oUnit.onInit.call(this);

    o.acc = 0.1;
}

o.onUpdate = function() {
    oUnit.onUpdate.call(this);
}
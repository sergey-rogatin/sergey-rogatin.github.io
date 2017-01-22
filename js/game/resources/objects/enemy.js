var oEnemy = new GameObject("oEnemy");
var o = oEnemy;

var enemySpr = Loader.loadSprite("js/game/resources/sprites/player.png", 32, 32);
var explosionSnd = Loader.loadSound("js/game/resources/sounds/explosion.wav");

o.onInit = function() {
    let o = this;
    oUnit.onInit.call(o);
    
    o.angle = 180;
    
    o.rend = o.addModule(ModuleType.renderer);
    o.rend.setSprite(enemySpr, 16, 16);
    o.rend.setLayer(3);

    o.partDestroy = o.addModule(ModuleType.particleEmitter);
    o.partDestroy.setAlpha(0.05, 0.15, 0);
    o.partDestroy.setColor("orange");
    o.partDestroy.setLifeTime(40, 90);
    o.partDestroy.setDirection(0, 360);
    o.partDestroy.setSpeed(1, 6);
    o.partDestroy.setAccel(-0.2, -0.2);
    o.partDestroy.setScale(0.1, 0.2, 0.1, 0.2, 0.05);
    o.partDestroy.setRegion(0, 0, 0, 0);
    o.partDestroy.setAlpha(0.4, 0.4, -0.015);
    o.partDestroy.setLayer(4);

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-16, -16, 32, 32);

    o.hp = 10;
    o.maxSpd = 2;

    o.goDown = true;
}

o.onUpdate = function() {
    let o = this;

    // if (o.y < 0) {
    //     o.goDown = true;
    // }

    // if (o.y > Engine.mainCamera.showHeight) {
    //     o.goDown = false
    // } 

    // if (o.goDown) {
    //     o.keys.down = true;
    //     o.keys.up = false;
    // } else {
    //     o.keys.up = true;
    //     o.keys.down = false;
    // }

    //o.x--;

    oUnit.onUpdate.call(o);
}
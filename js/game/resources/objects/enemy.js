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

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-16, -16, 32, 32);

    o.hp = 10;
    o.maxSpd = 2;

    o.goDown = true;

    o.shotObj = oEnemyBullet;
    o.shootKey = false;
    o.shotCooldown = randomRange(30, 90);
}

o.onUpdate = function() {
    let o = this;

    if (o.y < 0) {
        o.goDown = true;
        o.x -= 1;
    }

    if (o.y > Engine.mainCamera.showHeight) {
        o.goDown = false
        o.x -= 1;
    } 

    if (o.goDown) {
        o.keys.down = true;
        o.keys.up = false;
    } else {
        o.keys.up = true;
        o.keys.down = false;
    }

    if (o.shootKey && o.prevShotTime + o.shotCooldown < Engine.time) {
        let s = shoot.call(
            this,
            o.x,
            o.y, 
            o.shotSpeed, 
            o.shotObj, 
            o.angle + randomRange(-4, 4),
            o.dmg
        );
        o.prevShotTime = Engine.time;
    }

    o.shootKey = true;

    oUnit.onUpdate.call(o);
}
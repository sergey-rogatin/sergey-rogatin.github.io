var oProjectile = new GameObject("oProjectile");
var o = oProjectile;

var plasmaGreen = Loader.loadSprite("js/game/resources/sprites/plasmaGreen.png");

o.onInit = function() {
    let o = this;

    o.vspd = 0;
    o.hspd = 0;
    o.spd = 0;
    o.lifetime = 100;

    o.lifeStart = Engine.time;

    o.dmg = 1;

    o.rend = o.addModule(ModuleType.renderer);
    o.rend.setSprite(plasmaGreen);
    o.rend.xOff = 10;
    o.rend.yOff = 5;
    o.rend.layer = 1;

    o.emit = o.addModule(ModuleType.particleEmitter);
    o.emit.setColor("orangered");
    o.emit.setLifeTime(100, 100);
    o.emit.setDirection(60, 300);
    o.emit.setSpeed(7, 10);
    o.emit.setAccel(-0.3, -0.3);
    o.emit.setScale(0.2, 0.3, 0.2, 0.3, -0.01);
    o.emit.setRegion(10, 0, 10, 0);
    o.emit.setAlpha(0.8, 0.9);
    o.emit.layer = 0;
    o.emit.setSprite("square"); 

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-10, -5, 20, 10);

    o.collisionObj = "";
}

o.onUpdate = function() {
    let o = this;

    o.hspd = cos(o.angle) * o.spd;
    o.vspd = -sin(o.angle) * o.spd;

    o.x += o.hspd;
    o.y += o.vspd;

    if (o.lifeStart + o.lifetime <= Engine.time) {
        o.destroy();
    }

    let hit = o.coll.collisionAt(o.x, o.y, o.collisionObj);
    if (hit != null) {
        hit.gameObject.hp -= o.dmg;
        o.emit.burst(10);
        o.destroy();
    }
}

var oPlayerBullet = new GameObject("oPlayerBullet");
var o = oPlayerBullet;

o.onInit = function() {
    oProjectile.onInit.call(this);

    this.collisionObj = "oEnemy";
}

o.onUpdate = function() {
    oProjectile.onUpdate.call(this);
}

var oEnemyBullet = new GameObject("oEnemyBullet");
var o = oEnemyBullet;

var plasmaRed = Loader.loadSprite("js/game/resources/sprites/plasmaRed.png");

o.onInit = function() {
    oProjectile.onInit.call(this);

    this.collisionObj = "oPlayer";
    this.rend.setSprite(plasmaRed);
    this.emit.setColor("lawngreen");
}

o.onUpdate = function() {
    oProjectile.onUpdate.call(this);
}
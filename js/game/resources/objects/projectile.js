var oProjectile = new GameObject("oProjectile");
var o = oProjectile;

var img = Loader.loadSprite("js/game/resources/sprites/rect.png");

o.onInit = function() {
    let o = this;

    o.vspd = 0;
    o.hspd = 0;
    o.spd = 0;
    o.lifetime = 100;

    o.lifeStart = Engine.time;

    o.dmg = 1;

    o.xScale = 0.6;
    o.yScale = 0.3;

    o.rend = o.addModule(ModuleType.renderer);
    o.rend.setSprite(img);
    o.rend.xOff = 16;
    o.rend.yOff = 16;
    o.rend.layer = 1;

    o.emit = o.addModule(ModuleType.particleEmitter);
    o.emit.setColor("lawngreen");
    o.emit.setLifeTime(5, 10);
    o.emit.setDirection(60, 300);
    o.emit.setSpeed(9, 15);
    o.emit.setAccel(-1, -1);
    o.emit.setScale(0.2, 0.3, 0.2, 0.3, -0.01);
    o.emit.setRegion(10, 0, 10, 0);
    o.emit.setAlpha(0.5, 0.7, -0.06);
    o.emit.layer = 0;

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-16, -16, 32, 32);

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
        o.emit.burst(20);
        o.destroy();
        Engine.sleep(1);
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

o.onInit = function() {
    oProjectile.onInit.call(this);

    this.collisionObj = "oPlayer";
}

o.onUpdate = function() {
    oProjectile.onUpdate.call(this);
}
let oRocket = new GameObject("oRocket");

var sprRocketGreen = Loader.loadSprite("js/game/resources/sprites/rocketGreen.png");
var sprRocketRed = Loader.loadSprite("js/game/resources/sprites/rocketRed.png");

oRocket.onInit = function() {
    let o = this;
    oProjectile.onInit.call(this);

    o.emit = o.addModule(ModuleType.particleEmitter);
    o.emit.setColor("lawngreen");
    o.emit.setLifeTime(5, 10);
    o.emit.setDirection(160, 210);
    o.emit.setSpeed(5, 8);
    o.emit.setAccel(-1, -1);
    o.emit.setScale(0.8, 0.3, 0.8, 0.3, -0.09);
    o.emit.setRegion(-15, 0, -15, 0);
    o.emit.setAlpha(0.2, 0.4, -0.02);
    o.emit.setRotSpeed(2, 8);
    o.emit.setSprite("circle");
    o.emit.layer = 0;

    o.collisionObj = "oEnemy";

    o.maxSpd = -1;
    o.acc = 0.06;

    o.hp = 1;
}

oRocket.onUpdate = function() {
    let o = this;

    o.maxSpd += o.acc;

    o.hspd = cos(o.angle) * o.maxSpd;
    o.vspd = -sin(o.angle) * o.maxSpd;

    o.x += o.hspd;
    o.y += o.vspd;

    o.emit.burst(1);

    if (o.x > Engine.currScene.width || o.x < 0 || o.y > Engine.currScene.height || o.y < 0) {
        o.destroy();
    }

    let hit = o.coll.collisionAt(o.x, o.y, o.collisionObj);
    if (hit != null || o.hp <= 0) {
        o.destroy();
        explode(o);
    }
}

explode = function(o, dmg) {
    let expl = oExplosion.instantiate(o.x, o.y);
    expl.collisionObj = o.collisionObj;
    expl.dmg = o.dmg;
}



let oPlayerRocket = new GameObject("oPlayerRocket");

oPlayerRocket.onInit = function() {
    oRocket.onInit.call(this);
    this.rend.sprite = sprRocketGreen;
    this.collisionObj = "oEnemy";
}

oPlayerRocket.onUpdate = function() {
    let o = this;
    let hit = o.coll.collisionAt(o.x, o.y, "oEnemyRocket");
    if (hit != null) {
        explode(o);
        o.destroy();
    }
    oRocket.onUpdate.call(this);
}

oPlayerRocket.onDestroy = oRocket.onDestroy;



let oEnemyRocket = new GameObject("oEnemyRocket");

oEnemyRocket.onInit = function() {
    oRocket.onInit.call(this);
    this.rend.sprite = sprRocketRed;
    this.collisionObj = "oPlayer";
    this.emit.color = "orangered";
}

oEnemyRocket.onUpdate = function() {
    let o = this;
    let hit = o.coll.collisionAt(o.x, o.y, "oPlayerRocket");
    if (hit != null) {
        explode(o);
        o.destroy();
    }
    oRocket.onUpdate.call(this);
}

oEnemyRocket.onDestroy = oRocket.onDestroy;
var oEnemy = new GameObject("oEnemy");
var o = oEnemy;

var enemySpr = Loader.loadSprite("js/game/resources/sprites/enemy.png", 32, 32);
var explosionSnd = Loader.loadSound("js/game/resources/sounds/explosion.mp3");

o.onInit = function() {
    let o = this;
    oUnit.onInit.call(o);
    
    o.angle = 180;
    
    o.rend = o.addModule(ModuleType.renderer);
    o.rend.setSprite(enemySpr, 16, 16);
    o.rend.setLayer(3);

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-16, -16, 32, 32);

    o.hp = 5;
    o.maxSpd = 2;
    o.acc = 0.03;
    o.frc = 0.02;

    o.goDown = 70;
    o.goUp = 0;

    o.shotObj = oEnemyRocket;
    o.shootKey = false;
    o.shotCooldown = randomRange(60, 120);

    o.maxIframes = 4;
}

o.onUpdate = function() {
    let o = this;

    //AI
    if (o.x > Engine.currScene.width - 15) {
        o.keys.left = true;
    } else {
        o.keys.left = false;
        o.shootKey = true;
    }

    //wiggling up/down
    if (o.keys.down) {
        o.goUp++;
    }

    if (o.keys.up) {
        o.goDown++;
    }

    if (o.goUp > 60) {
        o.goUp = 0;
        o.keys.up = true;
        o.keys.down = false;
    }

    if (o.goDown > 60) {
        o.goDown = 0;
        o.keys.down = true;
        o.keys.up = false;
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
        s.collisionObj = "oPlayer";
        s.emit.setRegion(15, 0, 15, 0);
        s.emit.setDirection(20, -20);
    }

    let hit = o.coll.collisionAt(o.x, o.y, "oPlayer");
    if (hit) {
        if (!hit.gameObject.iframes) {
            hit.gameObject.hp -= 2;
            hit.gameObject.iframes = hit.gameObject.maxIframes;
        }
        this.hp = 0;
    }

    if (this.hp <= 0) {
        control.enemyCount--;
    }

    oUnit.onUpdate.call(o);
}
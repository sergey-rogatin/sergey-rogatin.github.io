var oPlayer = new GameObject("oPlayer");
var o = oPlayer;

var playerSpr = Loader.loadSprite("js/game/resources/sprites/player.png", 32, 32);
var shotSnd = Loader.loadSound("js/game/resources/sounds/shot.wav");

//behaviour
o.onInit = function() {
    let o = this;
    oUnit.onInit.call(this);

    o.acc = 0.25;

    o.rend = o.addModule(ModuleType.renderer);
    o.rend.setSprite(playerSpr, 16, 16);
    o.rend.setLayer(3);

    o.emit = o.addModule(ModuleType.particleEmitter);
    o.emit.setColor("lawngreen");
    o.emit.setLifeTime(5, 10);
    o.emit.setDirection(160, 210);
    o.emit.setSpeed(5, 8);
    o.emit.setAccel(-1, -1);
    o.emit.setScale(0.8, 0.3, 0.8, 0.3, -0.09);
    o.emit.setRegion(-25, 0, -16, 0);
    o.emit.setAlpha(0.2, 0.4, -0.02);
    o.emit.setRotSpeed(2, 8);
    o.emit.setSprite("circle");
    o.emit.layer = 0;

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-16, -16, 32, 32);
}

o.onUpdate = function() {
    let o = this;
    oUnit.onUpdate.call(this);
    o.emit.burst(5);

    o.keys.up = Input.getKeyPressed(KeyCode.w);
    o.keys.down = Input.getKeyPressed(KeyCode.s);
    o.keys.right = Input.getKeyPressed(KeyCode.d);
    o.keys.left = Input.getKeyPressed(KeyCode.a);

    let shootKey = Input.getKeyPressed(KeyCode.space);
    if (shootKey && o.prevShotTime + o.shotCooldown < Engine.time) {
        let s = shoot.call(
            this,
            o.x,
            o.y, 
            o.shotSpeed, 
            oProjectile, 
            o.angle,
            o.dmg
        );
        playSound(shotSnd);
        o.prevShotTime = Engine.time;
    }
}
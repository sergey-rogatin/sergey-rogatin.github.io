var oExplosion = new GameObject("oExplosion");
var o = oExplosion;

o.onInit = function() {
    let o = this;

    o.coll = o.addModule(ModuleType.boxCollider);
    o.coll.bounds = new Rect(-64, -64, 128, 128);

    o.partDestroy = o.addModule(ModuleType.particleEmitter);
    o.partDestroy.setAlpha(0.05, 0.15, 0);
    o.partDestroy.setColor("orange");
    o.partDestroy.setLifeTime(200, 200);
    o.partDestroy.setDirection(0, 360);
    o.partDestroy.setSpeed(10, 10);
    o.partDestroy.setAccel(-0.5, -2);
    o.partDestroy.setScale(0.1, 0.2, 0.1, 0.2, 0.05);
    o.partDestroy.setRegion(0, 0, 0, 0);
    o.partDestroy.setAlpha(1, 2, -0.05);
    o.partDestroy.setLayer(4);

    o.coll.collisionAll(o.x, o.y, "oEnemy", function(other) {
        console.log(other);
        other.gameObject.hp -= 10;
    });

    o.partDestroy.burst(40);
    playSound(explosionSnd);
    o.destroy();
}
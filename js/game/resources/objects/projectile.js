var oProjectile = new GameObject("oProjectile");
var o = oProjectile;

var rend = o.addModule(ModuleType.renderer);
var spr = Loader.loadSprite("js/game/resources/sprites/rect.png");
rend.setSprite(spr);
rend.xOff = 16;
rend.yOff = 16;

o.xScale = 0.2;
o.yScale = 0.2;

o.onInit = function() {
    let o = this;

    o.vspd = 0;
    o.hspd = 0;
    o.spd = 0;
    o.lifetime = 50;

    o.lifeStart = Engine.time;
}

o.onUpdate = function() {
    let o = this;

    o.hspd = cos(o.angle) * o.spd;
    o.vspd = -sin(o.angle) * o.spd;

    o.x += o.hspd;
    o.y += o.vspd;

    if (o.lifeStart + o.lifetime <= Engine.time) {
        this.destroy();
    }
}
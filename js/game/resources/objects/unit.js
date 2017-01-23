var oUnit = new GameObject("oUnit");
var o = oUnit;

//behaviour
o.onInit = function() {
    let o = this;

    o.acc = 0.15;
    o.hspd = 0;
    o.vspd = 0;
    o.frc = 0.08;
    o.maxSpd = 5;

    o.keys = {};

    o.dmg = 1;
    o.shotCooldown = 10;
    o.shotSpeed = 5;
    o.prevShotTime = 0;
    o.shotObj = null;
}

o.onUpdate = function() {
    let o = this;

    move.call(this, o.keys);

    if (o.hp <= 0) {
        oExplosion.instantiate(o.x, o.y);
        o.destroy();
        //Engine.sleep(3);
    }
}

function shoot(x, y, spd, projObj, angle, dmg) {
    var s = projObj.instantiate(x, y);
    s.spd = spd;
    s.angle = angle;
    s.dmg = dmg;
    return s;
}

function move(keys) {
    let o = this;

    if (keys.up) {
        o.vspd -= o.acc;
    }
    if (keys.down) {
        o.vspd += o.acc;
    }
    if (keys.right) {
        o.hspd += o.acc;
    }
    if (keys.left) {
        o.hspd -= o.acc;
    }

    o.x += o.hspd;
    o.y += o.vspd;

    if (abs(o.hspd) > o.frc) {
        o.hspd -= sign(o.hspd) * o.frc;
    } else {
        o.hspd = 0;
    }
    if (abs(o.vspd) > o.frc) {
        o.vspd -= sign(o.vspd) * o.frc;
    } else {
        o.vspd = 0;
    }

    let spdLen = sqrt(pow(o.hspd, 2) + pow(o.vspd, 2));
    if (spdLen > o.maxSpd) {
        o.hspd *= 1/spdLen * o.maxSpd;
        o.vspd *= 1/spdLen * o.maxSpd;
    }
}

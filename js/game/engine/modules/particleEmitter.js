var defaultParticle = Loader.loadSprite("js/game/engine/particles/default.png");

function ParticleEmitter(gameObject) {
    Module.call(this, gameObject);
    this.xOff = 0;
    this.yOff = 0;
    this.sprite = defaultParticle;
    this.sprWidth = 32;
    this.sprHeight = 32;
}

ParticleEmitter.prototype = Object.create(Module.prototype);

ParticleEmitter.prototype.init = function() {};

ParticleEmitter.prototype.burst = function(amount) {

    for (let i = 0; i < amount; i++) {
        let x = this.gameObject.x + this.xOff;
        let y = this.gameObject.y + this.yOff;
        let alpha = 0;
        let angle = Math.random()*360;
        let speed = Math.random()*4;
        let dir = Math.random()*360;
        let lifeTime = 30 + Math.random()*20 - 20;
        let xScale = 0.3;
        let yScale = 0.3;
        let xOff = this.sprWidth/2;
        let yOff = this.sprHeight/2;
        let acc = 0.2;
        let p = new Particle(x, y, angle, alpha, speed, dir, acc, lifeTime, xScale, yScale, this.sprite, xOff, yOff);

        p.rendIndex = Engine.currScene.renderers.push(p);
        p.objIndex = Engine.currScene.gameObjects.particles.push(p);
    }
    
}

function Particle(x, y, angle, alpha, speed, dir, acc, lifeTime, xScale, yScale, sprite, xOff, yOff) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.alpha = alpha;
    this.sprite = sprite;
    this.speed = speed;
    this.xScale = xScale;
    this.yScale = yScale;
    this.dir = dir;
    this.xOff = xOff;
    this.yOff = yOff;
    this.lifeTime = lifeTime;
    this.acc = acc;

    this.vspd = 0;
    this.hspd = 0;
}

Particle.prototype.render = function(cam) {
    var ctx = cam.ctx;
    ctx.save();
    var x = this.x - cam.x;//(0.5 + go.x - cam.x) << 0;
    var y = this.y - cam.y;//(0.5 + go.y - cam.y) << 0;
    ctx.translate(x, y);
    ctx.rotate(-this.angle * Math.degToRad);
    ctx.scale(this.xScale, this.yScale);
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.sprite, -this.xOff, -this.yOff);
    ctx.restore();
}

Particle.prototype.onUpdate = function() {
    let o = this;

    //console.log(this);
    o.speed += o.acc;
    o.hspd = cos(o.dir) * o.speed;
    o.vspd = -sin(o.dir) * o.speed;

    o.alpha += 0.03;

    o.x += o.hspd;
    o.y += o.vspd;

    this.lifeTime--;
    if (this.lifeTime <= 0) {
        this.destroy();
    }
}

Particle.prototype.destroy = function() {
    Engine.currScene.renderers.remove(this.rendIndex);
    Engine.currScene.gameObjects.particles.remove(this.objIndex);
}
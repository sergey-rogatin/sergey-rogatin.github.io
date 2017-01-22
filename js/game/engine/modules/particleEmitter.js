var defaultParticle = Loader.loadSprite("js/game/engine/particles/default.png");

function ParticleEmitter(gameObject) {
    Module.call(this, gameObject);
    this.sprite = defaultParticle;
    this.sprWidth = 32;
    this.sprHeight = 32;

    //range in which particles are emitted
    this.xOff = 0;
    this.yOff = 0;
    this.width = 0;
    this.height = 0;

    //particle scale range
    this.xScaleMin = 0.01;
    this.xScaleMax = 0.4;
    this.yScaleMin = 0.01;
    this.yScaleMax = 0.7;

    this.scaleChange = 0;//-0.01;

    //particle alpha range
    this.alphaMin = 0;
    this.alphaMax = 0;

    this.alphaChange = 0.03;

    //particle speed range
    this.speedMin = 0.5;
    this.speedMax = 2;

    //particle angle range
    this.angleMin = 0;
    this.angleMax = 360;

    //particle rotation speed range
    this.rotSpeedMin = 1;
    this.rotSpeedMax = 5;

    //particle direction rangle
    this.dirMin = 0;
    this.dirMax = 360;

    //particle lifeTime range (in frames)
    this.lifeTimeMin = 30;
    this.lifeTimeMax = 100;

    //particle acceleration rangle
    this.accMin = 0;
    this.accMax = 0.1;

    //particle rotation acceleration range
    this.rotAccMin = 0;
    this.rotAccMax = 1;

    this.particleMax = 150;
    this.color = "dodgerblue";

    this.layer = 0;
}

ParticleEmitter.prototype = Object.create(Module.prototype);

ParticleEmitter.prototype.setSprite = function(spr) {
    this.sprite = spr;
}

ParticleEmitter.prototype.setRegion = function(x, y, width, height) {
    this.xOff = x;
    this.yOff = y;
    this.width = width;
    this.height = height;
}

ParticleEmitter.prototype.setScale = function(minX, maxX, minY, maxY, change) {
    this.xScaleMin = minX;
    this.xScaleMax = maxX;
    this.yScaleMin = minY;
    this.yScaleMax = maxY;
    this.scaleChange = change;
}

ParticleEmitter.prototype.setAlpha = function(min, max, change) {
    this.alphaMin = min;
    this.alphaMax = max;
    this.alphaChange = change;
}

ParticleEmitter.prototype.setSpeed = function(min, max) {
    this.speedMin = min;
    this.speedMax = max;
}

ParticleEmitter.prototype.setAngle = function(min, max) {
    this.angleMin = min;
    this.angleMax = max;
}

ParticleEmitter.prototype.setRotSpeed = function(min, max) {
    this.rotSpeedMin = min;
    this.rotSpeedMax = max;
}

ParticleEmitter.prototype.setDirection = function(min, max) {
    this.dirMin = min;
    this.dirMax = max;
}

ParticleEmitter.prototype.setLifeTime = function(min, max) {
    this.lifeTimeMin = min;
    this.lifeTimeMax = max;
}

ParticleEmitter.prototype.setAccel = function(min, max) {
    this.accMin = min;
    this.accMax = max;
}

ParticleEmitter.prototype.setRotAccel = function(min, max) {
    this.rotAccMin = min;
    this.rotAccMax = max;
}

ParticleEmitter.prototype.setColor = function(color) {
    this.color = color;
}

ParticleEmitter.prototype.init = function() {

};

ParticleEmitter.prototype.burst = function(amount) {
    for (let i = 0; i < amount; i++) {

        if (this.particleMax < Engine.currScene.renderers.length) {
            return;
        }

        let x = this.gameObject.x + randomRange(this.xOff, this.width);
        let y = this.gameObject.y + randomRange(this.yOff, this.height);
        let alpha = randomRange(this.alphaMin, this.alphaMax);
        let angle = randomRange(this.angleMin, this.angleMax);
        let speed = randomRange(this.speedMin, this.speedMax);
        let dir = randomRange(this.dirMin, this.dirMax);
        let lifeTime = randomRange(this.lifeTimeMin, this.lifeTimeMax);
        let xScale = randomRange(this.xScaleMin, this.xScaleMax);
        let yScale = randomRange(this.yScaleMin, this.yScaleMax);
        let xOff = this.sprWidth/2;
        let yOff = this.sprHeight/2;
        let acc = randomRange(this.accMin, this.accMax);
        let rotSpd = randomRange(this.rotSpeedMin, this.rotSpeedMax);
        let rotAcc = randomRange(this.rotAccMin, this.rotAccMax);
        let alphaChange = this.alphaChange;
        let scaleChange = this.scaleChange;
        let color = this.color;

        let p = new Particle(x, y, angle, alpha, speed, rotSpd, dir, acc,
                rotAcc, lifeTime, xScale, yScale, this.sprite, xOff, yOff, alphaChange, scaleChange, color);

        
        p.setLayer(this.layer);
        p.objIndex = Engine.currScene.gameObjects.particles.push(p);
    }
}

Particle.prototype.setLayer = function(l) {
    if (this.index != null) {
        Engine.currScene.renderers[this.layer].remove(this.rendIndex);
    }
    if (Engine.currScene.renderers[l] == undefined) {
        Engine.currScene.renderers[l] = new List();
    }
    this.rendIndex = Engine.currScene.renderers[l].push(this);
    this.layer = l;
}

function Particle(x, y, angle, alpha, speed, rotSpd, dir, acc,
        rotAcc, lifeTime, xScale, yScale, sprite, xOff, yOff, alphaChange, scaleChange, color) {
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
    this.rotSpd = rotSpd;
    this.rotAcc = rotAcc;
    this.alphaChange = alphaChange;
    this.scaleChange = scaleChange;
    this.color = color;

    this.vspd = 0;
    this.hspd = 0;
}

Particle.prototype.render = function(cam) {

    if (this.x < 0 || this.x > cam.x + cam.width || this.y < 0 || this.y > cam.x + cam.height) {
        return;
    }

    var ctx = cam.ctx;
    ctx.save();
    var x = this.x - cam.x;//(0.5 + go.x - cam.x) << 0;
    var y = this.y - cam.y;//(0.5 + go.y - cam.y) << 0;
    ctx.translate(x, y);
    ctx.rotate(-this.angle * Math.degToRad);
    ctx.scale(this.xScale, this.yScale);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.xOff, -this.yOff, 32, 32);
    //ctx.drawImage(this.sprite, -this.xOff, -this.yOff);
    ctx.restore();
}

Particle.prototype.onUpdate = function() {
    //moving to direction and accelerating
    this.hspd = cos(this.dir) * this.speed;
    this.vspd = -sin(this.dir) * this.speed;

    let spdLen = sqrt(pow(this.hspd, 2) + pow(this.vspd, 2));
    this.hspd *= 1/spdLen * this.speed;
    this.vspd *= 1/spdLen * this.speed;

    this.x += this.hspd;
    this.y += this.vspd;

    this.speed += this.acc;

    if (this.speed < 0) {
        this.speed = 0.01;
    }

    //changing alpha
    this.alpha += this.alphaChange;

    if (this.alpha < 0) {
        this.alpha = 0;
    }

    //rotating
    this.angle += this.rotSpd;
    this.rotSpd += this.rotAcc;

    //scaling
    this.xScale += this.scaleChange;
    this.yScale += this.scaleChange;

    if (this.xScale < 0) {
        this.xScale = 0;
    }
    if (this.yScale < 0) {
        this.yScale = 0;
    }

    this.lifeTime--;
    if (this.lifeTime <= 0) {
        this.destroy();
    }
}

Particle.prototype.destroy = function() {
    //console.log(this.rendIndex);
    Engine.currScene.renderers[this.layer].remove(this.rendIndex);
    Engine.currScene.gameObjects.particles.remove(this.objIndex);
}
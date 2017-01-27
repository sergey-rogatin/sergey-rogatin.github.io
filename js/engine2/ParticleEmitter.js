var ParticleEmitter = (function () {
    function ParticleEmitter() {
        //emitter properties
        this.emitRegion = new Rect(0, 0, 0, 0);
        //particle properties
        this.shape = "box";
        this.minLifetime = 40;
        this.maxLifetime = 150;
        this.minSpeed = 1;
        this.maxSpeed = 2;
        this.speedIncr = 0.1;
        this.minDirection = 0;
        this.maxDirection = 360;
        this.directionIncr = 0;
        this.scale = new Vector(5, 5);
        this.sizeIncr = 0;
        this.minSize = 1;
        this.maxSize = 3;
        this.minAlpha = 0.5;
        this.maxAlpha = 1;
        this.alphaIncr = 0;
        this.minAngle = 0;
        this.maxAngle = 0;
        this.angleIncr = 0;
        this.startColor = new Color(0, 0, 255);
        this.endColor = new Color(0, 255, 0);
        this.layer = 0;
    }
    ParticleEmitter.prototype.burst = function (pos, amount) {
        for (var i = 0; i < amount; i++) {
            var p = this.createParticle(pos);
        }
    };
    ParticleEmitter.prototype.setRegion = function (region) {
        this.emitRegion = region;
    };
    ParticleEmitter.prototype.setShape = function (shape) {
        this.shape = shape;
    };
    ParticleEmitter.prototype.setLifetime = function (minLifetime, maxLifetime) {
        this.minLifetime = minLifetime;
        this.maxLifetime = maxLifetime;
    };
    ParticleEmitter.prototype.setSpeed = function (minSpeed, maxSpeed, speedIncr) {
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
        this.speedIncr = speedIncr;
    };
    ParticleEmitter.prototype.setDirection = function (minDirection, maxDirection, directionIncr) {
        this.minDirection = minDirection;
        this.maxDirection = maxDirection;
        this.directionIncr = directionIncr;
    };
    ParticleEmitter.prototype.setScale = function (scale, minSize, maxSize, sizeIncr) {
        this.scale = scale;
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.sizeIncr = sizeIncr;
    };
    ParticleEmitter.prototype.setAlpha = function (minAlpha, maxAlpha, alphaIncr) {
        this.minAlpha = minAlpha;
        this.maxAlpha = maxAlpha;
        this.alphaIncr = alphaIncr;
    };
    ParticleEmitter.prototype.setAngle = function (minAngle, maxAngle, angleIncr) {
        this.minAngle = minAngle;
        this.maxAngle = maxAngle;
        this.angleIncr = angleIncr;
    };
    ParticleEmitter.prototype.setColor = function (startColor, endColor) {
        this.startColor = startColor;
        this.endColor = endColor;
    };
    ParticleEmitter.prototype.setLayer = function (layer) {
        this.layer = layer;
    };
    ParticleEmitter.prototype.createParticle = function (pos) {
        var p = new Particle();
        p.pos = pos.add(new Vector(randomRange(this.emitRegion.left, this.emitRegion.right), randomRange(this.emitRegion.top, this.emitRegion.bottom)));
        p.shape = this.shape;
        p.lifetime = randomRange(this.minLifetime, this.maxLifetime);
        p.maxSpeed = randomRange(this.minSpeed, this.maxSpeed);
        p.speedIncr = this.speedIncr;
        p.direction = randomRange(this.minDirection, this.maxDirection);
        p.directionIncr = this.directionIncr;
        var size = randomRange(this.minSize, this.maxSize);
        p.scale = this.scale.mult(size);
        p.scaleIncr = this.sizeIncr;
        p.alpha = randomRange(this.minAlpha, this.maxAlpha);
        p.alphaIncr = this.alphaIncr;
        p.angle = randomRange(this.minAngle, this.maxAngle);
        p.angleIncr = this.angleIncr;
        p.color = this.startColor;
        p.rChange = Math.floor((this.endColor.r - this.startColor.r) / p.lifetime);
        p.gChange = Math.floor((this.endColor.g - this.startColor.g) / p.lifetime);
        p.bChange = Math.floor((this.endColor.b - this.startColor.b) / p.lifetime);
        p.layer = this.layer;
        if (Engine.scene.renderers[p.layer] == undefined) {
            Engine.scene.renderers[p.layer] = new List();
        }
        p.drawIndex = Engine.scene.renderers[p.layer].push(p);
        p.updateIndex = Engine.scene.updaters.push(p);
        return p;
    };
    return ParticleEmitter;
}());
log("Loading particle emitters...");
//# sourceMappingURL=ParticleEmitter.js.map
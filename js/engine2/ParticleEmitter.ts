class ParticleEmitter {
    //emitter properties
    emitRegion: Rect = new Rect(0, 0, 0, 0);

    //particle properties
    shape: string = "box";

    minLifetime: number = 40;
    maxLifetime: number = 150;

    minSpeed: number = 1;
    maxSpeed: number = 2;
    speedIncr: number = 0.1;

    minDirection: number = 0;
    maxDirection: number = 360;
    directionIncr: number = 0;

    scale: Vector = new Vector(5, 5);
    sizeIncr: number = 0;
    minSize: number = 1;
    maxSize: number = 3;

    minAlpha: number = 0.5;
    maxAlpha: number = 1;
    alphaIncr: number = 0;

    minAngle: number = 0;
    maxAngle: number = 0;
    angleIncr: number = 0;

    startColor: Color = new Color(0, 0, 255);
    endColor: Color = new Color(0, 255, 0);

    layer: number = 0;

    burst(pos: Vector, amount: number) {
        for (let i = 0; i < amount; i++) {
            let p = this.createParticle(pos);
        }
    }

    setRegion(region: Rect) {
        this.emitRegion = region;
    }

    setShape(shape: string) {
        this.shape = shape;
    }

    setLifetime(minLifetime: number, maxLifetime: number) {
        this.minLifetime = minLifetime;
        this.maxLifetime = maxLifetime;
    }

    setSpeed(minSpeed: number, maxSpeed: number, speedIncr: number) {
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
        this.speedIncr = speedIncr;
    }

    setDirection(minDirection: number, maxDirection: number, directionIncr: number) {
        this.minDirection = minDirection;
        this.maxDirection = maxDirection;
        this.directionIncr = directionIncr;
    }

    setScale(scale: Vector, minSize: number, maxSize: number, sizeIncr: number) {
        this.scale = scale;
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.sizeIncr = sizeIncr;
    }

    setAlpha(minAlpha: number, maxAlpha: number, alphaIncr: number) {
        this.minAlpha = minAlpha;
        this.maxAlpha = maxAlpha;
        this.alphaIncr = alphaIncr;
    }

    setAngle(minAngle: number, maxAngle: number, angleIncr: number) {
        this.minAngle = minAngle;
        this.maxAngle = maxAngle;
        this.angleIncr = angleIncr;
    }

    setColor(startColor: Color, endColor: Color) {
        this.startColor = startColor;
        this.endColor = endColor;
    }

    setLayer(layer: number) {
        this.layer = layer;
    }

    private createParticle(pos: Vector) {
        let p = new Particle();
        p.pos = pos.add(new Vector(
            randomRange(this.emitRegion.left, this.emitRegion.right),
            randomRange(this.emitRegion.top, this.emitRegion.bottom)
        ));
        p.shape = this.shape;
        p.lifetime = randomRange(this.minLifetime, this.maxLifetime);
        p.maxSpeed = randomRange(this.minSpeed, this.maxSpeed);
        p.speedIncr = this.speedIncr;
        p.direction = randomRange(this.minDirection, this.maxDirection);
        p.directionIncr = this.directionIncr;
        let size = randomRange(this.minSize, this.maxSize);
        p.scale = this.scale.mult(size);
        p.scaleIncr = this.sizeIncr;
        p.alpha = randomRange(this.minAlpha, this.maxAlpha);
        p.alphaIncr = this.alphaIncr;
        p.angle = randomRange(this.minAngle, this.maxAngle);
        p.angleIncr = this.angleIncr;
        p.color = this.startColor;

        p.rChange = Math.floor((this.endColor.r - this.startColor.r)/p.lifetime);
        p.gChange = Math.floor((this.endColor.g - this.startColor.g)/p.lifetime);
        p.bChange = Math.floor((this.endColor.b - this.startColor.b)/p.lifetime);

        p.layer = this.layer;

        if (Engine.scene.renderers[p.layer] == undefined) {
            Engine.scene.renderers[p.layer] = new List<Drawable>();
        }
        p.drawIndex = Engine.scene.renderers[p.layer].push(p);
        p.updateIndex = Engine.scene.updaters.push(p);

        return p;
    }
}

log("Loading particle emitters...");
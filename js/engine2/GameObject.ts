class GameObject implements Drawable, Updatable { 
    pos: Vector; //position in the scene
    scale: Vector; // object scale affects both renderer and colliders
    angle: number; //rotation 
    sprite: HTMLImageElement;
    spriteOff: Vector;
    alpha: number;
    private layer: number;

    updateIndex: ListNode<Updatable>;
    drawIndex: ListNode<Drawable>;

    constructor(pos: Vector) {
        this.pos = pos;
        this.scale = new Vector(1, 1);
        this.angle = 0;
        this.updateIndex = Engine.scene.updaters.push(this);
        this.layer = 0;
        if (Engine.scene.renderers[this.layer] == undefined) {
            Engine.scene.renderers[this.layer] = new List<Drawable>();
        }
        this.drawIndex = Engine.scene.renderers[this.layer].push(this);
    }

    update() {}

    drawSelf() {
        drawSprite(this.sprite, this.pos, this.spriteOff, this.alpha, this.angle, this.scale);
    }

    draw() {
        this.drawSelf();
    }

    destroy() {
        Engine.scene.updaters.remove(this.updateIndex);
        Engine.scene.renderers[this.layer].remove(this.drawIndex);
    }

    setLayer(layer: number) {
        Engine.scene.renderers[this.layer].remove(this.drawIndex);
        this.drawIndex = Engine.scene.renderers[layer].push(this);
        this.layer = layer;
    }
}

let sprPlayer = Engine.loadSprite("/js/resources/sprites/player.png");

class Player extends GameObject {

    sparkles: ParticleEmitter;

    constructor(pos: Vector) {
        super(pos);
        this.sprite = sprPlayer;
        this.spriteOff = new Vector(16, 16);
        this.sparkles = new ParticleEmitter();
        this.sparkles.setAngle(0, 0, 0);
        this.sparkles.setLayer(1);
        this.sparkles.setShape("box");
        this.sparkles.setAlpha(0.6, 0.8, -0.01);
        this.sparkles.setScale(new Vector(10, 10), 1, 4, -0.1);
        this.sparkles.setSpeed(2, 4, -0.05);
        this.sparkles.setColor(new Color(255, 100, 40), new Color(50, 255, 30));
    }

    update() {
        this.sparkles.burst(this.pos, 5);
    }

    draw() {
        this.drawSelf();
    }
}

log("Loading game objects...");
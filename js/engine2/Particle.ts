class Particle implements Drawable, Updatable {
    shape: string;
    lifetime: number;

    pos: Vector;  
    speed: Vector;
    maxSpeed: number;
    speedIncr: number;

    direction: number;
    directionIncr: number;

    scale: Vector;
    scaleIncr: number;

    alpha: number;
    alphaIncr: number;

    angle: number;
    angleIncr: number;

    color: Color;
    rChange: number = 0;
    gChange: number = 0;
    bChange: number = 0;

    updateIndex: ListNode<Updatable>;
    drawIndex: ListNode<Drawable>;

    layer: number;

    constructor() {
        this.speed = new Vector();
    }

    draw() {
        let cam = Engine.scene.camera;
        let ctx = cam.context;
        let x = this.pos.x - cam.pos.x;
        let y = this.pos.y - cam.pos.y;
        //sprite alpha
        if (this.alpha != 1) {
            ctx.globalAlpha = this.alpha;
        }
        //color
        ctx.fillStyle = this.color.str;
        switch (this.shape) {
            case "box": {
                ctx.save();
                //sprite position
                ctx.translate(x, y);
                //sprite rotation
                if (this.angle != 0) {
                    ctx.rotate(-this.angle*degToRad);
                }
                ctx.fillRect(
                    -this.scale.x/2, 
                    -this.scale.y/2, 
                    this.scale.x, 
                    this.scale.y
                );
                ctx.restore();
                break;
            }
            case "circle": {
                ctx.beginPath();
                ctx.arc(x, y, this.scale.x, 0, Math.PI*2, true); 
                ctx.closePath();
                ctx.fill();
                break;
            }
        }
    }

    update() {
        this.speed.x = this.maxSpeed*cos(this.direction);
        this.speed.y = -this.maxSpeed*sin(this.direction);
        this.speed = this.speed.norm().mult(this.maxSpeed * sign(this.maxSpeed));
        this.pos.translate(this.speed);
        this.maxSpeed += this.speedIncr;

        this.scale.translate(new Vector(this.scaleIncr, this.scaleIncr));

        this.alpha += this.alphaIncr;
        this.angle += this.angleIncr;
        this.direction += this.directionIncr;

        this.color = new Color(this.color.r + this.rChange, this.color.g + this.gChange,
                this.color.b + this.bChange);

        let cam = Engine.scene.camera;
        if (this.lifetime <= 0 || this.alpha < 0 || this.scale.x < 0 || this.scale.y < 0 ||
            this.pos.x < 0 || this.pos.x > cam.view.x || this.pos.y < 0 || this.pos.y > cam.view.y) {
            this.destroy();
        }
        this.lifetime--;
    }

    destroy() {
        Engine.scene.renderers[this.layer].remove(this.drawIndex);
        Engine.scene.updaters.remove(this.updateIndex);
    }
}


log("Loading particles...");
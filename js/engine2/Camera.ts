class Camera {
    private canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d");
        this.pos = new Vector(0, 0);
        this.size = new Vector(canvas.width, canvas.height);
        this.view = new Vector(canvas.width, canvas.height);
    }

    pos: Vector;
    size: Vector;
    view: Vector;
    bgColor: string = "black";

    drawAll() {
        //clearing with background color
        this.context.fillStyle = this.bgColor;
        this.context.fillRect(this.pos.x, this.pos.y, this.view.x, this.view.y);
        //drawing all renderers
        for (let i = 0; i < Engine.scene.renderers.length; i++) {
            Engine.scene.renderers[i].forEach(function(rend) {
                rend.draw();
            }, this);
        }
    }
}

function drawSprite(sprite: HTMLImageElement, pos: Vector, 
        offset: Vector = new Vector(), alpha: number = 1, angle: number = 0, scale: Vector = new Vector()) {
    if (sprite == null) {
        return;
    }
    let cam = Engine.scene.camera;
    let ctx = cam.context;
    let x = pos.x - cam.pos.x;
    let y = pos.y - cam.pos.y;
    ctx.save();
    //sprite position
    ctx.translate(x, y);
    //sprite rotation
    if (angle != 0) {
        ctx.rotate(-angle*degToRad);
    }
    //sprite alpha
    if (alpha != 1) {
        ctx.globalAlpha = alpha;
    }
    //sprite scale
    if (scale.x != 1 || scale.y != 1) {
        ctx.scale(scale.x, scale.y);
    }
    ctx.drawImage(sprite, -offset.x, -offset.y);
    ctx.restore();
}

log("Loading cameras...");
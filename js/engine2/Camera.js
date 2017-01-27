var Camera = (function () {
    function Camera(canvas) {
        this.bgColor = "black";
        this.context = canvas.getContext("2d");
        this.pos = new Vector(0, 0);
        this.size = new Vector(canvas.width, canvas.height);
        this.view = new Vector(canvas.width, canvas.height);
    }
    Camera.prototype.drawAll = function () {
        //clearing with background color
        this.context.fillStyle = this.bgColor;
        this.context.fillRect(this.pos.x, this.pos.y, this.view.x, this.view.y);
        //drawing all renderers
        for (var i = 0; i < Engine.scene.renderers.length; i++) {
            Engine.scene.renderers[i].forEach(function (rend) {
                rend.draw();
            }, this);
        }
    };
    return Camera;
}());
function drawSprite(sprite, pos, offset, alpha, angle, scale) {
    if (offset === void 0) { offset = new Vector(); }
    if (alpha === void 0) { alpha = 1; }
    if (angle === void 0) { angle = 0; }
    if (scale === void 0) { scale = new Vector(); }
    if (sprite == null) {
        return;
    }
    var cam = Engine.scene.camera;
    var ctx = cam.context;
    var x = pos.x - cam.pos.x;
    var y = pos.y - cam.pos.y;
    ctx.save();
    //sprite position
    ctx.translate(x, y);
    //sprite rotation
    if (angle != 0) {
        ctx.rotate(-angle * degToRad);
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
//# sourceMappingURL=Camera.js.map
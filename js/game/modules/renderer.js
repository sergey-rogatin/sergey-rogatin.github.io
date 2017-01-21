function Renderer(gameObject) {
    Module.call(this, gameObject);
    
    this.sprite = null;
    this.xOff = 0;
    this.yOff = 0;
}

Renderer.prototype = Object.create(Module.prototype);

Renderer.prototype.init = function() {
    Engine.currScene.renderers.push(this);
}

Renderer.prototype.render = function(cam) {
    var ctx = cam.ctx;

    ctx.save();
    var go = this.gameObject;
    var x = go.x - cam.x + this.xOff;
    var y = go.y - cam.y + this.yOff;
    ctx.translate(x, y);
    ctx.rotate(go.angle * Math.degToRad);

    ctx.drawImage(
        this.sprite,
        0,
        0
    );

    ctx.restore();
}
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

Renderer.prototype.render = function(ctx) {
    ctx.save();
    var go = this.gameObject;
    var x = go.x;
    var y = go.y;

    ctx.translate(x, y);
    ctx.rotate(go.angle * Math.degToRad);
    ctx.drawImage(
        this.sprite,
        this.xOff,
        this.yOff
    );
    ctx.restore();
}
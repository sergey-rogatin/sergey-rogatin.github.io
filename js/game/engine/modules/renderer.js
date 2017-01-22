function Renderer(gameObject) {
    Module.call(this, gameObject);   
    this.sprite = null;
    this.xOff = 0;
    this.yOff = 0;
    this.alpha = 1;
}

Renderer.prototype = Object.create(Module.prototype);

Renderer.prototype.init = function() {
    this.index = Engine.currScene.renderers.push(this);
}

Renderer.prototype.destroy = function() {
    Engine.currScene.renderers.remove(this.index);
}

Renderer.prototype.render = function(cam) {
    var ctx = cam.ctx;
    ctx.save();
    var go = this.gameObject;
    var x = go.x - cam.x;//(0.5 + go.x - cam.x) << 0;
    var y = go.y - cam.y;//(0.5 + go.y - cam.y) << 0;
    ctx.translate(x, y);
    ctx.rotate(-go.angle * Math.degToRad);
    ctx.scale(go.xScale, go.yScale);
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.sprite, -this.xOff, -this.yOff);
    ctx.restore();
}

Renderer.prototype.setSprite = function(img, xOff, yOff) {
    this.sprite = img;
    this.xOff = xOff || img.width/2;
    this.yOff = yOff || img.height/2;
}
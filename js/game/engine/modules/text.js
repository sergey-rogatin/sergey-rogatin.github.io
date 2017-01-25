function Text(gameObject) {
    Module.call(this, gameObject);   
    this.xOff = 0;
    this.yOff = 0;
    this.alpha = 1;
    this.layer = 10;
    this.index = null;
    this.align = "left";
    this.size = 15;
    this.face = "Arial";
}

Text.prototype = Object.create(Module.prototype);

Text.prototype.init = function() {
    this.setLayer(this.layer);
}

Text.prototype.setLayer = function(l) {
    if (this.index != null) {
        Engine.currScene.renderers[this.layer].remove(this.index);
    }
    if (Engine.currScene.renderers[l] == undefined) {
        Engine.currScene.renderers[l] = new List();
    }
    this.index = Engine.currScene.renderers[l].push(this);
    this.layer = l;
}

Text.prototype.destroy = function() {
    Engine.currScene.renderers[this.layer].remove(this.index);
}

Text.prototype.render = function(cam) {
    var ctx = cam.ctx;
    ctx.save();
    var go = this.gameObject;
    var x = (0.5 + go.x - cam.x + this.xOff) << 0;
    var y = (0.5 + go.y - cam.y + this.yOff) << 0;
    ctx.translate(x, y);

    if (go.angle != 1) {
        ctx.rotate(-go.angle * Math.degToRad);
    }
    if (go.xScale != 1 || go.yScale != 1) {
        ctx.scale(go.xScale, go.yScale);
    }
    if (go.globalAlpha != 1) {
        ctx.globalAlpha = this.alpha;
    }

    ctx.textAlign = this.align;
    ctx.fillStyle = "white";
    ctx.font = this.size + "px " + this.face;
    ctx.fillText(this.text, 0, 0);

    ctx.restore();
}

Text.prototype.setSprite = function(img, xOff, yOff) {
    this.sprite = img;
    this.xOff = xOff || img.width/2;
    this.yOff = yOff || img.height/2;
}
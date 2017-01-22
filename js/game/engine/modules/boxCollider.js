function BoxCollider(gameObject) {
    Collider.call(this, gameObject);
    this.bounds = new Rect(0, 0, 0, 0);
    //this.show = true;
}

BoxCollider.prototype = Object.create(Collider.prototype);

BoxCollider.prototype.checkCollisionWith = function(x, y, other) {
    var xScale1 = this.gameObject.xScale;
    var yScale1 = this.gameObject.yScale;
    var xScale2 = other.gameObject.xScale;
    var yScale2 = other.gameObject.yScale;

    var x2 = other.gameObject.x;
    var y2 = other.gameObject.y;
    
    if (x + this.bounds.left*xScale1 > x2 + other.bounds.right*xScale2) {
        return false;
    }
    if (y + this.bounds.up*yScale1 > y2 + other.bounds.down*yScale2) {
        return false;
    }
    if (x2 + other.bounds.left*xScale2 > x + this.bounds.right*xScale1) {
        return false;
    }
    if (y2 + other.bounds.up*yScale2 > y + this.bounds.down*yScale1) {
        return false;
    }
    return true;
}

BoxCollider.prototype.collisionAt = function(x, y, gameObject) {
    let colliders = Engine.currScene.colliders[gameObject];
    if (colliders == undefined) {
        return null;
    }
    let result = null;
    colliders.forEach(function(other) {
        if (this.checkCollisionWith(x, y, other)) {
            result = other;
            return;
        }
    }, this);
    return result;
}

// BoxCollider.prototype.render = function(cam) {
//     var ctx = cam.ctx;
//     ctx.save();
//     var go = this.gameObject;
//     var x = go.x - cam.x;//(0.5 + go.x - cam.x) << 0;
//     var y = go.y - cam.y;//(0.5 + go.y - cam.y) << 0;
//     ctx.translate(x, y);
//     ctx.restore();
// }
function BoxCollider(gameObject) {
    Collider.call(this, gameObject);
    this.bounds = new Rect(0, 0, 0, 0);
}

BoxCollider.prototype = Object.create(Collider.prototype);

BoxCollider.prototype.checkCollisionWith = function(x, y, other) {
    var x1 = x - this.xOff;
    var y1 = y - this.yOff;
    var x2 = other.gameObject.x - other.xOff;
    var y2 = other.gameObject.y - other.yOff;

    if (x1+this.bounds.left > x2+other.bounds.right) {
        return false;
    }
    if (y1+this.bounds.up > y2+other.bounds.down) {
        return false;
    }
    if (x2+other.bounds.left > x1+this.bounds.right) {
        return false;
    }
    if (y2+other.bounds.up > y1+this.bounds.down) {
        return false;
    }
    return true;
}

BoxCollider.prototype.collisionAt = function(x, y, gameObject) {
    var colliders = Engine.currScene.colliders[gameObject];
    for (var i = 0; i < colliders.length; i++) {
        var other = colliders[i];
        if (this.checkCollisionWith(x, y, other)) {
            return other;
        }
    }
    return null;
}
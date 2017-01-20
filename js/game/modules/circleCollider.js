function CircleCollider(go) {
    Collider.call(this, go);
    this.radius = 0;
    this.layer = 0;
    this.id = Physics.colliders.length;
}

CircleCollider.prototype = Object.create(Collider.prototype);

CircleCollider.prototype.checkCollision = function(other) {
    var p1 = Math.pow(other.gameObject.x - this.gameObject.x, 2);
    var p2 = Math.pow(other.gameObject.y - this.gameObject.y, 2);
    var dist = Math.pow(this.radius + other.radius, 2);
    return p1 + p2 <= dist;
}
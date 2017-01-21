function Collider(gameObject) {
    Module.call(this, gameObject);
    this.xOff = 0;
    this.yOff = 0;
}

Collider.prototype = Object.create(Module.prototype);

Collider.prototype.init = function() {
    var collList = Engine.currScene.colliders;
    if (collList[this.gameObject.name] == undefined) {
        collList[this.gameObject.name] = [];
    }
    collList[this.gameObject.name].push(this);
}

Collider.prototype.collisionAt = function(x, y, gameObject) {
    console.log("METHOD NOT IMPLEMENTED!");
}
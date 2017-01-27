var Scene = (function () {
    function Scene(width, height) {
        this.camera = new Camera(Engine.canvas);
        this.width = width;
        this.height = height;
        this.updaters = new List();
        this.renderers = [];
    }
    Scene.prototype.updateAll = function () {
        this.updaters.forEach(function (upd) {
            upd.update();
        }, this);
    };
    return Scene;
}());
log("Loading scenes...");
//# sourceMappingURL=Scene.js.map
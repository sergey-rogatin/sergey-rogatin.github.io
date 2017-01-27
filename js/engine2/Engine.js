var Engine = (function () {
    function Engine() {
    }
    Engine.loadSprite = function (url) {
        var spr = new Image();
        spr.src = workingDir + url;
        var loadIndex = this.loadQueue.push(spr);
        spr.onload = function () {
            Engine.onResourceLoaded(loadIndex);
        };
        log("Loading " + url);
        return spr;
    };
    Engine.onResourceLoaded = function (loadIndex) {
        this.loadQueue.remove(loadIndex);
        if (this.loadQueue.length == 0) {
            log("All resources loaded!");
            Engine.start();
        }
    };
    return Engine;
}());
Engine.time = 0; //frames since the game started
//what happens every frame
Engine.loop = function () {
    Engine.scene.updateAll();
    Engine.scene.camera.drawAll();
    Input.resetKeys();
    Engine.time++;
    requestAnimationFrame(Engine.loop);
};
//kicks off the engine
Engine.start = function () {
    requestAnimationFrame(Engine.loop);
};
Engine.canvas = document.getElementById("game");
Engine.loadQueue = new List();
log("Loading engine...");
//# sourceMappingURL=Engine.js.map
var Engine = {};

Engine.fps = 30;
Engine.currScene = null;
Engine.lastFrameTime = 0;

Engine.canvas = document.getElementById("game");
Engine.ctx = Engine.canvas.getContext("2d");

Engine.loop = function(timestamp) {
    //update objects and draw them
    var objArr = Engine.currScene.gameObjects;
    for (var objType in objArr) {
        var objList = objArr[objType];
        objList.forEach(function(o) {
            o.onUpdate();
        });
    }

    Engine.ctx.fillStyle = "black";
    Engine.ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height);
    
    Engine.currScene.renderers.forEach(function(rend) {
        rend.render(Engine.ctx);
    });
    
    Input.resetKeys();
    
    requestAnimationFrame(Engine.loop);
}

Engine.start = function() {
    requestAnimationFrame(Engine.loop);
}

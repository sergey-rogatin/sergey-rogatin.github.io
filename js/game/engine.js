var Engine = {};

Engine.currScene = null;
Engine.lastFrameTime = 0;

var canvas = document.getElementById("game");
Engine.mainCamera = new Camera(canvas);

Engine.loop = function(timestamp) {
    //update objects and draw them
    var objArr = Engine.currScene.gameObjects;
    for (var objType in objArr) {
        var objList = objArr[objType];
        objList.forEach(function(o) {
            o.onUpdate();
        });
    }
    
    Engine.mainCamera.draw();
    
    Input.resetKeys();
    
    requestAnimationFrame(Engine.loop);
}

Engine.start = function() {
    requestAnimationFrame(Engine.loop);
}

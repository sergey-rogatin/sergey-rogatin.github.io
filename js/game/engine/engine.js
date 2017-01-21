var Engine = {};

Engine.currScene = null;
Engine.lastFrameTime = 0;

var canvas = document.getElementById("game");
Engine.mainCamera = new Camera(canvas);

Engine.time = 0;

var prevTime = 0;

Engine.loop = function(timestamp) {
    //update objects and draw them
    var objArr = Engine.currScene.gameObjects;
    for (var objType in objArr) {
        var objList = objArr[objType];
        objList.forEach(function(o) {
            //console.log("updating " + o.name);
            o.onUpdate();
        });
    }
    
    Engine.mainCamera.draw();
    Input.resetKeys();  
    requestAnimationFrame(Engine.loop);

    Engine.time++;
}

Engine.start = function() {
    requestAnimationFrame(Engine.loop);
}
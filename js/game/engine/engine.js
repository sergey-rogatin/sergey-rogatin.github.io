//Engine is the object that updates the game state every animation frame
let Engine = {};
var canvas = document.getElementById("game");

Engine.time = 0; //number of frames since game start
Engine.currScene = null; //the scene holds all of gameObjects and their modules
Engine.mainCamera = new Camera(canvas); //main camera of the scene

//Rest is used by the engine

Engine.loop = function(timestamp) {
    //update objects and particles every frame
    var objArr = Engine.currScene.gameObjects;
    for (var objType in objArr) {
        var objList = objArr[objType];
        objList.forEach(function(o) {
            o.onUpdate();
        });
    } 
    Engine.mainCamera.draw(); //the main camera renders all of the objects
    Input.resetKeys(); //resetting pressed and released keys
    requestAnimationFrame(Engine.loop); //start next animation frame
    Engine.time++;
}

//Kicks off the engine. Starts automatically after all resources are loaded by Loader
Engine.start = function() {
    requestAnimationFrame(Engine.loop);
}
//Loads up all of the objects before starting the engine
let Loader = {};
Loader.loadQueue = [];

//Load a sprite for a gameObject renderer
Loader.loadSprite = function(url, width, height) {
    var img = new Image();
    img.contentType = "sprite";
    img.width = width;
    img.height = height;
    Loader.enqueue(img);
    img.src = url;
    return img;
}

//Load a sound to play
Loader.loadSound = function(url) {
    var snd = new Audio(url);
    snd.contentType = "sound";
    //Loader.enqueue(snd);
    return snd;
}

//Puts a loading object into a queue
Loader.enqueue = function(res) {
    res.hash = HashGen.get();
    if (res.contentType == "sprite") {
        Loader.loadQueue.push(res.hash);
        res.onload = () => {
            dequeue(res);
        }
    }
}

//Removes an object that has finished loading from the queue.
//If the queue is empty, start the engine
function dequeue(res) {
    var pos = Loader.loadQueue.indexOf(res.hash);
    if (pos >= 0) {
        Loader.loadQueue.splice(pos, 1);
        console.log("Loading "+res.src+"...");
    }
    if (Loader.loadQueue.length == 0) {
        console.log("Game loaded!");
        Engine.start();
    }
    res.oncanplaythrough = null;
}
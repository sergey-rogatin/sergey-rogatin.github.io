var Loader = {};

Loader.loadQueue = [];

Loader.loadSprite = function(url, width, height) {
    var img = new Image();
    img.contentType = "sprite";
    img.width = width;
    img.height = height;
    Loader.enqueue(img);
    img.src = url;
    return img;
}

Loader.loadSound = function(url) {
    var snd = new Audio(url);
    snd.contentType = "sound";
    Loader.enqueue(snd);
    return snd;
}

Loader.enqueue = function(res) {
    res.hash = HashGen.get();
    Loader.loadQueue.push(res.hash);

    if (res.contentType == "sprite") {
        res.onload = () => {
            dequeue(res);
        }
    }

    if (res.contentType == "sound") {
        res.addEventListener("canplaythrough", () => {
            dequeue(res);
        })
    }
    
}

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
}
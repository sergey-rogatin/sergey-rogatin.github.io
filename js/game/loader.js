var Loader = {};

Loader.loadQueue = [];

Loader.loadSprite = function(url) {
    var img = new Image();
    Loader.enqueue(img);
    img.src = url;
    return img;
}

Loader.loadSound = function(url) {
    var snd = new Audio(url);
    //Loader.enqueue(snd);
    return snd;
}

Loader.enqueue = function(res) {
    res.hash = HashGen.get();
    Loader.loadQueue.push(res.hash);

    res.onload = () => {
        var pos = Loader.loadQueue.indexOf(res.hash);
        if (pos >= 0) {
            Loader.loadQueue.splice(pos, 1);
            console.log("Loading "+res.src+"...");
        }
        if (Loader.loadQueue.length == 0) {
            console.log("Everything loaded!");
            Engine.start();
        }
    }
}
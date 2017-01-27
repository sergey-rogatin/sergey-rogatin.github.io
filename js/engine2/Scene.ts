class Scene {
    camera: Camera;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.camera = new Camera(Engine.canvas);
        this.width = width;
        this.height = height;
        this.updaters = new List<Updatable>();
        this.renderers = [];
    }

    renderers: List<Drawable>[];
    updaters: List<Updatable>;

    updateAll() {
        this.updaters.forEach((upd) => {
            upd.update();
        }, this);
    }
}

interface Drawable {
    draw();
}

interface Updatable {
    update();
}

log("Loading scenes...");
abstract class Engine {    
    static time: number = 0; //frames since the game started

    //what happens every frame
    private static loop = () => {
        Engine.scene.updateAll();
        Engine.scene.camera.drawAll();
        Input.resetKeys();
        Engine.time++;
        requestAnimationFrame(Engine.loop);
    }

    //kicks off the engine
    static start = () => {
        requestAnimationFrame(Engine.loop);
    }

    static canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
    static scene: Scene;

    static loadSprite(url: string) {
        let spr = new Image();
        spr.src = workingDir + url;
        let loadIndex = this.loadQueue.push(spr);
        spr.onload = () => {
            Engine.onResourceLoaded(loadIndex);
        }
        log("Loading " + url);
        return spr;
    }

    private static onResourceLoaded(loadIndex: ListNode<any>) {
        this.loadQueue.remove(loadIndex);
        if (this.loadQueue.length == 0) {
            log("All resources loaded!");
            Engine.start();
        }
    }

    private static loadQueue = new List<any>();
}

log("Loading engine...");
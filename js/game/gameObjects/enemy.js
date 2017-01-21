var enemy = new GameObject("oEnemy");
enemy.rend = enemy.addModule(ModuleType.renderer);
enemy.rend.sprite = Loader.loadSprite("img/game/rect.png");
enemy.collider = enemy.addModule(ModuleType.boxCollider);
enemy.collider.bounds = new Rect(0, 0, 32, 32);
enemy.rend.xOff = -16;
enemy.rend.yOff = -16;
enemy.collider.xOff = -16;
enemy.collider.yOff = -16;

enemy.onInit = player.onInit;

enemy.onUpdate = function() {
    var controls = {
        moveRight: true,
        moveUp: false,
        moveLeft: false,
        moveDown: false
    }

    this.moveAndCollide(controls, ["oPlayer"]);

    if (this.x > Engine.mainCamera.canvas.width + 100) {
        this.x = -100;
    }
    // this.x = Math.median(this.x, 0, Engine.canvas.width);
    // this.y = Math.median(this.y, 0, Engine.canvas.height);
}
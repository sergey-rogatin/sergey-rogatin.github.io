var player = new GameObject("oPlayer");

let p = player;
p.addModule(ModuleType.renderer);
p.rend = player.addModule(ModuleType.renderer);
p.rend.sprite = Loader.loadSprite("img/game/rect_yellow.png");
p.rend.xOff = -16;
p.rend.yOff = -16;
p.collider = player.addModule(ModuleType.boxCollider);
p.collider.bounds = new Rect(0, 0, 32, 32);
p.collider.xOff = -16;
p.collider.yOff = -16;

GameObject.prototype.moveAndCollide = function(keys, collideWith) {
    if (keys.moveRight) {
        this.hspd += this.acc;
    }
    if (keys.moveLeft) {
        this.hspd -= this.acc;
    }
    if (keys.moveUp) {
        this.vspd -= this.acc;
    }
    if (keys.moveDown) {
        this.vspd += this.acc;
    }

    if (collideWith != undefined) {
        collideWith.forEach(function(o) {
            var other = this.collider.collisionAt(this.x + this.hspd, this.y, o);
            if (other) {
                while (!this.collider.collisionAt(this.x + Math.sign(this.hspd), this.y, o)) {
                    this.x += Math.sign(this.hspd);
                }
                this.hspd = 0;
            }
            this.x += this.hspd;

            var other = this.collider.collisionAt(this.x, this.y + this.vspd, o);
            if (other) {
                while (!this.collider.collisionAt(this.x, this.y + Math.sign(this.vspd), o)) {
                    this.y += Math.sign(this.vspd);
                }
                this.vspd = 0;
            }
            
            this.y += this.vspd;
        }, this);
    } else {
        this.x += this.hspd;
        this.y += this.vspd;
    }
   
    if (Math.abs(this.hspd) >= this.frict) {
        this.hspd -= this.frict * Math.sign(this.hspd);
    } else {
        this.hspd = 0;
    }

    if (Math.abs(this.vspd) >= this.frict) {
        this.vspd -= this.frict * Math.sign(this.vspd);
    } else {
        this.vspd = 0;
    }

    var spdLen = Math.sqrt(Math.pow(this.hspd, 2) + Math.pow(this.vspd, 2));
    if (spdLen > this.maxSpd) {
        this.hspd *= 1/spdLen * this.maxSpd;
        this.vspd *= 1/spdLen * this.maxSpd;
    }
}

player.onInit = function() {
    this.acc = 0.2;
    this.hspd = 0;
    this.vspd = 0;
    this.frict = 0.05;
    this.maxSpd = 4;

    this.rend = this.getModule(ModuleType.renderer);
    this.collider = this.getModule(ModuleType.boxCollider);

    this.cam = Engine.mainCamera;
}

player.onUpdate = function() {
    var controls = {};
    controls.moveRight = Input.getKeyPressed(KeyCode.right);
    controls.moveLeft = Input.getKeyPressed(KeyCode.left);
    controls.moveUp = Input.getKeyPressed(KeyCode.up);
    controls.moveDown = Input.getKeyPressed(KeyCode.down);

    var zoomInKey = Input.getKeyPressed(KeyCode.page_up);
    var zoomOutKey = Input.getKeyPressed(KeyCode.page_down);

    this.moveAndCollide(controls, ["oEnemy"]);

    this.cam.follow(this);

    this.x = Math.median(this.x, 0, Engine.currScene.width);
    this.y = Math.median(this.y, 0, Engine.currScene.height);

    if (zoomInKey) {
        this.cam.setZoom(this.cam.zoom + 0.02);
    }

    if (zoomOutKey) {
        this.cam.setZoom(this.cam.zoom - 0.02);
    }
}
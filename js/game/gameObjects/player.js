var player = new GameObject("oPlayer");
player.addModule(ModuleType.renderer);
player.rend = player.addModule(ModuleType.renderer);
player.rend.sprite = loadSprite("img/game/rect_yellow.png");
player.rend.xOff = -16;
player.rend.yOff = -16;
player.collider = player.addModule(ModuleType.boxCollider);
player.collider.bounds = new Rect(0, 0, 32, 32);
player.collider.xOff = -16;
player.collider.yOff = -16;

player.onInit = function() {
    this.acc = 0.2;
    this.hspd = 0;
    this.vspd = 0;
    this.frict = 0.05;
    this.maxSpd = 4;

    this.rend = this.getModule(ModuleType.renderer);
    this.collider = this.getModule(ModuleType.boxCollider);
}

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

player.onUpdate = function() {
    var controls = {};
    controls.moveRight = Input.getKeyPressed(KeyCode.right);
    controls.moveLeft = Input.getKeyPressed(KeyCode.left);
    controls.moveUp = Input.getKeyPressed(KeyCode.up);
    controls.moveDown = Input.getKeyPressed(KeyCode.down);

    this.moveAndCollide(controls, ["oEnemy"]);

    this.x = Math.median(this.x, 0, Engine.canvas.width);
    this.y = Math.median(this.y, 0, Engine.canvas.height);
}
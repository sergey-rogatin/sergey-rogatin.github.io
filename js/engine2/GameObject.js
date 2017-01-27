var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(pos) {
        this.pos = pos;
        this.scale = new Vector(1, 1);
        this.angle = 0;
        this.updateIndex = Engine.scene.updaters.push(this);
        this.layer = 0;
        if (Engine.scene.renderers[this.layer] == undefined) {
            Engine.scene.renderers[this.layer] = new List();
        }
        this.drawIndex = Engine.scene.renderers[this.layer].push(this);
    }
    GameObject.prototype.update = function () { };
    GameObject.prototype.drawSelf = function () {
        drawSprite(this.sprite, this.pos, this.spriteOff, this.alpha, this.angle, this.scale);
    };
    GameObject.prototype.draw = function () {
        this.drawSelf();
    };
    GameObject.prototype.destroy = function () {
        Engine.scene.updaters.remove(this.updateIndex);
        Engine.scene.renderers[this.layer].remove(this.drawIndex);
    };
    GameObject.prototype.setLayer = function (layer) {
        Engine.scene.renderers[this.layer].remove(this.drawIndex);
        this.drawIndex = Engine.scene.renderers[layer].push(this);
        this.layer = layer;
    };
    return GameObject;
}());
var sprPlayer = Engine.loadSprite("/js/resources/sprites/player.png");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(pos) {
        var _this = _super.call(this, pos) || this;
        _this.sprite = sprPlayer;
        _this.spriteOff = new Vector(16, 16);
        _this.sparkles = new ParticleEmitter();
        _this.sparkles.setAngle(0, 0, 0);
        _this.sparkles.setLayer(1);
        _this.sparkles.setShape("box");
        _this.sparkles.setAlpha(0.6, 0.8, -0.01);
        _this.sparkles.setScale(new Vector(10, 10), 1, 4, -0.1);
        _this.sparkles.setSpeed(2, 4, -0.05);
        _this.sparkles.setColor(new Color(255, 100, 40), new Color(50, 255, 30));
        return _this;
    }
    Player.prototype.update = function () {
        this.sparkles.burst(this.pos, 5);
    };
    Player.prototype.draw = function () {
        this.drawSelf();
    };
    return Player;
}(GameObject));
log("Loading game objects...");
//# sourceMappingURL=GameObject.js.map
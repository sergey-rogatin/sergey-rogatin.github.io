//GameObjects are your main tools for creating the game 
//They can be extended by modules with different functions
function GameObject(name) {
    this.name = name;

    this.onInit = function() {};
    this.onUpdate = function() {};
}

//Puts a copy of a GameObject into the currScene
GameObject.prototype.instantiate = function(x, y) {
    var inst = new GameObject(this.name);
    inst.x = x;
    inst.y = y;
    inst.angle = 0;
    inst.xScale = 1;
    inst.yScale = 1;
    inst.onInit = this.onInit;
    inst.onUpdate = this.onUpdate;
    inst.modules = [];

    let objList = Engine.currScene.gameObjects;
    if (objList[this.name] == undefined) {
        objList[this.name] = new List();
    }
    inst.index = objList[this.name].push(inst);
    inst.onInit();
    return inst;
}

//Adds a module to a GameObject
GameObject.prototype.addModule = function(moduleId) {
    var module;
    switch (moduleId) {
        case ModuleType.renderer: 
            module = new Renderer(this);
            break;
        case ModuleType.circleCollider:
            module = new CircleCollider(this);
            break;
        case ModuleType.boxCollider:
            module = new BoxCollider(this);
            break;
        case ModuleType.particleEmitter: 
            module = new ParticleEmitter(this);
            break;
        default: return;
    }
    module.type = moduleId;
    this.modules.push(module);
    module.init();
    return module;
}

//returns a module from GameObjects module list
GameObject.prototype.getModule = function(moduleId) {
    for (let i = 0; i < this.modules.length; i++) {
        let m = this.modules[i];
        if (m.type == moduleId) {
            return m;
        }
    }
    return null;
}

//destroys a GameObject
GameObject.prototype.destroy = function() {
    this.modules.forEach(function(m) {
        m.destroy();
    }, this);

    Engine.currScene.gameObjects[this.name].remove(this.index);
}
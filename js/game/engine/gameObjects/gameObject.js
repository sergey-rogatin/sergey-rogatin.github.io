function GameObject(name) {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.xScale = 1;
    this.yScale = 1;
    this.name = name;

    this.onInit = function() {};
    this.onUpdate = function() {};

    this.modules = [];
}

GameObject.prototype.instantiate = function(x, y) {
    var inst = new GameObject(this.name);
    inst.onInit = this.onInit;
    inst.onUpdate = this.onUpdate;
    inst.x = x;
    inst.y = y;
    inst.xScale = this.xScale;
    inst.yScale = this.yScale;

    this.modules.forEach(function(module) {
        var copyMod = inst.addModule(module.type);
        for (var key in module) {
            if (key == "gameObject" || !module.hasOwnProperty(key)) {
                continue;
            }
            copyMod[key] = module[key];
        }
        copyMod.init();
    }, this);

    var objList = Engine.currScene.gameObjects;
    if (objList[this.name] == undefined) {
        objList[this.name] = new List();
    }

    inst.index = objList[this.name].push(inst);

    inst.onInit();

    return inst;
}

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
        default: return;
    }
    module.type = moduleId;
    this.modules[moduleId] = module;
    return module;
}

GameObject.prototype.getModule = function(moduleId) {
    return this.modules[moduleId];
}

GameObject.prototype.destroy = function() {
    this.modules.forEach(function(m) {
        m.destroy();
    }, this);

    Engine.currScene.gameObjects[this.name].remove(this.index);
}
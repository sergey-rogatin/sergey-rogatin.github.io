function Scene(name, width, height) {
    this.name = name;
    this.gameObjects = {};
    this.colliders = {};
    this.renderers = new List();

    this.width = width;
    this.height = height;
}
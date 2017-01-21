function Scene(name, width, height) {
    this.name = name;
    this.gameObjects = {};
    this.colliders = {};
    this.renderers = [];

    this.width = width;
    this.height = height;
}
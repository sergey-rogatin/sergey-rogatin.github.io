//Camera is responsible for drawing renderers on the canvas.
//Cameras can be moved and zoomed in/out
function Camera(canvas) {
    this.x = 0;
    this.y = 0;
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;

    this.showWidth = canvas.width;
    this.showHeight = canvas.height;
    this.ctx = canvas.getContext("2d");

    this.bgColor = "black";
    this.ctx.fillStyle = this.bgColor;
    this.background = null;

    this.zoom = 1;
}

//Change the camera zoom
//bigger = closer
Camera.prototype.setZoom = function(zoom) {
    this.zoom = zoom;
    this.width = this.showWidth/zoom;
    this.height = this.showHeight/zoom;
}

//Change camera background color
Camera.prototype.setBgColor = function(color) {
    this.bgColor = color;
    this.ctx.fillStyle = color;
}

//The rest is used by engine

//draws all the renderers of the currScene
Camera.prototype.draw = function() {
    var renderers = Engine.currScene.renderers;
   
    this.ctx.save();
    this.ctx.scale(this.zoom, this.zoom);
    this.clr();

    renderers.forEach(function(layer) {
        layer.forEach(function(rend) {
            rend.render(this);
        }, this);
    }, this);

    this.ctx.restore();
}

//Clears screen with color/background if any
Camera.prototype.clr = function() {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height); 

    if (this.background != null) {
        this.ctx.drawImage(this.background, -this.x, -this.y);
    }
}

//follow a GameObject
Camera.prototype.follow = function(go) {
    this.x = go.x - this.showWidth/2/this.zoom;
    this.y = go.y - this.showHeight/2/this.zoom;

    this.limit();
}

//limits the camera by currScene's bounds
Camera.prototype.limit = function() {
    var sc = Engine.currScene;

    if (this.x + this.width > sc.width) {
        this.x = sc.width - this.width;
    }
    if (this.y + this.height > sc.height) {
        this.y = sc.height - this.height;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y < 0) {
        this.y = 0;
    }
}
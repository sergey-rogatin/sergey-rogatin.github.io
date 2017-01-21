function Camera(canvas) {
    this.x = 0;
    this.y = 0;
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext("2d");

    this.bgColor = "black";
    this.ctx.fillStyle = this.bgColor;

    this.background = null;
}

Camera.prototype.setColor = function(color) {
    this.bgColor = color;
    this.ctx.fillStyle = color;
}

Camera.prototype.draw = function() {
    var renderers = Engine.currScene.renderers;
   
    this.clr();

    renderers.forEach(function(rend) {
        rend.render(this);
    }, this);
}

Camera.prototype.clr = function() {
    this.ctx.fillRect(
        0, 
        0,
        this.width,
        this.height
    ); 

    if (this.background != null) {
        this.ctx.drawImage(
            this.background,
            -this.x,
            -this.y
        );
    }  
}

//follow a GameObject
Camera.prototype.follow = function(go) {
    this.x = go.x - this.width/2;
    this.y = go.y - this.height/2;

    this.limit();
}

Camera.prototype.limit = function() {
    var sc = Engine.currScene;

    if (this.x < 0) {
        this.x = 0;
    }
    if (this.x + this.width > sc.width) {
        this.x = sc.width - this.width;
    }
    if (this.y < 0) {
        this.y = 0;
    }
    if (this.y + this.height > sc.height) {
        this.y = sc.height - this.height;
    }
}
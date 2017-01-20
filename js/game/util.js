function Rect(x, y, width, height) {
    this.left = x;
    this.up = y;
    this.right = x + width;
    this.down = y + height;
}

function loadSprite(url) {
    var img = new Image();
    img.src = url;
    return img;
}

Math.median = function(a, b, c) {
    return (a <= b) 
    ? ((b <= c) ? b : ((a < c) ? c : a)) 
    : ((a <= c) ? a : ((b < c) ? c : b));
}

Math.degToRad = Math.PI/180;
function Rect(x, y, width, height) {
    this.left = x;
    this.up = y;
    this.right = x + width;
    this.down = y + height;
}

Math.median = function(a, b, c) {
    return (a <= b) 
    ? ((b <= c) ? b : ((a < c) ? c : a)) 
    : ((a <= c) ? a : ((b < c) ? c : b));
}

Math.degToRad = Math.PI/180;

var HashGen = {next: 0};

HashGen.get = function() {
    this.next++;
    return this.next;
}
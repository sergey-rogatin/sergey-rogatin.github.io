function Rect(x, y, width, height) {
    this.left = x;
    this.up = y;
    this.right = x + width;
    this.down = y + height;
}

median = function(a, b, c) {
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

function cos(angle) {
    return Math.cos(angle*Math.degToRad);
}

function sin(angle) {
    return Math.sin(angle*Math.degToRad);
}

function abs(num) {
    return Math.abs(num);
}

function sqrt(num) {
    return Math.sqrt(num);
}

function pow(a, b) {
    return Math.pow(a, b);
}

function sign(a) {
    return Math.sign(a)
}

function List() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

List.prototype.push = function(val) {
    var newNode = {};
    newNode.val = val;
    newNode.next = null;
    newNode.prev = this.last;

    if (this.first == null) {
        this.first = newNode;
        this.last = newNode;
        this.length++;
        return newNode;
    }

    this.last.next = newNode;
    this.last = newNode;

    this.length++;
    return newNode;
}

List.prototype.insertBefore = function(node, val) {
    var newNode = {};
    newNode.val = val;
    newNode.next = node;
    newNode.prev = node.prev;

    if (node.prev != null) {
        node.prev.next = newNode;
    } else {
        this.first = newNode;
    }

    node.prev = newNode;

    this.length++;
    return newNode;
}

List.prototype.remove = function(node) {
    var next = node.next;
    var prev = node.prev;

    if (prev == null) {
        this.first = next;
    } else {
        prev.next = next;
    }
    if (next == null && prev == null) {
        this.first = null;
    }
    if (next == null) {
        this.last = prev;
    } else {
        next.prev = prev;
    }

    this.length--;
}

List.prototype.forEach = function(handler, that) {
    var curr = this.first;
    while (curr != null) {
        handler.call(that, curr.val);
        curr = curr.next;
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function playSound(sound, vol = 1) {
    let newSnd = new Audio(sound.src);
    newSnd.volume = Engine.volume*vol;
    newSnd.play();
}
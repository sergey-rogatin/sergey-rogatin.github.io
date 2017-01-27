var abs = Math.abs;
var sqrt = Math.sqrt;
var pow = Math.pow;
var sqr = function (x) { return x * x; };
var sign = function (a) {
    if (a > 0) {
        return 1;
    }
    else if (a < 0) {
        return -1;
    }
    else {
        return 0;
    }
};
var degToRad = Math.PI / 180;
var sin = function (a) { return Math.sin(a * degToRad); };
var cos = function (a) { return Math.cos(a * degToRad); };
var loc = window.location.pathname;
var workingDir = loc.substring(0, loc.lastIndexOf('/'));
var Vector = (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };
    Vector.prototype.sub = function (other) {
        return new Vector(this.x - other.x, this.y - other.y);
    };
    Vector.prototype.mult = function (n) {
        return new Vector(this.x * n, this.y * n);
    };
    Vector.prototype.mod = function () {
        return sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.norm = function () {
        var mod = this.mod();
        if (mod == 0) {
            return new Vector(0, 0);
        }
        return this.mult(1 / mod);
    };
    Vector.prototype.translate = function (other) {
        this.x += other.x;
        this.y += other.y;
    };
    Vector.prototype.toString = function () {
        return this.x + ", " + this.y;
    };
    return Vector;
}());
var debugOn = true;
function log() {
    var text = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        text[_i] = arguments[_i];
    }
    if (debugOn) {
        console.log(text);
    }
}
var List = (function () {
    function List() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    List.prototype.push = function (val) {
        var prev = this.last;
        var newNode = new ListNode(val, prev, null);
        if (prev == null) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return newNode;
        }
        this.last = newNode;
        prev.next = newNode;
        this.length++;
        return newNode;
    };
    List.prototype.remove = function (node) {
        var prev = node.prev;
        var next = node.next;
        if (prev == null) {
            this.first = next;
        }
        else {
            prev.next = next;
        }
        if (next == null) {
            this.last = prev;
        }
        else {
            next.prev = prev;
        }
        this.length--;
    };
    List.prototype.forEach = function (callback, that) {
        var curr = this.first;
        while (curr != null) {
            callback.call(that, curr.val);
            curr = curr.next;
        }
    };
    return List;
}());
var ListNode = (function () {
    function ListNode(val, prev, next) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
    return ListNode;
}());
var Rect = (function () {
    function Rect(left, top, right, bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
    return Rect;
}());
var Color = (function () {
    function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.str = this.toString();
    }
    Color.prototype.toString = function () {
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    };
    Color.prototype.add = function (other) {
        return new Color(this.r + other.r, this.g + other.g, this.b + other.b);
    };
    return Color;
}());
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
log("Loading utitlities...");
//# sourceMappingURL=Util.js.map
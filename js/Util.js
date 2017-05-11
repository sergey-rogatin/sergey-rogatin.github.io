//math stuff
const sqrt = Math.sqrt;
const sqr = (x) => x*x;
const degToRad = Math.PI/180;
const sin = (x) => Math.sin(x*degToRad);
const cos = (x) => Math.cos(x*degToRad);
const pow = Math.pow;
const abs = Math.abs;
const sign = (x) => x < 0 ? -1 : 1;
const max = Math.max;
const round = Math.round;

const randomRange = (a, b) => Math.random()*(b - a) + a;
const randomInt = (a, b) => Math.round(randomRange(a, b));
const randomPick = (...items) => items[randomInt(0, items.length)];

//object composition
function compose(target, components, def = {}) {
    let res = merge(target, def);
    components.forEach(c =>  {
        if (target.components && (target.components[c.name] !== undefined)) {
            return;
        }
        merge(res, c(res))
    });
    return res;
}

//merging objects
function merge(target, ...sources) {
    sources.forEach(source => {
        if (!source) {
            return;
        }
        Object.keys(source).forEach(key => {
            let sourceVal = source[key];
            if (isObject(sourceVal)) {
                if (target[key] === undefined) {
                    target[key] = Object.create(sourceVal);
                }
                target[key] = merge(target[key], sourceVal);
            } else if (isArray(sourceVal)) {
                if (target[key] === undefined) {
                    target[key] = sourceVal.slice();
                }
            } else {
                if (target[key] === undefined) {
                    target[key] = sourceVal;
                }
            }
        });
    });
    return target;
}

function isObject(obj) {
    return !!(obj && obj !== null && typeof(obj) === 'object');
}

const isArray = Array.isArray;

//clone object
Object.prototype.clone = function(obj) {
    return merge({}, obj);
}


//Hashset
function HashSet() {
    this.keys = {};
    this.length = 0;
    this.lastHash = 0;
}
HashSet.prototype.push = function(key, value) {
    this.keys[key] = value;
    this.length++;
    return key;
}
HashSet.prototype.remove = function(key) {
    delete this.keys[key];
    this.length--;
}
HashSet.prototype.getHash = function() {
    return this.lastHash++;
}
HashSet.prototype.forEach = function(fn, that) {
    Object.keys(this.keys).forEach(key => fn(this.keys[key]));
}


// Event emitter
function EventEmitter() {
    this.subscribers = new LinkedList();
    this.subscribe = (sub) => this.subscribers.push(sub);
    this.unsubscribe = (index) => this.subscribers.remove(index);
    this.call = (arg) => this.subscribers.forEach(sub => sub(arg));
}


//Doubly linked list
function LinkedList() {
    this.first = null;
    this.last = null;
    this.length = 0;
}
function ListNode(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}
LinkedList.prototype.push = function(value) {
    let newNode = new ListNode(value, this.last, null);

    if (this.first == null) {
        this.first = newNode;
    } else {
        this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return newNode;
}
LinkedList.prototype.remove = function(toRemove) {
    let prev = toRemove.prev;
    let next = toRemove.next;

    if (prev != null) {
        prev.next = next;
    } else {
        this.first = next;
    }

    if (next != null) {
        next.prev = prev;
    } else {
        this.last = prev;
    }
    this.length--;
}
LinkedList.prototype.forEach = function(callback, that = this) {
    for (let curr = this.last; curr != null; curr = curr.prev) {
        callback.call(that, curr.value);
    }
}


//Vector2
function Vec2(x, y) {
    this.x = x,
    this.y = y
}

//prototype
Vec2.prototype.len = function() { 
    return sqrt(sqr(this.x) + sqr(this.y));
}
Vec2.prototype.unit = function() {
    let l = this.len();
    if (l == 0) {
        return new Vec2(0, 0);
    }
    return new Vec2(this.x/l, this.y/l);
}
Vec2.prototype.add = function(other) {
    return new Vec2(this.x + other.x, this.y + other.y);
}
Vec2.prototype.mult = function(n) {
    return new Vec2(this.x*n, this.y*n);
}
Vec2.prototype.copy = function() {
    return new Vec2(this.x, this.y);
}
Vec2.prototype.dot = function(other) {
    return this.x*other.x + this.y*other.y;
}
Vec2.prototype.proj = function(other) {
    return other.mult(this.dot(other)/sqr(other.len()));
}
Vec2.prototype.draw = function(x, y, color) {
    Engine.ctx.strokeStyle = color;
    Engine.ctx.beginPath();
    Engine.ctx.moveTo(x, y);
    Engine.ctx.lineTo(this.x + x, this.y + y);
    Engine.ctx.stroke();
}
Vec2.prototype.rotate = function(angle) {
    return new Vec2(
        this.x*cos(angle) + this.y*sin(angle),
        this.x*sin(angle) + this.y*cos(angle)
    )
}
Vec2.prototype.normal = function() {
    return new Vec2(-this.y, this.x);
}

//static methods
Vec2.zero = () => {
    return new Vec2(0, 0);
};
Vec2.right = () => {
    return new Vec2(1, 0);
};
Vec2.up = () => {
    return new Vec2(0, 1);
};
Vec2.left = () => {
    return new Vec2(-1, 0);
};
Vec2.down = () => {
    return new Vec2(0, -1);
};


//Stack
function Stack() {
    this.last = null;
    this.length = 0;
}
function StackNode(value, prev) {
    this.value = value;
    this.prev = prev;
}
Stack.prototype.push = function(value) {
    let newNode = new StackNode(value, this.last);
    this.last = newNode;
    this.length++;
};
Stack.prototype.pop = function() {
    if (!this.last) {
        return null;
    }
    let result = this.last.value;
    this.last = this.last.prev;
    this.length--;
    return result;
};
Stack.prototype.peek = function() {
    if (!this.last) {
        return null;
    }
    return this.last.value;
};

//Rect
function Rect(x, y, width, height) {
    this.left = x;
    this.right = x + width;
    this.top = y;
    this.bottom = y + height;
}

//repeat
function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}


//2D arrays
function array2Create(width, height) {
    let result = [];
    for (let i = 0; i < width; i++) {
        result[i] = [];
        for (let j = 0; j < height; j++) {
            result[i][j] = 0;
        }
    }
    result.width = width;
    result.height = height;
    return result;
}

function array2ForEach(array2, fn) {
    for (let i = 0; i < array2.width; i++) {
        for (let j = 0; j < array2.height; j++) {
            fn(array2[i][j], i, j);
        }
    }
}

function array2Rotate(array2, angle) {
    angle = round(angle/90)*90;
    let aCos = round(cos(angle));
    let aSin = round(sin(angle));
    let width = abs(array2.width*aCos - array2.height*aSin);
    let height = abs(array2.width*aSin + array2.height*aCos);

    let result = array2Create(width, height);

    array2ForEach(array2, (item, i, j) => {
        let x = abs(i*aCos - j*aSin);
        let y = abs(i*aSin + j*aCos);
        result[x][y] = item;
    });
    return result;
}



//enum
function enumCreate(...items) {
    let i = 0;
    let e = {};
    items.forEach(item => {
        e[item] = i++;
    });
    return e;
}


//color
function Color(r, g, b, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}
Color.prototype.toString = function() {
    return `rgba(${round(this.r*255)}, ${round(this.g*255)}, ${round(this.b*255)}, ${this.a})`;
}
Color.prototype.toFloat32 = function() {
    return new Float32Array([this.r, this.g, this.b, this.a]);
}
Color.prototype.add = function(other) {
    return new Color(this.r + other.r, this.g + other.g, this.b + other.g, this.a + other.a);
}
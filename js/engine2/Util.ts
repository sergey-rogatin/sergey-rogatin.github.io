const abs = Math.abs;
const sqrt = Math.sqrt;
const pow = Math.pow;
const sqr = (x) => { return x*x };
const sign = (a) => {
    if (a > 0) {
        return 1;
    } else if (a < 0) {
        return -1;
    } else {
        return 0;
    }
}
const degToRad = Math.PI/180;
const sin = (a:number) => { return Math.sin(a * degToRad) };
const cos = (a:number) => { return Math.cos(a * degToRad) };

var loc = window.location.pathname;
const workingDir = loc.substring(0, loc.lastIndexOf('/'));

class Vector {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add(other: Vector) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    sub(other: Vector) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    mult(n: number) {
        return new Vector(this.x*n, this.y*n);
    }

    mod() {
        return sqrt(this.x*this.x + this.y*this.y);
    }

    norm() {
        let mod = this.mod();
        if (mod == 0) {
            return new Vector(0, 0);
        }
        return this.mult(1/mod);
    }

    translate(other: Vector) {
        this.x += other.x;
        this.y += other.y;
    }

    toString() {
        return this.x + ", " + this.y;
    }
}

let debugOn: boolean = true;

function log(...text: any[]) {
    if (debugOn) {
        console.log(text);
    }
}

class List<T> {
    first: ListNode<T> = null;
    last: ListNode<T> = null;
    length: number = 0;

    push(val: T) {
        let prev = this.last;
        let newNode = new ListNode(val, prev, null);
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
    }

    remove(node: ListNode<T>) {
        let prev = node.prev;
        let next = node.next;

        if (prev == null) {
            this.first = next;
        } else {
            prev.next = next;
        }
        
        if (next == null) {
            this.last = prev;
        } else {
            next.prev = prev;
        }
        this.length--;
    }

    forEach(callback: (node: T) => void, that: any) {
        let curr = this.first;
        while(curr != null) {
            callback.call(that, curr.val);
            curr = curr.next;
        }
    }
}

class ListNode<T> {
    next: ListNode<T>;
    prev: ListNode<T>;
    val: any;

    constructor(val: T, prev: ListNode<T>, next: ListNode<T>) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class Rect {
    left: number;
    right: number;
    top: number;
    bottom: number;
    constructor(left: number, top: number, right: number, bottom: number) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
}

class Color {
    r: number;
    g: number;
    b: number;
    str : string;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.str = this.toString();
    }

    private toString() {
        return "rgb("+this.r+","+this.g+","+this.b+")";
    }

    add(other: Color) {
        return new Color(this.r + other.r, this.g + other.g, this.b + other.b);
    }
}

function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

log("Loading utitlities...");
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sceneCtrl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coroutineCtrl__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__physics__ = __webpack_require__(13);









const drawSprite = __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].drawSprite
/* harmony export (immutable) */ __webpack_exports__["g"] = drawSprite;

const drawText = __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].drawText
/* harmony export (immutable) */ __webpack_exports__["l"] = drawText;

const canvasElement = __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].canvasElement
/* unused harmony export canvasElement */


const loadImage = __WEBPACK_IMPORTED_MODULE_0__resources__["a" /* default */].loadImage
/* harmony export (immutable) */ __webpack_exports__["e"] = loadImage;


const vec2 = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].vec2
/* harmony export (immutable) */ __webpack_exports__["c"] = vec2;

const eventEmitter = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].eventEmitter
/* harmony export (immutable) */ __webpack_exports__["o"] = eventEmitter;

const linkedList = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].linkedList
/* unused harmony export linkedList */

const rect = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].rect
/* harmony export (immutable) */ __webpack_exports__["j"] = rect;

const sin = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].sin
/* harmony export (immutable) */ __webpack_exports__["n"] = sin;

const cos = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].cos
/* harmony export (immutable) */ __webpack_exports__["m"] = cos;


const input = __WEBPACK_IMPORTED_MODULE_3__input__["a" /* default */]
/* harmony export (immutable) */ __webpack_exports__["f"] = input;


const setScene = __WEBPACK_IMPORTED_MODULE_4__sceneCtrl__["a" /* default */].setScene
/* harmony export (immutable) */ __webpack_exports__["a"] = setScene;

const getScene = __WEBPACK_IMPORTED_MODULE_4__sceneCtrl__["a" /* default */].getScene
/* harmony export (immutable) */ __webpack_exports__["d"] = getScene;

const scene = __WEBPACK_IMPORTED_MODULE_4__sceneCtrl__["a" /* default */].scene
/* harmony export (immutable) */ __webpack_exports__["b"] = scene;


const entity = __WEBPACK_IMPORTED_MODULE_5__entity__["a" /* default */]
/* harmony export (immutable) */ __webpack_exports__["i"] = entity;


const startCoroutine = __WEBPACK_IMPORTED_MODULE_6__coroutineCtrl__["a" /* default */].startCoroutine
/* harmony export (immutable) */ __webpack_exports__["p"] = startCoroutine;

const stopCoroutine = __WEBPACK_IMPORTED_MODULE_6__coroutineCtrl__["a" /* default */].stopCoroutine
/* harmony export (immutable) */ __webpack_exports__["q"] = stopCoroutine;


const pointInside = __WEBPACK_IMPORTED_MODULE_7__physics__["a" /* default */].pointInside
/* harmony export (immutable) */ __webpack_exports__["k"] = pointInside;

const collisionAtPoint = __WEBPACK_IMPORTED_MODULE_7__physics__["a" /* default */].collisionAtPoint
/* harmony export (immutable) */ __webpack_exports__["h"] = collisionAtPoint;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const degToRad = Math.PI/180
const sin = (x) => Math.sin(x*degToRad)
const cos = (x) => Math.cos(x*degToRad)

const randomRange = (a, b) => Math.random()*(b - a) + a
const randomInt = (a, b) => Math.round(randomRange(a, b))
const randomPick = (...items) => items[randomInt(0, items.length-1)]

//object composition
const compose = (target, components, def = {}) => {
    let res = merge(target, def)
    components.forEach(c =>  {
        merge(res, c(res))
    })
    return res
}

//merging objects
const merge = (target, ...sources) => {
    sources.forEach(source => {
        if (!source) {
            return
        }
        Object.keys(source).forEach(key => {
            let sourceVal = source[key]
            if (isObject(sourceVal)) {
                if (target[key] === undefined) {
                    target[key] = Object.create(sourceVal)
                }
                target[key] = merge(target[key], sourceVal)
            } else if (isArray(sourceVal)) {
                if (target[key] === undefined) {
                    target[key] = sourceVal.slice()
                }
            } else {
                if (target[key] === undefined) {
                    target[key] = sourceVal
                }
            }
        })
    })
    return target
}

const isObject = (obj) => {
    return !!(obj && obj !== null && typeof(obj) === 'object')
}

const isArray = Array.isArray

//clone object
Object.prototype.clone = function(obj) {
    return merge({}, obj)
}


//Hashset
const hashSet = (() => {
    function HashSet() {
        this.items = {}
        this.length = 0
        this.lastHash = 0
    }
    HashSet.prototype.push = function(key, value) {
        this.items[key] = value
        this.length++
        return key
    }
    HashSet.prototype.remove = function(key) {
        delete this.items[key]
        this.length--
    }
    HashSet.prototype.getHash = function() {
        return this.lastHash++
    }
    HashSet.prototype.forEach = function(fn) {
        Object.keys(this.items).forEach(key => fn(this.items[key]))
    }
    return () => new HashSet()
})()


//Doubly linked list
const linkedList = (() => {
    function LinkedList() {
        this.first = null
        this.last = null
        this.length = 0
    }
    function ListNode(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
    LinkedList.prototype.push = function(value) {
        let newNode = new ListNode(value, this.last, null)

        if (this.first == null) {
            this.first = newNode
        } else {
            this.last.next = newNode
        }
        this.last = newNode
        this.length++
        return newNode
    }
    LinkedList.prototype.remove = function(toRemove) {
        let prev = toRemove.prev
        let next = toRemove.next

        if (prev != null) {
            prev.next = next
        } else {
            this.first = next
        }

        if (next != null) {
            next.prev = prev
        } else {
            this.last = prev
        }
        this.length--
    }
    LinkedList.prototype.forEach = function(callback) {
        for (let curr = this.last; curr != null; curr = curr.prev) {
            callback(curr.value, curr)
        }
    }
    LinkedList.prototype.find = function(callback) {
        for (let curr = this.last; curr != null; curr = curr.prev) {
            if (callback(curr.value)) {
                return curr.value
            }
        }
    }
    return () => new LinkedList()
})()

// Event emitter

const eventEmitter = () => {
    let subscribers = linkedList()

    return {
        subscribe: (sub) => subscribers.push(sub),
        unsubscribe: (index) => subscribers.remove(index),
        notify: (...args) => {
            subscribers.forEach(sub => {
                if (sub) {
                    sub(...args)
                }
            })
        }
    }
}


//Vector2
const vec2 = (() => {
    function Vec2(x, y) {
        this.x = x
        this.y = y
    }
    Vec2.prototype.len = function() {
        return Math.sqrt(this.x**2 + this.y**2)
    }
    Vec2.prototype.unit = function() {
        let l = this.len()
        if (l == 0) {
            return new Vec2(0, 0)
        }
        return new Vec2(this.x/l, this.y/l)
    }
    Vec2.prototype.add = function(other) {
        return new Vec2(this.x + other.x, this.y + other.y)
    }
    Vec2.prototype.sub = function(other) {
        return new Vec2(this.x - other.x, this.y - other.y)
    }
    Vec2.prototype.mult = function(n) {
        return new Vec2(this.x*n, this.y*n)
    }
    Vec2.prototype.copy = function() {
        return new Vec2(this.x, this.y)
    }
    Vec2.prototype.dot = function(other) {
        return this.x*other.x + this.y*other.y
    }
    Vec2.prototype.proj = function(other) {
        return other.mult(this.dot(other)/Math.sqr(other.len()))
    }
    Vec2.prototype.rotate = function(angle) {
        return new Vec2(
            this.x*cos(angle) + this.y*sin(angle),
            this.x*sin(angle) + this.y*cos(angle)
        )
    }
    Vec2.prototype.normal = function() {
        return new Vec2(-this.y, this.x)
    }
    Vec2.prototype.translate = function(other) {
        this.x += other.x
        this.y += other.y
    }
    Vec2.prototype.round = function() {
        return new Vec2(Math.round(this.x), Math.round(this.y))
    }

    let result = (x = 0, y = 0) => new Vec2(x, y)
    //static methods
    result.zero = () => {
        return new Vec2(0, 0)
    }
    result.right = () => {
        return new Vec2(1, 0)
    }
    result.up = () => {
        return new Vec2(0, 1)
    }
    result.left = () => {
        return new Vec2(-1, 0)
    }
    result.down = () => {
        return new Vec2(0, -1)
    }
    return result
})()

const rect = (() => {
    function Rect(left, top, right, bottom) {
        this.left = left
        this.top = top
        this.right = right
        this.bottom = bottom
    }
    return (left, top, right, bottom) => new Rect(left, top, right, bottom)
})()

//Stack
const stack = (() => {
    function Stack() {
        this.last = null
        this.length = 0
    }
    function StackNode(value, prev) {
        this.value = value
        this.prev = prev
    }
    Stack.prototype.push = function(value) {
        let newNode = new StackNode(value, this.last)
        this.last = newNode
        this.length++
    }
    Stack.prototype.pop = function() {
        if (!this.last) {
            return null
        }
        let result = this.last.value
        this.last = this.last.prev
        this.length--
        return result
    }
    Stack.prototype.peek = function() {
        if (!this.last) {
            return null
        }
        return this.last.value
    }
    return () => new Stack()
})()

//repeat
const repeat = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn()
    }
}

//enum
const enumCreate = (...items) => {
    let e = {}
    items.forEach((item, i) => {
        e[item] = i
    })
    return Object.freeze(e)
}


//color
const color = (() => {
    function Color(r, g, b, a = 1) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }
    Color.prototype.toString = function() {
        return `rgba(${Math.round(this.r*255)}, ${Math.round(this.g*255)}, ${Math.round(this.b*255)}, ${this.a})`
    }
    Color.prototype.toFloat32 = function() {
        return new Float32Array([this.r, this.g, this.b, this.a])
    }
    Color.prototype.add = function(other) {
        return new Color(this.r + other.r, this.g + other.g, this.b + other.g, this.a + other.a)
    }
    return () => new Color()
})()


//assertions
const assert = (expr) => {
    if (!expr) {
        console.log('Assertion failed!')
    }
}

//vectors and matrices
Array.init = function(length, filler = 0) {
    for (var i = 0, a = new Array(length); i < length;) {
        a[i++] = filler
    }
    return a
}

const mat = (height, width) => {
    let m = []
    for (let i = 0; i < height; i++) {
        m[i] = Array.init(width)
    }
    return m
}

mat.convert = function(source) {
    let height = source.length
    if (height === undefined) {
        return [[source]]
    }
    let width = source[0].length
    if (width === undefined) {
        return [source]
    }
    return source
}

mat.simplify = function(source) {
    let m
    let height = source.length
    let width = source[0].length
    if (height === 1) {
        if (width === 1) {
            m = source[0][0]
        } else {
            m = source[0]
        }
    } else {
        if (width === 1) {
            m = []
            for (let i = 0; i < height; i++) {
                m[i] = source[i][0]
            }
        } else {
            m = source
        }
    }
    return m
}

mat.trans = function(source, simplify = true) {
    source = mat.convert(source)
    let m = []
    for (let i = 0; i < source[0].length; i++) {
        m[i] = []
        for (let j = 0; j < source.length; j++) {
            m[i][j] = source[j][i]
        }
    }
    if (simplify) {
        return mat.simplify(m)
    }
    return m
}

mat.dot = function(m1, m2) {
    m1 = mat.convert(m1, false)
    m2 = mat.convert(m2, false)

    if (m1[0].length === m2[0].length) {
        if (m2.length === 1) {
            m2 = mat.trans(m2)
        } else if (m1.length === 1) {
            m1 = mat.trans(m1)
        }
    }

    if (m1.length !== m2.length) {
        if (m1.length === m2[0].length) {
            let temp = m1
            m1 = m2
            m2 = temp
        } else {
            console.log('Incorrect mat width or length!')
        }
    }

    let m = []

    for (let i = 0; i < m1.length; i++) {
        m[i] = []
        for (let j = 0; j < m2[0].length; j++) {
            m[i][j] = 0
            for (let k = 0; k < m1[0].length; k++) {
                m[i][j] += m1[i][k]*m2[k][j]
            }
        }
    }
    return mat.simplify(m)
}

let deferStack = stack()

const defer = (fn) => {
    deferStack.push(fn)
}

const out = (value) => {
    for (let next = deferStack.pop(); next !== null; next = deferStack.pop()) {
        next()
    }
    return value
}

const tree = (state = {}) => {
    return merge(state, {
        root: null,
        node: (value) => ({
            value,
            parent: null,
            children: []
        }),
        addChild: (parent, child) => {
            if (child.children === undefined) {
                child = state.node(child)
            }
            if (!parent) {
                state.root = child
                return child
            }
            parent.children.push(child)
            child.parent = parent
            return child
        },
        forwardPass: (fn) => {
            const forw = (n) => {
                if (n === null) {
                    return
                }
                fn(n.value)
                n.children.forEach(ch => {
                    forw(ch)
                })
            }
            forw(state.root)
        },
        backwardPass: (fn) => {
            const backw = (n) => {
                if (n === null) {
                    return
                }
                n.children.forEach(ch => {
                    backw(ch)
                })
                fn(n.value)
            }
            backw(state.root)
        }
    })
}

const binTree = (state = {}) => {
    return merge(state, {
        root: null,
        node: (value) => ({
            value: value,
            parent: null,
            left: null,
            right: null
        }),
        addChild: (parent, child) => {
            if (child.parent === undefined) {
                child = state.node(child)
            }
            if (!parent) {
                state.root = child
                return child
            }
            child.parent = parent
            return child
        },
        addLeft: (parent, child) => {
            child = state.addChild(parent, child)
            if (parent) {
                parent.left = child
            }
            return child
        },
        addRight: (parent, child) => {
            child = state.addChild(parent, child)
            if (parent) {
                parent.right = child
            }
            return child
        },
        forwardPass: (fn) => {
            const forw = (n) => {
                if (n === null) {
                    return
                }
                fn(n.value)
                forw(n.left)
                forw(n.right)
            }
            forw(state.root)
        },
        backwardPass: (fn) => {
            const backw = (n) => {
                if (n === null) {
                    return
                }
                backw(n.left)
                backw(n.right)
                fn(n.value)
            }
            backw(state.root)
        },
        symmetricPass: (fn) => {
            const symm = (n) => {
                if (n === null) {
                    return
                }
                symm(n.left)
                fn(n.value)
                symm(n.right)
            }
            symm(state.root)
        }
    })
}

/* harmony default export */ __webpack_exports__["a"] = ({
    degToRad,
    sin,
    cos,
    randomRange,
    randomInt,
    randomPick,
    compose,
    hashSet,
    eventEmitter,
    linkedList,
    vec2,
    repeat,
    enumCreate,
    color,
    assert,
    defer,
    out,
    tree,
    binTree,
    stack,
    rect
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
    inputMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/input.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    outputMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/output.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    summatorMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/summator.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    subtractorMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/subtractor.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    repeaterMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/repeater.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    incrementMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/increment.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    customMachine_1x2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/custom_1x2.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    decrementMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/decrement.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    wireStraight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/wire_straight.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    memoryMachine: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/memory.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),

    data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/data.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    selectRect: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/selectRect.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
    deleteSign: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/deleteSign.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),

    buttonEmpty: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_long.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonPlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_play.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonPause: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_pause.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonPrevious: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_previous.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonNext: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_next.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonStop: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_stop.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonWire: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_wire.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonDelete: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_delete.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    grid: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/grid.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),

    dialog: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/dialog.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    dialogButton: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/dialog_button.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    dialogInput: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/dialog_input.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
    buttonSave: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["e" /* loadImage */])('img/button_save.png', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0)),
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine__ = __webpack_require__(0);



const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

window.canvas = canvas

ctx.textAlign = 'center'
ctx.textBaseline = 'middle'

const clear = (color) => {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const drawQueue = []

const queueType = {
    SPRITE: 0,
    TEXT: 1
}

const drawSprite = ({
    sprite,
    position,
    angle = 0,
    scale = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2(1, 1),
    layer = 0,
    GUI = false,
    alpha = 1
}) => {
    if (!drawQueue[layer]) {
        drawQueue[layer] = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].linkedList()
    }
    drawQueue[layer].push({
        sprite,
        position,
        angle,
        scale,
        layer,
        GUI,
        alpha,
        type: queueType.SPRITE
    })
}

const drawText = ({
    text,
    position,
    angle = 0,
    fontSize = 10,
    font = 'Arial',
    color = 'white',
    layer = 0,
    scale = {x: 1, y: 1},
    GUI = false
}) => {
    if (!drawQueue[layer]) {
        drawQueue[layer] = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].linkedList()
    }
    drawQueue[layer].push({
        text,
        position,
        angle,
        font,
        color,
        layer,
        scale,
        GUI,
        fontSize,
        type: queueType.TEXT
    })
}

const clearDrawQueue = () => {
    for (let i = 0; i < drawQueue.length; i++) {
        drawQueue[i] = 0
    }
}

const executeDrawQueue = () => {
    const camera = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__engine__["d" /* getScene */])().camera

    ctx.save()
    ctx.translate(-camera.position.x, -camera.position.y)
    ctx.scale(camera.zoom, camera.zoom)
    for (let i = 0; i < drawQueue.length; i++) {
        if (drawQueue[i]) {
            drawQueue[i].forEach(item => {
                ctx.save()
                ctx.translate(item.position.x, item.position.y)
                ctx.rotate(-item.angle*__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].degToRad)
                ctx.scale(item.scale.x, item.scale.y)
                if (item.GUI) {
                    ctx.translate(camera.position.x, camera.position.y)
                    ctx.scale(1/camera.zoom, 1/camera.zoom)
                }
                ctx.globalAlpha = item.alpha
                if (item.type === queueType.SPRITE) {
                    ctx.drawImage(item.sprite.image, -item.sprite.offset.x, -item.sprite.offset.y)
                } else {
                    ctx.fillStyle = item.color
                    ctx.font = item.fontSize + 'px ' + item.font
                    ctx.fillText(item.text, 0, 0)
                }
                ctx.restore()
            })
        }
    }
    ctx.restore()
}

/* harmony default export */ __webpack_exports__["a"] = ({
    drawSprite,
    clear,
    width: canvas.width,
    height: canvas.height,
    canvasElement: canvas,
    clearDrawQueue,
    executeDrawQueue,
    drawText
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gameLoop__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources__ = __webpack_require__(5);





let currentScene = null

const scene = (state) => {
    return __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].compose(state, [], {
        width: 100,
        height: 100,
        entities: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].linkedList(),
        onInit() {},
        bgColor: 'black',
        camera: {
            position: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2(),
            size: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2(__WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].canvasElement.width, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].canvasElement.height),
            zoom: 1
        }
    })
}

const setScene = (scene) => {
    const loadScene = () => {
        if (currentScene) {
            scene.entities.forEach(e => e.destroy())
        }
        currentScene = scene
        scene.onInit()
        console.log('Scene loaded!')
    }
    if (!__WEBPACK_IMPORTED_MODULE_2__gameLoop__["a" /* default */].isRunning()) {
        __WEBPACK_IMPORTED_MODULE_3__resources__["a" /* default */].resourcesLoadedEvent.subscribe(loadScene)
    } else {
        loadScene()
    }
}

const runScene = () => {
    if (currentScene) {
        __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].clear(currentScene.bgColor)
        currentScene.entities.forEach((e) => {
            if (e.enabled) {
                e.onUpdate()
            }
        })
    }
}

const getScene = () => currentScene

/* harmony default export */ __webpack_exports__["a"] = ({
    scene,
    getScene,
    setScene,
    runScene
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);


const resourcesLoadedEvent = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].eventEmitter()

const loadQueue = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].linkedList()

const loadImage = (url, offset = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2(), layer = 0) => {
    const img = new Image()
    img.src = url
    let index = loadQueue.push(img)
    img.onload = () => {
        console.log(`${url} loaded!`)
        loadQueue.remove(index)
        if (loadQueue.length === 0) {
            resourcesLoadedEvent.notify()
        }
    }
    return {
        image: img,
        offset,
        layer
    }
}

/* harmony default export */ __webpack_exports__["a"] = ({
    loadImage,
    resourcesLoadedEvent
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);


Array.prototype.peek = function() {
    return this[this.length-1]
}

const rotateVec = (x, y, angle) => {
    return [
        Math.round(x*__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["m" /* cos */])(angle) + y*__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["n" /* sin */])(angle)),
        Math.round(-x*__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["n" /* sin */])(angle) + y*__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["m" /* cos */])(angle))
    ]
}

window.rotateVec = rotateVec

const circuit = (width, height) => {
    const c = {}
    c.width = width
    c.height = height
    c.tiles = []
    c.states = []
    c.machines = []

    //allocating tiles
    for (let x = 0; x < c.width; x++) {
        c.tiles[x] = []
        for (let y = 0; y < c.height; y++) {
            c.tiles[x][y] = {
                port: null,
                machine: null,
                x,
                y
            }
        }
    }

    c.getTileAt = (x, y) => {
        if (x < 0 || x >= c.width || y < 0 || y >= c.height) {
            //console.error(`Tile index out of bounds (${x}, ${y})`)
            return null
        }
        return c.tiles[x][y]
    }

    //setting up state
    c.getState = () => c.states.peek()

    c.createState = () => {
        const newState = new Map(c.states.peek())
        if (c.states.peek()) {
            newState.inputData = c.states.peek().inputData
            newState.outputData = c.states.peek().outputData
        }
        c.states.push(newState)
        return newState
    }

    c.onPortCreated = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    //ports
    c.createPort = (x, y, angle = 0) => {
        while (angle >= 360) {
            angle -= 360
        }
        while (angle < 0) {
            angle += 360
        }
        const tile = c.getTileAt(x, y)
        if (tile) {
            if (tile.machine) {
                console.error(`There is a machine already at (${x}, ${y})!`)
                return null
            }
            if (tile.port) {
                c.deletePort(x, y)
            }
        }
        tile.port = {
            angle,
            tile
        }
        c.ports.push(tile.port)
        c.onPortCreated.notify(tile.port)
        return tile.port
    }

    c.ports = []

    c.onPortDeleted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    c.deletePort = (x, y) => {
        const tile = c.getTileAt(x, y)
        if (tile && tile.port) {
            c.onPortDeleted.notify(tile.port)
            tile.port = null
            let index = c.ports.indexOf(tile.port)
            c.ports.splice(index, 1)
        }
    }

    c.getDataAt = (port, state) => {
        const data = state.get(port)
        if (data === undefined) {
            return null
        }
        return data
    }

    c.setDataAt = (port, state, data) => {
        if (data === null) {
            state.delete(port)
            return
        }
        state.set(port, data)
    }

    c.onDataCreated = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    c.createDataAt = (port, data) => {
        // console.log(`Data (${data}) created at (${port.tile.x}, ${port.tile.y})`)
        c.setDataAt(port, c.getState(), data)
        c.onDataCreated.notify(port)
    }

    c.onDataDeleted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    c.deleteDataAt = (port) => {
        // console.log(`Data deleted at (${port.tile.x}, ${port.tile.y})`)
        let existingData = c.getDataAt(port, c.getState())
        if (existingData || existingData === 0) {
            c.onDataDeleted.notify(port)
            c.setDataAt(port, c.getState(), null)
        } else {
            console.error('The data is already deleted here!')
        }
    }

    c.onDataTransfer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    c.transferData = (port, oldState, newState) => {
        if (port.isInPort) {
            return false
        }

        let nextX, nextY

        switch(port.angle) {
            case 0: [nextX, nextY] = [1, 0]; break
            case 90: [nextX, nextY] = [0, -1]; break
            case 180: [nextX, nextY] = [-1, 0]; break
            case 270: [nextX, nextY] = [0, 1]; break
            default: console.error(`Wrong angle ${port.angle}!`)
        }
        nextX += port.tile.x
        nextY += port.tile.y
        const nextTile = c.getTileAt(nextX, nextY)
        if (!nextTile) {
            return false
        }
        const nextPort = nextTile.port

        if (!nextPort || c.getDataAt(nextPort, oldState) !== null || c.getDataAt(nextPort, newState) !== null) {
            return false
        }

        const prevData = c.getDataAt(port, oldState)
        c.setDataAt(nextPort, newState, prevData)
        c.setDataAt(port, newState, null)
        // console.log(`Data (${prevData}) transfered from (${port.tile.x}, ${port.tile.y}) to (${nextX}, ${nextY})`)
        c.onDataTransfer.notify(port, nextPort)
        return true
    }

    //stepping forward and backward
    c.stepForward = () => {
        // console.log(`Step ${c.states.length}:`)

        const oldState = c.getState()
        const newState = c.createState()

        let transferAmount = 0

        for (let port of oldState.keys()) {
            if (c.transferData(port, oldState, newState)) {
                transferAmount++
            }
        }

        for (let machine of c.machines) {
            if (machine.checkReady(oldState)) {
                if (machine.processFunc(oldState, machine.inPorts, machine.outPorts, machine, c) !== false) {
                    transferAmount++
                    machine.clearPorts()
                }
            }
        }

        if (transferAmount === 0) {
            c.inputMachines.forEach(m => {
                m.isProcessing = false
            })

            c.states.pop()
            return false
        }
        return true
    }

    c.outputMachineCount = 0
    c.inputMachineCount = 0

    c.stepBackward = () => {
        if (c.states.length === 1) {
            return
        }

        for (let port of c.getState().keys()) {
            c.deleteDataAt(port)
        }

        c.states.pop()

        for (let it of c.getState()) {
            let [port, data] = it
            c.createDataAt(port, data)
        }

        // console.log('Step backward')
    }

    c.fullCycle = (inputData) => {
        for (let i = 0; i < inputData.length; i++) {
            c.setInputData([inputData[i]], i)
        }

        while(c.stepForward()) {
            //
        }

        let outputData = []
        for (let i = 0; i < c.outputMachineCount; i++) {
            outputData.push(c.getOutputData(c.getState(), i)[0])
        }

        return outputData
    }

    c.reset = () => {
        for (let port of c.getState().keys()) {
            c.deleteDataAt(port)
        }
        c.states = [c.states[0]]
    }

    const cycleGridPositions = (x, y, width, height, fn) => {
        let startX = Math.min(x, x+width-1*Math.sign(width))
        let endX = Math.max(x, x+width-1*Math.sign(width))
        let startY = Math.min(y, y+height-1*Math.sign(height))
        let endY = Math.max(y, y+height-1*Math.sign(height))

        //check if we can plant the machine here
        for (let i = startX; i <= endX; i++) {
            for (let j = startY; j <= endY; j++) {
                if (!fn(i, j)) {
                    return false
                }
            }
        }
        return true
    }

    //machine
    c.createMachine = (x, y, angle, type) => {
        let inPorts = []
        let outPorts = []
        const createInPort = (xx, yy) => {
            let [newX, newY] = rotateVec(xx, yy, angle)
            let port = c.createPort(x+newX, y+newY, angle)
            port.isInPort = true
            inPorts.push(port)
            return port
        }
        const createOutPort = (xx, yy) => {
            let [newX, newY] = rotateVec(xx, yy, angle)
            let port = c.createPort(x+newX, y+newY, angle)
            port.isOutPort = true
            outPorts.push(port)
            return port
        }

        let machineType = c.machineTypes[type]

        let maxPorts = Math.max(machineType.inPortsAmount, machineType.outPortsAmount)

        let width = (machineType.inPortsAmount && machineType.outPortsAmount) ? 2 : 1
        let height = maxPorts * 2 - 1

        let [gridWidth, gridHeight] = rotateVec(width, height, angle)

        if (!cycleGridPositions(x, y, gridWidth, gridHeight, (i, j) => {
            let tile = c.getTileAt(i, j)
            if (!tile || (tile && (tile.machine))) {
                console.error('Cannot create a machine here')
                return false
            }
            return true
        })) {
            return false
        }

        //creating in and out ports
        for (let i = 0; i < height; i++) {
            if (maxPorts === machineType.inPortsAmount) {
                createInPort(0, i)
            }
            if (maxPorts === machineType.outPortsAmount) {
                createOutPort(width-1, i)
            }
            i++
        }

        if (
            machineType.inPortsAmount < machineType.outPortsAmount &&
            machineType.inPortsAmount &&
            machineType.inPortsAmount !== maxPorts
        ) {
            let start = Math.ceil((height - (machineType.inPortsAmount*2-1))/2)
            for (let i = start; i < height-start; i++) {
                createInPort(0, i++)
            }
        } else if (machineType.outPortsAmount && machineType.outPortsAmount !== maxPorts) {
            let start = Math.ceil((height - (machineType.outPortsAmount*2-1))/2)
            for (let i = start; i < height-start; i++) {
                createOutPort(width-1, i++)
            }
        }

        const checkReady = (oldState) => {
            for (let i = 0; i < outPorts.length; i++) {
                if (c.getDataAt(outPorts[i], oldState) !== null) {
                    return false
                }
            }

            for (let i = 0; i < inPorts.length; i++) {
                if (c.getDataAt(inPorts[i], oldState) === null) {
                    return false
                }
            }

            return true
        }

        const clearPorts = () => {
            for (let i = 0; i < inPorts.length; i++) {
                c.deleteDataAt(inPorts[i])
            }
        }

        const tile = c.getTileAt(x, y)

        const m = {
            tile,
            angle,
            type,
            processFunc: machineType.processFunc,
            inPorts,
            outPorts,
            checkReady,
            clearPorts,
            width,
            height,
            sprite: machineType.sprite,
            gridWidth,
            gridHeight,
            x, y
        }
        c.machines.push(m)

        cycleGridPositions(x, y, gridWidth, gridHeight, (i, j) => {
            let tile = c.getTileAt(i, j)
            tile.machine = m
            return true
        })

        if (machineType.onInit) {
            machineType.onInit(m, c)
        }

        c.onMachineCreated.notify(m)

        return m
    }
    c.onMachineCreated = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    c.deleteMachine = (x, y) => {
        let tile = c.getTileAt(x, y)
        if (tile && tile.machine) {
            let m = tile.machine
            cycleGridPositions(m.x, m.y, m.gridWidth, m.gridHeight, (i, j) => {
                let tile = c.getTileAt(i, j)
                tile.machine = null
                c.deletePort(tile.x, tile.y)
                return true
            })
            c.onMachineDeleted.notify(m)
            let index = c.machines.indexOf(m)
            c.machines.splice(index, 1)
        }
    }
    c.onMachineDeleted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["o" /* eventEmitter */])()

    c.inputMachines = []

    c.machineTypes = {}

    c.createState()

    c.setInputData = (inputData, index) => {
        let state = c.getState()
        if (!state.inputData) {
            state.inputData = []
        }
        state.inputData = state.inputData.slice()
        state.inputData[index] = inputData
    }

    c.getInputData = (state, index) => {
        let data = state.inputData[index]
        return data
    }

    c.setOutputData = (outputData, index) => {
        let state = c.getState()
        if (!state.outputData) {
            state.outputData = []
        }
        state.outputData = state.outputData.slice()
        state.outputData[index] = outputData
    }

    c.getOutputData = (state, index) => {
        return state.outputData[index]
    }

    c.defineMachine = ({name, inPortsAmount, outPortsAmount, processFunc, sprite, onInit}) => {
        c.machineTypes[name] = {
            inPortsAmount,
            outPortsAmount,
            processFunc,
            sprite,
            onInit
        }
    }

    c.save = () => {
        let ports = c.ports
            .filter(p => !p.tile.machine)
            .map(port => ({
                x: port.tile.x,
                y: port.tile.y,
                angle: port.angle
            }))
        let machines = c.machines.map(machine => ({
            x: machine.tile.x,
            y: machine.tile.y,
            angle: machine.angle,
            type: machine.type
        }))
        return {ports, machines}
    }

    c.load = ({ports, machines}) => {
        for (let p = c.ports.peek(); p; p = c.ports.peek()) {
            c.deletePort(p.tile.x, p.tile.y)
        }
        for (let m = c.machines.peek(); m; m = c.machines.peek()) {
            c.deleteMachine(m.x, m.y)
        }
        ports.forEach(p => c.createPort(p.x, p.y, p.angle))
        machines.forEach(m => c.createMachine(m.x, m.y, m.angle, m.type))
    }

    return c
}

/* harmony default export */ __webpack_exports__["a"] = (circuit);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);


const button = (state = {}) => {
    let result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
        text: '',
        sprite: null,
        onClick() {
            console.log('im clicked')
        },
        onUpdate: buttonUpdate,
        color: 'red',
        offset: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)
    })
    Object.assign(result, state)
    if (state.sprite) {
        result.collider = {
            rect: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["j" /* rect */])(0, 0, state.sprite.image.width, state.sprite.image.height),
            offset: state.sprite.offset.mult(-1),
            GUI: true
        }
    }
    return result
}

const buttonUpdate = function() {
    if (
        __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseUp(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouse.LEFT) &&
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["k" /* pointInside */])(this, __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition())
    ) {
        this.onClick()
    }
    if (
        __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePressed(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouse.LEFT) &&
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["k" /* pointInside */])(this, __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition())
    ) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
            sprite: this.sprite,
            position: this.position,
            layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI,
            GUI: true,
            alpha: 0.7
        })
    } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
            sprite: this.sprite,
            position: this.position,
            layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI,
            GUI: true
        })
    }
    if (this.text) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["l" /* drawText */])({
            text: this.text,
            position: this.position.add(this.offset),
            fontSize: 18,
            font: 'Arial',
            color: this.color,
            layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI_TEXT,
            GUI: true
        })
    }
}

/* harmony default export */ __webpack_exports__["a"] = (button);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);


const runningCoroutines = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].linkedList()

const startCoroutine = (gen) => {
    return runningCoroutines.push(gen())
}

const stopCoroutine = (cor) => runningCoroutines.remove(cor)

const executeCoroutines = () => {
    runningCoroutines.forEach((gen, i) => {
        let iter = gen.next()
        if (iter.done) {
            runningCoroutines.remove(i)
        }
    })
}

/* harmony default export */ __webpack_exports__["a"] = ({
    startCoroutine,
    stopCoroutine,
    executeCoroutines
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sceneCtrl__ = __webpack_require__(4);




const keysPressed = []
const keysDown = []
const keysUp = []

document.oncontextmenu = (e) => {
    e.preventDefault()
}

let keyString = []

document.onkeydown = (e) => {
    if (e.key !== 'Backspace') {
        if (
            e.keyCode === 32 ||
            (e.keyCode >= 48 && e.keyCode <= 58) ||
            (e.keyCode >= 65 && e.keyCode <= 89)
        ) {
            keyString.push(e.key)
        }
    } else {
        keyString.pop()
    }
    if (!keysPressed[e.keyCode]) {
        keysDown[e.keyCode] = true
    }
    keysPressed[e.keyCode] = true
}

document.onkeyup = (e) => {
    keysPressed[e.keyCode] = false
    keysUp[e.keyCode] = true
}

const buttonsPressed = []
const buttonsDown = []
const buttonsUp = []

const rect = __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].canvasElement.getBoundingClientRect()
let mPosition = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2()

const mousePosition = () => mPosition

document.onmousemove = (e) => {
    mPosition = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2(
        e.clientX - rect.left,
        e.clientY - rect.top
    )
    return false
}

document.onmousedown = (e) => {
    e.preventDefault()
    if (!buttonsPressed[e.button]) {
        buttonsDown[e.button] = true
    }
    buttonsPressed[e.button] = true
    return false
}

document.onmouseup = (e) => {
    buttonsPressed[e.button] = false
    buttonsUp[e.button] = true
}

const clearKeys = () => {
    for (let i = 0; i < keysDown.length; i++) {
        keysDown[i] = false
    }
    for (let i = 0; i < keysUp.length; i++) {
        keysUp[i] = false
    }
    for (let i = 0; i < buttonsDown.length; i++) {
        buttonsDown[i] = false
    }
    for (let i = 0; i < buttonsUp.length; i++) {
        buttonsUp[i] = false
    }
}

const keyDown = (k) => keysDown[k]
const keyUp = (k) => keysUp[k]
const keyPressed = (k) => keysPressed[k]

const mouseDown = (b) => buttonsDown[b]
const mouseUp = (b) => buttonsUp[b]
const mousePressed = (b) => buttonsPressed[b]

const mouse = {
    LEFT: 0,
    RIGHT: 2
}

const keyCode = {
    SPACE: 32,
    ENTER: 13,
    TAB: 9,
    ESC: 27,
    BACKSPACE: 8,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    CAPS_LOCK: 20,
    NUM_LOCK: 144,
    TOP_1: 49,
    TOP_2: 50,
    TOP_3: 51,
    TOP_4: 52,
    TOP_5: 53,
    TOP_6: 54,
    TOP_7: 55,
    TOP_8: 56,
    TOP_9: 57,
    TOP_0: 58,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90
}

const mouseWorldPosition = () => mPosition.add(__WEBPACK_IMPORTED_MODULE_2__sceneCtrl__["a" /* default */].getScene().camera.position)

/* harmony default export */ __webpack_exports__["a"] = ({
    keyDown,
    keyUp,
    keyPressed,
    clearKeys,
    keyCode,
    mouse,
    mouseUp,
    mouseDown,
    mousePressed,
    mousePosition,
    mouseWorldPosition,
    keyString: (str) => {
        if (str !== undefined) {
            keyString = str.split('')
            return str
        } else {
            return keyString.join('')
        }
    },
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphics_circuitGraphic__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_uiController__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_circuit__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvasEngine_util__ = __webpack_require__(1);







/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["b" /* scene */])({
    width: 400,
    height: 400,
    bgColor: 'black',
    layers: {
        BACKGROUND: 0,
        TILE: 1,
        MACHINE: 4,
        MACHINE_TEXT: 5,
        PORT: 3,
        PORT_TEXT: 4,
        DATA: 6,
        DATA_TEXT: 7,
        UI: 8,
        UI_TEXT: 9
    },
    onInit() {
        let cg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__graphics_circuitGraphic__["a" /* default */])(40, 20)

        let uiCtrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ui_uiController__["a" /* default */])({
            circuitGraphic: cg
        })

        let circuit = cg.circuit

        window.c = circuit

        let inputData = []

        for (let i = 0; i < 10; i++) {
            inputData.push(__WEBPACK_IMPORTED_MODULE_5__canvasEngine_util__["a" /* default */].randomInt(0, 20))
        }


        uiCtrl.defineMachine({
            name: 'input',
            inPortsAmount: 0,
            outPortsAmount: 1,
            processFunc (oldState, inPorts, outPorts, machine, circuit) {
                if (machine.isProcessing) {
                    return false
                }

                let inputData = circuit.getInputData(oldState, this.index)
                let changedData = inputData.slice()
                let result = changedData.pop()
                if (result === null || result === undefined) {
                    return false
                }
                circuit.setInputData(changedData, this.index)
                circuit.createDataAt(outPorts[0], result)
                machine.isProcessing = true
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].inputMachine,
            onInit: (machine, c) => {
                machine.index = c.inputMachineCount
                c.setInputData(inputData, c.inputMachineCount++)
                c.inputMachines.push(machine)
                machine.isProcessing = false
            }
        })
        uiCtrl.defineMachine({
            name: 'output',
            inPortsAmount: 1,
            outPortsAmount: 0,
            processFunc (oldState, inPorts, outPorts, machine, circuit) {
                let outputData = circuit.getOutputData(oldState, this.index)
                let changedData = outputData.slice()
                changedData.push(circuit.getDataAt(inPorts[0], oldState))
                circuit.setOutputData(changedData, this.index)
                console.log(changedData)
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].outputMachine,
            onInit: (machine, c) => {
                machine.index = c.outputMachineCount
                c.setOutputData([], c.outputMachineCount++)
            }
        })
        uiCtrl.defineMachine({
            name: 'summator',
            inPortsAmount: 2,
            outPortsAmount: 1,
            processFunc: (oldState, inPorts, outPorts, machine, circuit) => {
                let sum = circuit.getDataAt(inPorts[0], oldState) +
                    circuit.getDataAt(inPorts[1], oldState)
                circuit.createDataAt(outPorts[0], sum)
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].summatorMachine
        })
        uiCtrl.defineMachine({
            name: 'subtractor',
            inPortsAmount: 2,
            outPortsAmount: 1,
            processFunc: (oldState, inPorts, outPorts, machine, circuit) => {
                let sub = circuit.getDataAt(inPorts[0], oldState) -
                    circuit.getDataAt(inPorts[1], oldState)
                circuit.createDataAt(outPorts[0], sub)
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].subtractorMachine
        })
        uiCtrl.defineMachine({
            name: 'repeater',
            inPortsAmount: 1,
            outPortsAmount: 2,
            processFunc: (oldState, inPorts, outPorts, machine, circuit) => {
                let data = circuit.getDataAt(inPorts[0], oldState)
                circuit.createDataAt(outPorts[0], data)
                circuit.createDataAt(outPorts[1], data)
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].repeaterMachine
        })
        uiCtrl.defineMachine({
            name: 'increment',
            inPortsAmount: 1,
            outPortsAmount: 1,
            processFunc: (oldState, inPorts, outPorts, machine, circuit) => {
                let data = circuit.getDataAt(inPorts[0], oldState) + 1
                circuit.createDataAt(outPorts[0], data)
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].incrementMachine
        })
        uiCtrl.defineMachine({
            name: 'decrement',
            inPortsAmount: 1,
            outPortsAmount: 1,
            processFunc: (oldState, inPorts, outPorts, machine, circuit) => {
                let data = circuit.getDataAt(inPorts[0], oldState) - 1
                circuit.createDataAt(outPorts[0], data)
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].decrementMachine
        })
        uiCtrl.defineMachine({
            name: 'memory',
            inPortsAmount: 1,
            outPortsAmount: 1,
            processFunc: (oldState, inPorts, outPorts, machine, circuit) => {
                if (!machine.memory) {
                    machine.memory = circuit.getDataAt(inPorts[0], oldState)
                } else {
                    circuit.createDataAt(outPorts[0], machine.memory)
                }
            },
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].memoryMachine
        })

        this.camera.position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(-100, -100)
    }
}));


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sceneCtrl__ = __webpack_require__(4);



const entity = (state) => {
    __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].compose(state, [], {
        position: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].vec2(),
        angle: 0,
        name: 'default',
        onInit: () => {},
        onUpdate: () => console.log(`${state.name} updating...`),
        onDisable: () => {},
        onEnable: () => {}
    })
    let index = __WEBPACK_IMPORTED_MODULE_1__sceneCtrl__["a" /* default */].getScene().entities.push(state)
    state.destroy = () => __WEBPACK_IMPORTED_MODULE_1__sceneCtrl__["a" /* default */].getScene().entities.remove(index)

    state.enabled = true
    state.disable = () => {
        state.onDisable()
        state.enabled = false
    }
    state.enable = () => {
        state.onEnable()
        state.enabled = true
    }
    state.onInit()
    return state
}

/* harmony default export */ __webpack_exports__["a"] = (entity);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sceneCtrl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coroutineCtrl__ = __webpack_require__(8);






let running = false

const run = () => {
    __WEBPACK_IMPORTED_MODULE_0__sceneCtrl__["a" /* default */].runScene()
    __WEBPACK_IMPORTED_MODULE_4__coroutineCtrl__["a" /* default */].executeCoroutines()
    __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].executeDrawQueue()
    __WEBPACK_IMPORTED_MODULE_2__input__["a" /* default */].clearKeys()
    __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* default */].clearDrawQueue()
    requestAnimationFrame(run)
}

__WEBPACK_IMPORTED_MODULE_3__resources__["a" /* default */].resourcesLoadedEvent.subscribe(() => {
    console.log('Engine starting')
    running = true
    run()
})

const isRunning = () => running

/* harmony default export */ __webpack_exports__["a"] = ({
    isRunning
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(0);


const pointInside = (ent, point) => {
    if (!ent.enabled) {
        return false
    }
    if (ent.collider.GUI) {
        point = point.sub(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__engine__["d" /* getScene */])().camera.position)
    }
    return !(
        point.x > ent.position.x + ent.collider.rect.right + ent.collider.offset.x ||
        point.x < ent.position.x + ent.collider.rect.left + ent.collider.offset.x ||
        point.y > ent.position.y + ent.collider.rect.bottom + ent.collider.offset.y ||
        point.y < ent.position.y + ent.collider.rect.top + ent.collider.offset.y
    )
}

const collisionAtPoint = (point, cond) => {
    let coll = null
    let entities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__engine__["d" /* getScene */])().entities
    entities.find(e => {
        if (cond(e) && pointInside(e, point)) {
            coll = e
            return true
        }
    })
    return coll
}

/* harmony default export */ __webpack_exports__["a"] = ({
    pointInside,
    collisionAtPoint
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_scenes_test__ = __webpack_require__(10);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["a" /* setScene */])(__WEBPACK_IMPORTED_MODULE_1__resources_scenes_test__["a" /* default */])


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_circuit__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites__ = __webpack_require__(2);
/*global constants*/





window.constants = {
    TILE_SIZE: 64
}

const circuitGraphic = (width, height) => {
    let c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__model_circuit__["a" /* default */])(width, height)
    let portGraphics = new Map()
    let machineGraphics = new Map()
    let dataGraphics = new Map()

    const cg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
        position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(),
        portGraphics,
        machineGraphics,
        dataGraphics,
        circuit: c,
        onUpdate() {
            if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyDown(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.RIGHT)) {
                c.stepForward()
            }
            if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyDown(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.LEFT)) {
                c.stepBackward()
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                position: this.position.sub(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 32)),
                sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].grid
            })
        }
    })

    c.onMachineCreated.subscribe((m) => {
        let e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
            spriteLayer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.MACHINE,
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(m.tile.x*constants.TILE_SIZE, m.tile.y*constants.TILE_SIZE),
            angle: m.angle,
            name: 'machine',
            onUpdate() {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                    sprite: m.sprite,
                    position: cg.position.add(this.position),
                    angle: this.angle,
                    layer: this.spriteLayer
                })
            }
        })
        machineGraphics.set(m, e)
    })

    c.onMachineDeleted.subscribe((m) => {
        let graphic = machineGraphics.get(m)
        graphic.destroy()
    })

    c.onPortCreated.subscribe((p) => {
        let e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
            spriteLayer: 2,
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(p.tile.x*constants.TILE_SIZE, p.tile.y*constants.TILE_SIZE),
            angle: p.angle,
            name: 'port',
            onUpdate() {
                if (!p.tile.machine) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                        sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].wireStraight,
                        position: cg.position.add(this.position),
                        angle: this.angle,
                        layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.PORT
                    })
                }
            }
        })
        portGraphics.set(p, e)
    })

    c.onPortDeleted.subscribe((p) => {
        let graphic = portGraphics.get(p)
        portGraphics.delete(p)
        graphic.destroy()
    })

    const changeScale = (go, target, speed) => {
        let pace = target.sub(go.scale).mult(1/speed)

        let changeScaleCoroutine = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["p" /* startCoroutine */])(function* changeScale() {
            if (go.changeScaleCoroutine) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["q" /* stopCoroutine */])(go.changeScaleCoroutine)
            }
            go.changeScaleCoroutine = changeScaleCoroutine
            while (Math.abs(go.scale.x - target.x) > Math.abs(pace.x*2)) {
                go.scale = go.scale.add(pace)
                yield
            }
            go.scale = target
            go.changeScaleCoroutine = null
            if (go.scale.x <= 0) {
                go.destroy()
            }
        })
    }

    c.onDataCreated.subscribe((p) => {
        let e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
            spriteLayer: 3,
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(p.tile.x*constants.TILE_SIZE, p.tile.y*constants.TILE_SIZE),
            angle: 0,
            name: 'data',
            data: c.getDataAt(p, c.getState()),
            scale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0),
            onUpdate() {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                    sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].data,
                    position: cg.position.add(this.position),
                    angle: this.angle,
                    scale: this.scale,
                    layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.DATA
                })
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["l" /* drawText */])({
                    text: this.data,
                    position: this.position,
                    fontSize: 20,
                    font: 'Arial',
                    color: 'white',
                    layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.DATA_TEXT,
                    scale: this.scale
                })
            }
        })
        dataGraphics.set(p, e)

        changeScale(e, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(1, 1), 20)
    })

    c.onDataDeleted.subscribe((p) => {
        let graphic = dataGraphics.get(p)
        graphic.scaleSpeed = null
        graphic.targetScale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])()
        dataGraphics.delete(p)

        changeScale(graphic, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0), 20)
    })

    const moveTo = (go, position, speed) => {
        let moveCoroutine = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["p" /* startCoroutine */])(function* moveTo() {
            if (go.moveCoroutine) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["q" /* stopCoroutine */])(go.moveCoroutine)
            }
            go.moveCoroutine = moveCoroutine
            let velocity = position.sub(go.position).mult(1/speed)
            let velocityLen = Math.abs(velocity.len()*2)
            while (Math.abs(position.sub(go.position).len()) > velocityLen) {
                go.position = go.position.add(velocity)
                yield
            }
            go.position = position
            go.moveCoroutine = null
        })
    }

    c.onDataTransfer.subscribe((from, to) => {
        let graphic = dataGraphics.get(from)
        dataGraphics.delete(from)
        dataGraphics.set(to, graphic)

        let toGraphic = portGraphics.get(to)
        moveTo(graphic, toGraphic.position, 20)
    })

    return cg
}

/* harmony default export */ __webpack_exports__["a"] = (circuitGraphic);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);


const menu = (state = {}) => {
    const menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
        items: [],
        interval: 10,
        direction: 'row',
        size: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0),
        onUpdate() {
            let offset = 0
            if (this.direction === 'row') {
                for (let i = 0; i < this.items.length; i++) {
                    let item = this.items[i]
                    item.position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(this.position.x + offset + this.interval*i, this.position.y)

                    offset += item.sprite.image.width
                }
            } else {
                for (let i = 0; i < this.items.length; i++) {
                    let item = this.items[i]
                    item.position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(this.position.x, this.position.y + offset + this.interval*i)

                    offset += item.sprite.image.height
                }
            }
        },
        onDisable() {
            this.items.forEach(item => item.disable())
        },
        onEnable() {
            this.items.forEach(item => item.enable())
        }
    })
    Object.assign(menu, state)
    return menu
}

/* harmony default export */ __webpack_exports__["a"] = (menu);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textarea__ = __webpack_require__(18);





const dialog = (state = {}) => {
    let textInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__textarea__["a" /* default */])()
    let buttonAccept = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
        sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].dialogButton,
        text: 'OK',
        offset: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(48, 16),
        color: 'white'
    })
    let buttonDecline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
        sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].dialogButton,
        text: 'Cancel',
        offset: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(48, 16),
        color: 'white'
    })
    let finalState = Object.assign({
        textInput: textInput,
        onInit() {
            this.textInput.text = 'sample'
        },
        onUpdate() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].dialog,
                position: this.position,
                GUI: true,
                layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI
            })
            buttonAccept.position = this.position.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(32, 196))
            buttonDecline.position = this.position.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(196, 196))
            textInput.position = this.position.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(64, 96))
        },
        onDisable() {
            buttonAccept.disable()
            buttonDecline.disable()
            textInput.disable()
        },
        onEnable() {
            buttonAccept.enable()
            buttonDecline.enable()
            textInput.enable()
        },
        collider: {
            rect: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["j" /* rect */])(0, 0, 320, 256),
            GUI: true,
            offset: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])()
        },
        GUI: true,
        onAccept() {},
        onDecline() {}
    }, state)

    let result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])(finalState)

    buttonAccept.onClick = result.onAccept
    buttonDecline.onClick = result.onDecline
    return result
}

/* harmony default export */ __webpack_exports__["a"] = (dialog);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites__ = __webpack_require__(2);




const textArea = (state = {}) => {
    let result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])({
        text: 'sample',
        onInit() {
            __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyString(this.text)
        },
        onEnable() {
            __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyString('')
        },
        maxLength: 10,
        onUpdate() {
            this.text = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyString()
            if (this.text.length > this.maxLength) {
                let textArray = this.text.split('')
                textArray.length = this.maxLength
                this.text = textArray.join('')
                __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyString(this.text)
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                sprite: __WEBPACK_IMPORTED_MODULE_2__sprites__["a" /* default */].dialogInput,
                position: this.position,
                GUI: true,
                layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI
            })
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["l" /* drawText */])({
                text: this.text,
                position: this.position.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(96, 16)),
                GUI: true,
                fontSize: 20,
                layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI_TEXT,
            })
        }
    })
    Object.assign(result, state)
    return result
}

/* harmony default export */ __webpack_exports__["a"] = (textArea);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttonMenu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_circuit__ = __webpack_require__(6);
/*global constants*/








const ctrlMode = {
    NONE: 0,
    WIRE: 1,
    DELETE: 2,
    MACHINE: 3,
    SAVE: 4
}

let phantomMachine = {
    name: null,
    sprite: null,
    angle: 0
}

let wireAngle = null

let isBuildMode = true

const uiController = (state = {}) => {
    let currentlyPlaying
    const camera = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().camera

    let savedMachines = {}

    let saveDialog = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__dialog__["a" /* default */])({
        position: camera.position.add(camera.size.mult(1/2).sub(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(160, 128))),
        onInit() {
            this.disable()
        },
        onAccept() {
            let save = circuit.save()
            save.inPortsAmount = circuit.inputMachineCount
            save.outPortsAmount = circuit.outputMachineCount
            savedMachines[saveDialog.textInput.text] = save

            if (
                (save.ports.length > 0 || save.machines.length > 0) &&
                circuit.outputMachineCount && circuit.inputMachineCount
            ) {
                localStorage.setItem('savedMachines', JSON.stringify(savedMachines))
                saveDialog.disable()
                ctrl.mode = ctrlMode.NONE
                ctrl.defineMachine({
                    name: saveDialog.textInput.text,
                    inPortsAmount: circuit.inputMachineCount,
                    outPortsAmount: circuit.outputMachineCount,
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].customMachine_1x2,
                    onInit(machine) {
                        machine.customCircuit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__model_circuit__["a" /* default */])(40, 20)
                        machine.customCircuit.machineTypes = circuit.machineTypes
                        let loadCircuit = JSON.parse(localStorage.getItem('savedMachines'))[saveDialog.textInput.text]
                        machine.customCircuit.load(loadCircuit)
                    },
                    processFunc(oldState, inPorts, outPorts, machine, circuit) {
                        let inputData = []
                        inPorts.forEach(p => inputData.push(circuit.getDataAt(p, oldState)))
                        let outputData = machine.customCircuit.fullCycle(inputData)
                        outputData.forEach((d, i) => circuit.createDataAt(outPorts[i], d))
                    }
                })
            }
        },
        onDecline() {
            saveDialog.disable()
            ctrl.mode = ctrlMode.NONE
        }
    })

    let ctrl = {
        prevMousePosition: __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePosition(),
        saveButton: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
            name: 'save',
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonSave,
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(64, 0),
            GUI: true,
            onClick() {
                saveDialog.enable()
                ctrl.mode = ctrlMode.SAVE
            }
        }),
        playButton: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
            name: 'play',
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPlay,
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, 0),
            onClick() {
                if (isBuildMode) {
                    currentlyPlaying = setInterval(
                        ctrl.circuitGraphic.circuit.stepForward,
                        333
                    )
                    this.sprite = __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonStop
                    isBuildMode = false
                    ctrl.menuPlay.enable()
                    ctrl.menuBuild.disable()
                    ctrl.menuMachines.disable()
                    ctrl.mode = ctrlMode.NONE
                } else {
                    clearInterval(currentlyPlaying)
                    currentlyPlaying = null
                    this.sprite = __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPlay
                    isBuildMode = true
                    ctrl.menuPlay.disable()
                    ctrl.menuBuild.enable()
                    ctrl.menuMachines.enable()
                    ctrl.circuitGraphic.circuit.reset()
                }
            },
            GUI: true
        }),
        menuPlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__buttonMenu__["a" /* default */])({
            direction: 'row',
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(620, 0),
            items: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
                    name: 'pause',
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPause,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(constants.TILE_SIZE, 0),
                    onClick() {
                        if (currentlyPlaying) {
                            clearInterval(currentlyPlaying)
                            currentlyPlaying = null
                            this.sprite = __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPlay
                        } else {
                            this.sprite = __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPause
                            currentlyPlaying = setInterval(
                                ctrl.circuitGraphic.circuit.stepForward,
                                333
                            )
                        }
                    },
                    enabled: false,
                    GUI: true
                }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
                    name: 'previous',
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPrevious,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(196, 0),
                    onClick() {
                        if (currentlyPlaying) {
                            clearInterval(currentlyPlaying)
                            currentlyPlaying = null
                            ctrl.menuPlay.items[0].sprite = __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPlay
                        }
                        ctrl.circuitGraphic.circuit.stepBackward()
                    },
                    enabled: false,
                    GUI: true
                }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
                    name: 'next',
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonNext,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(260, 0),
                    onClick() {
                        if (currentlyPlaying) {
                            clearInterval(currentlyPlaying)
                            currentlyPlaying = null
                            ctrl.menuPlay.items[0].sprite = __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonPlay
                        }
                        ctrl.circuitGraphic.circuit.stepForward()
                    },
                    enabled: false,
                    GUI: true
                })
            ],
            interval: 0
        }),
        menuBuild: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__buttonMenu__["a" /* default */])({
            position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().camera.size.x - 128, 0),
            direction: 'row',
            interval: 0,
            items: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
                    name: 'wire',
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonWire,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(388, 0),
                    onClick() {
                        ctrl.mode = ctrlMode.WIRE
                        wireAngle = null
                    },
                    GUI: true
                }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
                    name: 'delete',
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonDelete,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(452, 0),
                    onClick() {
                        ctrl.mode = ctrlMode.DELETE
                    },
                    GUI: true
                })
            ]
        }),
        startPosition: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(),
        mode: ctrlMode.NONE,
        onUpdate() {
            let mouseDiff = this.prevMousePosition.sub(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePosition())
            if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePressed(1)) {
                camera.position.translate(mouseDiff)
            }

            this.prevMousePosition = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePosition()

            var cameraMoveSpeed = 10

            if (this.mode !== ctrlMode.SAVE) {
                if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyPressed(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.A)) {
                    camera.position.translate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(-cameraMoveSpeed, 0))
                }
                if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyPressed(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.D)) {
                    camera.position.translate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(cameraMoveSpeed, 0))
                }
                if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyPressed(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.W)) {
                    camera.position.translate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, -cameraMoveSpeed))
                }
                if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyPressed(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.S)) {
                    camera.position.translate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(0, cameraMoveSpeed))
                }
            }

            if (!mouseOnGUI()) {
                if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseDown(2)) {
                    this.mode = ctrlMode.NONE
                }
                let mousePosition = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition().mult(1/constants.TILE_SIZE)
                let tile = this.circuitGraphic.circuit.getTileAt(
                    Math.round(mousePosition.x),
                    Math.round(mousePosition.y)
                )
                if (this.mode !== ctrlMode.MACHINE && tile) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                        sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].selectRect,
                        position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(tile.x, tile.y).mult(constants.TILE_SIZE),
                    })
                }
                switch (this.mode) {
                    case ctrlMode.WIRE: {
                        placeDownWires()
                    } break
                    case ctrlMode.DELETE: {
                        deleteWiresAndMachines(0)
                    } break
                    case ctrlMode.NONE: {
                        //
                    } break
                    case ctrlMode.MACHINE: {
                        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyUp(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.R)) {
                            phantomMachine.angle += 90
                        }
                        let position = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition().mult(1/constants.TILE_SIZE).round()
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                            alpha: 0.5,
                            sprite: phantomMachine.sprite,
                            position: position.mult(constants.TILE_SIZE),
                            angle: phantomMachine.angle
                        })
                        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseDown(0)) {
                            circuit.createMachine(position.x, position.y, phantomMachine.angle, phantomMachine.name)
                        }
                    } break
                }
            }
        }
    }
    Object.assign(ctrl, state)

    const machineButtons = []

    ctrl.menuMachines = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__buttonMenu__["a" /* default */])({
        direction: 'column',
        position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().camera.size.x - constants.TILE_SIZE*2, constants.TILE_SIZE),
        items: machineButtons,
        interval: 0
    })

    const circuit = ctrl.circuitGraphic.circuit

    ctrl.defineMachine = (params) => {
        circuit.defineMachine(params)
        machineButtons.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */])({
            name: params.name,
            sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].buttonEmpty,
            onClick() {
                phantomMachine.angle = 0
                ctrl.mode = ctrlMode.MACHINE
                phantomMachine.sprite = params.sprite
                phantomMachine.name = params.name
            },
            text: params.name,
            GUI: true,
            color: 'white',
            offset: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(constants.TILE_SIZE, constants.TILE_SIZE/2)
        }))
    }

    ctrl.onInit = () => {
        let json = localStorage.savedMachines
        if (!json) {
            return
        }
        savedMachines = JSON.parse(json)
        for (let key in savedMachines) {
            if (savedMachines.hasOwnProperty(key)) {
                let m = savedMachines[key]
                ctrl.defineMachine({
                    name: key,
                    inPortsAmount: m.inPortsAmount,
                    outPortsAmount: m.outPortsAmount,
                    onInit(machine) {
                        machine.customCircuit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__model_circuit__["a" /* default */])(20, 20)
                        machine.customCircuit.machineTypes = circuit.machineTypes
                        machine.customCircuit.load(m)
                    },
                    processFunc(oldState, inPorts, outPorts, machine, circuit) {
                        let inputData = []
                        inPorts.forEach(p => inputData.push(circuit.getDataAt(p, oldState)))
                        let outputData = machine.customCircuit.fullCycle(inputData)
                        outputData.forEach((d, i) => circuit.createDataAt(outPorts[i], d))
                    },
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].incrementMachine
                })
            }
        }
    }

    function mouseOnGUI() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["h" /* collisionAtPoint */])(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition(), (e) => e.GUI)
    }
    function cyclePlacementPositionsLine(startPos, endPos, fn, overrideDirection) {
        let horizDiff = endPos.x - startPos.x
        let vertDiff = endPos.y - startPos.y
        let direction, length, start, end
        if (Math.abs(horizDiff) >= Math.abs(vertDiff)) {
            length = Math.round(startPos.y)
            direction = horizDiff >= 0 ? 0 : 180
            start = Math.min(startPos.x, endPos.x)
            end = Math.max(startPos.x, endPos.x)
        } else {
            length = Math.round(startPos.x)
            direction = vertDiff >= 0 ? 270 : 90
            start = Math.min(startPos.y, endPos.y)
            end = Math.max(startPos.y, endPos.y)
        }
        for (let i = Math.round(start); i <= Math.round(end); i++) {
            if (direction % 180 === 0) {
                if (ctrl.circuitGraphic.circuit.getTileAt(i, length)) {
                    fn(i, length, overrideDirection || direction)
                }
            } else {
                if (ctrl.circuitGraphic.circuit.getTileAt(length, i)) {
                    fn(length, i, overrideDirection || direction)
                }
            }
        }
    }
    function cyclePlacementPositionsRect(startPos, endPos, fn) {
        let startX = Math.min(startPos.x, endPos.x)
        let endX = Math.max(startPos.x, endPos.x)
        let startY = Math.min(startPos.y, endPos.y)
        let endY = Math.max(startPos.y, endPos.y)
        for (let i = Math.round(startX); i <= Math.round(endX); i++) {
            for (let j = Math.round(startY); j <= Math.round(endY); j++) {
                fn(i, j)
            }
        }
    }
    function placeDownWires() {
        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyUp(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].keyCode.R)) {
            if (wireAngle === null) {
                wireAngle = 0
            }
            wireAngle += 90
        }

        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseDown(0)) {
            ctrl.startPosition = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition().mult(1/constants.TILE_SIZE)
        }

        let endPosition = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition().mult(1/constants.TILE_SIZE)

        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePressed(0) || __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseUp(0)) {
            cyclePlacementPositionsLine(ctrl.startPosition, endPosition, (x, y, direction) => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].wireStraight,
                    alpha: 0.5,
                    angle: wireAngle || direction,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(x*constants.TILE_SIZE, y*constants.TILE_SIZE),
                    layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI
                })
            })
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].wireStraight,
                alpha: 0.5,
                angle: wireAngle,
                position: endPosition.round().mult(constants.TILE_SIZE),
                layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI
            })
        }
        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseUp(0)) {
            cyclePlacementPositionsLine(ctrl.startPosition, endPosition, ctrl.circuitGraphic.circuit.createPort, wireAngle)
        }
    }
    function deleteWiresAndMachines(mouseBtn) {
        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseDown(mouseBtn)) {
            ctrl.startPosition = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition().mult(1/constants.TILE_SIZE)
        }

        let endPosition = __WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseWorldPosition().mult(1/constants.TILE_SIZE)


        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mousePressed(mouseBtn)) {
            cyclePlacementPositionsRect(ctrl.startPosition, endPosition, (x, y) => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                    sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].deleteSign,
                    alpha: 0.5,
                    angle: 0,
                    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["c" /* vec2 */])(x*constants.TILE_SIZE, y*constants.TILE_SIZE),
                    layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI
                })
            })
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["g" /* drawSprite */])({
                sprite: __WEBPACK_IMPORTED_MODULE_3__sprites__["a" /* default */].deleteSign,
                alpha: 0.5,
                angle: 0,
                position: endPosition.round().mult(64),
                layer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["d" /* getScene */])().layers.UI
            })
        }
        if (__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["f" /* input */].mouseUp(mouseBtn)) {
            cyclePlacementPositionsRect(ctrl.startPosition, endPosition, (x, y) => {
                circuit.deletePort(x, y)
                circuit.deleteMachine(x, y)
            })
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__canvasEngine_engine__["i" /* entity */])(ctrl)
}

/* harmony default export */ __webpack_exports__["a"] = (uiController);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

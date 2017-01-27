class Input {
    static keysPressed: boolean[] = [];
    static keysDown: boolean[] = [];
    static keysUp: boolean[] = [];

    static getKeyPressed(keyCode) {
        return Input.keysPressed[keyCode];
    }

    static getKeyDown(keyCode) {
        return Input.keysDown[keyCode];
    }

    static getKeyUp(keyCode) {
        return Input.keysUp[keyCode];
    }

    static resetKeys() {
        for (var i = 0; i < Input.keysDown.length; i++) {
            Input.keysDown[i] = false;
        }

        for (var i = 0; i < Input.keysUp.length; i++) {
            Input.keysUp[i] = false;
        }
    }
}

window.addEventListener("keydown", (e) => {
    if (Input.keysPressed[e.keyCode]) {
        return;
    }
    Input.keysPressed[e.keyCode] = true;
    Input.keysDown[e.keyCode] = true;
});

window.addEventListener("keyup", (e) => {
    Input.keysPressed[e.keyCode] = false;
    Input.keysUp[e.keyCode] = true;
});

const enum keyCode {
    left = 37,
    up = 38,
    right = 39,
    down = 40,
    num_add = 107,
    num_sub = 109,
    enter = 13,
    tab = 9,
    esc = 27,
    caps_lock = 20,
    shift = 16,
    space = 32,
    page_up = 33,
    page_down = 34,
    a = 65,
    b = 66,
    c = 67,
    d = 68,
    e = 69,
    f = 70,
    g = 71,
    h = 72,
    i = 73,
    j = 74,
    k = 75,
    l = 76,
    m = 77,
    n = 78,
    o = 79,
    p = 80,
    q = 81,
    r = 82,
    s = 83,
    t = 84,
    u = 85,
    v = 86,
    w = 87,
    x = 88,
    y = 89,
    z = 90
};

log("Loading input system...");
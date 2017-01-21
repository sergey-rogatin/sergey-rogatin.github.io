var Input = {};

KeyCode = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    num_add: 107,
    num_sub: 109,
    enter: 13,
    tab: 9,
    esc: 27,
    caps_lock: 20,
    shift: 16,
    space: 32,
    page_up: 33,
    page_down: 34
};

Input.keysPressed = [];
Input.keysDown = [];
Input.keysUp = [];

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

Input.getKeyPressed = function(keyCode) {
    return Input.keysPressed[keyCode];
}

Input.getKeyDown = function(keyCode) {
    return Input.keysDown[keyCode];
}

Input.getKeyUp = function(keyCode) {
    return Input.keysUp[keyCode];
}

Input.resetKeys = function() {
    for (var i = 0; i < Input.keysDown.length; i++) {
        Input.keysDown[i] = false;
    }

    for (var i = 0; i < Input.keysUp.length; i++) {
        Input.keysUp[i] = false;
    }
}
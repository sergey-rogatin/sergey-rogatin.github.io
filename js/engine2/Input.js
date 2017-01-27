var Input = (function () {
    function Input() {
    }
    Input.getKeyPressed = function (keyCode) {
        return Input.keysPressed[keyCode];
    };
    Input.getKeyDown = function (keyCode) {
        return Input.keysDown[keyCode];
    };
    Input.getKeyUp = function (keyCode) {
        return Input.keysUp[keyCode];
    };
    Input.resetKeys = function () {
        for (var i = 0; i < Input.keysDown.length; i++) {
            Input.keysDown[i] = false;
        }
        for (var i = 0; i < Input.keysUp.length; i++) {
            Input.keysUp[i] = false;
        }
    };
    return Input;
}());
Input.keysPressed = [];
Input.keysDown = [];
Input.keysUp = [];
window.addEventListener("keydown", function (e) {
    if (Input.keysPressed[e.keyCode]) {
        return;
    }
    Input.keysPressed[e.keyCode] = true;
    Input.keysDown[e.keyCode] = true;
});
window.addEventListener("keyup", function (e) {
    Input.keysPressed[e.keyCode] = false;
    Input.keysUp[e.keyCode] = true;
});
;
log("Loading input system...");
//# sourceMappingURL=Input.js.map
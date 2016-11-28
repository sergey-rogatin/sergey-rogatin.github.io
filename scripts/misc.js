function showPopup(popup) {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}

function hidePopup(popup) {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementByClass = function (className) {
    return document.getElementsByClassName(className)[0];
}

Element.prototype.getChildByClass = function (childClass) {
    for (var i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].className == childClass) {
            return this.childNodes[i];
        }
    }
}

Element.prototype.getSiblingByClass = function (siblingClass) {
    return this.parentNode.getChildByClass(siblingClass);
}

Element.prototype.getChildrenByClass = function (childClass) {
    var children = [];
    for (var i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].className == childClass) {
            children.push(this.childNodes[i]);
        }
    }
    return children;
}


function HashGenerator() {};
HashGenerator.prototype.id = 0;
HashGenerator.prototype.get = function() {
    return ++HashGenerator.prototype.id;
}

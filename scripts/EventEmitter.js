function EventEmitter() {
    this.subscribers = [];
}

EventEmitter.prototype.subscribe = function(method) {
    this.subscribers.push(method);
}

EventEmitter.prototype.notify = function(data) {
    for (var i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data);
    }
}
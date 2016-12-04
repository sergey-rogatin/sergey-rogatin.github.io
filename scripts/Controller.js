function Controller() {
    this.model = new Model();
    this.view = new View(this.model, this);
}

Controller.prototype.addBookFilter = function(fields, querys) {
    this.model.addBookFilter(fields, querys);
}

Controller.prototype.changeBookRating = function(book, newRating) {
    this.model.changeBookRating(book, newRating);
}

Controller.prototype.addNotification = function(type, book) {
    this.model.addNotification(type, book);
}

Controller.prototype.addBook = function(name, author, image, rating) {
    this.model.addBook(name, author, image, rating);
}

Controller.prototype.cloneBook = function(book) {
    this.model.addBook(book.name, book.author, book.image, book.rating);
}

Controller.prototype.addCategory = function(tag) {
    this.model.addCategory(tag);
}

Controller.prototype.changeBookTag = function(book, tag) {
    this.model.changeBookTag(book, tag);
}

Controller.prototype.showCategory = function(tag) {
    this.model.showCategory(tag);
}

Controller.prototype.hideCategory = function(tag) {
    this.model.hideCategory(tag);
}
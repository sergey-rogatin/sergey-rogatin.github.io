function Controller() {
    this.model = new Model();
    this.view = new View(this.model, this);
}

Controller.prototype.addBookFilter = function(field, query, strict, compareFunc) {
    this.model.addBookFilter(new BookFilter(field, query, strict, compareFunc));
}

Controller.prototype.removeBookFilter = function(field) {
    this.model.removeBookFilter(field);
}

Controller.prototype.changeBookRating = function(book, newRating) {
    this.model.changeBookRating(book, newRating);
}

Controller.prototype.addNotification = function(isFirstBright, strings) {
    this.model.addNotification(isFirstBright, strings);
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

Controller.prototype.changeCategory = function(tag) {
    this.model.changeCategory(tag);
}
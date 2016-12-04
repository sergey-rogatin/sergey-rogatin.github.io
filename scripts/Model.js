function Model() {
    //list of books
    this.books = [];
    this.onBookAdded = new EventEmitter();
    this.onBookRatingChanged = new EventEmitter();
    this.onBookTagChanged = new EventEmitter();

    //hashset of book filters
    this.bookFilters = {};
    this.onBooksFiltered = new EventEmitter();

    //list of notifications
    this.notifications = [];
    this.onNotificationAdded = new EventEmitter();
    this.onNotificationTimeUpdated = new EventEmitter();

    //updating notification time every minute
    setInterval(this.updateNotificationTime.bind(this), 60000);

    //all categories
    this.categories = [];
    this.currentCategory = "Must Read Titles";
    this.onCategoryAdded = new EventEmitter();
    //categories being shown
    this.shownCategories = [];
    this.onCategoryChanged = new EventEmitter();
}

function Book(name, author, image, rating, category) {
    this.name = name;
    this.author = author;
    this.image = image;
    this.rating = String(rating);
    this.tag = category;

    this.hiddenByStrict = false;
    this.show = true;
    this.hash = hashGen.get();
}


//adding books and changing their rating
Model.prototype.addBook = function(name, author, image, rating) {
    var book = new Book(name, author, image, rating, this.currentCategory);
    this.books.push(book);
    this.onBookAdded.notify(book);

    this.addNotification(NoteType.BOOK_ADD, book);
    this.applyBookFilters();

    return book;
}

Model.prototype.changeBookRating = function(book, newRating) {
    book.rating = newRating;
    this.onBookRatingChanged.notify(book);
    this.addNotification(NoteType.RATING, book);
}

//adding notifications and updating their timestamps

var NoteType = {
    BOOK_ADD : 0,
    BOOK_TAG_CHANGE : 1,
    RATING : 2,
    SEARCH : 3,
    FILTER : 4,
    CATEGORY_ADD : 5,
    CATEGORY_CHANGE : 6
};

function Notification(type, book) {
    this.type = type;
    this.book = book;
    this.minutes = 0;
    this.hours = 0;
       
    this.hash = hashGen.get();
}

Model.prototype.addNotification = function(type, book) {
    var notification = new Notification(type, book);
    this.notifications.push(notification);
    this.onNotificationAdded.notify(notification);

    return notification;
}

Model.prototype.updateNotificationTime = function() {
    for (var i = 0; i < this.notifications.length; i++) {
        var currentDate = new Date();
        var note = this.notifications[i];
        note.minutes++;
        
        if (note.minutes >= 60) {
            note.minutes = 0;
            note.hours++;
        }
        
        this.onNotificationTimeUpdated.notify(note);
    }
}

//book filters

Model.prototype.createBookFilter = function(fields, querys) {
    return function(book) {
        var result = false;
        return fields.some(function(field) {
            return querys.some(function(query) {
                var fieldValue = book[field].toLowerCase();
                var queryValue = query.toLowerCase();
                return (fieldValue.indexOf(queryValue) >= 0);
            });
        }, this);
    }
}

Model.prototype.addBookFilter = function(fields, querys) {
    var hash = fields.join();
    this.bookFilters[hash] = this.createBookFilter(fields, querys);
    this.applyBookFilters();
}

Model.prototype.applyBookFilters = function() {
    this.books.forEach(function(book) {
        book.show = true;
        for (var key in this.bookFilters) {
            var filterFunc = this.bookFilters[key];
            if (!filterFunc(book)) {
                book.show = false;
                break;
            }
        }
    }, this);
    this.onBooksFiltered.notify(this.books);
}

//categories

Model.prototype.addCategory = function(tag) {
    this.categories.push(tag);
    this.onCategoryAdded.notify(tag);
}

Model.prototype.changeBookTag = function(book, tag) {
    book.tag = tag;
    console.log(book.name + " tag changed to " + book.tag);

    this.onBookTagChanged.notify(book);
    this.applyBookFilters();
}

Model.prototype.showCategory = function(tag) {
    this.shownCategories.push(tag);
    this.onCategoryChanged.notify(this.shownCategories);
}

Model.prototype.hideCategory = function(tag) {
    this.shownCategories.deleteItem(tag);
    this.onCategoryChanged.notify(this.shownCategories);
}
function Model() {

    this.books = [];
    this.onBookAdded = new EventEmitter();
    this.onBookRatingChanged = new EventEmitter();

    this.bookFilters = {};
    this.onBooksFiltered = new EventEmitter();

    this.notifications = [];
    this.onNotificationAdded = new EventEmitter();
    this.onNotificationTimeUpdated = new EventEmitter();
    setInterval(this.updateNotificationTime.bind(this), 60000);

    this.categories = [];
    this.currentCategory = "Must Read Titles";
    this.onCategoryAdded = new EventEmitter();
    this.onCategoryChanged = new EventEmitter();

    this.onBookTagChanged = new EventEmitter();

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

function BookFilter(field, query, strict, compareFunc) {
    this.field = field;
    this.query = query;
    this.strict = strict;
    this.compareFunc = compareFunc;

    this.hash = field;
}

//adding books and changing their rating
Model.prototype.addBook = function(name, author, image, rating) {
    var book = new Book(name, author, image, rating, this.currentCategory);
    this.books.push(book);
    this.onBookAdded.notify(book);

    this.addNotification(false, ["You added ", book.name, " by ", book.author, 
            " to your ", this.currentCategory]);

    return book;
}

Model.prototype.changeBookRating = function(book, newRating) {
    book.rating = newRating;
    this.onBookRatingChanged.notify(book);
    this.addNotification(false, ["You rated ", book.name, " by ", book.author +
            " " + book.rating + " / 5"]);
}

//adding notifications and updating their timestamps
function Notification(isBrightFirst, strings) {
    this.isBrightFirst = isBrightFirst;
    this.strings = strings;

    this.minutes = 0;
    this.hours = 0;
    this.date = new Date();
    
    this.hash = hashGen.get();
}

Model.prototype.addNotification = function(isBrightFirst, strings) {
    var notification = new Notification(isBrightFirst, strings);
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

Model.prototype.addBookFilter = function(filter) {
    this.bookFilters[filter.hash] = filter;
    this.applyBookFilters();
    this.onBooksFiltered.notify();
}

Model.prototype.removeBookFilter = function(field) {
    delete this.bookFilters[field];
    this.applyBookFilters();
    this.onBooksFiltered.notify();
}

Model.prototype.applyBookFilters = function() {
    var compareFuncs = {
        equals: function(book) {
            //console.log(book);
            return String(book[filter.field]).toLowerCase() === filter.query.toLowerCase();
        },

        hasSymbols: function(book) {
            //console.log(book);
            return String(book[filter.field]).toLowerCase().indexOf(filter.query.toLowerCase()) >= 0;
        }
    }

    //resetting book state for strict filters
    this.books.forEach(function(book) {
        book.show = true;
        book.hiddenByStrict = false;
    }, this);

    var nonStrictCount = 0;

    //applying strict filters first
    for (var key in this.bookFilters) {
        var filter = this.bookFilters[key];
        if (filter.strict === true)
            applyFilter.bind(this)(filter);
        else
            nonStrictCount++;
    }

    if (nonStrictCount > 0) {
        //resetting book state for non-strict filters
        this.books.forEach(function(book) {
            book.show = false;
        }, this);

        //applying non-strict filters
        for (var key in this.bookFilters) {
            var filter = this.bookFilters[key];
            if (filter.strict === false)
                applyFilter.bind(this)(filter);
        }
    }
    
    function applyFilter(filter) {      
        this.books.forEach(function(book) {
            if (!(compareFuncs[filter.compareFunc](book))) {
                if (filter.strict) {
                    book.show = false;
                    book.hiddenByStrict = true;
                }
            }
            else {
                if (!filter.strict && !book.hiddenByStrict) {
                    book.show = true;
                }
            }
            // console.log(filter.compareFunc + 
            // " (" + book[filter.field] + ", " +
            // filter.query + ") " +
            // book.show);
        }, this);
    }
    if (filter != undefined)
        console.log("Filtered by " + filter.query + " in " + filter.field);
}

Model.prototype.addCategory = function(tag) {
    this.categories.push(tag);
    this.onCategoryAdded.notify(tag);
}

Model.prototype.changeBookTag = function(book, tag) {
    book.tag = tag;
    console.log(book.name + " tag changed to " + book.tag);
    this.onBookTagChanged.notify(book);
}

Model.prototype.changeCategory = function(tag) {
    this.currentCategory = tag;
    this.onCategoryChanged.notify(tag);
}
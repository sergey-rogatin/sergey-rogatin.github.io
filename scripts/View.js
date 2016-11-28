function View(model, controller) {
    this.model = model;
    this.controller = controller;

    //listing books

    //book to book element hashlist
    this.bookElements = {};

    this.bookListElement = document.getElementByClass("book-list");
    model.onBookAdded.subscribe(this.publishBook.bind(this));

    //updating book rating
    model.onBookRatingChanged.subscribe(this.publishBookRating.bind(this));

    //publishing notifications
    this.notificationElements = {};

    this.historyElements = {};

    this.notificationListElement = document.getElementByClass("menu-block__activity");
    model.onNotificationAdded.subscribe(this.publishNotification.bind(this));
    model.onNotificationTimeUpdated.subscribe(this.publishNotificationTime.bind(this));

    //updating filtered book list
    model.onBooksFiltered.subscribe(this.updateFilteredBooks.bind(this));

    //search
    this.searchElement = document.getElementByClass("search__input");
    this.searchElement.addEventListener("input", (function() {
        this.controller.addBookFilter("name", this.searchElement.value, false, "hasSymbols");
    }).bind(this));
    this.searchElement.addEventListener("input", (function() {
        this.controller.addBookFilter("author", this.searchElement.value, false, "hasSymbols");
    }).bind(this));

    this.searchElement.addEventListener("blur", (function() {
        if (this.searchElement.value != "")
            this.controller.addNotification(false, 
            ["Searching ",
            this.searchElement.value,
            " in ",
            "Must Read Titles"]);
    }).bind(this));

    //filter buttons
    this.browsingPanelElement = document.getElementByClass("browsing");
    this.filterListElement = document.getElementByClass("filters");
    var filterButtonElements = document.getElementsByClassName("filters__item");
    for (var i = 0; i < filterButtonElements.length; i++) {
        var filterButton = filterButtonElements[i];
        var controller = this.controller;
        filterButton.addEventListener("click", function() {
            for (var i = 0; i < filterButtonElements.length; i++) {
                filterButtonElements[i].className = "filters__item";
            }
            controller.removeBookFilter("rating");
            this.className = "filters__item filters__item_highlighted";
        });

        switch (filterButton.innerHTML) {
            case "All Books":
                filterButton.addEventListener("click", (function() {
                    this.controller.addNotification(false, [" Showing ", " all books"]);
                }).bind(this));
            break;
            case "Most Recent":
                filterButton.addEventListener("click", (function() {
                    this.controller.addNotification(false, [" Showing ", " recent books"]);
                    
                }).bind(this));
            break;
            case "Most Popular":
                filterButton.addEventListener("click", (function() {
                    this.controller.addBookFilter("rating", "5", true, "equals");
                    this.controller.addNotification(false, [" Showing ", " popular books"]);
                }).bind(this));
            break;
            case "Free Books":
                filterButton.addEventListener("click", (function() {
                    this.controller.addNotification(false, [" Showing ", " free books"]);
                }).bind(this));
            break;
        }
    }

    //adding books manually
    this.addBookPopup = document.getElementByClass("add-book");
    this.addBookPopup.style.visibility = "hidden";

    this.showBookPopup = document.getElementByClass("show-book");
    this.showBookPopup.style.visibility = "hidden";

    this.addABook = document.getElementByClass("menu-block__add-a-book");
    this.addABookButton = this.addABook.getChildByClass("menu-block__button");
    this.addABookButton.addEventListener("click", (function() {
        if (this.addBookPopup.style.visibility === "hidden") {
            showPopup(this.addBookPopup);
            hidePopup(this.showBookPopup);
        } 
        else {
            hidePopup(this.addBookPopup);
        }
    }).bind(this));


    var addPictureButton = document.getElementByClass("add-book__picture");
    this.bookImage = "images/jamie.jpg";

    addPictureButton.view = this;
    addPictureButton.addEventListener("change", function() {
        var file = this.files[0];
        if (file.type.indexOf('image') < 0) {
            this.view.bookImage = "images/jamie.jpg";
            console.log(pictureSrc);
            return;
        }
        var reader = new FileReader();
        reader.view = this.view;
        reader.onload = function() {
            this.view.bookImage = reader.result;
        }
        reader.readAsDataURL(file);
    });

    var addBookPopupButton = this.addBookPopup.getChildByClass("add-book__button");
    addBookPopupButton.view = this;
    addBookPopupButton.addEventListener("click", (function() {
        var name = this.addBookPopup.getChildByClass("add-book__name").value;
        var author = this.addBookPopup.getChildByClass("add-book__author").value;
        var image = this.bookImage;
        
        this.controller.addBook(name, author, image, "0");
        hidePopup(this.addBookPopup);
        hidePopup(this.showBookPopupTaglist);
    }).bind(this));


    //category filters 
    this.categoryListElement = document.getElementByClass("menu-block__categories");

    this.categoryElements = {};
    model.onCategoryAdded.subscribe(this.publishCategory.bind(this));

    model.onCategoryChanged.subscribe((function(tag) {
        for (var key in this.categoryElements) {
            this.categoryElements[key].className = "menu-block__item";
        }

        this.categoryElements[tag].className += " menu-block__item_highlighted";
        this.controller.addBookFilter("tag", tag, true, "equals");
        this.controller.addNotification(false, ["Browsing ", tag]);

    }).bind(this));


    //showing book info

    this.showBookPopupTaglist = document.getElementByClass("show-book__taglist");
    this.showBookPopupTaglist.style.visibility = "hidden";

    this.showBookPopupTag = document.getElementByClass("show-book__tag");

    model.onBookTagChanged.subscribe((function(book){
        this.showBookPopupTag.innerHTML = book.tag;
        this.controller.addNotification(true, [book.name, " tag changed to ", book.tag]);
    }).bind(this));

    this.showBookPopupTag.addEventListener("click", (function() {
        if (this.showBookPopupTaglist.style.visibility === "hidden") {
            showPopup(this.showBookPopupTaglist);

            var taglist = this.showBookPopupTaglist;

            while (taglist.firstChild) {
                taglist.removeChild(taglist.firstChild);
            }

            var view = this;

            for (var i = 0; i < this.model.categories.length; i ++) {
                var tagElement = document.createElement("div");
                tagElement.className = "show-book__tag-item";
                tagElement.innerHTML = this.model.categories[i];
                taglist.appendChild(tagElement);

                tagElement.addEventListener("click", function() {
                    view.controller.changeBookTag(view.showBookPopupTag.book, this.innerHTML);
                    hidePopup(taglist);
                });
            }

            var addTagContainer = document.createElement("div");
            addTagContainer.className = "show-book__tag-input-container";
            var addTagInput = document.createElement("input");
            addTagInput.className = "show-book__tag-item show-book__tag-input";
            addTagInput.setAttribute("type", "text");
            addTagInput.setAttribute("placeholder", "New tag...");
            var pic = document.createElement("i");
            pic.className = "show-book__tag-add fa fa-plus";

            pic.addEventListener("click", function() {
                view.controller.addCategory(addTagInput.value);
                view.controller.changeBookTag(view.showBookPopupTag.book, addTagInput.value);
                hidePopup(taglist);
            });

            taglist.appendChild(addTagContainer);
            addTagContainer.appendChild(addTagInput);
            addTagContainer.appendChild(pic);
        }
    }).bind(this));

    var showBookPopupButton = document.getElementByClass("show-book__button");
    showBookPopupButton.addEventListener("click", (function() {
        hidePopup(this.showBookPopup);
    }).bind(this));


    //showing notification history
    this.contentTitleElement = document.getElementByClass("content__title");

    this.navigationElement = document.getElementByClass("menu-block__navigation");
    var navItems = this.navigationElement.getChildrenByClass("menu-block__item");
    navItems.push(this.navigationElement.getChildByClass("menu-block__item menu-block__item_highlighted"));
    navItems.forEach(function(element) {
        var text = element.getChildByClass("menu-block__text").innerHTML;
        console.log(text);
        switch(text) {
            case "History" : {
                element.addEventListener("click", (function() {

                    while(this.bookListElement.firstChild) {
                        this.bookListElement.removeChild(this.bookListElement.firstChild);
                    }

                    this.bookListElement.style.flexFlow = "column nowrap";
                    this.contentTitleElement.innerHTML = "History";
                    fadeOut(this.categoryListElement);
                    fadeOut(this.browsingPanelElement);
                    fadeOut(this.addABook);
                    fadeOut(this.notificationListElement);

                    this.model.notifications.forEach(function(note) {
                        this.publishNotification(note, true);
                    }, this);

                    navItems.forEach(function(item) {
                        item.className = "menu-block__item";
                    }, this);
                    element.className = "menu-block__item menu-block__item_highlighted";
                    

                }).bind(this));
                break;     
            }
            case "Browse" : {
                element.addEventListener("click", (function() {
                    console.log("AJDSjask");
                    while(this.bookListElement.firstChild) {
                        this.bookListElement.removeChild(this.bookListElement.firstChild);
                    }

                    this.bookListElement.style.flexFlow = "row wrap";
                    this.contentTitleElement.innerHTML = "Browse Avaliable Books";
                    this.categoryListElement.style.display = "flex";
                    this.categoryListElement.style.flexFlow = "column";
                    this.categoryListElement.style.flexShrink = "0";
                    this.browsingPanelElement.style.display = "flex";
                    this.addABook.style.display = "flex";
                    this.notificationListElement.style.display = "flex";
                    this.notificationListElement.style.flexFlow = "column";
                    this.notificationListElement.style.flexShrink = "0";

                    this.model.books.forEach(function(book) {
                        this.publishBook(book);
                    }, this);

                    navItems.forEach(function(item) {
                        item.className = "menu-block__item";
                    }, this);
                    element.className = "menu-block__item menu-block__item_highlighted";

                    this.controller.changeCategory("Must Read Titles");

                }).bind(this));
                break;
            }
        }
    }, this);

    function fadeOut(element, direction) {
        element.style.display = "none";
    }
}

View.prototype.publishBook = function(book) {
    var newBook = document.createElement("div");
    newBook.className = "book";

    var image = document.createElement("img");
    image.setAttribute("src", book.image);
    image.setAttribute("alt", "image");
    image.className = "book__image";

    var name = document.createElement("span");
    name.className = "book__name";
    name.innerHTML = book.name;

    var author = document.createElement("span");
    author.className = "book__author";
    author.innerHTML = book.author;

    var rating = document.createElement("ul");
    rating.className = "rating";

    this.bookListElement.insertBefore(newBook, this.bookListElement.firstChild);
    newBook.appendChild(image);
    newBook.appendChild(name);
    newBook.appendChild(author);
    newBook.appendChild(rating);

    this.bookElements[book.hash] = newBook;

    this.publishBookRating(book);

    newBook.book = book;

    console.log("Adding book: ");
    console.log(book);

    var view = this;
    newBook.addEventListener("click", function() {
        if (view.showBookPopup.style.visibility === "hidden" || view.showBookPopup.bookElement != this) {
            showPopup(view.showBookPopup);
            view.showBookPopup.bookElement = newBook;
            var body = view.showBookPopup.getChildByClass("show-book__body");
            body.getChildByClass("show-book__name").innerHTML = this.book.name;
            body.getChildByClass("show-book__author").innerHTML = this.book.author;
            view.showBookPopupTag.innerHTML = this.book.tag;
            view.showBookPopupTag.book = this.book;
            var image = view.showBookPopup.getChildByClass("show-book__image");

            image.setAttribute("src", this.book.image);
            image.setAttribute("alt", "image");

            hidePopup(view.addBookPopup);
            hidePopup(view.showBookPopupTaglist);
        } 
        else {
            hidePopup(view.showBookPopup);
            hidePopup(view.showBookPopupTaglist);
        }
    });
}

View.prototype.publishBookRating = function(book) {
    var bookElement = this.bookElements[book.hash];
    var rating = bookElement.getChildByClass("rating");

    while (rating.firstChild) {
        rating.removeChild(rating.firstChild);
    }

    for (var j = 0; j < 5; j++) {
        var star = createStar(j);
        star.index = j + 1;
        star.controller = this.controller;
        star.addEventListener("click", rate, true);

        function rate(event) {
            event.stopPropagation();
            this.controller.changeBookRating(book, this.index);
        }
    }

    function createStar(index) {
        var star = document.createElement("i");
        var diff = index - book.rating + 1;
        if (diff >= 1)
            star.className = "rating__pic fa fa-star-o";
        else
            star.className = "rating__pic fa fa-star";
        rating.appendChild(star);

        return star;
    }
    console.log("Rating on " + book.name + " changed to " + book.rating);
}

View.prototype.publishNotification = function(notification, isHistory) {
    var notificationElement = document.createElement("li"); //wrapper
    notificationElement.className = "menu-block__item";
    var icon = document.createElement("i"); //icon
    icon.className = "menu-block__pic menu-block__pic_top fa fa-clock-o";
    var body = document.createElement("div");
    body.className = "menu-block__body"; //body


    //assigning text bright or pale
    for (var i = 0; i < notification.strings.length; i++) {
        var text = document.createElement("span");
        if (i % 2 === Number(notification.isBrightFirst)) {
            text.className = "menu-block__text_pale"; //pale text
        }
        else {
            text.className = "menu-block__text"; //bright text
        }
        text.innerHTML = notification.strings[i];
        body.appendChild(text);
    }

    var timeStamp = document.createElement("span");
    timeStamp.className = "menu-block__timestamp"; //time
    timeStamp.innerHTML = "right now";

    //appending all the children
    if (!isHistory) {
        this.notificationListElement.insertBefore(notificationElement,
             this.notificationListElement.firstChild);

        if (this.notificationListElement.children.length > 3)
            this.notificationListElement.removeChild(this.notificationListElement.lastChild);

        this.notificationElements[notification.hash] = notificationElement;
    }
    else {
        this.bookListElement.insertBefore(notificationElement,
             this.bookListElement.firstChild);
        
        this.historyElements[notification.hash] = notificationElement;
    }

    notificationElement.appendChild(icon);
    notificationElement.appendChild(body);
    body.appendChild(timeStamp);

    this.publishNotificationTime(notification);
    //console.log("Notification published")
}

View.prototype.publishNotificationTime = function(notification) {
    if (notification.minutes > 0) {
        var notificationElement = this.notificationElements[notification.hash];
        if (notificationElement != undefined)
            publish();

        notificationElement = this.historyElements[notification.hash];
        if (notificationElement != undefined)
            publish();
        
        function publish() {
            var body = notificationElement.getChildByClass("menu-block__body")
            var timeStamp = body.getChildByClass("menu-block__timestamp");

            timeStamp.innerHTML = "";
            if (notification.hours > 0)
                timeStamp.innerHTML += notification.hours + " hours ";

            if (notification.minutes > 0)
                timeStamp.innerHTML += notification.minutes + " minutes ";
            
            timeStamp.innerHTML += "ago";
        }
    }
}



//filtering books
View.prototype.updateFilteredBooks = function() {
    for (var i = 0; i < this.model.books.length; i++) {
        var book = this.model.books[i];
        var bookElement = this.bookElements[book.hash];
        if (book.show === true) {
            bookElement.style.display = "flex";
        } 
        else {
            bookElement.style.display = "none";
        }
    }
}

//adding categories
View.prototype.publishCategory = function(tag) {
    var categoryElement = document.createElement("li");
    categoryElement.className = "menu-block__item";

    var pic = document.createElement("i");
    pic.className = "menu-block__pic fa fa-circle";
    pic.style.color = "rgb(" + getRandomInt(80,255) + 
            ", " + getRandomInt(50,255) + ", " + getRandomInt(0,255) + ")";
    console.log(pic.style.color);

    var text = document.createElement("span");
    text.className = "menu-block__text";
    text.innerHTML = tag;

    categoryElement.appendChild(pic);
    categoryElement.appendChild(text);

    this.categoryListElement.insertBefore(categoryElement, this.categoryListElement.firstChild);

    console.log("Category " + tag + " added");
    this.controller.addNotification(false, ["Category ", "'"+tag+"'", " added"]);

    var view = this;
    categoryElement.addEventListener("click", function() {
        var category = this.getChildByClass("menu-block__text").innerHTML;
        view.controller.changeCategory(category);
    });

    this.categoryElements[tag] = categoryElement;
}
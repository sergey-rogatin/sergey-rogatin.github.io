//notifications
var activityList = document.getElementsByClassName("menu-block__activity")[0];

var timeStamps = [];

setInterval(updateTimeStamps, 1000);

function updateTimeStamps() {
    timeStamps.forEach(function(stamp) {
        stamp.innerHTML = "";
        stamp.minutes++;
        if (stamp.minutes >= 60) {
            stamp.minutes = 0;
            stamp.hours++;
        }
        if (stamp.hours > 0) {
            stamp.innerHTML += stamp.hours + " hours ";
        }
        stamp.innerHTML += stamp.minutes + " minutes ago";
    }, this);
}

function pushNotification() {
    var notification = document.createElement("li"); //wrapper
    notification.className = "menu-block__item";
    var icon = document.createElement("i"); //icon
    icon.className = "menu-block__pic menu-block__pic_top fa fa-clock-o";
    var body = document.createElement("div");
    body.className = "menu-block__body"; //body

    //deciding whether the notification text starts with bright or with pale text
    if (typeof arguments[0] === "boolean"){
        if (arguments[0] === true) {
            startWithBright = 1;
        }
        else {
            startWithBright = 0;
        }
    }

    //assigning text bright or pale
    for (var i = 1; i < arguments.length; i++) {
        var text = document.createElement("span");
        if (i % 2 != startWithBright) {
            text.className = "menu-block__text_pale"; //pale text
        }
        else {
            text.className = "menu-block__text"; //bright text
        }
        text.innerHTML = arguments[i];
        body.appendChild(text);
    }

    var timeStamp = document.createElement("span");
    timeStamp.className = "menu-block__timestamp"; //time

    timeStamp.innerHTML = "right now";
    timeStamp.minutes = 0;
    timeStamp.hours = 0;
    timeStamps.push(timeStamp);

    //appending all the children
    activityList.insertBefore(notification, activityList.firstChild);
    notification.appendChild(icon);
    notification.appendChild(body);
    body.appendChild(timeStamp);

    if (activityList.children.length > 5) {
        activityList.removeChild(activityList.lastChild);
    }
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

//a hashlist of applied thumbnail filters
var bookFilters = {};

function addBookFilter(searchClass, query, strict, compareFunction) {
    bookFilters[searchClass] = [];  //the field being filtered by
    bookFilters[searchClass].push(query);  //the field that provides input for the filter
    bookFilters[searchClass].push(strict);  //if the filter is exclusive or not
    bookFilters[searchClass].push(compareFunction);
    applyBookFilters();
}

function removeBookFilter(searchClass) {
    delete bookFilters[searchClass];
    applyBookFilters();
}

function applyBookFilters() {
    console.clear();
    var books = document.getElementsByClassName("book");
    console.log(bookFilters);

    for (var i = 0; i < books.length; i++) {
        books[i].style.display = "flex";
        books[i].show = true;
    }

    //first all of the strict filters are applied
    var nonstrictCount = 0;
    for (var searchClass in bookFilters) {
            var strict = bookFilters[searchClass][1];
            if (strict)
                applyFilter(searchClass, strict);
            else
                nonstrictCount++;
    } 

    //then all of the nonstrict filters, if there are any
    if (nonstrictCount > 0) {
        //hiding all thumbnails
        for (var i = 0; i < books.length; i++) {
            books[i].style.display = "none";
        }
        //applying nonstrict filters to them
        for (var searchClass in bookFilters) {
            var strict = bookFilters[searchClass][1];
            if (!strict)
                applyFilter(searchClass, strict);
        }
    }

    function applyFilter(searchClass, strict) {
        var queryInput = bookFilters[searchClass][0];
        var compareFunction = bookFilters[searchClass][2];

        for (var i = 0; i < books.length; i++) {
            var book = books[i];
            var search = book.getChildByClass(searchClass).innerHTML.toLowerCase();
            var query = queryInput.toLowerCase();


            switch(compareFunction) {
                case "findSymbols": compareFunction = findSymbols; break;
                case "equalTo": compareFunction = equalTo; break;
            }


            if (compareFunction()) {
                //if the query value is not found, strict filters hide the thumbnail
                if (strict) {
                    book.style.display = "none";
                    book.show = false;
                }
            }
            else {
                //nonstrict filters unhide the thumbnail if it has not been hidden by a strict filter
                if (!strict && book.show)
                    book.style.display = "flex";
            }           
            console.log(query + " in " + search + "; show = "
             + !compareFunction());
        }

        function findSymbols() {
            return (search.indexOf(query) < 0);
        }

        function equalTo() {
            return !(search == query);
        }
    } 
}



//adding thumbnail filter to search fields


var searchFields = document.getElementsByClassName("search__input");

for (var i = 0; i < searchFields.length; i++) {
    var searchField = searchFields[i];

    searchField.addEventListener("input", addSearchFunction("book__name", false));
    searchField.addEventListener("input", addSearchFunction("book__author", false));
    searchField.addEventListener("blur", notify);
}

function addSearchFunction(searchClass, strict) {
    return function() {
        addBookFilter(searchClass, this.value, strict, "findSymbols");
    } 
}

function notify() {
    if (this.value != "")
        pushNotification(false, "Searching ", this.value, " in books");
}


//adding thumbnail filters to filter buttons

var filterButtons = document.getElementsByClassName("filters__item");

for (var i = 0; i < filterButtons.length; i++) {
    var filterButton = filterButtons[i];

    filterButton.addEventListener("click", highlightButton);
    
    switch (filterButton.innerHTML) {
        case "All Books":
            filterButton.addEventListener("click",function() {
                pushNotification(false, " Showing ", " all books")
            });
        break;
        case "Most Recent":
            filterButton.addEventListener("click", addRecentFilter);
        break;
        case "Most Popular":
            filterButton.addEventListener("click", addMostPopularFilter);
        break;
        case "Free Books":
            filterButton.addEventListener("click", addFreeFilter);
        break;
    }
}

function highlightButton() {
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].className = "filters__item";
    }
    removeMostPopularFilter();
    removeRecentFilter();
    removeFreeFilter();
    this.className = "filters__item filters__item_highlighted";
}

function addMostPopularFilter() {
    addBookFilter("book__rating", "5", true, "equalTo");
    pushNotification(false, " Showing ", " popular books");
}

function removeMostPopularFilter() {
    removeBookFilter("book__rating");
}

function addRecentFilter() {
    //addBookFilter("book__rating", "5", true, "equalTo");
    pushNotification(false, " Showing ", " recent books");
}

function removeRecentFilter() {
    //removeBookFilter("book__rating");
}

function addFreeFilter() {
    //addBookFilter("book__rating", "5", true, "equalTo");
    pushNotification(false, " Showing ", " free books");
}

function removeFreeFilter() {
    //removeBookFilter("book__rating");
}

//updating book ratings
var books = document.getElementsByClassName("book");

updateBookRatings();

function updateBookRatings() {
    for (var i = 0; i < books.length; i++) {
        updateRating(books[i], books[i].getChildByClass("book__rating").innerHTML, false);
    }
}

function updateRating(book, rating, sendNotification) {
    var ratingSymbols = book.getChildByClass("rating");
    while (ratingSymbols.firstChild) {
        ratingSymbols.removeChild(ratingSymbols.firstChild);
    }

    for (var j = 0; j < 5; j++) {
        var star = createStar(j);
        star.index = j + 1;
        star.addEventListener("click", function() {
            var book = this.parentNode.parentNode;
            book.getChildByClass("book__rating").innerHTML = this.index;
            updateRating(book, this.index, true);
        });
    }

    function createStar(index) {
        var star = document.createElement("i");
        var diff = index - rating + 1;
        //console.log(diff);
        if (diff >= 1)
            star.className = "rating__pic fa fa-star-o";
        else if (diff < 1 && diff > 0)
            star.className = "rating__pic fa fa-star-half-o";
        else
            star.className = "rating__pic fa fa-star";
        ratingSymbols.appendChild(star);
        return star;
    }

    if (sendNotification)
        pushNotification(true, book.getChildByClass("book__name").innerHTML, " by ", 
                book.getChildByClass("book__author").innerHTML, " rated ", rating + " / 5");
}


//adding books

var addBookButton = document.getElementsByClassName("menu-block__button")[0];
addBookButton.addEventListener("click", addBook);

var newPicture = document.getElementsByClassName("menu-block__book-picture")[0];
var pictureSrc = "images/jamie.jpg";

newPicture.addEventListener("change", function() {
    var file = this.files[0];

    if (file.type.indexOf('image') < 0) {
        pictureSrc = "images/jamie.jpg";
        console.log(pictureSrc);
        return;
    }
    var reader = new FileReader();
    reader.onload = function() {
        pictureSrc = reader.result;
    }
    reader.readAsDataURL(file);
})

function changeColor(button, color) {
    var prevColor = "#f2795a";
    button.style.background = color;
    setTimeout(function() {
        button.style.background = prevColor;
    }, 600);
}

function addBook() {
    var newName = document.getElementsByClassName("menu-block__book-name")[0];
    var newAuthor = document.getElementsByClassName("menu-block__book-author")[0];

    if (newName.value == "" || newAuthor.value == "") {
        changeColor(addBookButton, "red");
        return;
    }

    changeColor(addBookButton, "greenyellow");
    var bookList = document.getElementsByClassName("book-list")[0];
    var newBook = document.createElement("div");
    newBook.className = "book";

    console.log(pictureSrc);

    var image = document.createElement("img");
    image.setAttribute("src", pictureSrc);
    image.setAttribute("alt", "image");
    image.className = "book__image";

    var name = document.createElement("span");
    name.className = "book__name";
    name.innerHTML = newName.value;

    var author = document.createElement("span");
    author.className = "book__author";
    author.innerHTML = newAuthor.value;

    var rating = document.createElement("span");
    rating.className = "book__rating";
    rating.innerHTML = 0;

    var ratingSymbols = document.createElement("ul");
    ratingSymbols.className = "rating";

    bookList.insertBefore(newBook, bookList.firstChild);
    newBook.appendChild(image);
    newBook.appendChild(name);
    newBook.appendChild(author);
    newBook.appendChild(rating);
    newBook.appendChild(ratingSymbols);

    updateRating(newBook, rating.innerHTML);

    newName.value = "";
    newAuthor.value = "";

    pushNotification(false, "You added ", name.innerHTML, " by ", author.innerHTML, " to your ", "Must Read Titles");
}
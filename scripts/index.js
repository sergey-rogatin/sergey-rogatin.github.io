
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
}

function addSearchFunction(searchClass, strict) {
    return function() {
        addBookFilter(searchClass, this.value, strict, "findSymbols");
    } 
}


//adding thumbnail filters to filter buttons

var filterButtons = document.getElementsByClassName("filters__item");

for (var i = 0; i < filterButtons.length; i++) {
    var filterButton = filterButtons[i];

    filterButton.addEventListener("click", highlightButton);
    
    switch (filterButton.innerHTML) {
        case "Most Recent":
        break;
        case "Most Popular":
            filterButton.addEventListener("click", addMostPopularFilter);
        break;
    }
}

function highlightButton() {
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].className = "filters__item";
    }
    removeMostPopularFilter();
    this.className = "filters__item filters__item_highlighted";
}

function addMostPopularFilter() {
    addBookFilter("book__rating", "5", true, "equalTo");
}

function removeMostPopularFilter() {
    removeBookFilter("book__rating");
}

//updating book ratings
var books = document.getElementsByClassName("book");

updateBookRatings();

function updateBookRatings() {
    for (var i = 0; i < books.length; i++) {
        updateRating(books[i]);
    }
}

function updateRating(book) {
    var ratingSymbols = book.getChildByClass("rating");
    while (ratingSymbols.firstChild) {
        ratingSymbols.removeChild(ratingSymbols.firstChild);
    }
    var rating = book.getChildByClass("book__rating").innerHTML;
    for (var j = 0; j < 5; j++) {
        createStar(j);
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
    }
}
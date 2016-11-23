var searchContainers = document.getElementsByClassName("search-container");

for (var i = 0; i < searchContainers.length; i++) {
    var searchBar = searchContainers[i].getChildByClass("search-container__input");
    searchBar.addEventListener("focus", expand);
    searchBar.addEventListener("blur", contract);
    //searching in thumbnails
    searchBar.addEventListener("input", filterThumbnails("thumbnail__name", searchBar, false));
    searchBar.addEventListener("input", filterThumbnails("thumbnail__author", searchBar, false));
}

function expand() {
    searchBar.style.width = "20em";
}

function contract() {
    searchBar.style.width = "10em";
}

function filterThumbnails(searchClass, queryInput, strict) {
    return function() {
        addThumbnailFilter(searchClass, queryInput, strict);
    }
}
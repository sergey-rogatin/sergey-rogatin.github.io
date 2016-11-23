var styleSelected = {
    background: "#98b3ce",
    color: "white"
};

var styleDeselected = {
    color: "#788097",
    background: "#eef1f8"
};

var filters = document.getElementsByClassName("horizontal-menu-item__input");
Object.assign(filters[0].parentElement.style, styleSelected);

for (var i = 0; i < filters.length; i++) {
    var item = filters[i];
    item.addEventListener("change", highlight);

    var nameElement = filters[i].getSiblingByClass("horizontal-menu-item__name");
    var filterName = nameElement.innerHTML.toLowerCase();
    item.addEventListener("change", addFilter(filterName));
}

function highlight() {
    for (var i = 0; i < filters.length; i++) {
        if (filters[i].checked)
            Object.assign(filters[i].parentElement.style, styleSelected);
        else
            Object.assign(filters[i].parentElement.style, styleDeselected);
    }
}

function addFilter(filterName) {
    return function() {
        for (var i = 0; i < filters.length; i++) {
            if (filters[i].checked) {      
                switch (filterName) 
                {
                    case "all books":
                        var queryInput = new QueryInput("");
                        break;
                    case "most recent":
                        var queryInput = new QueryInput("recent");
                        break;
                    case "most popular":
                        var queryInput = new QueryInput("popular");
                        break;
                    case "free books":
                        var queryInput = new QueryInput("free");
                        break;
                }
                addThumbnailFilter("thumbnail__tags", queryInput, true);
            }
        }
    }
}
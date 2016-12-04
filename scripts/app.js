var hashGen = new HashGenerator();

function Application() {
    this.ctrl = new Controller();
}


var app = new Application();

//adding initial books
app.ctrl.addCategory("Non Fiction");
app.ctrl.addCategory("Classic Novels");
app.ctrl.addCategory("Best Of List");
app.ctrl.addCategory("Must Read Titles");

app.ctrl.showCategory("Must Read Titles");

app.ctrl.addBook("Jewels of Nizam", "Geeta Devi", "images/jewels.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Cakes and Bakes", "Sanjeev Kapoor", "images/cakes and bakes.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Jamie's Kitchen", "Jamie Oliver", "images/jamie.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Inexpensive Family Meals", "Simon Holst", "images/family.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Paleo Slow Cooking", "Chrissy Goer", "images/paleo.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Cook Like an Italian", "Toby Puttock", "images/italian.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Suneeta Vasvani", "Geeta Devi", "images/indian.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Jamie Does", "Jamie Oliver", "images/does.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Jamie's Italy", "Jamie Oliver", "images/jamie italy.jpg", getRandomInt(1, 5));
app.ctrl.addBook("Vegetables Cookbook", "Matthew Biggs", "images/vegetables.jpg", getRandomInt(1, 5));

console.clear();
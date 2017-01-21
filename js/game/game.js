Engine.currScene = new Scene("testScene", 1000, 1000);
Engine.mainCamera.background = Loader.loadSprite("img/game/gameOfLife.png");

var player0 = player.instantiate(100, 100);
var enemy0 = enemy.instantiate(-60, 200);

var snd = Loader.loadSound("snd/holmes.mp3");
snd.play();
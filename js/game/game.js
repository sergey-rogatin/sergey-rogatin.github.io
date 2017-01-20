Engine.fps = 60;
Engine.currScene = new Scene("testScene");

var player0 = player.instantiate(100, 100);

var enemy0 = enemy.instantiate(-60, 200);


Engine.start();
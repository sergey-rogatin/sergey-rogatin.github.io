Engine.currScene = new Scene("testScene", 1000, 1000);
//Engine.mainCamera.background = Loader.loadSprite("js/game/resources/sprites/gameOfLife.png");


let player0 = oPlayer.instantiate(100, 100);

let posY = 20;
while (posY < 350) {
    oEnemy.instantiate(400, posY);
    posY += 40;
}

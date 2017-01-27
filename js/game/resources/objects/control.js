let oControl = new GameObject("oControl");

oControl.onInit = function() {
    this.enemyCount = 0;
    this.waveCount = 0;

    this.player = oPlayer.instantiate(100, 100);

    this.amount = 2;
}

oControl.onUpdate = function() {
    if (this.enemyCount == 0) {

        this.waveCount++;
        this.amount = sqrt(this.waveCount * 3);

        let posY = 0;
        let posX = -10;
        let inLine = 0;
        for (let i = 0; i < this.amount; i++) {
            if (posY > Engine.currScene.height/2 - 30) {
                posY = 0;
                posX -= 40 + randomRange(0, 15);
                inLine = 0;
            }
            let obj = pick(oEnemy, oEnemyRocketeer);
            let newY = Engine.currScene.height/2 + posY * pow(-1, i) - 30;
            inLine++;
            let newEnemy = obj.instantiate(550, newY);
            newEnemy.targetX = Engine.currScene.width + posX;
            newEnemy.hp += Math.round(this.waveCount/10);
            this.enemyCount++;
            if (inLine % 2 == 1) {
                posY += randomRange(30, 200 - this.waveCount*2);
            }
        }
        console.log("Wave " + this.waveCount);
    }

    if (this.player.dead) {
        console.log("Game over!");
    }
}

function pick() {
    let index = Math.round(randomRange(0, arguments.length-1));
    return arguments[index];
}
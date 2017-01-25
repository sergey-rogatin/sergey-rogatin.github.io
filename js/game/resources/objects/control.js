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

        let posY = 20;
        let posX = -10;
        for (let i = 0; i < this.amount; i++) {
            if (posY > Engine.currScene.height - 20) {
                posY = 20 + randomRange(0, 15);
                posX -= 40 + randomRange(0, 15);
            }
            let obj = pick(oEnemy, oEnemyRocketeer);
            let newEnemy = obj.instantiate(550, posY);
            newEnemy.targetX = Engine.currScene.width + posX;
            newEnemy.hp += Math.round(this.waveCount/10);
            posY += randomRange(40, 150);
            this.enemyCount++;
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
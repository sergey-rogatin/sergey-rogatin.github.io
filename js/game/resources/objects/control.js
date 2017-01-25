let oControl = new GameObject("oControl");

oControl.onInit = function() {
    this.enemyCount = 0;
}

oControl.onUpdate = function() {
    let posY = 20;

    if (this.enemyCount == 0) {
            while (posY < 350 - 70) {
                oEnemy.instantiate(550, posY);
                posY += randomRange(40, 120);
                this.enemyCount++;
            }
    }
}
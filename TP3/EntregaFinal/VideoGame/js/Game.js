class Game {

    constructor() {
        this.character = new Character();
        this.obstacle = new Obstacle();
        // this.gameOverFlag = false;
        this.gameInterval = null;
    }

    setGame() {        
        this.character.motionless();
        btnStart.className = 'startButton';
        logoGame.style.visibility = 'visible';
        gameOver.style.visibility = 'hidden';
        logoGame.className = 'logoGame';
        background.className = 'backgroundMotionless';
        fog.className = 'fog';
        fogGreen.className = 'fogGreen';
        // this.gameOverFlag = false;
        // clearInterval(this.gameInterval);
    }
    
    
    resetGame() {
        // Restablecer todas las configuraciones al estado inicial
        this.obstacle.hideAllObstacles();
        this.character.motionless();
        btnStart.className = 'startButton';
        btnStart.classList.add('startButtonOn');
        btnKill.style.visibility = 'hidden';
        this.moveBackground();
        this.gameInterval = null;
        logoGame.style.visibility = 'visible';
    }

    showObstacles() {
        this.obstacle.showAllObstacles();
    }

    loopGame() {
        this.inicializeGame();
        this.gameInterval = setInterval(() => {
            this.checkCollision();
            // if (!this.gameOverFlag) {
            //     this.checkCollision();
            // }
        }, 100);
    }
    
    jumpCharacter() {
        this.character.jump()      
    }

    inicializeGame() {
        this.character.run();
        this.moveBackground();
        btnStart.className = 'hide';
        background.className = 'hide';
        gameOver.className = 'hide';
        logoGame.style.visibility = 'visible';
        // btnKill.style.visibility = 'visible';
        this.showObstacles();    
    }

    checkCollision() {
        const characterBounds = this.character.character.getBoundingClientRect();
        for (let obstacle of this.obstacle.obstacles) {
            const obstacleBounds = obstacle.getBoundingClientRect();
            if (
                characterBounds.left < obstacleBounds.right &&
                characterBounds.right > obstacleBounds.left &&
                characterBounds.top < obstacleBounds.bottom &&
                characterBounds.bottom > obstacleBounds.top
            ) {
                this.gameOver(); 
                return;
            }
        }
    }

    moveBackground() {
        background_L1.className = 'background_L1';
        background_L2.className = 'background_L2';
        background_L3.className = 'background_L3';
        background_L4.className = 'background_L4';
        background_L5.className = 'background_L5';
        background_L6.className = 'background_L6';
    }

    stopBackground() {
        background_L1.style.animationPlayState = 'paused';
        background_L2.style.animationPlayState = 'paused';
        background_L3.style.animationPlayState = 'paused';
        background_L4.style.animationPlayState = 'paused';
        background_L5.style.animationPlayState = 'paused';
        background_L6.style.animationPlayState = 'paused';
    }

    gameOver() {
        this.character.dead();
        // btnStart.classList.add('startButtonOn');
        // btnKill.style.visibility = 'hidden';
        this.obstacle.hideAllObstacles();
        // clearInterval(this.gameInterval);
        this.stopBackground();
        this.setGameOver();  
    } 

    setGameOver() {
        logoGame.style.visibility = 'hidden';
        gameOver.className = 'gameOver';
        gameOver.style.visibility = 'visible';
        background.className = 'backgroundMotionless';
        // this.gameOverFlag = true;
        setTimeout(() => {
            this.setGame();
        }, 3000); 
    }


}

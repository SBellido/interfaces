class Game {

    constructor() {
        this.character = new Character();
        this.obstacle = new Obstacle();
        this.gameInterval = null;
        this.gameStarted = false;
        this.parallaxMoving = false;
    }

    setGame() {     
        console.log("Se setea el juego");
        this.character.motionless();
        btnStart.className = 'startButton';
        logoGame.style.visibility = 'visible';
        gameOver.style.visibility = 'hidden';
        logoGame.className = 'logoGame';
        background.className = 'background';
        fog.className = 'fog';
        fogGreen.className = 'fogGreen';
    }

    showBackgroundLayer() {
        background_L1.style.visibility = 'show';
        background_L2.style.visibility = 'show';
        background_L3.style.visibility = 'show';
        background_L4.style.visibility = 'show';
        background_L5.style.visibility = 'show';
        background_L6.style.visibility = 'show';
    }

    showObstacles() {
        this.obstacle.showAllObstacles();
    }

    loopGame() {
        this.inicializeGame();
        this.gameInterval = setInterval(() => {
            this.checkCollision();
        }, 100);
    }
    
    jumpCharacter() {
        if (this.gameStarted) {
            this.character.jump(); 
        }
    }

    inicializeGame() {
        gamingSound.loop = true;
        gamingSound.play();
        this.gameStarted = true;
        btnStart.className = 'hide';
        background.className = 'hide';
        gameOver.className = 'hide';
        this.character.run();
        this.moveBackground();
        this.parallaxMoving ? this.character.run() : this.character.motionless()
        logoGame.style.visibility = 'visible';
        this.showObstacles();    
    }

    checkCollision() {
        const characterState = this.character.getState();
        if (characterState === 'run') {
            console.log("evalúa colision");
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
    }

    moveBackground() {
        console.log("Fonde se mueve");
        this.parallaxMoving = true;
        background_L1.className = 'background_L1';
        background_L2.className = 'background_L2';
        background_L3.className = 'background_L3';
        background_L4.className = 'background_L4';
        background_L5.className = 'background_L5';
        background_L6.className = 'background_L6';
    }
    
    stopBackground() {
        console.log("Fonde se detiene");
        this.parallaxMoving = false;
        background_L1.style.animationPlayState = 'paused';
        background_L2.style.animationPlayState = 'paused';
        background_L3.style.animationPlayState = 'paused';
        background_L4.style.animationPlayState = 'paused';
        background_L5.style.animationPlayState = 'paused';
        background_L6.style.animationPlayState = 'paused';
    }

    gameOver() {
        console.log("Game over");

        this.character.dead();
        gamingSound.pause();
        dead.play();

        // btnStart.classList.add('startButtonOn');
        // btnKill.style.visibility = 'hidden';
        this.obstacle.hideAllObstacles();
        // clearInterval(this.gameInterval);
        this.stopBackground();
        this.setGameOver();  
    } 

    setGameOver() {
        console.log("Set game over");

        logoGame.style.visibility = 'hidden';
        gameOver.className = 'gameOver';
        gameOver.style.visibility = 'visible';
        background.className = 'backgroundMotionless';
        setTimeout(() => {
            this.setGame();
            window.location.reload();
        }, 3000); 
    }


}

class Game {

    constructor() {
        this.character = new Character();
        this.obstacle = new Obstacle();
        this.gameInterval = null;
    }

    setGame() {     
        console.log("Se setea el juego");
        this.character.motionless();
        btnStart.className = 'startButton';
        logoGame.style.visibility = 'visible';
        gameOver.style.visibility = 'hidden';
        logoGame.className = 'logoGame';
        background.className = 'background';
        //this.showBackgroundLayer();
        fog.className = 'fog';
        fogGreen.className = 'fogGreen';
        // clearInterval(this.gameInterval);
    }
     showBackgroundLayer() {
        background_L1.style.visibility = 'show';
        background_L2.style.visibility = 'show';
        background_L3.style.visibility = 'show';
        background_L4.style.visibility = 'show';
        background_L5.style.visibility = 'show';
        background_L6.style.visibility = 'show';
     }
    
    // resetGame() {
    //     // Restablecer todas las configuraciones al estado inicial
    //     this.obstacle.hideAllObstacles();
    //     this.character.motionless();
    //     btnStart.className = 'startButton';
    //     btnStart.classList.add('startButtonOn');
    //     btnKill.style.visibility = 'hide';
    //     this.moveBackground();
    //     this.gameInterval = null;
    //     logoGame.style.visibility = 'visible';
    // }

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
        this.character.jump()      
    }

    inicializeGame() {
        console.log("Se inicia el juego");
        btnStart.className = 'hide';
        background.className = 'hide';
        gameOver.className = 'hide';
        this.character.run();
        this.moveBackground();
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
        background_L1.className = 'background_L1';
        background_L2.className = 'background_L2';
        background_L3.className = 'background_L3';
        background_L4.className = 'background_L4';
        background_L5.className = 'background_L5';
        background_L6.className = 'background_L6';
    //     background_L1.classList.add('background_L1_animated');
    // background_L2.classList.add('background_L2_animated');
    // background_L3.classList.add('background_L3_animated');
    // background_L4.classList.add('background_L4_animated');
    // background_L5.classList.add('background_L5_animated');
    // background_L6.classList.add('background_L6_animated');
    }
    
    stopBackground() {
        console.log("Fonde se detiene");
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

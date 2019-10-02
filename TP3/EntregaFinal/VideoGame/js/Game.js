class Game {

    constructor() {
        this.character = new Character()
        this.obstacle = new Obstacle()
    }

    
    setGame() {
        this.character.motionless()
        logoGame.className = 'logoGame'
        background.className = 'backgroundMotionless'
        fog.className = 'fog'
        fogGreen.className = 'fogGreen'
        text.className = 'text'
    }
    
    
    startGame() {
        this.inicializeGame()
        this.obstacle.showAllObstacles()
        this.obstacle.getAbsolutePosition()
        this.character.getAbsolutePosition()
        // this.loopGame()
    }
    
    loopGame() {
        let posCharacter = this.character.getAbsolutePosition()   
        while (this.character.getState == 'live') {
            setTimeout(this.obstacle.getAbsolutePosition(), 1900)
            if(posCharacter != posObstacle) {               
                // if (posCharacter == positionInMove) {
                    // this.character.dead()
                    // this.character.state = 'dead'
                    // this.gameOver == true
                // } else {
                    // this.character.state = 'live'
                // }
            }
        }
    }        

    jumpCharacter() {
        this.character.jump()
    }
           
    barfCharacter() {
        this.character.barf()
        this.obstacle.hideAllObstacles()
        background.className = 'backgroundMotionless'
    }

    inicializeGame() {
        this.character.run()
        this.character.state = 'live'
        background_L1.className = 'background_L1'
        background_L2.className = 'background_L2'
        background_L3.className = 'background_L3'
        background_L4.className = 'background_L4'
        background_L5.className = 'background_L5'
        background_L6.className = 'background_L6'
        btnStart.className = 'hide'
        background.className = 'hide'
        gameOver.className = 'hide'
        text.style.visibility = 'hidden'
        logoGame.style.visibility = 'visible'
        btnKill.style.visibility = 'visible'
    }

    detectedCollision() {
        this.state = this.character.getState()
    }

    setGameOver() {
        logoGame.style.visibility = 'hidden'
        gameOver.className = 'gameOver'
        background.className = 'backgroundMotionless'
        text.style.visibility = 'visible'
    }
    
    gameOver() {
        this.character.dead()
        btnStart.className = 'startButton'
        btnStart.classList.add('startButtonOn')
        btnKill.style.visibility = 'hidden'
        this.obstacle.hideAllObstacles()
        this.character.setState('dead')
        setTimeout(this.setGameOver(), 4000)
    }

}
    // getPositionObstacle() {
    //     setTimeout(this.obstacle.getAbsolutePosition(),1900)  
    // }
        

    // showSecuenseRandomObstacles() {
    //     this.secuense = new Array(10).fill(0).map(n => Math.floor(Math.random() * 3 + 1))
    // }

    // transformNumbersInObstacles(generateSecuenseObtacles) {
    //     switch (generateSecuenseObtacles) {
    //         case 0:
    //             return 'obstacleThorn'
    //         case 1:
    //             return 'obstacleBomb'
    //         case 2:
    //             return 'obstacleRock'
    //     }
    // }

    // showSecuenseObstacles() {
    //     for (let i = 0; i < this.secuense; i++) {
    //         const obst = this.transformNumberInObstacles(this.secuense[i])
    //         console.log(obst);
    //         setTimeout(() =>this.showObstacle(obst), 100 * i)
    //     }
    // }

    // showObstacle(obst) {
    //     this.obstacles[obst].classList.add('show')
    //     setTimeout(() =>this.hiddenObstacle(obst), 10000 * i)
    // }

    // hiddenObstacle(obst) {
    //     this.obstacles[obst].classList.remove('show')
    // }




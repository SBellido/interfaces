class Game {

    constructor() {
        this.character = new Character()
        this.obstacle = new Obstacle()
        // this.obstacles = new Array()
        // this.pushObstacles()
    }

    // getPositionObstacle() {
    //     this.obstacle.getPosition()
    // }

    setGame() {
        this.character.motionless()
        logoGame.className = 'logoGame'
        background.className = 'backgroundMotionless'
        fog.className = 'fog'
        fogGreen.className = 'fogGreen'
        text.className = 'text'
    }

    showObstacle() {
        this.obstacle.show()
    }

    startGame() {
        this.inicializeGame()
        this.showObstacle()
        this.loopGame()
    }
    
    loopGame() {
        let posCharacter =  this.character.getAbsolutePosition()   
        let positionInMove = this.obstacle.getAbsolutePosition()
        // while (positionInMove != posCharacter) {

            setTimeout(this.obstacle.getAbsolutePosition(), 6000)
              console.log(this.obstacle.getAbsolutePosition())         
            // if (posCharacter == positionInMove) {
            //     this.character.dead()
            //     this.character.state = 'dead'
            //     this.gameOver == true
            // } else {
            //     this.character.state = 'live'
            // }
        // }
    }
 

    jumpCharacter() {
        this.character.jump()
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

    // pushObstacles() {
    //     this.obstacles.push(this.obstacle.rock)
    //     this.obstacles.push(this.obstacle.bomb)
    //     this.obstacles.push(this.obstacle.thorn)
    // }

    // showAllObstacles() {
    //     for (let i = 0; i < this.obstacles.length; i++) {
    //         let obst = this.obstacles[i]
    //         if(obst == this.obstacle.thorn) {
    //             this.obstacle.className = 'obstacleThorn'
    //             this.obstacle.show(obst)
    //         } else if (obst == this.obstacle.bomb) {
    //             this.obstacle.className = 'obstacleBomb'
    //             this.obstacle.show(obst)
    //         }  else if (obst == this.obstacle.rock){
    //             this.obstacle.className = 'obstacleRock'
    //             this.obstacle.show(obst)
    //         }
    //     }
    //     console.log(this.obstacles)
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


}

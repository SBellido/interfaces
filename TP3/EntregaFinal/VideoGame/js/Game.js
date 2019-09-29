class Game {
    constructor() {
        this.character = new Character()

    }

    setGame() {
        this.character.motionless()
        background.className = 'backgroundMotionless'
        fog.className = 'fog'
        fogGreen.className = 'fogGreen'
    }

    loopGame() {
        this.startGame()
    }

    jumpCharacter() {
        this.character.jump()
    }

    startGame() {
        this.character.run()
        obstacleBomb.className = 'obstacleBomb'
        obstacleRock.className = 'obstacleRock'
        obstacleThorn.className = 'obstacleThorn'
        background_L1.className = 'background_L1'
        background_L2.className = 'background_L2'
        background_L3.className = 'background_L3'
        background_L4.className = 'background_L4' 
        background_L5.className = 'background_L5' 
        background_L6.className = 'background_L6' 
        btnStart.className = 'hide'
        background.className = 'hide'     
    }
        


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

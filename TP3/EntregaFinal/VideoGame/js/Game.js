class Game {
    constructor(btnStart,
        btnJump,
        background,
        background_L1,
        background_L2,
        background_L3,
        background_L4,
        obstacleBomb,
        obstacleRock,
        obstacleThorn) {
        this.state = 'over'
        this.character = new Character()
        this.obstacle = new Obstacle()
        this.btnStart = btnStart
        this.btnJump = btnJump
        this.background = background
        this.background_L1 = background_L1
        this.background_L2 = background_L2
        this.background_L3 = background_L3
        this.background_L4 = background_L4
        this.obstacleBomb = obstacleBomb
        this.obstacleRock = obstacleRock
        this.obstacleThorn = obstacleThorn
    }

    // setStart() {
    //     this.state = 'play'
    //     this.background.className = 'background'
    //     this.character.className = 'character'
    // }

    // loopGame() {
    //     this.inicialize()
    // }

    // inicialize() {


    // }

    // startGame() {
    //     this.btnJump.classList.add('jumpButton')
    //     this.obstacleBomb.className = 'obstacleBomb'
    //     this.obstacleRock.className = 'obstacleRock'
    //     this.obstacleThorn.className = 'obstacleThorn'
    //     this.background_L1.className = 'background_L1'
    //     this.background_L2.className = 'background_L2'
    //     this.background_L3.className = 'background_L3'
    //     this.background_L4.className = 'background_L4'
    //     this.btnStart.classList.add('hide')
    //     this.background.classList.add('hide')
    //     this.background.classList.add('hiden')
    //         // this.loopGame()

    //     this.character.run()

    // }



    // captureEvent() {
    //     this.btnJump.onclick = jumpCharacter
    //     this.character.jump()

    // }





    // colision() {
    //         console.log(this.obstacle.getRock())
    //     }
    // playAudio() {
    //     this.audioPresent.play();
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
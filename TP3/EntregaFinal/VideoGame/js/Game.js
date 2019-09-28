class Game {
    constructor() {
        this.btnJump = document.getElementById('jumpButton')
        this.character = new Character()
        this.obstacleBomb = document.getElementById('obstacleBomb')
        this.obstacleRock = document.getElementById('obstacleRock')
        this.obstacleThorn = document.getElementById('obstacleThorn')

        // this.obstacle = new Obstacle()
        // this.audioPresent = document.getElementById("audioPresent");
        // this.generateSecuenseObtacles()   
        // this.transformNumbersInObstacles(number)
        // this.showSecuenseRandomObstacles() 
    }
   
    loopGame() {
        this.inicialize()
        
        // this.btnJump.addEventListener('click', function() {          
        // })
    }
        
    captureEvent() {
        console.log(this.character);     
        this.character.jump()
    }
        
        // playAudio() {
        //     this.audioPresent.play();
        // }
    
    inicialize() {
        this.character.run()
        this.btnJump.classList.add('jumpButton')       
        this.obstacleBomb.className = 'obstacleBomb'
        this.obstacleRock.className = 'obstacleRock'
        this.obstacleThorn.className = 'obstacleThorn'
        background_L1.className = 'background_L1'
        background_L2.className = 'background_L2'
        background_L3.className = 'background_L3'
        background_L4.className = 'background_L4' 
        btnStart.classList.add('hide')
        background.classList.add('hide')     
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

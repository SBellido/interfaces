class Obstacle {    
    constructor() {
        this.rock = document.getElementById('obstacleRock')
        this.bomb = document.getElementById('obstacleBomb')
        this.thorn = document.getElementById('obstacleThorn')
    }

    // showThorn() {
    //     this.thorn.classList.add('obstacleThorn')
    //     // setInterval(this.showRock(), 3000)
    //     showBomb()
    // }

    // showBomb() {
    //     this.bomb.classList.add('obstacleBomb') 
    //     // setInterval(this.showThorn(), 5000)
    //     showRock()
    // }

    showRock() {
        this.rock.classList.add('obstacleRock')
        // setInterval(this.showRock(), 5000)   
        // showThorn()  
    }

 hide(){
     this.rock.className = 'hide'
 }

    getPositionObstacle() {

    }
}
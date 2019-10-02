class Obstacle {

    constructor() {
        this.rock = document.getElementById('obstacleRock')
        this.bomb = document.getElementById('obstacleBomb')
        this.thorn = document.getElementById('obstacleThorn')
        this.allObstacles = new Array()
        this.pushObstacles()
    }

    pushObstacles() {
        this.allObstacles.push(this.thorn)
        this.allObstacles.push(this.bomb)
        this.allObstacles.push(this.rock)

    }

    hideAllObstacles(){   
        this.thorn.className = 'hide'  
        this.bomb.className = 'hide'
        this.rock.className = 'hide'
    }

    getAbsolutePosition () {      
        console.log("Obstacle position in move: "+ this.rock.offsetLeft)        
        return this.rock.offsetLeft     
    }

    getPositionAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i]
            getPositionObstacle(obst)         
        }
    }

    showAllObstacles() {
        for (let i = 0; i < this.allObstacles.length; i++) {
            let obst = this.allObstacles[i]
            if(obst == this.thorn) {
                this.thorn.className = 'obstacleThorn'
            } else if (obst == this.bomb) {
                this.bomb.className = 'obstacleBomb'
            }  else if (obst == this.rock){
                this.rock.className = 'obstacleRock'
            }
        }
    }

}
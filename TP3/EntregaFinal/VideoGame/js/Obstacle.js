class Obstacle {

    constructor() {
        this.rock = document.getElementById('obstacleRock')
        this.bomb = document.getElementById('obstacleBomb')
        this.thorn = document.getElementById('obstacleThorn')
        this.obstacles = new Array()
        this.pushObstacles()
       }

       pushObstacles() {
        this.obstacles.push(this.rock)
        this.obstacles.push(this.bomb)
        this.obstacles.push(this.thorn)
       }

    showAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i]
            if(obst == this.rock) {
                this.rock.className = 'obstacleRock'
                this.bomb.className = 'hide'
                this.thorn.className = 'hide'
                console.log(obst);
            } else if (obst == this.bomb) {
                this.bomb.className = 'obstacleBomb'
                this.rock.className = 'hide'
                this.thorn.className = 'hide'
                console.log(obst);
            }  else if (obst == this.thorn) {
                this.thorn.className = 'obstacleThorn'
                this.rock.className = 'hide'
                this.bomb.className = 'hide'
                console.log(obst);
            }           
        }
        console.log(this.obstacles)        
    }

    hideAllObstacles(){   
        this.rock.className = 'hide'
        this.bomb.className = 'hide'
        this.thorn.className = 'hide'  
    }
    
    getpositioObstacle() {
        setTimeout(this.getPositionAllObstacles, 1100)
    }

    getPositionAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i]
        }
    }
}
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
                console.log(obst);
            } else if (obst == this.bomb) {
                this.bomb.className = 'obstacleBomb'
                console.log(obst);
            } else {
                this.thorn.className = 'obstacleThorn'
                console.log(obst);
            }           
        }
        console.log(this.obstacles)        
    }

    hideAllObstacles(){
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i]
            if(obst == this.rock) {
                this.rock.className = 'hide'
                console.log(obst);
            } else if (obst == this.bomb) {
                this.bomb.className = 'hide'
                console.log(obst);
            } else {
                this.thorn.className = 'hide'
                console.log(obst);
            }           
        }
    }
    

    getPositionObstacle() {

    }
}
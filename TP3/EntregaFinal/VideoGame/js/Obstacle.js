class Obstacle {

    constructor() {
        this.rock = document.getElementById('obstacleRock')
        // this.bomb = document.getElementById('obstacleBomb')
        // this.thorn = document.getElementById('obstacleThorn')
        // this.obstacles = new Array()
        // this.pushObstacles()
    }

    show() {     
        this.rock.style.visibility = 'visible' 
        this.rock.className = 'obstacleRock'
    }

    hideAllObstacles(){   
        this.rock.className = 'hide'
        // this.bomb.className = 'hide'
        // this.thorn.className = 'hide'  
    }

    getPosition() {
        let position = this.rock.getBoundingClientRect() 
        console.log(position.top, position.right, position.bottom, position.left)
        if(position.left == 200) {
            return true
        } else {
            return false
        }
        // (posicion.top, posicion.right, posicion.bottom, posicion.left
    }

    getPositionAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i]
            getPositionObstacle(obst)         
        }
    }

    // pushObstacles() {
    //     this.obstacles.push(this.rock)
    //     this.obstacles.push(this.bomb)
    //     this.obstacles.push(this.thorn)
    // }
       // showAllObstacles() {
    //     for (let i = 0; i < this.obstacles.length; i++) {
    //         let obst = this.obstacles[i]
    //         if(obst == this.thorn) {
    //             obst.className = 'obstacleThorn'
    //             this.show(obst)
    //         } else if (obst == this.bomb) {        
    //             obst.className = 'obstacleBomb'
    //             this.show(obst)
    //         }  else if (obst == this.rock)
    //             obst.className = 'obstacleRock'
    //             this.show(obst)
    //         }           
    //     }
    //     // console.log(this.obstacles)        
    // }

}
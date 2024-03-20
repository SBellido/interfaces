class Obstacle {
    constructor() {
        this.rock = document.getElementById('obstacleRock');
        this.bomb = document.getElementById('obstacleBomb');
        this.thorn = document.getElementById('obstacleThorn');
        this.obstacles = [];
        this.pushObstacles();
    }

    pushObstacles() {
        this.obstacles.push(this.rock);
        this.obstacles.push(this.bomb);
        this.obstacles.push(this.thorn);
    }

    showAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i];
            obst.classList.remove('hide');
            if (obst === this.rock) {
                obst.classList.add('obstacleRock');
            } else if (obst === this.bomb) {
                obst.classList.add('obstacleBomb');
            } else if (obst === this.thorn) {
                obst.classList.add('obstacleThorn');
            }
        }
    }

    hideAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i];
            obst.classList.add('hide');
        }
    }

    getPositionAllObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            const obst = this.obstacles[i];
            // Aquí puedes obtener la posición del obstáculo y realizar otras operaciones si es necesario
        }
    }
}

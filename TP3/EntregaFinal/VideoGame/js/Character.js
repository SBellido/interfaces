class Character {

    constructor() {       
        this.character = document.getElementById('character')
        this.state = 'run'
        // this.height = character.offsetHeight
        // this.width = character.offsetWidth
    }

    getState() {
        return this.state
    }

    motionless() {
        this.character.className = 'characterMotionless'
    }

    run(){
        this.character.className = 'characterRun'
        this.character.state = 'run'
    }
    
    jump() {
        this.character.state = 'jump'
        this.character.classList = 'characterJump'
        setTimeout(this.run, 1700)
    }

    dead() {
        this.character.classList = 'characterDead'
    }

}
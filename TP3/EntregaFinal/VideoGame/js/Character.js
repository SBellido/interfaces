class Character {
    constructor() {       
        this.character = document.getElementById('character')
        // this.height = character.offsetHeight
        // this.width = character.offsetWidth
    }

    
    motionless() {
        this.character.className = 'characterMotionless'
    }

    run(){
        this.character.className = 'characterRun'
    }

    jump() {
        this.character.classList = 'characterJump'
        setTimeout(this.run, 1700)
    }
}
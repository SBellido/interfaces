class Character {
    constructor() {
        
        this.lives = [3]
        this.state = 'run'
        this.character = document.getElementById('character')
        this.height = character.offsetHeight
        this.width = character.offsetWidth
    }

    run(){
        this.character.className = 'characterRun'
    }

    jump() {
        this.character.classList = 'characterJump'
        setTimeout(this.run, 1700)
    }
}
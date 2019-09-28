class Character {
    constructor() {
        this.state = 'run'
        this.character = document.getElementById('character')
        this.height = character.offsetHeight
        this.width = character.offsetWidth
    }

    run() {
        console.log(this.width);

        this.character.className = 'characterRun'
    }

    jump() {
        this.character.classList = 'characterJump'
        setTimeout(this.run, 1700)
    }
}
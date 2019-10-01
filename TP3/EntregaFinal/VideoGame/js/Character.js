class Character {

    constructor() {       
        this.character = document.getElementById('character')
        this.state = ''
        // this.height = character.offsetHeight
        // this.width = character.offsetWidth
    }

    getAbsolutePosition (){ 
        console.log("character left position: "+  this.character.offsetLeft)        
        return this.character.offsetLeft     
    }

    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
    motionless() {
        this.character.className = 'characterMotionless'
    }

    run(){
        this.character.className = 'characterRun'
    }
    
    jump() {
        this.character.classList = 'characterJump'
        if(this.state == 'live') {
            setTimeout(this.run, 1900)
        } else {
            setTimeout(this.motionless, 1900)
        }
    }

    dead() {
        this.character.classList = 'characterDead'
    }

}
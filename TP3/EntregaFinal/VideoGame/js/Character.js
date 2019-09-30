class Character {
    constructor() {       
        this.character = document.getElementById('character')
        this.state = 'run'
        // this.height = character.offsetHeight
        // this.width = character.offsetWidth
    }

    
    motionless() {
        this.character.className = 'characterMotionless'
    }

    run(){
        this.character.state = 'run'
        this.character.className = 'characterRun'
    }
    

    // Code for Chrome, Safari and Opera
    jump() {
        this.character.state = 'jump'
        this.character.classList = 'characterJump'
        setTimeout(this.run, 1700)
    }

    dead() {
        this.character.classList = 'characterDead'
    }
    // Standard syntax
    
    // jump() {
    //     this.character.classList = 'characterJump'
    //     Animation
    //             setTimeout(this.run, 1700)
    // }
    // jump() {
    //     this.character.addEventListener("animationstart", this.start, false);
    //     this.character.addEventListener("mozAnimationIteration", this.start, false);
    //     this.character.addEventListener("webkitAnimationIteration", this.start, false);
    //     this.character.addEventListener("msAnimationIteration", this.start, false);
        
    //     this.character.addEventListener("animationiteration", this.update, false);
    //     this.character.addEventListener("mozAnimationIteration", this.update, false);
    //     this.character.addEventListener("webkitAnimationIteration", this.update, false);
    //     this.character.addEventListener("msAnimationIteration", this.update, false);
        
    //     this.character.addEventListener("animationend", this.end, false);
    //     this.character.addEventListener("mozAnimationEnd",this.end, false);
    //     this.character.addEventListener("webkitAnimationEnd", this.end, false);
    //     this.character.addEventListener("msAnimationEnd", this.end, false);
    // }

    
    // start(e) {
    //     this.character.classList = 'characterJump'
    // }
    
    // update(e) {
    //     this.character.classList = 'characterJump'
    // }
    
    // end(e) {
    //     this.run()
    // }
}
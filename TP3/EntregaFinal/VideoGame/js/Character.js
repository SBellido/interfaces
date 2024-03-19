class Character {
    constructor() {       
        this.character = document.getElementById('character');
        this.state = 'run';
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    isMoving() {
        return this.state === 'run'; 
    }

    motionless() {
        this.character.className = 'characterMotionless';
        this.setState('motionless'); 
        console.log("parado ", this.state);
    }

    run(){
        this.character.className = 'characterRun';
        this.setState('run');
        console.log("corre ", this.state);
    }
    
    jump() {
        this.character.classList = 'characterJump';
        this.setState('jump');
        setTimeout(() => this.run(), 1700);
        console.log("salta ", this.state);
    }

    dead() {
        this.character.classList = 'characterDead';
        this.setState('dead');
        console.log("muerte ", this.state);
    }
}

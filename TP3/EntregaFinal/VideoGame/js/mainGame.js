"use strict"
    
    let game = new Game()   
    // game.playAudio()

    const btnStart = document.getElementById('startButton')
    const btnJump = document.getElementById('jumpButton')

    const background = document.getElementById('background') 
    const background_L1 = document.getElementById('background_L1')
    const background_L2 = document.getElementById('background_L2')
    const background_L3 = document.getElementById('background_L3')
    const background_L4 = document.getElementById('background_L4')
   

    btnStart.onclick = startGame
    btnJump.onclick = jumpCharacter

    function startGame() {
        game.loopGame()
        background.classList.add('hiden')
        
    }

    function jumpCharacter(){
        game.captureEvent()
    }

    
// loopGame() {

// let character = new Character
// let obstacle = new Obstacle
// background.style.display = 'none'
// run()
// 
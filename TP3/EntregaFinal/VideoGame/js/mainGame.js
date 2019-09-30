"use strict"

    let game = new Game()   

    window.onload = loadedGame

    const btnStart = document.getElementById('startButton')

    const fog = document.getElementById('fog')
    const fogGreen = document.getElementById('fogGreen')
  
    const background = document.getElementById('background') 
    const background_L1 = document.getElementById('background_L1')
    const background_L2 = document.getElementById('background_L2')
    const background_L3 = document.getElementById('background_L3')
    const background_L4 = document.getElementById('background_L4')
    const background_L5 = document.getElementById('background_L5')
    const background_L6 = document.getElementById('background_L6')

    const obstacleBomb = document.getElementById('obstacleBomb')
    // const obstacleRock = document.getElementById('obstacleRock')
    // const obstacleThorn = document.getElementById('obstacleThorn')
    
    let space = false
    btnStart.onclick = startGame

    
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 32) {
            detectedEvent()
            space = true            
        }
    })

    function loadedGame() {
        game.setGame()        
        // document.onkeydown = detectedEvent
    }

    function startGame() {
        game.loopGame()
    }
    
    function detectedEvent() {
        game.jumpCharacter()
    }
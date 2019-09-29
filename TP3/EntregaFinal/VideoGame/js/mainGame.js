"use strict"

    let game = new Game()   

    window.onload = loadedGame

    const btnStart = document.getElementById('startButton')
    const btnJump = document.getElementById('jumpButton')

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
    const obstacleRock = document.getElementById('obstacleRock')
    const obstacleThorn = document.getElementById('obstacleThorn')

    btnStart.onclick = startGame
    btnJump.onclick = game.jumpCharacter

    function loadedGame() {
        game.setGame()        
    }

    function startGame() {
        game.loopGame()
    }
    
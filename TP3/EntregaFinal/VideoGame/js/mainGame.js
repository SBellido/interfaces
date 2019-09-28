"use strict"

window.onload = initGame

function initGame() {
    const btnStart = document.getElementById('startButton')
    const btnJump = document.getElementById('jumpButton')

    const background = document.getElementById('background')
    const background_L1 = document.getElementById('background_L1')
    const background_L2 = document.getElementById('background_L2')
    const background_L3 = document.getElementById('background_L3')
    const background_L4 = document.getElementById('background_L4')

    const obstacleBomb = document.getElementById('obstacleBomb')
    const obstacleRock = document.getElementById('obstacleRock')
    const obstacleThorn = document.getElementById('obstacleThorn')
    let chara = document.getElementById('character')
    let game = new Game(btnStart,
        btnJump,
        background,
        background_L1,
        background_L2,
        background_L3,
        background_L4,
        obstacleBomb,
        obstacleRock,
        obstacleThorn,
        chara)

    console.log('call')
    game.setStart()
    btnStart.onclick = game.startGame
    btnJump.onclick = game.jumpCharacter
}
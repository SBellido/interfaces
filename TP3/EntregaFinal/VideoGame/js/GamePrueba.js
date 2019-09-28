'use strict'

let playButton = document.getElementById('startButton')
playButton.onclick = startGame
 
let jumpButton = document.getElementById('jumpButton')
jumpButton.onclick = jump

let background = document.getElementById('background')
let background_L1 = document.getElementById('background_L1')
let background_L2 = document.getElementById('background_L2')
let background_L3 = document.getElementById('background_L3')
let background_L4 = document.getElementById('background_L4')
let character = document.getElementById('character')

function startGame() {   
    background.style.display = 'none'
    run()
    background_L1.className = 'background_L1'
    background_L2.className = 'background_L2'
    background_L3.className = 'background_L3'
    background_L4.className = 'background_L4'
}

function jump() {
    let jump = document.getElementById('character')
    jump.className = 'characterJump'
    setTimeout(run, 1700)
    // if (jump.className = 'characterJump') {
    //     run()
    // }
}

function run() {
    if(character.className != 'characterRun') {
        character.className = 'characterRun'
    }
}
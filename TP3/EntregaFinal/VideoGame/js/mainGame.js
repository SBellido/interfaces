"use strict";

    let game = new Game();   

    window.onload = loadedGame;

    const btnStart = document.getElementById('startButton');
    const btnJump = document.getElementById('jumpButton');
    const btnKill = document.getElementById('killButton');
    
    const gameOver = document.getElementById('GameOver');
    const logoGame = document.getElementById('logoGame');

    const fog = document.getElementById('fog');
    const fogGreen = document.getElementById('fogGreen');

    const background = document.getElementById('background');
    const background_L1 = document.getElementById('background_L1');
    const background_L2 = document.getElementById('background_L2');
    const background_L3 = document.getElementById('background_L3');
    const background_L4 = document.getElementById('background_L4');
    const background_L5 = document.getElementById('background_L5');
    
    const obstaclesLayer = document.getElementById('obstaclesLayer');
    const obstacleRock = document.getElementById('obstacleRock');
    const obstacleBomb = document.getElementById('obstacleBomb');
    const obstacleBombColors = document.getElementById('obstacleBombColors');
    const obstacleThorn = document.getElementById('obstacleThorn');
    
    const previewSound = document.getElementById('previewSound');
    const gamingSound = document.getElementById('gamingSound');
    
    const dead = document.getElementById('dead');

    let space = false
    btnStart.onclick = startGame;
    btnKill.onclick = callGameOver;

    if (btnJump.classList.contains('jumpButtonInactive')) {
        btnJump.onclick = jumpCharacter;
    } else {
        btnJump.removeAttribute('onclick');
    }    
    
    
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 32) {
            detectedEvent();
            space = true;           
        }
    })

    function loadedGame() {
        game.setGame();    
        previewSound.play();
    }

    function startGame() {
        game.loopGame();
    }
    
    function jumpCharacter() {
        game.jumpCharacter();
    }
    function callGameOver() {
        game.gameOver();
    }
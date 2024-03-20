"use strict";

    let game = new Game();   

    window.onload = loadedGame;

    const btnStart = document.getElementById('startButton');
    const btnKill = document.getElementById('killButton');

    const fog = document.getElementById('fog');
    const fogGreen = document.getElementById('fogGreen');
    const gameOver = document.getElementById('GameOver');
    const logoGame = document.getElementById('logoGame');

    const background = document.getElementById('background');
    const background_L1 = document.getElementById('background_L1');
    const background_L2 = document.getElementById('background_L2');
    const background_L3 = document.getElementById('background_L3');
    const background_L4 = document.getElementById('background_L4');
    const background_L5 = document.getElementById('background_L5');
    const background_L6 = document.getElementById('background_L6');
    const obstacleRock = document.getElementById('obstacleBomb');
    const obstacleBomb = document.getElementById('obstacleRock');
    const obstacleThorn = document.getElementById('obstacleThorn');
    
    const previewSound = document.getElementById('previewSound');
    const gamingSound = document.getElementById('gamingSound');
    
    const dead = document.getElementById('dead');

    let space = false
    btnStart.onclick = startGame;
    btnKill.onclick = callGameOver;
    
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
    
    function detectedEvent() {
        game.jumpCharacter();
    }
    function callGameOver() {
        game.gameOver();
    }
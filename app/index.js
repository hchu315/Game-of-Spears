/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Screen from './screen';
import Game from './game';
// import Ammo from './ammo';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const loadingText = document.querySelector('.loading-text');
  const startGame = document.getElementById("start-game");
  const startMenu = document.getElementById("start-menu");
  
  canvas.width = 1100;
  canvas.height = 700;
  // canvas.style.zIndex = "1";

  const game = new Game(ctx);
  // const ammo = new Ammo(ctx);
  // console.log(game.ammo.createAmmo)
  
  function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
    let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height

    game.onClick(x, y);
  }
  
  canvas.addEventListener('mousedown', getMousePos, false);
  canvas.addEventListener('keydown', game.reloadTheClip.bind(game), true);
  loadingText.addEventListener('transitionend', loadText);
  
  function loadText(e) {
    if (e.propertyName.includes('color')) {
      setTimeout(function() {
        loadingText.innerHTML = "Developed by: Henry Chu";
        
        if (loadingText.innerHTML === "Developed by: Henry Chu") {
          setTimeout(() => {
            loadingText.innerHTML = '';
            setTimeout(() => startMenu.setAttribute("style", "visibility: visible;"), 900);
          }, 1200);
        }
      }, 1200);   
    }
  }

  function gameTimer() {
    const timer = document.querySelector('.timer');
    let defaultTime = 30;

    timer.innerHTML = `Timer: ${defaultTime}`;

    let timerInterval = setInterval(function () {
      // console.log(timer)
      timer.innerHTML = `Timer: ${defaultTime}`;
      defaultTime--;
      if (defaultTime < 0) {
        clearInterval(timerInterval);
        game.lose();
      }
    }.bind(this), 1000);

    // timingFxn();  
    // if (this.defaultTime === 0) {
    //   clearInterval()
    // }

    // ctx.font = "30px Arial";
    // ctx.fillStyle = "red";
    // ctx.fillText('Timer: ' + this.defaultTime, 60, 60)
  }

  const playGame = () => {
    game.makeDragon();
    // game.loadTheClip();
    game.play();
    gameTimer();
    game.dragonsRemaining(game.dragons);
    // console.log(game.clip)
    game.clip.forEach(missile => missile.createAmmo())
    // game.drawScore();
  };

    // playGame();

    // UNCOMMENT THIS FOR STARTMENU
  startGame.addEventListener("click", () => {
    // scoreboardContainer.className = "scoreboard-container";
    startMenu.setAttribute("style", "visibility: hidden;");
    playGame();
  });

});
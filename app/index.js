/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Screen from './screen';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const loadingText = document.querySelector('.loading-text');
  const startGame = document.getElementById("start-game");
  const startMenu = document.getElementById("start-menu");
  
  canvas.width = 1100;
  canvas.height = 700;
  canvas.style.zIndex = "1";

  let game = new Game(ctx);
  
  function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
    let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height

    game.onClick(x, y);
  }
  
  canvas.addEventListener('mousedown', getMousePos, false);
  loadingText.addEventListener('transitionend', loadText);
  
  // console.log(loadingText)
  function loadText(e) {
    // console.log(startMenu)
    if (e.propertyName.includes('color')) {
      setTimeout(function() {
        // loadingText.innerHTML = "";
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

  const playGame = () => {
    game.makeDragon();
    game.play();
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
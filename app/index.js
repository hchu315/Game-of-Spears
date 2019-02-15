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
  
  canvas.width = 1200;
  canvas.height = 800;
  canvas.style.display = 'block';
  // canvas.style.margin = '0 auto';
  // canvas.style.marginTop = '80px';
  // canvas.style.zIndex = "1";

  let game = new Game(ctx);
  
  function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
    let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height

    game.onClick(x, y);
  }
  
  // canvas.addEventListener('mousedown', getMousePos, false);
  loadingText.addEventListener('transitionend', loadText);
  
  // console.log(loadingText)
  function loadText(e) {
    if (e.propertyName.includes('color')) {
      // console.log(e)
      loadingText.innerHTML = "Developed by: Henry Chu"
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
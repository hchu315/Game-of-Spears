/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Screen from './screen';
import Game from './game';


// function loop(fn) {
//   requestAnimationFrame(() => loop(fn))
//   fn()
// }

// function onClick(event) {
//   let cx = event.pageX;
//   let cy = event.pageY;
//   alert("X,Y=" + cx + "," + cy);
//   screen.mouseX = event.pageX;
//   screen.mouseY = event.pageY;
// }

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  // const background = document.getElementById("background-canvas");
  // const bgx = canvas.getContext("2d");

  const startGame = document.getElementById("start-game");
  const startMenu = document.getElementById("start-menu");
  
  canvas.width = 1200;
  canvas.height = 800;
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';
  canvas.style.marginTop = '80px';
  canvas.style.zIndex = "1";
  canvas.style.cursor = 'crosshair';

  // background.width = 1200;
  // background.height = 800;
  // background.style.margin = '0 auto';
  // background.style.marginTop = '80px';
  // background.style.zIndex = "0";

  let game = new Game(ctx);
  
  function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
    let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height

    game.onClick(x, y);
  }
  
  // canvas.addEventListener('mousedown', game.onClick.bind(game), false);
  canvas.addEventListener('mousedown', getMousePos, false);
  
  // loop(() => {
    // game.draw();
    // game.makeDragon();
    // game.render();
    // });
    
    const playGame = () => {
      game.makeDragon();
      game.play();
      // game.drawScore();
    };

    playGame();

    // UNCOMMENT THIS FOR STARTMENU
  // startGame.addEventListener("click", () => {
  //   // scoreboardContainer.className = "scoreboard-container";
  //   startMenu.setAttribute("style", "visibility: hidden;");
  //   playGame();
  // });

});
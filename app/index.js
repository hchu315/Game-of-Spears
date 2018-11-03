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
  
  canvas.width = 1200;
  canvas.height = 800;
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';
  // canvas.style.padding = '30px';
  canvas.style.marginTop = '80px';
  // let game = new Game(ctx);
  let game = new Game(ctx, canvas);
  
  // const startGame = document.getElementById("start-game");

  // startGame.addEventListener("click", () => {
  //   playGame();
  // });  
  function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width
    let y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height

    game.onClick(x, y);
  }
  
  // canvas.addEventListener('mousedown', game.onClick.bind(game), false);
  canvas.addEventListener('mousedown', getMousePos, false);
  
  // game.drawScreen();
  // game.drawSpear();
  
  // loop(() => {
    // game.draw();
    // game.makeDragon();
    // game.render();
    // });
    
    const playGame = () => {
      game.makeDragon();
      game.play();
    };

    playGame();

});
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
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let game = new Game(ctx);

  const startGame = document.getElementById("start-game");

  startGame.addEventListener("click", () => {
    playGame();
  });  

  canvas.addEventListener('mousedown', game.onClick.bind(game), false);
  
  // game.drawScreen();
  // game.drawSpear();

  // loop(() => {
    // game.draw();
    // game.makeDragon();
    // game.render();
  // });

  const playGame = () => {
    game = new Game(ctx);
    game.makeDragon();
    game.play();
  };
});
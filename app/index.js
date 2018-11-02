/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Screen from './screen';
// import Dragon from './dragon';
// import MovingObject from './moving_object';
import Game from './game';

function loop(fn) {
  requestAnimationFrame(() => loop(fn))
  fn()
}

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
  // let screen = new Screen(ctx)
  canvas.addEventListener('mousedown', game.targetEvent.bind(game), false);
  // game.drawScreen();
  // game.drawSpear();
  // game.onClick(clicked);


  loop(() => {
    // game.draw();
    game.drawDragon();
  });

  // loop(() => {
  //   game.drawDragon();
  //   debugger
  // });

  


  // var x = canvas.width / 2;
  // var y = canvas.height - 30;
  // var dx = 2;
  // var dy = -2;

  // function drawBall() {
  //   ctx.beginPath();
  //   ctx.arc(x, y, 10, 0, Math.PI * 2);
  //   ctx.fillStyle = "#0095DD";
  //   ctx.fill();
  //   ctx.closePath();
  // }

  // function draw() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   drawBall();
  //   x += dx;
  //   y += dy;
  // }

  // setInterval(draw, 10);
  // console.log(canvas.width);
  // let game = new Screen(canvas, ctx);
  // game.render();
  // window.requestAnimationFrame(game.render)
  

})

// window.MovingObject = MovingObject;



// ================================
// START YOUR APP HERE
// ================================
import Dragon from 'dragon';
import MovingObject from './moving_object';

class Screen {
    constructor(ctx) {
        this.ctx = ctx;
        this.score = 0;
        // this.dragon = new Dragon(ctx);
        // this.randomdir=[-2,2];
        // this.viserion = new Dragon(ctx);
        // this.canvas = canvas;
        // debugger;
        // this.x = 300;
        // this.y = 400;
        // this.dx = 2;
        // this.dy = 2;
        // setInterval(()=> { 
        //   this.dx = this.randomdir[Math.round(Math.random())];
        //   this.dy = this.randomdir[Math.round(Math.random())];
        //   console.log(this.dx, this.dy);
        // }, 2000);

        // this.ballRadius = 50;
        // this.mouseX = 0;
        // this.mouseY = 0;
        // this.clicked = function() {
          
        // }
        
        // this.canvas.addEventListener('mousedown', game.onClick, false);
      }
      
    
    background() {
        const ctx = this.ctx;
        let img = new Image();
        // debugger
        // ctx.fillStyle = "lightblue";
        // ctx.fillRect(400, 400, 100, 100);
        // canvas background-color
        img.src = "https://i.imgur.com/UeOlFUN.png";
        // let grad = ctx.createLinearGradient(0, 0, 1200, 800);
        // grad.addColorStop(0, "white");
        // grad.addColorStop(1, "lightblue");

        // ctx.fillStyle = grad;
        // ctx.fillRect(0, 0, 1200, 800);

        // // distant mountain range
        // ctx.beginPath();
        // ctx.moveTo(0, 180);
        // ctx.arcTo(200, 100, 300, 200, 300);
        // // first ctrl pt, second ctrl pt, arc's radius
        // // ctx arcTo(100, 50, 50, 50, 100);
        // // ctx.lineTo(200, 300);
        // // ctx.arcTo(300, 300, 300, 300, 300);
        // ctx.quadraticCurveTo(400, 300, 450, 200);
        // ctx.quadraticCurveTo(500, 100, 600, 170);
        // ctx.quadraticCurveTo(700, 80, 800, 170);
        // ctx.quadraticCurveTo(900, 300, 1000, 200);
        // ctx.quadraticCurveTo(1100, 100, 1200, 200);
        // ctx.shadowColor = '#00f';
        // ctx.shadowBlur = 15;
        // // first ctrl pt, end point

        // // ctx.bezierCurveTo(0, 200, 40, 40, 1000, 200);
        // // ctx.lineTo(150, 100);
        // // ctx.fill();
        // ctx.lineWidth = .8;
        // ctx.strokeStyle = 'grey';
        // ctx.stroke();
        // // ctx.closePath();
        
        // // closer mountain range
        // ctx.beginPath();
        // ctx.moveTo(300, 450);
        // ctx.quadraticCurveTo(500, 200, 700, 400);
        // ctx.quadraticCurveTo(750, 440, 800, 360);
        // ctx.quadraticCurveTo(900, 220, 1000, 360);
        // ctx.quadraticCurveTo(950, 320, 900, 460);
        // ctx.lineWidth = 1.5;
        // ctx.stroke();
        
        // ctx.beginPath();
        // ctx.moveTo(1000, 360);
        // ctx.quadraticCurveTo(1060, 390, 1100, 460);
        // ctx.quadraticCurveTo(1060, 290, 1000, 360);
        // // ctx.lineWidth = 2;
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(940, 300);
        // ctx.quadraticCurveTo(1100, 200, 1200, 300);
        // ctx.stroke();
        // // ctx.closePath();

        // // pond
        // ctx.beginPath();
        // ctx.moveTo(200, 650);
        // ctx.bezierCurveTo(300, 550, 600, 550, 1000, 600);
        // ctx.bezierCurveTo(800, 750, 500, 750, 200, 650);
        // ctx.fillStyle = 'blue';
        // ctx.stroke();
        
        ctx.drawImage(img, 0, 0, 1022, 428, 0, 0, 1200, 800);
    }

    killCount() {
      let ctx = this.ctx;
      let img2 = new Image();
      img2.src = "https://i.imgur.com/ZGOk4iR.png";
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.drawImage(img2, 0, 0, 200, 160, 900, 700, 100, 100);
      ctx.drawImage(img2, 0, 0, 200, 160, 1000, 700, 100, 100);
      ctx.drawImage(img2, 0, 0, 200, 160, 1100, 700, 100, 100);
      ctx.restore();
      // ctx.globalCompositeOperation = "lighter";
    }

    drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + this.score, 8, 20);
    }

    // drawDragon() {
    //   // console.log('hello');
    //   const ctx = this.ctx;
    //   const dy = this.dy;
      
      
    //   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //   ctx.beginPath();
    //   ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    //   ctx.fillStyle = "black";
    //   ctx.fill();
    //   ctx.closePath();
    //   if (this.y + this.dy > window.innerHeight - 100 - this.ballRadius) {
    //     this.dy = -this.dy;
    //   } 
    //   // this.drawBall();
    //   this.x += this.dx;
    //   this.y += this.dy;
    // }

    // onClick(event) {
    //   let cx = event.pageX;
    //   let cy = event.pageY;
    //   // console.log(cx, cy, this.x, this.y);
    //   // alert(+cx+','+cy);
    //   let dist = Math.hypot((event.pageX-this.x), (event.pageY-this.y))
    //   if (dist < this.ballRadius) {
    //     this.ballRadius = 0;
    //   }
    // }

    // drawWeapon() {
    //   const ctx = this.ctx;

    //   ctx.beginPath();
    //   ctx.moveTo(100, 100);
    //   ctx.lineTo(300, 300);
    //   ctx.stroke();
    // }

    // draw() {
    //   let dx = 2;
    //   let dy = -2;
      
    //   this.ctx.clearRect(0, 0, 1200, 800);
    //   this.drawBall();
    //   x += dx;
    //   y += dy
    // }

    // render() {
    //     // this.draw().bind(this);
    //     this.dragon.drawDragon;
    // }
}

export default Screen;
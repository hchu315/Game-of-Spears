import Dragon from 'dragon';
import MovingObject from './moving_object';

class Screen {
    constructor(ctx) {
        this.ctx = ctx;
        // this.dragon = new Dragon(ctx);
        this.randomdir=[-2,2];
        // this.viserion = new Dragon(ctx);
        // this.canvas = canvas;
        // debugger;
        this.x = 300;
        this.y = 400;
        this.dx = 2;
        this.dy = 2;
        // setInterval(()=> { 
        //   this.dx = this.randomdir[Math.round(Math.random())];
        //   this.dy = this.randomdir[Math.round(Math.random())];
        //   console.log(this.dx, this.dy);
        // }, 2000);

        this.ballRadius = 50;
        // this.mouseX = 0;
        // this.mouseY = 0;
        // this.clicked = function() {
          
        // }
        
        // this.canvas.addEventListener('mousedown', game.onClick, false);
      }
      
    
    background() {
        const ctx = this.ctx;
        // debugger
        ctx.fillStyle = "lightblue";
        ctx.fillRect(400, 400, 100, 100);
    }

    drawDragon() {
      // console.log('hello');
      const ctx = this.ctx;
      const dy = this.dy;
      
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
      if (this.y + this.dy > window.innerHeight - 100 - this.ballRadius) {
        this.dy = -this.dy;
      } 
      // this.drawBall();
      this.x += this.dx;
      this.y += this.dy;
    }

    onClick(event) {
      let cx = event.pageX;
      let cy = event.pageY;
      // console.log(cx, cy, this.x, this.y);
      // alert(+cx+','+cy);
      let dist = Math.hypot((event.pageX-this.x), (event.pageY-this.y))
      if (dist < this.ballRadius) {
        this.ballRadius = 0;
      }
    }

    // mousePressed() {
    //   let clicked = dist(mouseX, mouseY, this.x, this.y)
    //   if (clicked < this.ballRadius) {
    //     this.ballRadius = 0;
    //   }
    // }

    // dist(x1, y1, x2, y2) {

    // }

    drawWeapon() {
      const ctx = this.ctx;

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(300, 300);
      ctx.stroke();
    }

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
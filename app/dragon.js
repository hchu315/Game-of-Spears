class Dragon {
    constructor(ctx, x = 0, y = 0, alive = true) {
        this.ctx = ctx;
        this.randomdir = [-2, 2];
        this.x = x;
        this.y = y;
        this.dx = 2;
        this.dy = 2;
        setInterval(() => {
            this.dx = this.randomdir[Math.round(Math.random())];
            this.dy = this.randomdir[Math.round(Math.random())];
        }, 2000);

        this.frameIndex = 0;
        this.numberOfFrames = 3;
        this.tickCount = 0;
        this.ticksPerFrame = 20;

        this.alive = alive;
        this.explodeIndex = 3;
        this.explodeFrames = 10;
    }

    updateFrame() {
			
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {

       this.tickCount = 0;

      // If the current frame index is in range
        if (this.frameIndex < this.numberOfFrames - 1) {
          // Go to the next frame
          this.frameIndex += 1;
        } else {
          this.frameIndex = 0;
        }
      }

      // update explosion frames
    }

    // explodeDragon(x, y) {
    //   if (x === undefined) return;
    //   const ctx = this.ctx;
    //   let img = new Image();
      
      // for (let i = 0; i < 9; i++) {
      // img.onload = function() {
      // };
      // img.addEventListener("load", 
      //   ctx.drawImage(img, this.explodeIndex * (1000 / this.explodeFrames), 0, 100, 100, x, y, this.explodeIndex * (1000 / this.explodeFrames), 100)
      // );

      // this.explodeIndex++
      // img.src = "https://i.imgur.com/lqEkVlw.png";

      // img.onload();  
      // ctx.drawImage(img, 100, 100, 100, 100, 400, 400, 100, 100);
      // }
      // return;
      // break;
      // this.explodeIndex = 1;
    // }

    // testDragon() {
    //   const ctx = this.ctx;
    //   let img = new Image();

    //   img.src = "https://i.imgur.com/lqEkVlw.png";

    //   ctx.drawImage(img, this.explodeIndex * (1000 / this.explodeFrames), 0, 100, 100, 300, 300, this.explodeIndex * (1000 / this.explodeFrames), 100)
    // }

    // fallingDragon() {
    //   const ctx = this.ctx;
    //   let img = new Image();
    //   img.src = "https://i.imgur.com/ZGOk4iR.png";

    //   ctx.drawImage(img, 0, 0, 120, 120, 200, 200, 100, 100);

    //   ctx.drawImage(img, )
    // }

    draw() {
        const ctx = this.ctx;
        const dy = this.dy;
        let img = new Image();
        img.src = "https://i.imgur.com/ZGOk4iR.png";
        if (this.alive) {
          if (this.dx > 0) {
            ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 150, 200, 200, this.x, this.y, (573 / this.numberOfFrames), 150);

            // number of frames refer to frames on the row being utilized on sprite sheet
          } else {
            ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 470, 200, 200, this.x, this.y, (573 / this.numberOfFrames), 150);
          }
          if (this.y + this.dy > 600 || this.y + this.dy < -50) {
            this.dy = -this.dy;
          }
          // creates border around the canvas so the dragon doesn't fly off the screen forever
          if (this.x + this.dx > 1100 || this.x + this.dx < -200) {
            this.dx = -this.dx;
          } 
          
          this.x += this.dx;
          this.y += this.dy;
        } else {
          ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 0, 190, 165, this.x, this.y, (573 / this.numberOfFrames), 150);
        }
    }

    dragonDies() {
      console.log('hittin')
      this.alive = false;
      // const ctx = this.ctx;
      // const dy = this.dy;
      // let img = new Image();
      // img.src = "https://i.imgur.com/ZGOk4iR.png";
      // if (this.dx > 0) {
      //   ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 150, 200, 200, this.x, this.y, (573 / this.numberOfFrames), 150);

        // number of frames refer to frames on the row being utilized on sprite sheet
      // } 
      // else {
      //   ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 470, 200, 200, this.x, this.y, (573 / this.numberOfFrames), 150);
      // }
      // if (this.y + this.dy > 600 || this.y + this.dy < -50) {
      //   this.dy = -this.dy;
      // }
      // creates border around the canvas so the dragon doesn't fly off the screen forever
      // if (this.x + this.dx > 1100 || this.x + this.dx < -200) {
      //   this.dx = -this.dx;
      // }

      // this.x += this.dx;
      // this.y += this.dy;

    }

    render() {
        this.updateFrame();
        this.draw();
        // this.explodeDragon();
        // this.testDragon();
        // this.fallingDragon();
    }
}

export default Dragon;
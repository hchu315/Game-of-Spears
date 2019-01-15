class Dragon {
    constructor(ctx) {
        this.ctx = ctx;
        this.randomdir = [-2, 2];
        // this.x = Math.random() * 600;
        // this.y = Math.random() * 600;
        this.x = 0;
        this.y = 0;
        this.dx = 2;
        this.dy = 2;
        // this.randomdir;
        setInterval(() => {
            this.dx = this.randomdir[Math.round(Math.random())];
            this.dy = this.randomdir[Math.round(Math.random())];
        }, 2000);
        // this.ballRadius = 20;

        this.frameIndex = 0;
        this.numberOfFrames = 3;
        this.tickCount = 0;
        this.ticksPerFrame = 20;

        this.explodeIndex = 1;
        this.explodeFrames = 10;
    }

    updateFrame() {
    //     this.currentFrame = ++this.currentFrame % 3;
			
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

    explodeDragon() {
      const ctx = this.ctx;
      let img = new Image();
      img.src = "https://i.imgur.com/lqEkVlw.png";
      
      for (let i = 0; i < 10; i++) {
        ctx.drawImage(img, this.explodeIndex * (1000 / this.explodeFrames), 0, 100, 100, 200, 200, this.explodeIndex * (1000 / this.explodeFrames), 100);
        this.explodeIndex++
        console.log(this.explodeIndex)
      // ctx.drawImage(img, 100, 100, 100, 100, 400, 400, 100, 100);
      }
      // return;
      // break;
      // this.explodeIndex = 1;
    }

    fallingDragon() {
      const ctx = this.ctx;
      let img = new Image();
      img.src = "https://i.imgur.com/ZGOk4iR.png";

      // ctx.drawImage(img, 0, 0, 120, 120, 200, 200, 100, 100);

      // ctx.drawImage(img, )
    }

    draw() {
        const ctx = this.ctx;
        const dy = this.dy;
        let img = new Image();
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        // ctx.fillStyle = "black";
        // ctx.fill();
        // ctx.closePath();
        img.src = "https://i.imgur.com/ZGOk4iR.png";
        // this.updateFrame();
        if (this.dx > 0) {
          ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 150, 200, 200, this.x, this.y, (573 / this.numberOfFrames), 150);

          // number of frames refer to frames on the row being utilized on sprite sheet
        } else {
          // ctx.scale(-1, 1);
          ctx.drawImage(img, this.frameIndex * (573 / this.numberOfFrames), 470, 200, 200, this.x, this.y, (573 / this.numberOfFrames), 150);
          // ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
        // ctx.drawImage(img, 0, 150, 200, 200, 0, 0, 150, 150);
        if (this.y + this.dy > 600) {
          this.dy = -this.dy;
        } 
        // else if (this.y + this.dy < 0 || this.x + this.dx < 0 || this.x > window.innerWidth - this.ballRadius) {

        // }

        
        this.x += this.dx;
        this.y += this.dy;
    }

    render() {
        this.updateFrame();
        this.draw();
        this.explodeDragon();
        this.fallingDragon();
    }
}

export default Dragon;
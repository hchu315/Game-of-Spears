import Dragon from 'dragon';
import MovingObject from './moving_object';

class Screen {
    constructor(ctx) {
        this.ctx = ctx;
        this.score = 0;
        this.defaultTime = 30;
        this.timer = document.querySelector('.timer');
      }
      
    
    background() {
        const ctx = this.ctx;
        let img = new Image();
        img.src = "https://i.imgur.com/UeOlFUN.png";
        
        ctx.drawImage(img, 0, 0, 1022, 428, 0, 0, 1100, 700);
        // ctx.drawImage(img, 0, 0, 1022, 428, 0, 0, 1100, 700);
    }

    // killCount() {
    //   let ctx = this.ctx;
    //   let img2 = new Image();
    //   img2.src = "https://i.imgur.com/ZGOk4iR.png";
    //   ctx.save();
    //   ctx.globalAlpha = 0.4;
    //   ctx.drawImage(img2, 0, 0, 200, 160, 900, 700, 100, 100);
    //   ctx.drawImage(img2, 0, 0, 200, 160, 1000, 700, 100, 100);
    //   ctx.drawImage(img2, 0, 0, 200, 160, 1100, 700, 100, 100);
    //   ctx.restore();
    // }

    timer() {
      const ctx = this.ctx;

      setInterval(() => {
        this.defaultTime--;
      }, 1000);

      this.timer.innerHTML = this.defaultTime;
      // ctx.font = "30px Arial";
      // ctx.fillStyle = "red";
      // ctx.fillText('Timer: ' + this.defaultTime, 60, 60)
    }
}

export default Screen;
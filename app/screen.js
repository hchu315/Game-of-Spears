import Dragon from 'dragon';
import MovingObject from './moving_object';

class Screen {
    constructor(ctx) {
        this.ctx = ctx;
        this.score = 0;
        this.defaultTime = 30;
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

    instructionalPage() {
      const instructions = document.querySelector('.instructions')
    }



}

export default Screen;
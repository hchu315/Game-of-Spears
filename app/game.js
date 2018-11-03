import Screen from './screen';
import Dragon from './dragon';

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas
    this.screen = new Screen(ctx);
    this.dragons = [];
    console.log(this.canvas)
  }

  loop(fn) {
    requestAnimationFrame(() => this.loop(fn))
    fn()
  }
  
  destroyDragon(dragon) {
    let i;
   
    for (i = 0; i < this.dragons.length; i++) {
      // console.log(dragon === this.dragons[i])
      // console.log(this.dragons.length)
      if (dragon === this.dragons[i] && this.dragons.length < 2) {
        console.log('werk')
        this.dragons.pop();
        
      } else {
        console.log('no werk')
        this.dragons.splice(i, 1);
      }
    }
  }
   
  makeDragon() {
    let i;
    for (i=0; i < 3; i++) {
      this.dragons.push(new Dragon(this.ctx));
    }     
  }
  
  play() {
    this.loop(()=> {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.dragons.forEach(dragon => {
        dragon.render()
      })
    });

    // setInterval(() => { 
    //   if (this.dragons.length > 0) {
    //     this.dragons.pop();
    //   }
    // }, 5000)
  }

  onClick(x, y) {
    let cx;
    let cy;
    let dist;
    // console.log(cx, cy, this.x, this.y);

    this.dragons.forEach( dragon => {
      cx = (x - dragon.x)
      cy = (y - dragon.y)

      dist = Math.sqrt((cx * cx) + (cy * cy)) 
      
      // console.log(dragon.x)
      console.log(y, dragon.y)
      // console.log(cx, dragon.x)
      if (dist < dragon.ballRadius+10) {
        alert(+cx+','+cy);
        this.destroyDragon(dragon);
      }
    })      
  }

  drawSpear() {
    this.screen.drawWeapon();
  }
}

export default Game;
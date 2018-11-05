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
        this.dragons.pop();
        
      } else {
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
      this.render();
      this.dragons.forEach(dragon => {
        dragon.render();
        // this.render();
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
    // console.log(this.dragons)
    this.dragons.forEach( dragon => {
      cx = (x - dragon.x - 50)
      cy = (y - dragon.y - 50)

      dist = Math.sqrt((cx * cx) + (cy * cy)) 
      
      // console.log('x:'+x, dragon.x)
      // console.log("y:"+y, dragon.y)
      // console.log(x, dragon.x)
      // console.log(cx, dragon.x)
      if (dist < 50) {
        // alert(+cx+','+cy);
        this.destroyDragon(dragon);
      }
    })      
  }

  render() {
    this.screen.background();
    this.screen.killCount();
  }

  // drawSpear() {
  //   this.screen.drawWeapon();
  // }
}

export default Game;
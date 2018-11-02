import Screen from './screen';
import Dragon from './dragon';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.canvas = canvas
    this.screen = new Screen(ctx);
    this.dragons = [];
  }

  loop(fn) {
    requestAnimationFrame(() => this.loop(fn))
    fn()
  }

  // drawScreen() {
  //   this.screen.background();
  // }
  
  destroyDragon(x, y) {
    let i;
    for (i = 0, i < this.dragons.length; i++;) {
      if (this.dragons[i].x === x && this.dragons[i].y === y) {
        this.dragons.splice(i, 1)
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
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.dragons.forEach(dragon => {
        dragon.render()
      })
    });
  }

  onClick(event) {
    let cx = event.pageX;
    let cy = event.pageY;
    // console.log(cx, cy, this.x, this.y);
    let dist = Math.hypot((event.pageX - this.x), (event.pageY - this.y))
    if (dist < 20) {
      alert(+cx+','+cy);
      this.destroyDragon(cx, cy);
    }
  }

  // targetEvent(event) {
  //   this.screen.onClick(event); 
  // }

  drawSpear() {
    this.screen.drawWeapon();
  }
}

export default Game;
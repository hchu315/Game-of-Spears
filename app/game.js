import Screen from './screen';
import Dragon from './dragon';
import Ammo from './ammo';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.screen = new Screen(ctx);
    this.dragon = new Dragon(ctx);
    // this.ammo = new Ammo(ctx);
    this.dragons = [];
    this.clip = [];
    this.score = 0;
    this.replayGame = document.getElementById("start-menu");
  }

  loop(fn) {
    requestAnimationFrame(() => this.loop(fn))
    fn()
  }
  
  destroyDragon(dragon) {
    let i;
   
    for (i = 0; i < this.dragons.length; i++) {
      if (dragon === this.dragons[i] && this.dragons.length === 2) {
        this.dragons.pop();  
        this.score+=10;
        // this.dragon.explodeDragon(dragon.x, dragon.y);
      } 
      else if (dragon === this.dragons[i]) {
        this.dragons.splice(i, 1);
        this.score+=10;
        // this.dragon.explodeDragon(dragon.x, dragon.y);
      }
    }

    this.gameOver(this.dragons);
  }
   
  makeDragon() {
    let i;
    for (i=0; i < 6; i++) {
      this.dragons.push(new Dragon(this.ctx));
    }     
  }

  // loadAmmo() {
  //   for
  // }

  drawScore() {
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("Score: " + this.score, 18, 40);
  }

  play() {
    this.loop(()=> {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.render();
      this.dragons.forEach(dragon => {
        dragon.render();
      })
      this.clip.forEach(missile => missile.render());
    });
  }

  loadTheClip() {
    for (let index = 0; index < 3; index++) {
      this.clip.push(new Ammo(this.ctx, index));
    }
  }
  
  reloadTheClip(e) {
    // console.log(e)
    if (e.keyCode !== 82 || this.clip.length !== 0) return;

    // console.log('vibing')
    console.log(this)
    for (let index = 0; index < 3; index++) {
      this.clip.push(new Ammo(this.ctx, index));
    }
  
  }

  depleteAmmo() {
    // console.log(this.clip)
    // console.log('werk werk')
    if (this.clip.length === 0) alert('Reload!');
      this.clip.pop();
  }

  onClick(x, y) {
    let cx;
    let cy;
    let dist;
    this.dragons.forEach( dragon => {
      cx = (x - dragon.x - 50)
      cy = (y - dragon.y - 50)

      dist = Math.sqrt((cx * cx) + (cy * cy)) 
      
      if (dist < 50 && this.clip.length > 0) {
        this.destroyDragon(dragon);
      }
    })
    
    // console.log(this.ammo)
    if (this.clip.length > 0) {
      this.depleteAmmo();
    } else {
      // alert('Reload Mofo!')
      this.hotTips('Reload!!!')
    }
  }

  hotTips(text) {
    const indicator = document.querySelector('.ammo-indicator');

    indicator.innerHTML = `${text}`;
  }

  gameOver() {
    return this.dragons.length ? console.log('real shill') : console.log('GG');
  }

  render() {
    this.screen.background();
    // this.screen.killCount();
    this.drawScore();
    // this.loadTheClip();
    // this.screen.gameTimer();
    // this.ammo.render();
  }
}

export default Game;
import Screen from './screen';
import Dragon from './dragon';
import Ammo from './ammo';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.screen = new Screen(ctx);
    this.dragon = new Dragon(ctx);
    this.ammo = new Ammo(ctx);
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
        this.dragonsRemaining(this.dragons);
        // this.score+=10;
        // this.dragon.explodeDragon(dragon.x, dragon.y);
      } 
      else if (dragon === this.dragons[i]) {
        this.dragons.splice(i, 1);
        this.dragonsRemaining(this.dragons);
        // this.score+=10;
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

  dragonsRemaining(dragons) {
    const dragonCounter = document.querySelector('.dragon-counter') 
    dragonCounter.innerHTML = `Dragons Remaining: ${dragons.length}`
  }
  // drawScore() {
  //   this.ctx.font = "30px Arial";
  //   this.ctx.fillStyle = "red";
  //   this.ctx.fillText("Score: " + this.score, 18, 40);
  // }

  play() {
    this.loop(()=> {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.render();
      this.dragons.forEach(dragon => {
        dragon.render();
      })
      // this.clip.forEach(missile => missile.render());
    });
    
    this.loadTheClip();
  }

  // loadTheClip() {
  //   for (let index = 0; index < 3; index++) {
  //     this.clip.push(new Ammo(this.ctx, index));
  //   }
  // }

  loadTheClip() {
    for (let index = 0; index < 3; index++) {
      this.clip.push(new Ammo(this.ctx, index));
    }
  }
  
  reloadTheClip(e) {
    if (e.keyCode !== 82 || this.clip.length !== 0) return;

    for (let index = 0; index < 3; index++) {
      this.clip.push(new Ammo(this.ctx, index));
      this.clip[index].createAmmo();
    }
  
  }

  depleteAmmo() {
    const missile = document.querySelector('.missile')

    // if (this.clip.length === 0) {
    //   alert('Reload!');
    // } else {
      missile.parentNode.removeChild(missile)
      this.clip.pop();
      // console.log('why?')
    // }

      // console.log(this.clip)
  }

  explosion(x, y) {
    // if (x === undefined) return;
    // console.log('ok ok ok')
    console.log(x, y)
      const ctx = this.ctx;
      let img = new Image();

      // for (let i = 0; i < 9; i++) {
      // img.onload = function() {
      // };
      // img.addEventListener("load", 
      //   ctx.drawImage(img, this.explodeIndex * (1000 / this.explodeFrames), 0, 100, 100, x, y, this.explodeIndex * (1000 / this.explodeFrames), 100)
      // );

      // this.explodeIndex++
      img.src = "https://i.imgur.com/lqEkVlw.png";

      // img.onload();  
      ctx.drawImage(img, 100, 100, 100, 100, 400, 400, 100, 100);
      // }
      // return;
      // break;
      // this.explodeIndex = 1;
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
      this.explosion(x, y);
    } else {
      alert('Outta Ammo! Press R to reload your weapon!')
      // this.hotTips('Reload!!!')
    }
  }

  // hotTips(text) {
  //   const indicator = document.querySelector('.ammo-indicator');

  //   indicator.innerHTML = `${text}`;
  // }

  gameOver() {
    return this.dragons.length ? '' : this.win() ;
  }

  win() {
    console.log('werk?')
    const endMenu = document.querySelector('#end-menu');
    const canvas = document.querySelector('#game-canvas');
    const timer = document.querySelector('.timer')

    endMenu.setAttribute("style", "visibility: visible;");
    canvas.setAttribute("style", "z-index: -1;")
    // timer.clearInterval(timerInterval);
    // console.log(timer.clearInterval(timerInterval))


  }

  lose() {
    console.log('woop woop')
    const endMenu = document.querySelector('#end-menu');
    const canvas = document.querySelector('#game-canvas');

    endMenu.setAttribute("style", "visibility: visible;");
    canvas.setAttribute("style", "z-index: -1;")
  }

  render() {
    this.screen.background();
    // this.screen.killCount();
    // this.drawScore();
    // this.loadTheClip();
    // this.screen.gameTimer();
    // this.ammo.render();
  }
}

export default Game;
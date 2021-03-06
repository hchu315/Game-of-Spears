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
    this.dropDragons = [];
    this.exploding = [];
    this.clip = [];
    this.score = 0;
    this.replayGame = document.getElementById("start-menu");
    this.dragonsRemain = this.dragons.length;
    this.level = 1;
    this.score = 0;
  }

  loop(fn) {
    requestAnimationFrame(() => this.loop(fn))
    fn()
  }
  
  destroyDragon(dragon) {
    var i;
    let deadDragon;

    for (i = 0; i < this.dragons.length; i++) {
      if (dragon === this.dragons[i]) {
        deadDragon = this.dragons[i];
        let newDragon = new Dragon(
            this.ctx,
            deadDragon.x,
            deadDragon.y,
            false
        );
        // this.dragons[i] = new Dragon(this.ctx, deadDragon.x, deadDragon.y, false)  
        // this.dragonsRemain--
        // console.log(this.dragonsRemain)
        // setTimeout(function() {
          this.dragons.splice(i, 1);
          this.dropDragons.push(newDragon)
          this.score += 100;
          // this.dragons.pop()
          // console.log(this.dragons.pop)
          this.dragonsRemaining();
          this.nextWave();
          // console.log(this.dragons)
        // }.bind(this), 3000)
        // console.log(deadDragon.render)
        // deadDragon.render().bind(this);
      } 
    }
  }
   
  makeDragon() {
    let i;
    for (i=0; i < 5; i++) {
      if (this.level === 1) {
        this.dragons.push(new Dragon(this.ctx));
      } else {
        this.dragons.push(new Dragon(this.ctx, undefined, undefined, undefined, [-4, 4]))
      }
    }     
  }

  dragonsRemaining() {
    const dragonCounter = document.querySelector('.dragon-counter') 
    // this.dragonsRemain = this.dragons.length
    // console.log(length)
    dragonCounter.innerHTML = `Score: ${this.score}`
  }

  play() {
    this.loop(()=> {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.render();
      this.dragons.forEach(dragon => {
        dragon.render();
      })
      this.dropDragons.forEach(dragon => {
        dragon.render();
      })
      this.exploding.forEach(explosive => {
        explosive.draw();
      })
      // this.explosive.draw();
      this.exploding.pop();
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

    const ammoIndicator = document.querySelector(".ammo-indicator")
    const reloadNotice = document.querySelector(".reload-notice")
    ammoIndicator.removeChild(reloadNotice);

    for (let index = 0; index < 3; index++) {
      this.clip.push(new Ammo(this.ctx, index));
      this.clip[index].createAmmo();
    }
  
  }

  depleteAmmo() {
    const missile = document.querySelector('.missile')

    missile.parentNode.removeChild(missile)
    this.clip.pop();

    if (!this.clip.length) {
      const ammoIndicator = document.querySelector('.ammo-indicator');
      const reloadNotice = document.createElement("span");
      reloadNotice.classList.add("reload-notice"); 
      reloadNotice.textContent = "Press R to Reload!!!"
      ammoIndicator.appendChild(reloadNotice)
    }
  }

  nextWave() {
    if (!this.dragons.length && this.level < 2) {
      this.level++;
      this.makeDragon();
    } else if (!this.dragons.length) {
      this.gameOver();
    } 
  }

  gameWave() {
    const timer = document.querySelector('.timer');
    // let defaultTime = 30;

    timer.innerHTML = `Wave: ${this.level} of 2`;

    // let timerInterval = setInterval(function () {
    //   // console.log(timer)
    //   timer.innerHTML = `Timer: ${defaultTime}`;
    //   defaultTime--;
    //   if (defaultTime < 0) {
    //     clearInterval(timerInterval);
    //     game.lose();
    //   }
    // }.bind(this), 1000);
  }


   // drawScore() {
  //   this.ctx.font = "30px Arial";
  //   this.ctx.fillStyle = "red";
  //   this.ctx.fillText("Score: " + this.score, 18, 40);
  // }

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
        // this.dragon.dragonDies(dragon.x, dragon.y);
      }
    })
    
   
    // console.log(this.ammo)
    if (this.clip.length > 0) {
      this.depleteAmmo();
      if (this.exploding.length < 1) {
        this.exploding.push(new Ammo(this.ctx, x-50, y-50))
        console.log(x)
        console.log(y)
      }
      // this.explosion(x, y);
    } 
    console.log(this.exploding)
  }

  // hotTips(text) {
  //   const indicator = document.querySelector('.ammo-indicator');

  //   indicator.innerHTML = `${text}`;
  // }

  gameOver() {
    this.win();
  }

  win() {
    // console.log('werk?')
    const endMenu = document.querySelector('#end-menu');
    const canvas = document.querySelector('#game-canvas');
    const startMenu = document.querySelector('#start-menu');
    const button = document.querySelector('#start-game')
    // const timer = document.querySelector('.timer')

    // endMenu.setAttribute("style", "visibility: visible;");
    canvas.setAttribute("style", "z-index: -1;")
    startMenu.setAttribute("style", "visibility: visible;");
    button.textContent = "Play Again";

    // this.level = 1;

    // for (clip in this.clip) {
    //       this.depleteAmmo();
    // }
    // timer.clearInterval(timerInterval);
    // console.log(timer.clearInterval(timerInterval))


  }

  lose() {
    // console.log('woop woop')
    const endMenu = document.querySelector('#end-menu');
    const canvas = document.querySelector('#game-canvas');

    endMenu.setAttribute("style", "visibility: visible;");
    canvas.setAttribute("style", "z-index: -1;")
  }

  render() {
    this.screen.background();
    this.gameWave();
    // this.screen.killCount();
    // this.drawScore();
    // this.loadTheClip();
    // this.screen.gameTimer();
    // this.ammo.render();
  }
}

export default Game;
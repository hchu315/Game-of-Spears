import Screen from './screen';
import Dragon from './dragon';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.screen = new Screen(ctx);
    this.dragon = new Dragon(ctx);
    this.dragons = [];
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
    });
  }

  onClick(x, y) {
    let cx;
    let cy;
    let dist;
    this.dragons.forEach( dragon => {
      cx = (x - dragon.x - 50)
      cy = (y - dragon.y - 50)

      dist = Math.sqrt((cx * cx) + (cy * cy)) 
      
      if (dist < 50) {
        this.destroyDragon(dragon);
      }
    })      
  }

  gameOver() {
    return this.dragons.length ? console.log('real shill') : console.log('GG');
  }

  render() {
    this.screen.background();
    // this.screen.killCount();
    this.drawScore();
    // this.screen.gameTimer();
  }
}

export default Game;
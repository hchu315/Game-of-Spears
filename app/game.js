import Screen from './screen';
import Dragon from './dragon';

class Game {
  constructor(ctx) {
    // super();
    // this.canvas = canvas
    this.screen = new Screen(ctx);
    this.dragon = new Dragon(ctx);
    // debugger;
    this.dragons = [];
  }

  drawScreen() {
    this.screen.background();
  }
  
  draw() {
    // debugger
    // console.log('hello');
    this.screen.drawDragon();

  }

  // drawDragon() {
    // debugger
  //   this.dragon.draw();
  // }

  makeDragon() {
    
  }

  targetEvent(event) {
    this.screen.onClick(event); 
  }

  drawSpear() {
    this.screen.drawWeapon();
  }

  // renderScreen() {
  //   debugger
  //   this.screen.render();
  // };

  render() {
    // this.drawScreen;
    // this.screen.render;
  }
}

export default Game;
[Live](https://hchu315.github.io/Dragon-Hunt-JS-project/) 

# Dragon Hunt

A different take on the classic game, Duck Hunt

## Background and Overview -

Like many kids growing up in the 90's, I had the opportunity to play the classic game, Duck Hunt. It has a very addicting, yet simplistic premise. You play the role of the hunter with a cursor on the screen that represents where your weapon will hit. Periodically, flying ducks will appear and your goal is to shoot and hunt them before they fly off the screen. I thought it would be fun to implement a similar game, but with a different twist on it--dragons! 

![game-page](https://github.com/hchu315/Dragon-Hunt-JS-project/blob/master/assets/images/Screen%20Shot%202018-11-21%20at%2011.38.15%20AM.png)

The player is in control of a circular cursor that launches a missile at the click of the mouse. While the shot is instantaneous, you have a finite amount of missiles to shoot at one time. The player is required to reload before shooting again, adding difficulty. The dragons appear in two successive waves, with the second wave of dragons moving faster and harder to shoot down.

## Wireframe -

The app consists of a single screen with the ability for the player to start a new game. The upper right have links to my GitHub, AngelList and Linkedin profile. Upon beginning a new game, the player sees a canvas, and the dragons appearing shortly from the left side of the canvas. The game bar at the bottom of the gameplay screen displays the missiles present in the player's arsenal, as well as the score from successfully hitting the dragons.

## Functionality and MVP Features -

Object-oriented design to achieve modular code that are independent of each other by separation of classes for game logic, game flow, and game objects:

```javascript
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.screen = new Screen(ctx);
    this.dragons = [];
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
      } 
      else if (dragon === this.dragons[i]) {
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


## Architecture and Technologies -
 
  1) Webpack - to bundle scripts into a single source
  2) Vanilla Javascript - for game state such as starting and ending game, and game logic such as projectiles timing and            dragons flying vectors
  3) Canvas - for the graphic rendering of the game 

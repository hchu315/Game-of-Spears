[Live](https://hchu315.github.io/Dragon-Hunt-JS-project/) 

# Dragon Hunt / Game-of-Spears (project in-progress)

A Game of Thrones take on the classic game, Duck Hunt

## Background and Overview -

Like many kids growing up in the 90's, I had the opportunity to play the classic game, Duck Hunt. It has a very addicting, yet simplistic premise. You play the role of the hunter with a cursor on the screen that represents where your weapon will hit. Periodically, flying ducks will appear and your goal is to shoot and hunt them before they fly off the screen. I thought it would be fun to implement a similar game, but with a Game of Thrones twist on it. 

![game-page](https://github.com/hchu315/Dragon-Hunt-JS-project/blob/master/assets/images/Screen%20Shot%202018-11-21%20at%2011.38.15%20AM.png)

The player will be assuming the role of a White Walker and throwing a White Walker's favorite projectile of choice, an ice spear. And of course, the game wouldn't complete without DRAGONS! The player will essentially be timing their finite ice spears to take one of the dragons down that are traversing across the screen before they fly off into the unknowns. The player will be in control of a circular cursor that will launch the spear at the click of the mouse. Rather than being instanteous, there will be a delay from when the spear appears on the screen and reaches its target. Timing is key.

## Wireframe -

The app will consist of a single screen with the ability for the player to start a new game. The upper right will have links to my GitHub and Linkedin profile. Upon beginning a new game, the player will see the ice-fields of the North in the Game of Thrones world. The bottom left of the screen will display the ice spears present in the player's arsenal, as well as the number of dragons successfully hit.

## Functionality and MVP Features -

Players will be able to:
  1) Start a new game
  2) Throw ice spears by aiming with a cursor and clicking the mouse
  3) Restart the game

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

## Implementation and Timeline -

Day 1: 
  a) set up webpack
  b) set up page skeleton and basic functionality
  
Day 2:
  a) research how to implement game logic
  b) begin game logic

Day 3:
  a) complete game logic
  b) learn how to use canvas
  c) begin canvassing
  
Day 4:
  a) complete canvassing part of the project
  b) add informative texts and instructional information in the app
  
Weekend:
  a) additional styling
  b) debugging, refactor, and completing GitHub workflow/Readme
  
 

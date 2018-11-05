Webpack 4 Boilerplate

[![Dependency Status](https://david-dm.org/cvgellhorn/webpack-boilerplate.svg)](https://david-dm.org/cvgellhorn/webpack-boilerplate) 
[![devDependency Status](https://david-dm.org/cvgellhorn/webpack-boilerplate/dev-status.svg)](https://david-dm.org/cvgellhorn/webpack-boilerplate)

> Plain webpack 4 boilerplate with Babel, SASS and lodash on board

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go. 

If you don’t want to work with lodash, just remove it from the node packages and the webpack config.

## Download
Download in current directory
```sh
$ curl -L -o master.zip https://github.com/cvgellhorn/webpack-boilerplate/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-boilerplate-master/{.,}* ./ && rm -r ./webpack-boilerplate-master
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```
## Deployment
Build the current application
```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
=======
# Dragon Hunt / Game-of-Spears

A Game of Thrones take on the classic game, Duck Hunt

## Background and Overview -

Like many kids growing up in the 90's, I had the opportunity to play the classic game, Duck Hunt. It has a very addicting, yet simplistic premise. You play the role of the hunter with a cursor on the screen that represents where your weapon will hit. Periodically, flying ducks will appear and your goal is to shoot and hunt them before they fly off the screen. I thought it would be fun to implement a similar game, but with a Game of Thrones twist on it. 

The player will be assuming the role of a White Walker and throwing a White Walker's favorite projectile of choice, an ice spear. And of course, the game wouldn't complete without DRAGONS! The player will essentially be timing their finite ice spears to take one of the dragons down that are traversing across the screen before they fly off into the unknowns. The player will be in control of a circular cursor that will launch the spear at the click of the mouse. Rather than being instanteous, there will be a delay from when the spear appears on the screen and reaches its target. Timing is key.

## Wireframe -

The app will consist of a single screen with the ability for the player to start a new game. The upper right will have links to my GitHub and Linkedin profile. Upon beginning a new game, the player will see the ice-fields of the North in the Game of Thrones world. The bottom left of the screen will display the ice spears present in the player's arsenal, as well as the number of dragons successfully hit.

## Functionality and MVP Features -

Players will be able to:
  1) Start a new game
  2) Throw ice spears by aiming with a cursor and clicking the mouse
  3) Restart the game
  
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

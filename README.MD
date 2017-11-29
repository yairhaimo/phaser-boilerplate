###### This boilerplate is based upon the [making your first game](http://phaser.io/tutorials/making-your-first-phaser-game) tutorial.

### Installation

```sh
git clone git@github.com:yairhaimo/phaser-boilerplate.git
cd phaser-boilerplate
npm install
npm start
PROFIT!
```

### Directory structure

* assets - holds the picture files (sounds...)
* src
  * objects - holds self contained objects such as player, enemies, treasure (in this example only
    the player is a self contained object)
  * states - the game is split into several states that helps us control it easier. Each state can
    call another state if the condition is right.
    * boot - in charge of any configuration that should be configured before the game is started.
      calls 'load' when done.
    * load - loads the assets (pictures/sounds) into memory. calls 'menu' when done.
    * menu - displays the start menu. calls 'play' when the player presses "w".
    * play - in charge of the game play itself. calls 'win' and 'lose' according to specific
      conditions.
    * lose - handle losing the game
    * win - handle winning the game
  * game.js - game manager with helper methods
  * app.js - loads all the states and initializes the 'boot' state

import 'phaser-shim';

export default class Load extends Phaser.State {
  init(settings) {

  }

  preload() {
    console.log('load preload');
    this.game.loadImage('cloud');
    this.game.loadImage('ground');
    this.game.loadImage('star');
    this.game.loadImage('jira');
    this.game.loadSpritesheet('player-t');
  }

  create() {
    this.game.state.start('menu');
  }

  update() {
  }
}

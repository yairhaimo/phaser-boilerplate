import 'phaser-shim';

export default class Boot extends Phaser.State {
  init(settings) {

  }

  preload() {
    console.log('boot preload');
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.state.start('load');
  }

  update() {
  }
}

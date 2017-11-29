import 'phaser-shim';
import { STATES } from '../definitions';

export class Boot extends Phaser.State {
  init(settings) {}

  preload() {
    console.log('boot preload');
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.state.start(STATES.LOAD);
  }

  update() {}
}

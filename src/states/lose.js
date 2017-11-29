import 'phaser-shim';

export class Lose extends Phaser.State {
  init(settings) {}

  preload() {
    console.log('lose preload');
  }

  create() {
    this.game.add.text(80, 80, 'You lose :(', { font: '50px Arial', fill: '#ffffff' });
  }

  update() {}
}

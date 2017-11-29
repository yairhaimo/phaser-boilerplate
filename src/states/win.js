import 'phaser-shim';

export class Win extends Phaser.State {
  init(settings) {}

  preload() {
    console.log('win preload');
  }

  create() {
    this.game.add.text(80, 80, 'You win!', { font: '50px Arial', fill: '#ffffff' });
  }

  update() {}
}

import 'phaser-shim';

export default class Menu extends Phaser.State {
  init(settings) {

  }

  preload() {
    console.log('menu preload');
  }

  create() {
    this.game.add.text(80, 80, 'Talminator 3', { font: '50px Arial', fill: '#ffffff'});
    this.game.add.text(90, 135, 'Revenge of the Jiras', { font: '25px Arial', fill: '#ff8888'});
    this.game.add.text(90, this.game.world.height - 80, 'Press W to start', { font: '20px Arial', fill: '#ffffff'});
    this.game.input.keyboard.addKey(Phaser.Keyboard.W)
      .onDown.addOnce(this.startGame, this);
  }

  update() {
  }

  startGame() {
    this.game.state.start('play');
  }
}

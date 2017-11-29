import * as Phaser from 'phaser-shim';

export class Game extends Phaser.Game {
  constructor(height = 640, width = 360) {
    super(height, width, Phaser.AUTO, '');
  }

  loadImage(name) {
    this.load.image(name, `assets/${name}.png`);
  }

  loadSpritesheet(
    name,
    { height = 55, width = 50, max = -1, margin = 15, padding = 10 } = {
      height: 55,
      width: 50,
      max: -1,
      margin: 15,
      padding: 10
    }
  ) {
    this.load.spritesheet(name, `assets/${name}.png`, height, width, max, margin, padding);
  }
}

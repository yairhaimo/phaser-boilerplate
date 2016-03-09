import * as Phaser from 'phaser-shim';

export default class Player extends Phaser.Sprite {
  constructor({game, colliders}) {
    super(game, 32, game.world.height - 250, 'player-t');
    this.game = game;
    this.colliders = colliders;

    game.physics.arcade.enable(this);
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
    this.animations.add('right', [0, 1, 2,3, 4, 5, 6, 7, 8, 9, 10]);
    this.animations.add('left', [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
    game.add.existing(this);
  }

  update() {
    // get current key presses
    const cursors = this.game.input.keyboard.createCursorKeys();
    // stops player from drifting endlessly
    this.body.velocity.x = 0;

    // if pressing the left button, play left animation and move player left
    if (cursors.left.isDown) {
      this.body.velocity.x = -150;
      this.animations.play('left');
    }
    // if pressing the right button, play right animation and move player right
    else if (cursors.right.isDown) {
      this.body.velocity.x = 150;
      this.animations.play('right');
    }
    else {
      this.animations.stop();
      this.frame = 4;
    }

    if (cursors.up.isDown && this.body.touching.down) {
      this.body.velocity.y = -350;
    }
  }
}

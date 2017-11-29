import * as Phaser from 'phaser-shim';
import { IMAGES } from '../definitions';

export class Player extends Phaser.Sprite {
  static RIGHT_ANIMATION = 'right_animation';
  static LEFT_ANIMATION = 'left_animation';
  static STOP_FRAME = 4;
  static HORIZONTAL_VELOCITY = 150;
  static VERTICAL_VELOCITY = 350;
  static VERTICAL_BOUNCE = 0.2;
  static VERTICAL_GRAVITY = 300;

  constructor({ game, colliders }) {
    super(game, 32, game.world.height - 250, IMAGES.PLAYER_T);
    this.game = game;
    this.colliders = colliders;
    game.physics.arcade.enable(this);

    this.body.bounce.y = Player.VERTICAL_BOUNCE;
    this.body.gravity.y = Player.VERTICAL_GRAVITY;
    this.body.collideWorldBounds = true;
    this.animations.add(Player.RIGHT_ANIMATION, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.animations.add(Player.LEFT_ANIMATION, [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

    game.add.existing(this);
  }

  update() {
    // get current key presses
    const cursors = this.game.input.keyboard.createCursorKeys();
    // stops player from drifting endlessly
    this.body.velocity.x = 0;

    // if pressing the left button, play left animation and move player left
    if (this.isGoingLeft(cursors)) {
      this.body.velocity.x = Player.HORIZONTAL_VELOCITY * -1;
      this.animations.play(Player.LEFT_ANIMATION);
    } else if (this.isGoingRight(cursors)) {
      // if pressing the right button, play right animation and move player right
      this.body.velocity.x = Player.HORIZONTAL_VELOCITY;
      this.animations.play(Player.RIGHT_ANIMATION);
    } else {
      this.animations.stop();
      this.frame = Player.STOP_FRAME;
    }

    if (this.isJumping(cursors)) {
      this.body.velocity.y = Player.VERTICAL_VELOCITY * -1;
    }
  }

  isJumping(cursors) {
    return cursors.up.isDown && this.body.touching.down;
  }

  isGoingRight(cursors) {
    return cursors.right.isDown;
  }

  isGoingLeft(cursors) {
    return cursors.left.isDown;
  }
}

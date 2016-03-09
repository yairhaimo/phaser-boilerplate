import 'phaser-shim';
import Player from '../objects/player';
const NUMBER_OF_STARS = 10;
const NUMBER_OF_JIRAS = 5;
const NUMBER_OF_LIVES = 3;

export default class Play extends Phaser.State {
  init(settings) {
    this.life = NUMBER_OF_LIVES;
    this.score = 0;
  }

  preload() {
    console.log('play preload');
  }

  addBackground() {
    this.game.add.sprite(300, -150, 'cloud');
    this.game.add.sprite(0, -100, 'cloud');
  }

  addStars() {
    this.stars = this.game.add.group();
    this.stars.enableBody = true;
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
      let star = this.stars.create(Math.random() * 100 * i, -50 + Math.random() * 100, 'star');
      star.scale.setTo(0.3, 0.3);
      star.body.gravity.y = 200;
      star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
  }

  addJiras() {
    this.jiras = this.game.add.group();
    this.jiras.enableBody = true;
    for (let i = 0; i < NUMBER_OF_JIRAS; i++) {
      let jira = this.jiras.create(Math.random() * 100 * i, -50 + Math.random() * 100, 'jira');
      jira.scale.setTo(0.2, 0.2);
      jira.body.gravity.y = 100;
      jira.body.bounce.y = 0.95;
    }
  }

  addHUD() {
    this.lifeLabel = this.game.add.text(10, 10, 'Life:' + this.life, { font: '15px Arial', fill: '#ffffff'});
    this.scoreLabel = this.game.add.text(10, 38, 'Score:' + this.score, { font: '15px Arial', fill: '#ffffff'});
  }

  addPlatforms() {
    const platforms = this.game.add.group();
    platforms.enableBody = true;

    const ground = platforms.create(0, this.game.world.height - 100, 'ground');
    ground.scale.setTo(3, 2);
    ground.body.immovable = true;

    let ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    return platforms;
  }

  create() {
    this.addBackground();
    this.addHUD();
    this.addStars();
    this.addJiras();
    this.platforms = this.addPlatforms();
    this.player = new Player({game: this.game, colliders: this.platforms});
  }

  checkWinLoseConditions() {
    if (this.life <= 0) {
      this.game.state.start('lose');
    }
    else if (this.score >= NUMBER_OF_STARS / 2) {
      this.game.state.start('win');
    }
  }

  collectStar(player, star) {
    star.kill();
    this.score++;
    this.scoreLabel.setText('Score:' + this.score);
    this.scoreLabel.setStyle({fill: '#00aaff'});
    setTimeout(() => {
      this.scoreLabel.setStyle({fill: '#ffffff'});
    }, 800);
  }

  collideJira(player, jira) {
    jira.kill();
    this.life--;
    this.lifeLabel.setText('Life:' + this.life);
    this.lifeLabel.setStyle({fill: '#ff0000'});
    setTimeout(() => {
      this.lifeLabel.setStyle({fill: '#ffffff'});
    }, 800);
  }

  update() {
    this.checkWinLoseConditions();
    // manage collisions between player and ground/platforms
    this.game.physics.arcade.collide(this.player, this.platforms);
    this.game.physics.arcade.collide(this.stars, this.platforms);
    this.game.physics.arcade.collide(this.stars, this.stars);
    this.game.physics.arcade.collide(this.jiras, this.platforms);
    this.game.physics.arcade.collide(this.jiras, this.stars);

    this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
    this.game.physics.arcade.overlap(this.player, this.jiras, this.collideJira, null, this);
  }
}

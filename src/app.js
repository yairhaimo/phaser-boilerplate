import 'phaser-shim';
import Game from './game';
import * as States from './states';
const game = new Game();

game.state.add('boot', States.Boot);
game.state.add('load', States.Load);
game.state.add('menu', States.Menu);
game.state.add('play', States.Play);
game.state.add('win', States.Win);
game.state.add('lose', States.Lose);

game.state.start('boot');

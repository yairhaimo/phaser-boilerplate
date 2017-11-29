import 'phaser-shim';
import { Game } from './game';
import * as States from './states';
import { STATES } from './definitions';
const game = new Game();

game.state.add(STATES.BOOT, States.Boot);
game.state.add(STATES.LOAD, States.Load);
game.state.add(STATES.MENU, States.Menu);
game.state.add(STATES.PLAY, States.Play);
game.state.add(STATES.WIN, States.Win);
game.state.add(STATES.LOSE, States.Lose);

game.state.start(STATES.BOOT);

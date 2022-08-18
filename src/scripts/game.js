import Gameboard from './gameboard';
import Player from './player';
import Dom from './dom';

const game = () => {
  const player1Gameboard = Gameboard(false);
  const player2Gameboard = Gameboard(true);

  const player1 = Player(player2Gameboard);
  const player2 = Player(player1Gameboard);

  const player1Dom = Dom(player1Gameboard, player1, player2);

  player1Dom.generateGrid('player');
  player1Dom.createDragShips();
  const player2Dom = Dom(player2Gameboard, player2, player1, player1Dom);
  player2Dom.generateGrid('opponent');
};

export default game;

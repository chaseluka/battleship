import Gameboard from './gameboard';
import Player from './player';

const player1Gameboard = Gameboard();
const player2Gameboard = Gameboard();

const player1 = Player(player2Gameboard);
const player2 = Player(player1Gameboard);

const announceWinner = () => {
  if (player1Gameboard.allShipsSunk()) return 'Player Two Wins';
  if (player2Gameboard.allShipsSunk()) return 'Player One Wins';
  return false;
};

const game = () => {
  let turnCount = 2;
  while (!player1Gameboard.allShipsSunk() && !player2Gameboard.allShipsSunk()) {
    if (turnCount % 2 === 0) {
      player1.attackOpponent();
    } else player2.attackOpponent();

    turnCount += 1;
  }
  return announceWinner();
};

export { game, player1, player2Gameboard };

import Player from '../scripts/player';
import Gameboard from '../scripts/gameboard';

test('available squares are equal to opponents board', () => {
  const player2Gameboard = Gameboard();

  const player1 = Player(player2Gameboard);
  expect(player1.availableSqaures).toEqual(player2Gameboard.board);
});
test('random attack returns a number', () => {
  const player2Gameboard = Gameboard();

  const player1 = Player(player2Gameboard);

  expect(player1.randomAttack()).toEqual(expect.any(Number));
});
test('available squares updates after calling randomAttack', () => {
  const player2Gameboard = Gameboard();

  const player1 = Player(player2Gameboard);

  player1.attackOpponent();
  player1.attackOpponent();
  player1.attackOpponent();
  expect(player1.availableSqaures).toHaveLength(97);
});
test('available squares differentiates from opponent board', () => {
  const player2Gameboard = Gameboard();

  const player1 = Player(player2Gameboard);

  player1.attackOpponent();
  player1.attackOpponent();
  player1.attackOpponent();
  expect(player1.availableSqaures).not.toEqual(player2Gameboard.board);
});
test('array expires after all are spliced', () => {
  const player2Gameboard = Gameboard();

  const player1 = Player(player2Gameboard);
  for (let i = 0; i < 100; i += 1) {
    player1.attackOpponent();
  }
  expect(player1.availableSqaures).toHaveLength(0);
});

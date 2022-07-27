import { game, player1, player2Gameboard } from '../scripts/game';

describe('singular tests for game function', () => {
  for (let i = 0; i < 100; i += 1) {
    player1.attackOpponent();
  }

  it('boards are equal', () => {
    expect(player1.oppBoard.board).toBe(player2Gameboard.board);
  });
  it('available coords expires after being fully spliced', () => {
    expect(player1.availableSqaures).toHaveLength(0);
  });
  it('get ships coords', () => {
    expect(player1.availableSqaures).toHaveLength(0);
  });
  it('hit count is length of each ship', () => {
    expect(player2Gameboard.ships[1].hitCount).toHaveLength(4);
  });
  it('play game until ship is sunk', () => {
    expect(player2Gameboard.allShipsSunk()).toBe(true);
  });
});

describe('game works on its own', () => {
  test('game plays through whole game', () => {
    expect(game()).toEqual(expect.any(String));
  });
});

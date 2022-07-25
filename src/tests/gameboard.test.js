/* eslint-disable jest/no-disabled-tests */
import Gameboard from '../scripts/gameboard';

describe('Test generating positon', () => {
  it('get position of ship', () => {
    const player = Gameboard();
    const here = player.ships[1].position;
    expect(player.ships[1].position).toBe(here);
  });
});
test('ships array lets me get name', () => {
  const player = Gameboard();
  expect(player.ships[0].name).toBe('carrier');
});
test('attack hits', () => {
  const player = Gameboard();

  expect(player.attackHit(1)).toBe(1);
});
test('declared attack hits a ships position', () => {
  const player = Gameboard();
  const thisTarget = player.ships[1].position[1];

  expect(player.recievedAttack(thisTarget)).toBe(1);
});
test('attacked list grows after every recieved attack', () => {
  const player = Gameboard();
  const thisTarget = player.ships[1].position[1];
  player.recievedAttack(thisTarget);
  player.recievedAttack(thisTarget);
  expect(player.targettedCoords).toHaveLength(2);
});
test('all ships are sunk', () => {
  const player = Gameboard();
  player.ships[0].hitCount = 5;
  player.ships[1].hitCount = 4;
  expect(player.allShipsSunk()).toBe(true);
});
test('all ships are not sunk', () => {
  const player = Gameboard();
  expect(player.allShipsSunk()).toBe(false);
});
test('get full board', () => {
  const player = Gameboard();
  expect(player.board).toHaveLength(100);
});
